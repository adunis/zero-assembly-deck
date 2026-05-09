const fs = require('fs');

// Read the backup file
const data = JSON.parse(fs.readFileSync('public/data/equipment.json.backup', 'utf8'));

const replacements = {
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
  for (const [emoji, icon] of Object.entries(replacements)) {
    result = result.split(emoji).join(icon);
  }
  return result;
}

function processObject(obj) {
  if (typeof obj === 'string') {
    return replaceEmojis(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(processObject);
  } else if (obj && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = processObject(value);
    }
    return result;
  }
  return obj;
}

// Process rules.json
const rulesData = JSON.parse(fs.readFileSync('public/data/equipment.json.backup', 'utf8'));
const processedRules = processObject(rulesData);
fs.writeFileSync('public/data/rules.json', JSON.stringify(processedRules, null, 2), 'utf8');
console.log('✓ Replaced emojis in rules.json');

// Process talents.json
const talentsData = JSON.parse(fs.readFileSync('public/data/talents.json', 'utf8'));
const processedTalents = processObject(talentsData);
fs.writeFileSync('public/data/talents.json', JSON.stringify(processedTalents, null, 2), 'utf8');
console.log('✓ Replaced emojis in talents.json');

// Process equipment.json
const equipData = JSON.parse(fs.readFileSync('public/data/equipment.json.backup', 'utf8'));
const processedEquip = processObject(equipData);
fs.writeFileSync('public/data/equipment.json', JSON.stringify(processedEquip, null, 2), 'utf8');
console.log('✓ Replaced emojis in equipment.json');

console.log('\n✅ All emojis replaced with Font Awesome icons!');
