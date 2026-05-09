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

// Update phase_1 with modular building rules
rules[phase1Index] = {
  "id": "phase_1",
  "title": "PHASE 1: TERRAIN BUILDING",
  "description": "<i class=\"fas fa-building\"></i> <b>OBJECTIVE:</b> Create a dynamic battlefield with cover, elevation, and tactical opportunities.\n\n<b>WHAT HAPPENS:</b>\n<br>Players take turns placing terrain pieces on the table to build the battlefield. This phase sets the stage for the entire match — terrain determines firing lanes, cover positions, and strategic chokepoints.\n\n<b>PROCEDURE:</b>\n<br>1. <b>Gather Terrain:</b> Collect all available terrain pieces (buildings, rubble, platforms, walls, etc.)\n<br>2. <b>Determine First Player:</b> Flip a coin or roll dice to decide who places first\n<br>3. <b>Alternate Placement:</b> Players take turns placing one terrain piece at a time\n<br>4. <b>Spacing Rules:</b>\n<br>&nbsp;&nbsp;• Each terrain piece must be <b>at least 15cm from any other terrain</b>\n<br>&nbsp;&nbsp;• Each terrain piece must be <b>at least 15cm from board edges</b>\n<br>&nbsp;&nbsp;• <b>EXCEPTION:</b> Building pieces (see below)\n<br>5. <b>Continue Until Done:</b> Keep alternating until all terrain is placed or players agree the battlefield is complete\n\n<i class=\"fas fa-cubes\"></i> <b>MODULAR BUILDINGS:</b>\n<br>Buildings are constructed from individual modular pieces. Each player places one building piece per turn. Building pieces have special placement rules:\n\n<br><b>Building Piece Placement Options:</b>\n<br>• <b>Stack:</b> Place on top of another building piece (creates multi-story structures)\n<br>• <b>Adjacent:</b> Place directly touching another building piece (expands the building horizontally)\n<br>• <b>Separate:</b> Place at least 15cm away from all other terrain (starts a new building)\n\n<i class=\"fas fa-burst\"></i> <b>BUILDING COLLAPSE:</b>\n<br>Modular buildings are unstable — they can collapse if hit by large projectiles!\n<br>• <b>When:</b> If a building piece is hit by a projectile from a <b>Big Air Cannon, Mortar, or Nuclear Bomb</b>\n<br>• <b>Effect:</b> The hit piece is destroyed and removed from the table\n<br>• <b>Chain Collapse:</b> Any building pieces that were stacked on top of the destroyed piece also fall and are removed\n<br>• <b>Mech Damage:</b> Any mech physically touching a collapsing building piece takes <b>1 DP</b> (place 1 HP token at their feet)\n<br>• <b>Strategy:</b> Tall buildings provide great cover and elevation, but are vulnerable to artillery. Build wisely!\n\n<i class=\"fas fa-lightbulb\"></i> <b>STRATEGIC CONSIDERATIONS:</b>\n<br>• <b>Cover:</b> Place terrain to create firing positions and protection from enemy fire\n<br>• <b>Elevation:</b> High ground provides tactical advantages — stack building pieces for sniper positions\n<br>• <b>Lanes:</b> Leave open firing lanes for long-range weapons, but also create close-quarters areas\n<br>• <b>Objectives:</b> Think ahead — where will scenario objectives be placed? Create interesting approaches\n<br>• <b>Mobility:</b> Consider how different leg types will navigate the terrain (wheels need flat ground, spiders can climb)\n<br>• <b>Building Risk:</b> Tall buildings are tempting targets for enemy artillery — balance height advantage vs collapse risk\n<br>• <b>Collapse Zones:</b> Don't place buildings too close to deployment zones — collapsing buildings can damage your own mechs\n\n<i class=\"fas fa-triangle-exclamation\"></i> <b>IMPORTANT:</b>\n<br>• The 15cm spacing rule prevents terrain from being too clustered (except for building pieces, which can be adjacent or stacked)\n<br>• Building pieces can only be destroyed by <b>large projectiles</b> (Big Air Cannon, Mortar, Nuclear Bomb) — small weapons don't damage terrain\n<br>• When a building collapses, remove all affected pieces immediately and resolve mech damage\n\n<i class=\"fas fa-clock\"></i> <b>TIME:</b> This phase typically takes 5-10 minutes depending on the amount of terrain available.",
  "medium": "• Players alternate placing terrain pieces.\n<br>• 15cm spacing from other terrain and board edges.\n<br>• <b>Buildings:</b> Modular pieces can stack or be adjacent.\n<br>• <b>Collapse:</b> Big projectiles destroy building pieces, causing chain collapse (1 DP to touching mechs).\n<br>• Think ahead: firing lanes, objectives, mobility, collapse risk.",
  "quick": "<b>Goal:</b> Build battlefield<br><b>Rule:</b> 15cm spacing<br><b>Buildings:</b> Stack/adjacent allowed<br><b>Collapse:</b> Big projectiles destroy buildings (1 DP)"
};

// Write back
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

console.log('✅ Updated Phase 1: Terrain Building with modular building rules!');
console.log('   - Added MODULAR BUILDINGS section');
console.log('   - Added BUILDING COLLAPSE mechanics');
console.log('   - Updated strategic considerations');
console.log('   - Updated medium and quick summaries');
