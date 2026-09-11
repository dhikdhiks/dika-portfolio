import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Marquee } from "@/components/magicui/marquee"
import {
  siPython,
  siPandas,
  siNumpy,
  siFreshrss,
  siScikitlearn,
  siJupyter,
  siJavascript,
  siLaravel,
  siNextdotjs,
  siReact,
  siGit,
  siLibreofficecalc,
} from "simple-icons"; 

const skillIcons = {
  python: siPython,
  pandas: siPandas,
  numpy: siNumpy,
  matplotlib: siFreshrss,
  "scikit-learn": siScikitlearn,
  jupyter: siJupyter,
  javascript: siJavascript,
  laravel: siLaravel,
  nextjs: siNextdotjs,
  react: siReact,
  git: siGit,
  excel: siLibreofficecalc,
};

function Blob({
  color = "rgba(38, 128, 74, 0.55)",
  className = "",
}: {
  color?: string
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={`blob ${className}`}
      style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
    />
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-24">
        <div className="absolute inset-0 z-0">
          <Blob className="top-20 left-10 w-72 h-72 opacity-20 animate-blob" color="rgba(38, 128, 74, 0.55)" />
          <Blob className="top-40 right-10 w-72 h-72 opacity-20 animate-blob animation-delay-2000" color="rgba(86, 182, 125, 0.5)" />
          <Blob className="bottom-20 left-1/3 w-72 h-72 opacity-20 animate-blob animation-delay-4000" color="rgba(32, 101, 60, 0.6)" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-8">
            {/* 1. Name first */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                Andhika August Farnaz
              </span>
            </h1>
            
            {/* 2. Profile image */}
            <div className="flex justify-center">
              <CreativeHero />
            </div>
            
            {/* 3. Software engineer badge */}
            <div className="flex justify-center">
              <div className="relative px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/20">
                <span className="relative z-10">Web Developer | ML Engineer | Data Scientist</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 animate-pulse"></span>
              </div>
            </div>

            {/* 4. Description */}
            <p className="text-lg text-zinc-400 max-w-[600px]">
              With a background in IT infrastructure and programming, I am now exploring data science and machine learning to build practical, data-driven solutions.
            </p>
            
            {/* 5. Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
            
            {/* 6. Social icons */}
            <div className="flex gap-4 justify-center">
              <Link href="https://github.com/dhikdhiks" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/andhika-august-farnaz-624459294/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:augustandhika263@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="inline-block">
                <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 border border-white/20 mb-4">
                  <span className="relative z-10">Web Developer | ML Engineer | Data Scientist</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 animate-pulse"></span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                  Andhika August Farnaz
                </span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-[600px]">
                With a background in IT infrastructure and programming, I am now exploring data science and machine learning to build practical, data-driven solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#projects">
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
                    <span className="relative z-10 flex items-center">
                      View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/dhikdhiks" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/andhika-august-farnaz-624459294/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:augustandhika263@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <CreativeHero />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative cv-auto" style={{ containIntrinsicSize: "auto 1300px" }}>
        <div className="absolute inset-0 z-0">
          <Blob className="top-1/4 right-1/4 w-64 h-64 opacity-10" color="rgba(38, 128, 74, 0.5)" />
          <Blob className="bottom-1/3 left-1/3 w-64 h-64 opacity-10" color="rgba(32, 101, 60, 0.6)" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/profile-2.avif"
                  alt="Andhika August Farnaz"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for side job remote</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
<p className="text-lg text-zinc-300">
  I'm a Data Science student with a background in Information Systems, Networks, and Applications. My technical journey spans web development, networking, Linux, IoT, and data-driven applications.
</p>
<p className="text-lg text-zinc-300 mt-4">
  I focus on Python, data analysis, machine learning, and software development, with experience using NumPy, Pandas, Matplotlib, Scikit-learn, React, Next.js, and Laravel.
</p>
<p className="text-lg text-zinc-300 mt-4">
  My primary focus is machine learning and artificial intelligence. I’m currently strengthening my foundations in mathematics, statistics, and machine learning while exploring Deep Learning, AI Agents, and automation.
</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-400">Name</div>
                    <div className="font-medium">Andhika August Farnaz</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm text-zinc-400">Email</div>
                    <div className="font-medium break-all">augustandhika263@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-400">Location</div>
                    <div className="font-medium">Yogyakarta, Indonesia</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-400">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  {/* <a
                    href="/DikaRESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md"
                  >
                    View Resume
                  </a> */}

                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

            {/* Skills Section */}
      <section id="skills" className="py-32 relative cv-auto">
        <div className="absolute inset-0 z-0">
          <Blob className="top-1/3 left-1/4 w-64 h-64 opacity-10" color="rgba(59, 130, 246, 0.45)" />
          <Blob className="bottom-1/4 right-1/4 w-64 h-64 opacity-10" color="rgba(38, 128, 74, 0.5)" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          {/* Desktop: Two horizontal rows with Marquee */}
          <div className="hidden md:block mt-16">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                {[
                  { name: 'Python', icon: 'python' },
                  { name: 'Pandas', icon: 'pandas' },
                  { name: 'NumPy', icon: 'numpy' },
                  { name: 'Matplotlib', icon: 'matplotlib' },
                  { name: 'Scikit-learn', icon: 'scikit-learn' },
                  { name: 'Jupyter', icon: 'jupyter' },
                ].map((skill) => {
                  const iconData = skillIcons[skill.icon as keyof typeof skillIcons];
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 mx-4 px-4 py-2 rounded-full bg-zinc-800/80 border border-white/10"
                    >
                      {iconData && (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-white"
                          dangerouslySetInnerHTML={{ __html: iconData.svg }}
                        />
                      )}
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                    </div>
                  );
                })}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {[
                  { name: 'JavaScript', icon: 'javascript' },
                  { name: 'Laravel', icon: 'laravel' },
                  { name: 'Next.js', icon: 'nextjs' },
                  { name: 'React', icon: 'react' },
                  { name: 'Git', icon: 'git' },
                  { name: 'LibreOffice Calc', icon: 'excel' },
                ].map((skill) => {
                  const iconData = skillIcons[skill.icon as keyof typeof skillIcons];
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 mx-4 px-4 py-2 rounded-full bg-zinc-800/80 border border-white/10"
                    >
                      {iconData && (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-white"
                          dangerouslySetInnerHTML={{ __html: iconData.svg }}
                        />
                      )}
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                    </div>
                  );
                })}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-900"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-900"></div>
            </div>
          </div>

          {/* Mobile: Two vertical columns with vertical Marquee */}
          <div className="md:hidden mt-16">
            <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
              <Marquee pauseOnHover vertical className="[--duration:20s]">
                {[
                  { name: 'Python', icon: 'python' },
                  { name: 'Pandas', icon: 'pandas' },
                  { name: 'NumPy', icon: 'numpy' },
                  { name: 'Matplotlib', icon: 'matplotlib' },
                  { name: 'Scikit-learn', icon: 'scikit-learn' },
                  { name: 'Jupyter', icon: 'jupyter' },
                ].map((skill) => {
                  const iconData = skillIcons[skill.icon as keyof typeof skillIcons];
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 my-3 px-4 py-2 rounded-full bg-zinc-800/80 border border-white/10"
                    >
                      {iconData && (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-white"
                          dangerouslySetInnerHTML={{ __html: iconData.svg }}
                        />
                      )}
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                    </div>
                  );
                })}
              </Marquee>
              <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {[
                  { name: 'JavaScript', icon: 'javascript' },
                  { name: 'Laravel', icon: 'laravel' },
                  { name: 'Next.js', icon: 'nextjs' },
                  { name: 'React', icon: 'react' },
                  { name: 'Git', icon: 'git' },
                  { name: 'Excel', icon: 'excel' },
                ].map((skill) => {
                  const iconData = skillIcons[skill.icon as keyof typeof skillIcons];
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 my-3 px-4 py-2 rounded-full bg-zinc-800/80 border border-white/10"
                    >
                      {iconData && (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-white"
                          dangerouslySetInnerHTML={{ __html: iconData.svg }}
                        />
                      )}
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                    </div>
                  );
                })}
              </Marquee>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-zinc-900"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-900"></div>
            </div>
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="py-32 relative cv-auto" style={{ containIntrinsicSize: "auto 3200px" }}>
  <div className="absolute inset-0 z-0">
    <Blob className="top-1/4 left-1/3 w-64 h-64 opacity-10" color="rgba(32, 101, 60, 0.55)" />
    <Blob className="bottom-1/3 right-1/4 w-64 h-64 opacity-10" color="rgba(234, 179, 8, 0.4)" />
  </div>

  <div className="container relative z-10">
    <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      
      <ProjectCard
        title="Webku"
        description="A professional web development service platform designed specifically for MSMEs (UMKM). This website offers comprehensive website creation services including custom design, e-commerce solutions, and digital presence optimization. Built with modern technologies to deliver fast, responsive, and SEO-friendly websites tailored for small business needs."
        tags={["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui", "Lucide React", "Framer Motion", "React Hook Form", "Zod", "MongoDB", "Axios", "SWR", "TanStack React Query", "Node.js", "npm", "Yarn", "Git"]}
        image="https://i.ibb.co.com/BVypk477/p-web-webkuuss.avif"
        repoUrl="https://github.com/dhikdhiks/Webku"
      />

      <ProjectCard
        title="Uniqloecomerce"
        description="A modern e-commerce platform built with PHP and Laravel, featuring a complete shopping cart system with Surfsidemedia integration. Includes real-time chat functionality with Chatify, social authentication via Socialite, and a clean UI with Heroicons and Boxicons. Fully tested with PHPUnit and Faker, and optimized with Laravel Sail, Pail, and Pint for seamless development and deployment."
        tags={["PHP", "Laravel", "Shopping Cart (Surfsidemedia)", "Chatify", "Socialite", "Laravel UI", "Intervention Image", "Heroicons", "Boxicons", "Tinker", "Laravel Sail", "Laravel Pail", "Laravel Pint", "PHPUnit", "Faker", "Mockery", "Collision"]}
        image="https://i.ibb.co.com/mCQxjt0J/p-web-uniqlo.avif"
        repoUrl="https://github.com/dhikdhiks/uniqloeccomers"
      />

      <ProjectCard
        title="Wine Quality Prediction"
        description="A machine learning project that predicts the quality of wine based on physicochemical properties using classification models. Features comprehensive data analysis and visualization with Matplotlib and Seaborn, and implements multiple algorithms including Random Forest, SVM, and Logistic Regression. The project includes feature importance analysis and model evaluation with hyperparameter tuning."
        tags={["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"]}
        image="https://i.ibb.co.com/byyrDj6/p-ml-Wine-quality-predict.avif"
        repoUrl="https://github.com/dhikdhiks/wine-quality-predict"
      />

      <ProjectCard
        title="Salary Prediction"
        description="A machine learning web application that predicts annual salary based on demographic and professional factors including age, gender, education, job title, country, race, and years of experience. Uses Random Forest Regressor with 94.6% R² accuracy. Features an interactive Streamlit frontend with real-time predictions and automatic job title categorization."
        tags={["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Matplotlib", "Seaborn", "Pickle", "Git & GitHub"]}
        image="https://i.ibb.co.com/rKDp5FFH/p-ml-salary-predict.avif"
        repoUrl="https://github.com/dhikdhiks/Salary-Prediction"
      />

      <ProjectCard
        title="Orange Classification"
        description="A machine learning classification web application that predicts the quality of oranges (Bagus/Sedang/Jelek) based on physical characteristics such as diameter, weight, skin thickness, sugar content, region, color, and harvest season. Built with Logistic Regression and Streamlit, featuring an interactive form with dropdown selections and confidence score display."
        tags={["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Matplotlib", "Joblib", "Git & GitHub"]}
        image="https://i.ibb.co.com/ccZQfHVc/p-ml-orange-classification.avif"
        repoUrl="https://github.com/dhikdhiks/MLOrangeQualityClasification"
      />

    </div>
  </div>
</section>

      {/* Grind Section */}
      {/* <section className="py-32 relative" id="grind">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <GrindSection />
        </div>
      </section> */}

      {/* Knowledge Brain Section */}
      {/* <section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <KnowledgeBrain />
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="py-32 relative cv-auto">
        <div className="absolute inset-0 z-0">
          <Blob className="top-1/3 right-1/3 w-64 h-64 opacity-10" color="rgba(38, 128, 74, 0.5)" />
          <Blob className="bottom-1/4 left-1/4 w-64 h-64 opacity-10" color="rgba(59, 130, 246, 0.4)" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative cv-auto">
        <div className="absolute inset-0 z-0">
          <Blob className="top-1/4 left-1/4 w-64 h-64 opacity-10" color="rgba(32, 101, 60, 0.55)" />
          <Blob className="bottom-1/3 right-1/3 w-64 h-64 opacity-10" color="rgba(38, 128, 74, 0.5)" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Email</div>
                    <div className="font-medium">
                      <Link href="mailto:augustandhika263@gmail.com" target="_blank" rel="noopener noreferrer">
                        augustandhika263@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">LinkedIn</div>
                    <div className="font-medium">
                        <Link href="https://www.linkedin.com/in/andhika-august-farnaz-624459294/" target="_blank" rel="noopener noreferrer">
                          Andhika August Farnaz
                        </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">GitHub</div>
                    <div className="font-medium">
                      <Link href="https://github.com/dhikdhiks" target="_blank" rel="noopener noreferrer">
                        github.com/dhikdhiks
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status </h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"> </div>
                  <span>Open to opportunities in Quantitative Finance, Data Science, and ML Engineering!</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Learn CTA Section */}
      {/* <section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Learn With Me" subtitle="Quant Finance & Applied Math" />

          <div className="max-w-3xl mx-auto mt-16">
            <GlassmorphicCard>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-phthalo-500 to-phthalo-700 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold">Want to Learn Quant Finance & Math?</h3>
                
                <p className="text-lg text-zinc-300">
                  I'm building courses and mentorship programs on quantitative finance, algorithmic trading, and applied mathematics. Join the waitlist to get notified when they launch.
                </p>

                <div className="pt-4">
                  <Link href="/learn">
                    <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0 text-lg px-8 py-3">
                      <span className="relative z-10 flex items-center">
                        Take the Quiz
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                Dika
              </span>
              <span className="text-white">Dev</span>
            </Link>
            <p className="text-sm text-zinc-400 mt-2">
              © {new Date().getFullYear()} Andhika August Farnaz. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/dhikdhiks" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/andhika-august-farnaz-624459294/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:augustandhika263@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}