const fs = require('fs');
const rules = JSON.parse(fs.readFileSync('./public/data/rules.json', 'utf8'));
console.log('Loaded', rules.length, 'chapters');
fs.writeFileSync('./public/data/rules.json', JSON.stringify(rules, null, 2));
console.log('Done!');
