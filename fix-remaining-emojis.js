const fs = require('fs');

// Read equipment.json
const equipmentPath = './public/data/equipment.json';
let equipment = JSON.parse(fs.readFileSync(equipmentPath, 'utf8'));

// Read talents.json
const talentsPath = './public/data/talents.json';
let talents = JSON.parse(fs.readFileSync(talentsPath, 'utf8'));

// Emoji to Font Awesome mapping
const emojiMap = {
  '📏': '<i class="fas fa-ruler"></i>',
  '🌊': '<i class="fas fa-water"></i>',
  '☢️': '<i class="fas fa-radiation"></i>',
  '☢': '<i class="fas fa-radiation"></i>',
  '🎯': '<i class="fas fa-bullseye"></i>',
  '⚡': '<i class="fas fa-bolt"></i>',
  '🔧': '<i class="fas fa-wrench"></i>',
  '🚀': '<i class="fas fa-rocket"></i>',
  '🛡️': '<i class="fas fa-shield"></i>',
  '🛡': '<i class="fas fa-shield"></i>',
  '⚙️': '<i class="fas fa-gear"></i>',
  '⚙': '<i class="fas fa-gear"></i>',
  '💨': '<i class="fas fa-wind"></i>',
  '🏢': '<i class="fas fa-building"></i>',
  '🔄': '<i class="fas fa-rotate"></i>',
  '💀': '<i class="fas fa-skull"></i>',
  '🤝': '<i class="fas fa-handshake"></i>',
  '📡': '<i class="fas fa-tower-broadcast"></i>',
  '🔫': '<i class="fas fa-gun"></i>',
  '🏃': '<i class="fas fa-person-running"></i>',
  '💥': '<i class="fas fa-burst"></i>',
};

function replaceEmojis(text) {
  if (!text) return text;
  let result = text;
  for (const [emoji, icon] of Object.entries(emojiMap)) {
    result = result.split(emoji).join(icon);
  }
  return result;
}

// Fix equipment.json
equipment.forEach(item => {
  item.rule = replaceEmojis(item.rule);
  if (item.medium) item.medium = replaceEmojis(item.medium);
  if (item.quick) item.quick = replaceEmojis(item.quick);
  if (item.statLine) item.statLine = replaceEmojis(item.statLine);
});

// Fix talents.json
talents.forEach(talent => {
  talent.name = replaceEmojis(talent.name);
  if (talent.desc) talent.desc = replaceEmojis(talent.desc);
  if (talent.rule) talent.rule = replaceEmojis(talent.rule);
});

// Write back
fs.writeFileSync(equipmentPath, JSON.stringify(equipment, null, 2));
fs.writeFileSync(talentsPath, JSON.stringify(talents, null, 2));

console.log('✅ All remaining emojis replaced with Font Awesome icons!');
console.log(`   - Updated ${equipment.length} equipment items`);
console.log(`   - Updated ${talents.length} talent cards`);
