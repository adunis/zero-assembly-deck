const fs = require('fs');

// Read files
const rulesPath = './public/data/rules.json';
const equipmentPath = './public/data/equipment.json';

let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));
let equipment = JSON.parse(fs.readFileSync(equipmentPath, 'utf8'));

console.log('🔧 Implementing rule fixes...\n');

// ============================================================================
// 1. MERGE HP TOKENS AND RESOURCE TOKENS INTO "RESOURCE CUBES"
// ============================================================================

console.log('1️⃣ Merging HP tokens and Resource tokens into Resource Cubes...');

// Update rule_1: ACTIONS
const rule1Index = rules.findIndex(r => r.id === 'rule_1');
rules[rule1Index].description = `Every turn you get 2 Action Points (AP) <b>total</b> — not per mech! You can spend these AP on any of your mechs.

<i class="fas fa-person-walking"></i> <b>MOVE (1 AP):</b> Move one of your mechs one ruler length in any direction.

<i class="fas fa-gun"></i> <b>ENGAGE (1 AP):</b> Fire one weapon from one of your mechs. Check the weapon card for its PROXY distance, place the toy device that distance from your mech (matching the direction your weapon is pointing), then fire the device. If the physical projectile hits the enemy mech, they take damage.

<i class="fas fa-wrench"></i> <b>SCAVENGE (1 AP):</b> Pick up one Resource Cube from the table that is physically touching one of your mech's base:
<br>• <b>Resource Cube:</b> Gain 1 HP immediately (add cube to your HP pool). You can scavenge your own lost HP cubes or enemy HP cubes.
<br>• <b><i class="fas fa-box"></i> Equipment Cube:</b> Randomly pick one piece from the scavenging pile. <b>Attach it immediately</b> to your mech however you want (pick up your mech, modify it, put it back). This is the <b>only way to modify your mech during the game</b>.

<i class="fas fa-rotate"></i> <b>REPOSITION (1 AP):</b> Do ONE of the following on one of your mechs:
<br>• Rotate your mech's torso to face any direction
<br>• Re-pose one limb (arm, weapon, leg) to a new angle
<br>• Stand your mech back up if it has fallen over

<i class="fas fa-lightbulb"></i> <b>SPENDING AP:</b> You can spend both AP on one mech, or split them between your mechs.

<b>Examples:</b>
<br>• 2 Solo Mechs: Mech 1 MOVE + Mech 2 MOVE (2 AP)
<br>• 2 Solo Mechs: Mech 1 MOVE + ENGAGE (2 AP on one mech)
<br>• 1 Duo Mech: MOVE + ENGAGE (2 AP)`;

// Update rule_1b: BATTLEFIELD OBJECTS
const rule1bIndex = rules.findIndex(r => r.id === 'rule_1b');
rules[rule1bIndex].description = `During Scenario Preparation, two types of objects are placed on the battlefield:

<i class="fas fa-bullseye"></i> <b>OBJECTIVES:</b>
<br>Scenario-specific markers (flags, control points, data terminals, etc.). Interact with these according to scenario rules to score Victory Points.
<br>• <b>Examples:</b> Capture flags, hold control points, destroy targets
<br>• <b>Interaction:</b> Varies by scenario (usually requires touching or staying near)
<br>• <b>VP Value:</b> Specified in scenario rules

<i class="fas fa-cube"></i> <b>RESOURCE CUBES:</b>
<br>Resource cubes placed on terrain during setup. Represent battlefield salvage — ammunition caches, spare parts, medical supplies, HP recovery.
<br>• <b>How to Get:</b> SCAVENGE action (1 AP) when physically touching your mech's base
<br>• <b>Effect:</b> Gain 1 HP immediately (add cube to your HP pool)
<br>• <b>Strategy:</b> Resource cubes let you heal beyond your starting HP, but you must reach them first
<br>• <b>Important:</b> When you take damage, place Resource Cubes at your mech's feet (1 cube per 1 DP). Anyone can scavenge them!

<i class="fas fa-box"></i> <b>EQUIPMENT CUBES:</b>
<br>Equipment cubes placed on terrain during setup. Represent advanced battlefield salvage — experimental weapons, prototype systems, rare components.
<br>• <b>How to Get:</b> SCAVENGE action (1 AP) when physically touching your mech's base
<br>• <b>Effect:</b> Randomly pick one piece from the scavenging pile (the parts not used during build phase). <b>Attach it immediately</b> to your mech however you want — pick up your mech, physically attach the part, and put it back where it was.
<br>• <b>Important:</b> This is the <b>ONLY way to modify or improve your mech during the game</b>. You cannot add equipment any other way.
<br>• <b>Strategy:</b> Equipment cubes can give you weapons, armor, or systems you didn't build with. High risk, high reward — you don't know what you'll get until you pick.

<i class="fas fa-lightbulb"></i> <b>SCAVENGING PRIORITY:</b>
<br>When you SCAVENGE, you can only pick up ONE cube touching your base:
<br>• Resource Cube (yours or enemy's) = Heal 1 HP
<br>• Equipment Cube = Random equipment from scavenging pile (attach immediately)
<br><br>If multiple cubes are touching your base, choose which one to scavenge.`;

// Update rule_4: DAMAGE & HP
const rule4Index = rules.findIndex(r => r.id === 'rule_4');
rules[rule4Index].description = `When hit, you take Damage Points (DP) shown on the weapon card.

<i class="fas fa-heart-crack"></i> <b>TAKING DAMAGE:</b>
<br>For each 1 DP, place 1 Resource Cube at your mech's feet. These become scrap — anyone can scavenge them to heal.

<i class="fas fa-bolt"></i> <b>A.T. SHIELDS:</b>
<br>If you have A.T. Shields, lose those first (they vanish — can't be scavenged). Then lose HP (place Resource Cubes).

<i class="fas fa-skull"></i> <b>DESTRUCTION:</b>
<br>When your Core reaches 0 HP, you're destroyed. Remove your mech from the table.

<i class="fas fa-cube"></i> <b>RESOURCE CUBES:</b>
<br>Resource Cubes represent your lost HP. They remain on the table at your mech's feet. Any player can scavenge them to heal 1 HP.`;

console.log('   ✅ Updated rule_1, rule_1b, rule_4 with Resource Cube terminology');

// ============================================================================
// 2. REMOVE FORCED KNOCKBACK FROM PROJECTILES
// ============================================================================

console.log('\n2️⃣ Removing forced knockback from projectiles...');

// Find and update equipment with knockback
const avalancheCannon = equipment.find(e => e.id === 'eq_19');
const repulsorCylinder = equipment.find(e => e.id === 'eq_36');

if (avalancheCannon) {
  avalancheCannon.name = 'Avalanche Cannon';
  avalancheCannon.rule = '<i class="fas fa-wind"></i> ENGAGE (1 AP): Heavy arc-fire. Load an Explosive BIG Shell (larger projectile head). Deals 2 DP on a hit. The force of impact may physically push the enemy mech back — real-world physics determines if knockback occurs.';
  console.log('   ✅ Updated Avalanche Cannon (removed forced knockback)');
}

if (repulsorCylinder) {
  repulsorCylinder.name = 'Sonic \'Repulsor\' Cylinder';
  repulsorCylinder.rule = '<i class="fas fa-water"></i> ENGAGE (1 AP): Sonic Shockwave. Load a Standard Shell. Deals 1 DP on a hit. The sonic blast may physically push the enemy mech back — real-world physics determines if knockback occurs.';
  console.log('   ✅ Updated Sonic Repulsor Cylinder (removed forced knockback)');
}

// ============================================================================
// 3. FIX OVERBOOST DRIVE
// ============================================================================

console.log('\n3️⃣ Fixing Overboost Drive...');

const overboostDrive = equipment.find(e => e.id === 'eq_7');
if (overboostDrive) {
  overboostDrive.name = 'Overboost Drive';
  overboostDrive.rule = '<i class="fas fa-rocket"></i> Sprint Boost: Once per activation, when you spend 1 AP to MOVE, you may move 1 Long Ruler instead of 1 Short Ruler. Must move straight ahead. This allows you to cover more ground with your movement actions.';
  console.log('   ✅ Updated Overboost Drive (now extends movement distance)');
}

// ============================================================================
// 4. ADD RULER DEFINITIONS
// ============================================================================

console.log('\n4️⃣ Adding ruler definitions...');

const setup1Index = rules.findIndex(r => r.id === 'setup_1');
rules[setup1Index].description = `<i class="fas fa-gamepad"></i> <b>PLAYERS CONTROL:</b> Each player controls a maximum of <b>2 Frames</b> (Cores). You get <b>2 AP per turn total</b> (not per mech!) to spend on any of your mechs.

<i class="fas fa-ruler"></i> <b>RULERS:</b>
<br>• <b>Short Ruler:</b> 15cm (6 inches)
<br>• <b>Long Ruler:</b> 30cm (12 inches)
<br>• Use any ruler or measuring tape
<br>• Always measure horizontally (flat on ground), never diagonally through air

<i class="fas fa-ruler-combined"></i> <b>FRAME OPTIONS:</b>
<br>• <b>1 Solo Mech</b> (1 Frame): 4 HP, 8 equipment slots
<br>• <b>2 Solo Mechs</b> (2 Frames): 4 HP each, 8 slots each
<br>• <b>1 Duo Mech</b> (2 Frames): 8 HP, 16 equipment slots

<i class="fas fa-building"></i> <b>PHASE 1 — TERRAIN BUILDING:</b>
<br>Players alternate placing terrain pieces from those available.
<br>• Must be <b>15cm from other terrain</b>
<br>• Must be <b>15cm from board edges</b>

<i class="fas fa-gear"></i> <b>PHASE 2 — SCAVENGING (Build Phase):</b>
<br>Set a 10-minute timer. Build your mech(s) from available parts.
<br>• <b>Veteran Option:</b> Players with existing mechs can:
<br>&nbsp;&nbsp;- Skip scavenging and use existing mech, OR
<br>&nbsp;&nbsp;- Participate in scavenging and choose at end (existing vs new)

<i class="fas fa-clipboard"></i> <b>PHASE 3 — SCENARIO PREPARATION:</b>
<br>Read the chosen scenario instructions and prepare the battlefield:
<br>• <b><i class="fas fa-bullseye"></i> Objectives:</b> Place objective markers (flags, control points, etc.) as specified by scenario
<br>• <b><i class="fas fa-cube"></i> Resource Cubes:</b> Place Resource cubes on terrain — scavenge to gain 1 HP
<br>• <b><i class="fas fa-box"></i> Equipment Cubes:</b> Place Equipment cubes on terrain — retrieve to randomly pick a piece from scavenging pile and attach it immediately to your mech (only way to modify mech during game)

<i class="fas fa-rocket"></i> <b>PHASE 4 — DEPLOYMENT:</b>
<br>• Flip coin: loser picks deployment zone first, winner deploys last
<br>• Place your mech(s) in your deployment zone

<i class="fas fa-swords"></i> <b>PHASE 5 — COMBAT:</b>
<br>• Play 4 Rounds
<br>• Alternate activations
<br>• Each player gets 2 AP per turn (spend on any mech)`;

console.log('   ✅ Added ruler definitions to setup_1');

// ============================================================================
// 5. ADD COLLISION RULES
// ============================================================================

console.log('\n5️⃣ Adding collision rules...');

const rule5Index = rules.findIndex(r => r.id === 'rule_5');
const currentRule5 = rules[rule5Index];

rules[rule5Index].description = currentRule5.description + `

<i class="fas fa-people-arrows"></i> <b>COLLISIONS & PUSHING:</b>

<br><b>Mech Collisions:</b>
<br>• Mechs cannot move through each other
<br>• If your movement would cause a collision, stop before contact
<br>• You can push adjacent mechs: as you move, you may push an adjacent enemy mech alongside you
<br>• Pushing does not cost extra AP and deals no damage
<br>• Pushed mechs move with you (up to your full movement distance)
<br>• If a pushed mech hits terrain or another mech, it stops (you continue moving)

<br><b>Moving Through Buildings:</b>
<br>• You CAN move through buildings — simply push your mech along your movement path
<br>• If buildings are in the way, push through them physically
<br>• Buildings may fall over as you move through them (real-world physics)
<br>• If a building piece falls on your mech, you take 1 DP (place 1 Resource Cube at your feet)
<br>• If a building piece falls on an enemy mech, they take 1 DP
<br>• <b>Risk vs Reward:</b> Moving through buildings is fast but dangerous — falling pieces can damage you!

<br><b>Pushing Strategy:</b>
<br>• Push enemies off ledges (they take fall damage)
<br>• Push enemies into unstable buildings (buildings may fall on them)
<br>• Push enemies away from objectives
<br>• Push enemies into your line of fire`;

console.log('   ✅ Added collision and pushing rules to rule_5');

// ============================================================================
// 6. UPDATE PHASE 3 WITH RESOURCE CUBES
// ============================================================================

console.log('\n6️⃣ Updating Phase 3 with Resource Cube terminology...');

const phase3Index = rules.findIndex(r => r.id === 'phase_3');
rules[phase3Index].description = rules[phase3Index].description
  .replace(/Resource tokens/g, 'Resource cubes')
  .replace(/Resource token/g, 'Resource cube')
  .replace(/RESOURCES:/g, 'RESOURCE CUBES:')
  .replace(/3-5 Resource tokens/g, '3-5 Resource cubes');

console.log('   ✅ Updated phase_3 with Resource Cube terminology');

// Write back
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
fs.writeFileSync(equipmentPath, JSON.stringify(equipment, null, 2));

console.log('\n✅ ALL FIXES IMPLEMENTED!\n');
console.log('📋 Summary:');
console.log('   1. Merged HP tokens and Resource tokens → Resource Cubes');
console.log('   2. Removed forced knockback (now physics-based)');
console.log('   3. Fixed Overboost Drive (extends movement distance)');
console.log('   4. Added ruler definitions (15cm/30cm)');
console.log('   5. Added collision and pushing rules');
console.log('   6. Added moving through buildings rules');
console.log('   7. Clarified equipment attachment (immediate)');
