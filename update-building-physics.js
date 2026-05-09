const fs = require('fs');

// Read rules.json
const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

// Find phase_1
const phase1Index = rules.findIndex(r => r.id === 'phase_1');

if (phase1Index === -1) {
  console.error('❌ Could not find phase_1 in rules.json');
  process.exit(1);
}

// Update phase_1 with physics-based building collapse
rules[phase1Index] = {
  "id": "phase_1",
  "title": "PHASE 1: TERRAIN BUILDING",
  "description": "<i class=\"fas fa-building\"></i> <b>OBJECTIVE:</b> Create a dynamic battlefield with cover, elevation, and tactical opportunities.\n\n<b>WHAT HAPPENS:</b>\n<br>Players take turns placing terrain pieces on the table to build the battlefield. This phase sets the stage for the entire match — terrain determines firing lanes, cover positions, and strategic chokepoints.\n\n<b>PROCEDURE:</b>\n<br>1. <b>Gather Terrain:</b> Collect all available terrain pieces (buildings, rubble, platforms, walls, etc.)\n<br>2. <b>Determine First Player:</b> Flip a coin or roll dice to decide who places first\n<br>3. <b>Alternate Placement:</b> Players take turns placing one terrain piece at a time\n<br>4. <b>Spacing Rules:</b>\n<br>&nbsp;&nbsp;• Each terrain piece must be <b>at least 15cm from any other terrain</b>\n<br>&nbsp;&nbsp;• Each terrain piece must be <b>at least 15cm from board edges</b>\n<br>&nbsp;&nbsp;• <b>EXCEPTION:</b> Building pieces (see below)\n<br>5. <b>Continue Until Done:</b> Keep alternating until all terrain is placed or players agree the battlefield is complete\n\n<i class=\"fas fa-cubes\"></i> <b>MODULAR BUILDINGS:</b>\n<br>Buildings are constructed from individual modular pieces. Each player places one building piece per turn. Building pieces have special placement rules:\n\n<br><b>Building Piece Placement Options:</b>\n<br>• <b>Stack:</b> Place on top of another building piece (creates multi-story structures)\n<br>• <b>Adjacent:</b> Place directly touching another building piece (expands the building horizontally)\n<br>• <b>Separate:</b> Place at least 15cm away from all other terrain (starts a new building)\n\n<i class=\"fas fa-burst\"></i> <b>BUILDING COLLAPSE (PHYSICS-BASED):</b>\n<br>Buildings are physical objects — they can fall over or collapse if destabilized!\n\n<br><b>How Collapse Works:</b>\n<br>• Buildings are <b>NOT destroyed by projectiles</b> — they're just terrain\n<br>• However, projectiles can <b>physically knock over</b> unstable building pieces\n<br>• If a projectile hits a building piece hard enough to knock it over, it falls\n<br>• <b>Real-world physics determines collapse</b> — if it falls in real life, it falls in the game\n\n<br><b>Collapse Damage:</b>\n<br>• If a building piece <b>physically falls on a mech</b>, that mech takes <b>1 DP</b>\n<br>• Place 1 HP token at the mech's feet\n<br>• Applies to any mech the falling piece touches (friendly or enemy)\n<br>• <b>Chain Collapse:</b> If a building piece falls and knocks over other pieces, each falling piece deals 1 DP to any mech it touches\n\n<br><b>After Collapse:</b>\n<br>• Leave fallen building pieces where they land (they become ground-level terrain)\n<br>• Mechs can climb over or move around fallen pieces\n<br>• Fallen pieces can be used as cover\n\n<i class=\"fas fa-lightbulb\"></i> <b>STRATEGIC CONSIDERATIONS:</b>\n<br>• <b>Cover:</b> Place terrain to create firing positions and protection from enemy fire\n<br>• <b>Elevation:</b> High ground provides tactical advantages — stack building pieces for sniper positions\n<br>• <b>Stability:</b> Tall, narrow buildings are easier to knock over — build wide bases for stability\n<br>• <b>Lanes:</b> Leave open firing lanes for long-range weapons, but also create close-quarters areas\n<br>• <b>Objectives:</b> Think ahead — where will scenario objectives be placed? Create interesting approaches\n<br>• <b>Mobility:</b> Consider how different leg types will navigate the terrain (wheels need flat ground, spiders can climb)\n<br>• <b>Collapse Risk:</b> Don't build tall buildings near deployment zones — they might fall on your own mechs\n<br>• <b>Knockdown Tactics:</b> Big projectiles (Big Air Cannon, Mortar) can knock over buildings — use this to your advantage\n\n<i class=\"fas fa-triangle-exclamation\"></i> <b>IMPORTANT:</b>\n<br>• The 15cm spacing rule prevents terrain from being too clustered (except for building pieces, which can be adjacent or stacked)\n<br>• Building pieces are <b>NOT destroyed</b> by projectiles — they're just knocked over by physics\n<br>• If a building piece falls, leave it where it lands (becomes ground-level terrain)\n<br>• Falling building pieces deal <b>1 DP to any mech they physically touch</b>\n<br>• Be careful when building tall structures — they're unstable and can fall on your own mechs!\n\n<i class=\"fas fa-clock\"></i> <b>TIME:</b> This phase typically takes 5-10 minutes depending on the amount of terrain available.",
  "medium": "• Players alternate placing terrain pieces.\n<br>• 15cm spacing from other terrain and board edges.\n<br>• <b>Buildings:</b> Modular pieces can stack or be adjacent.\n<br>• <b>Collapse:</b> Physics-based — projectiles can knock over buildings. Falling pieces deal 1 DP to mechs they touch.\n<br>• Think ahead: firing lanes, objectives, mobility, stability.",
  "quick": "<b>Goal:</b> Build battlefield<br><b>Rule:</b> 15cm spacing<br><b>Buildings:</b> Stack/adjacent allowed<br><b>Collapse:</b> Physics-based (1 DP if falls on mech)"
};

// Write back
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

console.log('✅ Updated Phase 1 with physics-based building collapse!');
console.log('   - Buildings are NOT destroyed by projectiles');
console.log('   - Projectiles can physically knock over buildings');
console.log('   - Real-world physics determines collapse');
console.log('   - Falling pieces deal 1 DP to mechs they touch');
console.log('   - Fallen pieces remain as ground-level terrain');
