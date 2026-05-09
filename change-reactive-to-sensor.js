const fs = require('fs');

const equipPath = './public/data/equipment.json';
let equipment = JSON.parse(fs.readFileSync(equipPath, 'utf8'));

const reactive = equipment.find(e => e.id === 'eq_4');

if (reactive) {
  // Completely change it to a sensor head
  reactive.name = "'Sentinel' Sensor Array Head";
  reactive.type = "Utility System / Head";
  reactive.cost = "Physical Attach";
  reactive.device = "N/A";
  reactive.ammo = "";
  reactive.country = "EU";
  reactive.rule = "<i class=\"fas fa-radar\"></i> Alternative head option. Once per turn: Before you ENGAGE, you may add +1 DP to that attack if you have line of sight to the target.";
  reactive.medium = "• Alternative to Argus-Eye Radome.\n• Once per turn: +1 DP to one attack (requires line of sight).";
  reactive.quick = "<b>Type:</b> Head<br><b>Perk:</b> +1 DP (once per turn)";
  reactive.statLine = "Type: Utility System / Head";
  
  // Make sure no HP bonus
  delete reactive.bonusHP;
  
  console.log('✓ Changed Reactive Armor Head → Sentinel Sensor Array Head');
  console.log('  - New concept: Sensor-based targeting system');
  console.log('  - Ability: Once per turn, +1 DP to one attack (requires line of sight)');
  console.log('  - Type: Head (alternative to Argus-Eye)');
  
  fs.writeFileSync(equipPath, JSON.stringify(equipment, null, 2));
  console.log('💾 Saved!');
} else {
  console.log('✗ Item not found');
}
