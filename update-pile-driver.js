const fs = require('fs');

const equipPath = './public/data/equipment.json';
let equipment = JSON.parse(fs.readFileSync(equipPath, 'utf8'));

const piledriver = equipment.find(e => e.id === 'eq_2');

if (piledriver) {
  piledriver.name = "'Bunker' Pile Driver";
  piledriver.type = "Melee Weapon";
  piledriver.cost = "Physical Attach";
  piledriver.device = "Air Cannon (Point-Blank)";
  piledriver.ammo = "Standard Shell";
  piledriver.country = "CN";
  piledriver.rule = "<i class=\"fas fa-hand-fist\"></i> ENGAGE (1 AP): Point-blank melee weapon. The Air Cannon chamber must be physically touching the target (enemy mech or building piece). Load a Standard Shell and fire. Against mechs: Deals 3 DP. Against buildings: The building piece is knocked over/destroyed.";
  piledriver.medium = "• Point-blank — cannon must touch target.\n• Against mechs: Deals 3 DP.\n• Against buildings: Knocks over/destroys the piece.";
  piledriver.quick = "<b>Damage:</b> 3 DP<br><b>Range:</b> TOUCH<br><b>Device:</b> Cannon (point-blank)";
  piledriver.statLine = "Damage: 3 DP | Proxy: TOUCH | Device: Air Cannon";
  
  console.log('✓ Updated Bunker Pile Driver');
  console.log('  - Uses Air Cannon at point-blank range');
  console.log('  - Chamber must physically touch target');
  console.log('  - Against mechs: 3 DP');
  console.log('  - Against buildings: Knocks over/destroys');
  
  fs.writeFileSync(equipPath, JSON.stringify(equipment, null, 2));
  console.log('💾 Saved!');
} else {
  console.log('✗ Pile Driver not found');
}
