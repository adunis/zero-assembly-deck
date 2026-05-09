const fs = require('fs');

const equipPath = './public/data/equipment.json';
let equipment = JSON.parse(fs.readFileSync(equipPath, 'utf8'));

const sonic = equipment.find(e => e.id === 'eq_36');

if (sonic) {
  sonic.name = "Sonic 'Repulsor' Cylinder";
  sonic.type = "Close-Quarters Weapon";
  sonic.cost = "Physical Attach";
  sonic.device = "No Device (Physical Push)";
  sonic.ammo = "";
  sonic.country = "IN";
  sonic.rule = "<i class=\"fas fa-water\"></i> ENGAGE (1 AP): No toy device needed. Physically push the enemy mech with your hand in a straight line up to 1 Short Ruler (15cm) away from your mech. Deals 0 DP. The pushed mech may fall over, fall off ledges, or collide with terrain (causing 1 DP if terrain falls on them).";
  sonic.medium = "• No projectile — physical push with your hand.\n• Push enemy up to 15cm in a straight line.\n• Deals 0 DP directly.\n• Can cause falls, collisions, terrain collapse.";
  sonic.quick = "<b>Damage:</b> 0 DP (Knockback)<br><b>Range:</b> 15cm push<br><b>Device:</b> Physical Push";
  sonic.statLine = "Damage: 0 DP | Proxy: SHORT | Device: Physical Push";
  
  console.log('✓ Restored Sonic Repulsor Cylinder');
  console.log('  - No toy device needed');
  console.log('  - Physically push enemy mech with your hand');
  console.log('  - Push up to 15cm in a straight line');
  console.log('  - Deals 0 DP but can cause falls/collisions');
  
  fs.writeFileSync(equipPath, JSON.stringify(equipment, null, 2));
  console.log('💾 Saved!');
} else {
  console.log('✗ Sonic Repulsor not found');
}
