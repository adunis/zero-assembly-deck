const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('public/data/rules.json', 'utf8'));

function improveFormatting(str) {
  if (typeof str !== 'string') return str;
  
  let result = str;
  
  // Replace **text** with <b>text</b>
  result = result.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  
  // Fix spacing around icons
  result = result.replace(/\s+<i class=/g, ' <i class=');
  result = result.replace(/<\/i>\s+/g, '</i> ');
  
  // Add line breaks after bullet points for better readability
  result = result.replace(/\n•/g, '\n<br>•');
  
  // Fix double spaces
  result = result.replace(/  +/g, ' ');
  
  return result;
}

// Process all rules
const updatedRules = rules.map(rule => ({
  ...rule,
  title: improveFormatting(rule.title),
  description: improveFormatting(rule.description),
  medium: improveFormatting(rule.medium),
  quick: improveFormatting(rule.quick)
}));

fs.writeFileSync('public/data/rules.json', JSON.stringify(updatedRules, null, 2), 'utf8');

console.log('✓ Fixed formatting in rules.json');
console.log('✓ Replaced **bold** with <b>bold</b>');
console.log('✓ Improved spacing and readability');
console.log('✓ Processed', updatedRules.length, 'entries');
