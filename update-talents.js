const fs = require('fs');

const talents = JSON.parse(fs.readFileSync('public/data/talents.json', 'utf8'));

// Apply FA icon replacements
const replacements = {
  '⚡': '<i class="fas fa-bolt"></i>',
  '🔧': '<i class="fas fa-wrench"></i>',
  '🚀': '<i class="fas fa-rocket"></i>',
  '🎯': '<i class="fas fa-bullseye"></i>',
  '🛡️': '<i class="fas fa-shield"></i>',
  '⚙️': '<i class="fas fa-gear"></i>',
  '💨': '<i class="fas fa-wind"></i>',
  '🏰': '<i class="fas fa-building"></i>',
  '🔄': '<i class="fas fa-rotate"></i>',
  '💀': '<i class="fas fa-skull"></i>',
  '🤝': '<i class="fas fa-handshake"></i>',
  '📡': '<i class="fas fa-tower-broadcast"></i>',
  '🔫': '<i class="fas fa-gun"></i>',
  '🏃': '<i class="fas fa-person-running"></i>',
  '💥': '<i class="fas fa-burst"></i>'
};

function replaceEmojis(str) {
  if (typeof str !== 'string') return str;
  let result = str;
  for (const [emoji, icon] of Object.entries(replacements)) {
    result = result.split(emoji).join(icon);
  }
  return result;
}

const updatedTalents = talents.map(talent => ({
  ...talent,
  name: replaceEmojis(talent.name),
  desc: replaceEmojis(talent.desc)
}));

fs.writeFileSync('public/data/talents.json', JSON.stringify(updatedTalents, null, 2), 'utf8');

console.log(`✓ Updated talents.json with Font Awesome icons`);
console.log(`✓ Processed ${updatedTalents.length} perks`);
