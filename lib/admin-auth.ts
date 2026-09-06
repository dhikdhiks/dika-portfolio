import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'

// ----- Getter functions (lazy initialization) -----
function getAdminEmail(): string {
  const email = process.env.ADMIN_EMAIL
  if (!email) throw new Error('ADMIN_EMAIL is not set')
  return email
}

function getAdminPasswordHash(): string {
  const hash = process.env.ADMIN_PASSWORD_HASH
  if (!hash) throw new Error('ADMIN_PASSWORD_HASH is not set')
  // Jika hash disimpan sebagai base64, decode; jika tidak, langsung return
  // Asumsikan hash disimpan sebagai bcrypt hash plain (string)
  return hash
}

function getJwtSecret(): Uint8Array {
  // Prioritaskan JWT_SECRET, fallback ke NEXTAUTH_SECRET
  const secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET
  if (!secret) throw new Error('JWT_SECRET or NEXTAUTH_SECRET is not set')
  return new TextEncoder().encode(secret)
}

// ----- Interfaces -----
export interface AdminSession {
  email: string
  isAdmin: boolean
}

// ----- Functions -----
export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  const adminEmail = getAdminEmail()
  if (email !== adminEmail) return false

  const hash = getAdminPasswordHash()
  // bcrypt.compare handles undefined password gracefully, but we validate anyway
  if (!password) return false
  return bcrypt.compare(password, hash)
}

export async function createSession(email: string): Promise<string> {
  const token = await new SignJWT({ email, isAdmin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(getJwtSecret())
  return token
}

export async function getSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin-session')?.value
  if (!token) return null

  try {
    const verified = await jwtVerify(token, getJwtSecret())
    const payload = verified.payload as unknown as AdminSession
    return payload
  } catch {
    return null
  }
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete('admin-session')
}