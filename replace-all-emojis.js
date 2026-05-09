const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('public/data/rules.json', 'utf8'));

// Complete emoji to FA icon mapping
const replacements = {
  // Numbered emojis
  '1️⃣': '1.',
  '2️⃣': '2.',
  '3️⃣': '3.',
  '4️⃣': '4.',
  '5️⃣': '5.',
  
  // All other emojis
  '⚡': '<i class="fas fa-bolt"></i>',
  '🚶': '<i class="fas fa-person-walking"></i>',
  '🔫': '<i class="fas fa-gun"></i>',
  '🔧': '<i class="fas fa-wrench"></i>',
  '🔄': '<i class="fas fa-rotate"></i>',
  '🎯': '<i class="fas fa-bullseye"></i>',
  '💔': '<i class="fas fa-heart-crack"></i>',
  '🏆': '<i class="fas fa-trophy"></i>',
  '🎮': '<i class="fas fa-gamepad"></i>',
  '📐': '<i class="fas fa-ruler-combined"></i>',
  '🏗️': '<i class="fas fa-building"></i>',
  '⚙️': '<i class="fas fa-gear"></i>',
  '📋': '<i class="fas fa-clipboard"></i>',
  '🚀': '<i class="fas fa-rocket"></i>',
  '⚔️': '<i class="fas fa-swords"></i>',
  '📦': '<i class="fas fa-box"></i>',
  '💡': '<i class="fas fa-lightbulb"></i>',
  '📏': '<i class="fas fa-ruler"></i>',
  '👊': '<i class="fas fa-hand-fist"></i>',
  '💥': '<i class="fas fa-burst"></i>',
  '📍': '<i class="fas fa-location-dot"></i>',
  '☠️': '<i class="fas fa-skull"></i>',
  '🛞': '<i class="fas fa-circle"></i>',
  '🚜': '<i class="fas fa-tractor"></i>',
  '🕷️': '<i class="fas fa-spider"></i>',
  '🦿': '<i class="fas fa-person"></i>',
  '🧗': '<i class="fas fa-person-climbing"></i>',
  '❌': '<i class="fas fa-xmark"></i>',
  '✅': '<i class="fas fa-check"></i>',
  '⚠️': '<i class="fas fa-triangle-exclamation"></i>',
  '🤖': '<i class="fas fa-robot"></i>',
  '🎨': '<i class="fas fa-palette"></i>',
  '📝': '<i class="fas fa-file-lines"></i>',
  '🛡️': '<i class="fas fa-shield"></i>',
  '🏁': '<i class="fas fa-flag-checkered"></i>',
  '💨': '<i class="fas fa-wind"></i>',
  '🏹': '<i class="fas fa-bow-arrow"></i>'
};

function replaceEmojis(str) {
  if (typeof str !== 'string') return str;
  let result = str;
  for (const [emoji, replacement] of Object.entries(replacements)) {
    result = result.split(emoji).join(replacement);
  }
  return result;
}

// Process all rules
const updatedRules = rules.map(rule => ({
  ...rule,
  title: replaceEmojis(rule.title),
  description: replaceEmojis(rule.description),
  medium: replaceEmojis(rule.medium),
  quick: replaceEmojis(rule.quick)
}));

fs.writeFileSync('public/data/rules.json', JSON.stringify(updatedRules, null, 2), 'utf8');

console.log('✓ Replaced ALL emojis in rules.json');
console.log('✓ Processed', updatedRules.length, 'entries');
console.log('✓ All emojis converted to Font Awesome icons or plain numbers');
