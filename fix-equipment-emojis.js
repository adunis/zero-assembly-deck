const fs = require('fs');

// Read equipment.json
const equipment = JSON.parse(fs.readFileSync('public/data/equipment.json', 'utf8'));

// Emoji replacements
const replacements = {
  '⚙️': '<i class="fas fa-gear"></i>',
  '🛡️': '<i class="fas fa-shield"></i>',
  '🔧': '<i class="fas fa-wrench"></i>',
  '💥': '<i class="fas fa-burst"></i>',
  '🏰': '<i class="fas fa-building"></i>',
  '⚡': '<i class="fas fa-bolt"></i>',
  '🚀': '<i class="fas fa-rocket"></i>',
  '✈️': '<i class="fas fa-plane"></i>',
  '🤖': '<i class="fas fa-robot"></i>',
  '🎯': '<i class="fas fa-bullseye"></i>',
  '👊': '<i class="fas fa-hand-fist"></i>',
  '🔫': '<i class="fas fa-gun"></i>',
  '💣': '<i class="fas fa-bomb"></i>',
  '💨': '<i class="fas fa-wind"></i>',
  '📡': '<i class="fas fa-tower-broadcast"></i>',
  '🚀': '<i class="fas fa-rocket"></i>',
  '🔥': '<i class="fas fa-fire"></i>'
};

function replaceEmojis(str) {
  if (typeof str !== 'string') return str;
  let result = str;
  for (const [emoji, icon] of Object.entries(replacements)) {
    result = result.split(emoji).join(icon);
  }
  return result;
}

// Process equipment
const updatedEquipment = equipment.map(item => {
  const updated = {
    ...item,
    name: replaceEmojis(item.name),
    type: replaceEmojis(item.type),
    rule: replaceEmojis(item.rule),
    medium: replaceEmojis(item.medium),
    quick: replaceEmojis(item.quick)
  };
  
  // Add statLine field for ALL items
  if (item.type === 'Core') {
    updated.statLine = 'HP: 4';
  } else if (item.type === 'Armor Plate') {
    // Extract HP bonus from rule
    const hpMatch = item.rule.match(/(\d+)\s*HP/i);
    const hp = hpMatch ? hpMatch[1] : '1';
    updated.statLine = `HP: +${hp}`;
  } else if (item.type === 'A.T. Shield') {
    updated.statLine = 'A.T.: 2 Tokens';
  } else if (item.name.includes('Manipulating Arm')) {
    // Manipulating arm can deal 1 damage in melee
    updated.statLine = 'Damage: 1 DP | Proxy: TOUCH | Device: Melee';
  } else {
    // For weapons, extract damage and proxy
    const damageMatch = item.rule.match(/(\d+)\s*DP/i);
    const damage = damageMatch ? damageMatch[1] : '—';
    
    let proxy = '—';
    if (item.device && item.device.includes('Air Cannon') && !item.device.includes('Big')) {
      proxy = 'SHORT';
    } else if (item.device && item.device.includes('Big Air Cannon')) {
      proxy = 'SHORT';
    } else if (item.device && (item.device.includes('Crossbow') || item.device.includes('3D Crossbow'))) {
      proxy = 'SHORT';
    } else if (item.device && item.device.includes('Mortar')) {
      proxy = 'LONG';
    } else if (item.rule.includes('touching') || item.rule.includes('Melee')) {
      proxy = 'TOUCH';
    } else if (item.rule.includes('10cm')) {
      proxy = 'CLOSE';
    }
    
    let device = item.device || 'No Device';
    device = device.replace('Air Cannon', 'Cannon').replace('3D Crossbow', 'Crossbow').trim();
    
    if (damage !== '—' || proxy !== '—') {
      updated.statLine = `Damage: ${damage} DP | Proxy: ${proxy} | Device: ${device}`;
    } else {
      updated.statLine = `Type: ${item.type}`;
    }
  }
  
  return updated;
});

fs.writeFileSync('public/data/equipment.json', JSON.stringify(updatedEquipment, null, 2), 'utf8');

console.log('✓ Replaced emojis in equipment.json');
console.log('✓ Added statLine to all', updatedEquipment.length, 'items');
console.log('✓ Updated manipulating arm to show melee damage');
