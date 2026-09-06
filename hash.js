const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const rawHash = bcrypt.hashSync('suradem', salt);
const base64Hash = Buffer.from(rawHash).toString('base64');

console.log('\n--- COPY THIS VALUE FOR YOUR .env.local ---');
console.log(base64Hash);
console.log('-------------------------------------------\n');