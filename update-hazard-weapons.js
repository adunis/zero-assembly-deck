const fs = require('fs');

const equipPath = './public/data/equipment.json';
let equipment = JSON.parse(fs.readFileSync(equipPath, 'utf8'));

// Update Skorpion Mine Dispenser
const mineDispenser = equipment.find(e => e.id === 'eq_22');
if (mineDispenser) {
  mineDispenser.device = "Air Cannon";
  mineDispenser.ammo = "Hazard Markers (x2)";
  mineDispenser.rule = "<i class=\"fas fa-bomb\"></i> ENGAGE (1 AP): Load 2 hazard markers into the Air Cannon. Place the cannon at SHORT proxy distance (15cm) from your mech. Gently press the device to shoot the markers in front of your weapon. Where they land, they stay. Enemy mechs touching markers take 1 DP.";
  mineDispenser.medium = "• Uses Air Cannon to place 2 hazard markers.\n• Gently press device to shoot markers short distance.\n• Enemies touching markers take 1 DP.";
  mineDispenser.quick = "<b>Type:</b> Area denial (1 DP)<br><b>Device:</b> Air Cannon";
  mineDispenser.statLine = "Damage: 1 DP | Proxy: SHORT | Device: Air Cannon";
  
  console.log('✓ Updated Skorpion Mine Dispenser');
  console.log('  - Device: Air Cannon');
  console.log('  - Shoots 2 hazard markers');
  console.log('  - Proxy: SHORT (15cm)');
}

// Update Salamander Flame Projector
const flameProjector = equipment.find(e => e.id === 'eq_38');
if (flameProjector) {
  flameProjector.device = "Mortar";
  flameProjector.ammo = "Hazard Markers (x3)";
  flameProjector.rule = "<i class=\"fas fa-fire\"></i> ENGAGE (1 AP): Load 3 hazard markers into the Mortar. Place the mortar at LONG proxy distance (30cm) from your mech. Gently press the device to shoot the markers in an arc. Where they land, they create a line of fire. Mechs touching markers take 1 DP. Lasts until end of round.";
  flameProjector.medium = "• Uses Mortar to place 3 hazard markers in a line.\n• Gently press device to shoot markers in arc.\n• Deals 1 DP to touching mechs.\n• Lasts 1 round.";
  flameProjector.quick = "<b>Type:</b> Line hazard (1 DP)<br><b>Device:</b> Mortar";
  flameProjector.statLine = "Damage: 1 DP | Proxy: LONG | Device: Mortar";
  
  console.log('✓ Updated Salamander Flame Projector');
  console.log('  - Device: Mortar');
  console.log('  - Shoots 3 hazard markers in arc');
  console.log('  - Proxy: LONG (30cm)');
}

fs.writeFileSync(equipPath, JSON.stringify(equipment, null, 2));
console.log('💾 Saved equipment.json!');
console.log('\n📋 Summary:');
console.log('  - Mine Dispenser: Air Cannon (SHORT proxy)');
console.log('  - Flame Projector: Mortar (LONG proxy)');
console.log('  - Both use gentle press to shoot markers');
