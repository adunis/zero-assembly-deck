const fs = require('fs');

const equipPath = './public/data/equipment.json';
let equipment = JSON.parse(fs.readFileSync(equipPath, 'utf8'));

console.log('Nerfing mobility tops...\n');

// Overboost Drive - make it once per turn instead of permanent +1 AP
const overboost = equipment.find(e => e.id === 'eq_7');
if (overboost) {
  overboost.name = "Overboost Drive Top";
  overboost.type = "Structure / Cover";
  overboost.cost = "Base Component";
  overboost.bonusHP = 1;
  overboost.rule = "<i class=\"fas fa-rocket\"></i> Alternative top option. Seals the Core. Grants +1 HP. Once per turn: One of your MOVE actions covers double distance (2 Rulers instead of 1).";
  overboost.medium = "• Alternative top.\n• Grants +1 HP.\n• Once per turn: One MOVE covers 2 Rulers.";
  overboost.quick = "<b>BONUS HP:</b> +1<br><b>Perk:</b> Double-distance move";
  overboost.statLine = "Type: Structure / Cover";
  console.log('✓ Nerfed Overboost Drive Top');
  console.log('  - Changed from: Permanent +1 AP');
  console.log('  - Changed to: Once per turn, one MOVE covers 2 Rulers');
}

// Jump Jets - make it a top with limited use
const jumpjets = equipment.find(e => e.id === 'eq_8');
if (jumpjets) {
  jumpjets.name = "Type-V 'Vernier' Jump Jets Top";
  jumpjets.type = "Structure / Cover";
  jumpjets.cost = "Base Component";
  jumpjets.bonusHP = 1;
  jumpjets.rule = "<i class=\"fas fa-plane\"></i> Alternative top option. Seals the Core. Grants +1 HP. Your mech can climb terrain up to 10cm high (instead of 5cm for Pure Legs).";
  jumpjets.medium = "• Alternative top.\n• Grants +1 HP.\n• Climb up to 10cm (instead of 5cm).";
  jumpjets.quick = "<b>BONUS HP:</b> +1<br><b>Perk:</b> +5cm climb height";
  jumpjets.statLine = "Type: Structure / Cover";
  console.log('✓ Nerfed Jump Jets Top');
  console.log('  - Changed from: Ignore terrain + 10cm climb');
  console.log('  - Changed to: Just +5cm climb height (10cm total)');
}

fs.writeFileSync(equipPath, JSON.stringify(equipment, null, 2));

console.log('\n✅ Mobility tops nerfed and clarified!');
console.log('   - Both are now Canopy Sealers (tops)');
console.log('   - Both grant +1 HP');
console.log('   - Overboost: Once per turn double-distance move');
console.log('   - Jump Jets: +5cm climb height');
console.log('💾 Saved!\n');
