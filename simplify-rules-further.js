const fs = require('fs');

const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

console.log('🔍 ANALYZING RULES FOR SIMPLIFICATION OPPORTUNITIES...\n');

// SIMPLIFICATION 1: Remove "Veteran Option" - adds complexity for edge case
const setup1 = rules.find(r => r.id === 'setup_1');
if (setup1 && setup1.description.includes('Veteran Option')) {
  setup1.description = setup1.description.replace(
    /\n\n<b>Veteran Option:<\/b> If you already have a mech from a previous game, you can skip scavenging and use your existing mech, OR participate in scavenging and choose at the end \(existing vs new\)\./,
    ''
  );
  console.log('✓ REMOVED: Veteran Option from setup_1 (edge case, adds complexity)');
}

// SIMPLIFICATION 2: Remove Equipment Cubes - they add mid-game complexity
// Just keep Resource Cubes (Neuralloy) for healing
const ltp1 = rules.find(r => r.id === 'ltp_1');
if (ltp1) {
  // Remove Equipment Cubes from Phase 3
  ltp1.description = ltp1.description.replace(
    /<b>Phase 3 — Scenario Prep:<\/b> Place objective markers, Resource Cubes \(scavenge for HP\), and Equipment Cubes \(scavenge to modify your mech mid-game\)\./,
    '<b>Phase 3 — Scenario Prep:</b> Place objective markers and Resource Cubes (Neuralloy — scavenge for +1 HP).'
  );
  
  // Simplify SCAVENGE action
  ltp1.description = ltp1.description.replace(
    /<b>SCAVENGE \(1 AP\):<\/b> Pick up HP tokens, Resource Cubes, or Equipment Cubes touching your mech's base\. HP tokens restore health\. Equipment Cubes let you grab a random part from the scrap pile and attach it immediately\./,
    '<b>SCAVENGE (1 AP):</b> Pick up HP tokens or Resource Cubes touching your mech. HP tokens restore lost health. Resource Cubes grant +1 HP (Neuralloy field repairs).'
  );
  
  console.log('✓ SIMPLIFIED: Removed Equipment Cubes from ltp_1 (mid-game complexity)');
}

// Update setup_1 Phase 3
if (setup1) {
  setup1.description = setup1.description.replace(
    /<b>Resource Cubes:<\/b> Place Resource Cubes on terrain\. Scavenge them to gain 1 HP\.\n\n<b>Equipment Cubes:<\/b> Place Equipment Cubes on terrain\. Scavenge them to randomly pick a part from the scrap pile and attach it immediately to your mech\. This is the only way to modify your mech during combat\./,
    '<b>Resource Cubes (Neuralloy):</b> Place Resource Cubes on terrain. Scavenge them to gain +1 HP. These represent Neuralloy salvage used for field repairs.'
  );
  console.log('✓ SIMPLIFIED: Removed Equipment Cubes from setup_1');
}

// SIMPLIFICATION 3: Remove color synergy system - adds pre-game complexity
if (ltp1) {
  ltp1.description = ltp1.description.replace(
    /Choose your colors carefully — 1-3 colors gives you 1 Perk, but 4\+ colors means no perks\./,
    'Build your mech from any available parts.'
  );
  
  ltp1.description = ltp1.description.replace(
    /Build your mech in 2-3 colors maximum to unlock your Pilot Perk\./,
    'Each player chooses 1 Pilot Perk before the game starts.'
  );
  
  console.log('✓ SIMPLIFIED: Removed color synergy system (pre-game complexity)');
}

// Update intro_3d to remove color synergy
const intro3d = rules.find(r => r.id === 'intro_3d');
if (intro3d) {
  intro3d.description = intro3d.description.replace(
    /Here's the key: print in 2-3 colors maximum\. The color synergy system rewards restraint — 1-3 colors gives you 1 Perk, but 4\+ colors means no perks\. Choose your palette before you start\./,
    'Print in whatever colors you prefer. Color choice is purely aesthetic.'
  );
  
  intro3d.description = intro3d.description.replace(
    /Remember the color synergy rule: 1-3 colors on your mech = 1 Perk\. Plan your color scheme before printing mech parts\./,
    'Print in any colors you like. Focus on making parts that are easy to identify and look good together.'
  );
  
  console.log('✓ SIMPLIFIED: Removed color synergy from intro_3d');
}

// SIMPLIFICATION 4: Simplify terrain spacing rule
if (setup1) {
  setup1.description = setup1.description.replace(
    /Each piece must be at least 15cm from other terrain and 15cm from board edges\.\n\n<b>Exception:<\/b> Building pieces can stack on top of each other or be placed adjacent \(touching\)\. This creates multi-story structures that can collapse if hit by projectiles\./,
    'Each piece must be at least 15cm from other terrain. <b>Exception:</b> Buildings can stack or connect to create structures.'
  );
  console.log('✓ SIMPLIFIED: Terrain spacing rule (removed board edge requirement)');
}

// SIMPLIFICATION 5: Remove AT (Armor Token) markers - just use HP
const intro3dMarkers = intro3d;
if (intro3dMarkers && intro3dMarkers.description.includes('AT Markers')) {
  intro3dMarkers.description = intro3dMarkers.description.replace(
    /<b>AT Markers<\/b> \(blue\/green\): Track Action Points during your turn\. You get 2 AP total per turn\. Print 4-6 per player\.\n\n/,
    ''
  );
  
  intro3dMarkers.description = intro3dMarkers.description.replace(
    /You need six types of 1cm x 1cm x 1cm cubes\./,
    'You need five types of 1cm x 1cm x 1cm cubes.'
  );
  
  intro3dMarkers.description = intro3dMarkers.description.replace(
    /<b>REQUIRED:<\/b> HP, AT, Objective, Resource, Equipment, and Hazard markers/,
    '<b>REQUIRED:</b> HP, Objective, Resource, and Hazard markers'
  );
  
  intro3dMarkers.medium = intro3dMarkers.medium.replace(
    /<b>REQUIRED:<\/b> HP, AT, Objective, Resource, Equipment, and Hazard markers/,
    '<b>REQUIRED:</b> HP, Objective, Resource, and Hazard markers'
  );
  
  intro3dMarkers.quick = intro3dMarkers.quick.replace(
    /<b>Markers:<\/b> HP, AT, Objectives, Resources, Equipment, Hazards/,
    '<b>Markers:</b> HP, Objectives, Resources, Hazards'
  );
  
  console.log('✓ SIMPLIFIED: Removed AT markers (just track AP mentally or with dice)');
}

// SIMPLIFICATION 6: Simplify 3D printing guide marker section
if (intro3dMarkers) {
  intro3dMarkers.description = intro3dMarkers.description.replace(
    /<b>Equipment Cubes<\/b> \(white\/gray\): Represent scavengable equipment on the battlefield\. Print 10-15 total\.\n\n/,
    ''
  );
  console.log('✓ SIMPLIFIED: Removed Equipment Cubes from 3D printing guide');
}

// SIMPLIFICATION 7: Update quick tips to reflect simplifications
if (ltp1) {
  ltp1.description = ltp1.description.replace(
    /Build your mech in 2-3 colors maximum to unlock your Pilot Perk\. Each Core has 4 HP and 8 equipment slots\. Pure Wheels or Treads move 30cm but can't climb\. Pure Legs move 15cm but can climb terrain\. Mixed leg types move 15cm with no climbing\. Use your free REPOSITION to adjust facing and pose between actions\. Scavenge HP tokens to heal\. Buildings can collapse and deal 1 DP if they fall on mechs\./,
    'Each Core has 4 HP. Pure Wheels/Treads move 30cm (no climb). Pure Legs move 15cm (can climb). Mixed legs move 15cm (no climb). Use free REPOSITION to adjust pose. Scavenge Resource Cubes for +1 HP. Buildings can collapse and deal 1 DP.'
  );
  console.log('✓ UPDATED: Quick tips to reflect simplifications');
}

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

console.log('\n💾 Saved rules.json!');
console.log('\n📋 SIMPLIFICATION SUMMARY:');
console.log('════════════════════════════════════════════════════════');
console.log('1. ✓ REMOVED: Veteran Option (edge case)');
console.log('2. ✓ REMOVED: Equipment Cubes (mid-game complexity)');
console.log('3. ✓ REMOVED: Color Synergy System (pre-game complexity)');
console.log('4. ✓ SIMPLIFIED: Terrain spacing (removed board edge rule)');
console.log('5. ✓ REMOVED: AT Markers (track AP mentally)');
console.log('6. ✓ UPDATED: 3D printing guide');
console.log('7. ✓ UPDATED: Quick tips');
console.log('════════════════════════════════════════════════════════');
console.log('\n🎯 RESULT: Cleaner, faster, more accessible game!');
console.log('\nKEY CHANGES:');
console.log('  • Perks: Choose 1 before game (no color restriction)');
console.log('  • Markers: Only HP, Objectives, Resources, Hazards');
console.log('  • Scavenge: Only HP tokens and Resource Cubes');
console.log('  • Build: Any colors, no mid-game modifications');
console.log('  • Terrain: Simpler spacing rules');
