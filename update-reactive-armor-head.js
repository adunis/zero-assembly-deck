const fs = require('fs');

const equipPath = './public/data/equipment.json';
let equipment = JSON.parse(fs.readFileSync(equipPath, 'utf8'));

const reactive = equipment.find(e => e.id === 'eq_4');

if (reactive) {
  reactive.name = "Reactive Armor Head";
  reactive.type = "Utility System / Head";
  reactive.rule = "<i class=\"fas fa-burst\"></i> Alternative head option. When you take damage from an ENGAGE action, the attacker also takes 1 DP (place 1 HP token at their feet).";
  reactive.medium = "• Alternative to Argus-Eye Radome.\n• Counter-damage: attacker takes 1 DP when they hit you.";
  reactive.quick = "<b>Type:</b> Head<br><b>Perk:</b> Counter-damage (1 DP)";
  
  // Remove HP bonus since it's now a head
  delete reactive.bonusHP;
  
  console.log('✓ Updated Reactive Armor Head');
  console.log('  - Removed +1 HP bonus');
  console.log('  - New ability: Counter-damage (attacker takes 1 DP when they hit you)');
  console.log('  - Type: Head (alternative to Argus-Eye)');
  
  fs.writeFileSync(equipPath, JSON.stringify(equipment, null, 2));
  console.log('💾 Saved!');
} else {
  console.log('✗ Reactive Armor not found');
}
