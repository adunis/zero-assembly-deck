const fs = require('fs');

// Load rules
const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

// Helper function to find and update a rule
const updateRule = (id, newDescription) => {
  const index = rules.findIndex(r => r.id === id);
  if (index !== -1) {
    rules[index].description = newDescription;
    console.log(`✓ Updated ${id}`);
    return true;
  }
  console.log(`✗ Not found: ${id}`);
  return false;
};

console.log('Starting comprehensive rules rewrite...\n');

// RULE_1: Actions
updateRule('rule_1', `Every turn you get 2 Action Points (AP) total — not per mech. You can spend these AP on any of your mechs in any combination. Want to move one mech twice? Go ahead. Want to fire two different mechs? That works too.

<hr>

<i class="fas fa-bolt"></i> <b>THE FOUR ACTIONS</b>

<b><i class="fas fa-person-walking"></i> MOVE (1 AP):</b> Move one of your mechs one ruler length in any direction. The distance depends on your leg type. Legs and Wheels use the Short Ruler (15cm). Treads use the Long Ruler (30cm). If you have multiple leg types on the same mech, choose which to use each time you move.

<b><i class="fas fa-gun"></i> ENGAGE (1 AP):</b> Fire one weapon from one of your mechs. Check the weapon's equipment card for its PROXY distance. Place the toy shooting device that distance from your mech (matching the direction your weapon is pointing), then fire. If the projectile physically hits the enemy mech, they take damage equal to the weapon's DP value.

<b><i class="fas fa-wrench"></i> SCAVENGE (1 AP):</b> Pick up all HP tokens, Resource Cubes, or Equipment Cubes touching your mech's base. HP tokens go back into your Core's HP pool (healing). Resource Cubes give you 1 HP. Equipment Cubes let you grab a random part from the scrap pile and attach it immediately to your mech.

<b><i class="fas fa-rotate"></i> REPOSITION (1 AP):</b> Rotate your mech to face a different direction, adjust its pose (bend joints, change stance), or stand it up if it fell over from damage or knockback.

<hr>

<i class="fas fa-lightbulb"></i> <b>ACTION ECONOMY</b>

You can take the same action multiple times in one turn. MOVE twice to cover more ground. ENGAGE twice if you have multiple weapons. SCAVENGE and then MOVE to grab resources and retreat.

The 2 AP limit forces tactical decisions. Do you advance and shoot? Shoot twice for maximum damage? Scavenge and reposition? Every turn is a choice.

<hr>

<i class="fas fa-robot"></i> <b>MULTI-MECH MANAGEMENT</b>

If you control 2 mechs, you still only get 2 AP per turn. You can spend both AP on one mech (leaving the other inactive), or split them (1 AP on each mech). This creates interesting tactical decisions:

Focus fire with one mech while the other holds position. Move both mechs to advance your line. Have one mech scavenge while the other provides covering fire.

The flexibility is yours, but the 2 AP limit keeps the game fast and decisive.`);

// RULE_1B: Battlefield Objects  
updateRule('rule_1b', `The battlefield is full of objects beyond just mechs. Understanding how to interact with terrain, resources, and equipment is crucial for victory.

<hr>

<i class="fas fa-cube"></i> <b>HP TOKENS (RED/ORANGE CUBES)</b>

HP tokens represent lost health. When a mech takes damage, place HP tokens equal to the damage at the mech's feet. These tokens are no longer part of the mech's HP pool — they're on the ground, vulnerable.

Anyone can scavenge HP tokens, including your opponent. If you scavenge your own HP tokens, they go back into your Core's HP pool (healing). If your opponent scavenges them, they're gone forever.

This creates a tactical layer: damaged mechs leak HP tokens that must be recovered or denied to the enemy.

<hr>

<i class="fas fa-cubes"></i> <b>RESOURCE CUBES (PURPLE/CYAN)</b>

Resource Cubes are placed on terrain during Phase 3: Scenario Preparation. They represent scavengable supplies on the battlefield.

When you scavenge a Resource Cube, you gain 1 HP immediately. Add 1 HP token to your Core's HP pool. Resource Cubes are consumed when scavenged — remove them from the battlefield.

Resource Cubes create tactical objectives beyond combat. Controlling resource-rich areas of the map can turn the tide of battle.

<hr>

<i class="fas fa-box"></i> <b>EQUIPMENT CUBES (WHITE/GRAY)</b>

Equipment Cubes represent scavengable gear on the battlefield. They're placed during Phase 3: Scenario Preparation.

When you scavenge an Equipment Cube, immediately pick a random part from the scrap pile (close your eyes or have your opponent pick for you). Attach it to your mech right now — physically pick up your mech, add the part, and place it back where it was.

This is the only way to modify your mech during combat. Equipment Cubes are consumed when scavenged — remove them from the battlefield.

Equipment Cubes reward aggressive play. The mech that controls the center of the board gets first pick of upgrades.

<hr>

<i class="fas fa-flag"></i> <b>OBJECTIVE MARKERS (YELLOW/GOLD)</b>

Objective Markers are placed during Phase 3 based on your chosen scenario. They represent control points, extraction zones, or targets.

Objective Markers are not scavenged — they remain on the battlefield. Instead, mechs interact with them based on scenario rules. Common interactions:

<b>Control:</b> A mech within 5cm of an objective "controls" it. Earn VP for controlling objectives at the end of each round.

<b>Extraction:</b> A mech touching an objective can extract it (costs 1 AP). Carry it back to your deployment zone for VP.

<b>Destruction:</b> Some objectives can be destroyed by shooting them. Treat them as having 2 HP.

Check your scenario rules for specific objective mechanics.

<hr>

<i class="fas fa-triangle-exclamation"></i> <b>HAZARD CUBES (BLACK/DARK RED)</b>

Hazard Cubes mark dangerous terrain. They're optional and used in advanced scenarios.

When a mech moves through or ends its turn touching a Hazard Cube, it takes 1 DP immediately. Place 1 HP token at the mech's feet.

Hazard Cubes represent minefields, radiation zones, unstable ground, or other environmental dangers. They create no-go zones that force tactical routing.

<hr>

<i class="fas fa-building"></i> <b>TERRAIN & BUILDINGS</b>

Terrain pieces (buildings, walls, platforms, rubble) provide cover and elevation. Mechs can climb on terrain, hide behind it, or knock it over.

Buildings are modular and can collapse. If a projectile hits a building piece hard enough to knock it over, it falls. If a falling building piece touches a mech, that mech takes 1 DP.

Terrain is not scavenged or destroyed — it's permanent (unless it falls over). Use it tactically for cover, elevation, and line-of-sight blocking.

<hr>

<i class="fas fa-lightbulb"></i> <b>SCAVENGING PRIORITY</b>

When you SCAVENGE (1 AP), you pick up everything touching your mech's base in this order:

1. HP tokens (go back into your Core's HP pool)
2. Resource Cubes (gain 1 HP, remove cube)
3. Equipment Cubes (attach random part, remove cube)

You get all of them in one SCAVENGE action. Position your mech to maximize what you can grab in one action.`);

// RULE_2: Turn Order (already attempted, let me try again with proper format)
updateRule('rule_2', `Players alternate taking turns throughout each round. The game lasts 4 rounds total. On your turn, you get 2 Action Points to spend across all your mechs.

<hr>

<i class="fas fa-repeat"></i> <b>TURN STRUCTURE</b>

Each round proceeds in alternating turns. You spend your 2 AP, then your opponent spends their 2 AP. This continues until both players have activated all their mechs. Then the round ends and a new round begins.

The player who went first in Round 1 goes second in Round 2. Turn order alternates each round to keep things fair.

<hr>

<i class="fas fa-robot"></i> <b>FORCE COMPOSITION: 1 MECH VS 2 MECHS</b>

One of the biggest strategic decisions in ZERO ASSEMBLY is whether to build one powerful mech or two smaller mechs. Each approach has distinct advantages.

<b>1 Solo Mech (1 Frame):</b> All your equipment on one platform means concentrated firepower. You can bring everything to bear on a single target. It's simpler to manage and easier to build in 10 minutes. The downside? If it dies, you're out. And it can only be in one place at a time.

<b>2 Solo Mechs (2 Frames):</b> Redundancy is the name of the game. Losing one mech doesn't end your match. You get board control — two mechs can hold two objectives, flank enemies, or cover more ground. The trade-off is split firepower (you still only get 2 AP total), and each mech has only 4 HP, so they die faster. Building two mechs in 10 minutes is also more challenging.

<b>1 Duo Mech (2 Frames connected):</b> Two Cores physically connected into one giant mech. You get 8 HP total and 16 equipment slots — a walking fortress. The downside is it's still a single target. If it goes down, you lose both Cores at once. And like a Solo Mech, it can only be in one place.

<hr>

<i class="fas fa-lightbulb"></i> <b>WHICH TO CHOOSE?</b>

<b>Build 1 Solo Mech if:</b> You want simple, concentrated firepower. You're new to the game. You want to focus on one powerful unit.

<b>Build 2 Solo Mechs if:</b> You want board control and redundancy. The scenario rewards holding multiple objectives. You're comfortable managing multiple units.

<b>Build 1 Duo Mech if:</b> You want maximum durability and firepower. You're facing a single powerful enemy. You want to dominate one area of the board.`);

console.log('\n✅ Batch 1 complete (rule_1, rule_1b, rule_2)');
console.log('Continuing with remaining rules...\n');

// Save progress
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved progress!\n');
