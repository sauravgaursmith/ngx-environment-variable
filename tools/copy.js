const fs = require('fs');
const resizable = fs.readFileSync('global.d.ts').toString();
fs.writeFileSync('dist/global.d.ts', resizable);
