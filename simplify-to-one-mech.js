const fs = require('fs');

const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

const updateRule = (id, newDescription) => {
  const index = rules.findIndex(r => r.id === id);
  if (index !== -1) {
    rules[index].description = newDescription;
    console.log(`✓ Updated ${id}`);
    return true;
  }
  return false;
};

console.log('Simplifying game to 1 Frame per player...\n');

// LTP_1: Learn to Play
updateRule('ltp_1', `ZERO ASSEMBLY is a physics wargame where you build a modular mech and fight using real toy weapons. No dice. No math. If your shot hits, it hits.

The game unfolds in five phases. First, you build the battlefield by placing terrain. Then you have 10 minutes to assemble your mech from 3D-printed parts. After setting up scenario objectives and resources, you deploy your forces and fight for 4 rounds.

<hr>

<i class="fas fa-gamepad"></i> <b>THE FIVE PHASES</b>

<b>Phase 1 — Terrain Building:</b> Players alternate placing terrain pieces with 15cm spacing. Buildings can stack or connect to create multi-story structures.

<b>Phase 2 — Scavenging:</b> Set a 10-minute timer and build your mech from available parts. Each player builds 1 Frame (1 Core + 1 Top). Choose your colors carefully — 1-3 colors gives you 1 Perk, but 4+ colors means no perks.

<b>Phase 3 — Scenario Prep:</b> Place objective markers, Resource Cubes (scavenge for HP), and Equipment Cubes (scavenge to modify your mech mid-game).

<b>Phase 4 — Deployment:</b> Flip a coin. Loser picks their deployment zone first, winner deploys last.

<b>Phase 5 — Combat:</b> Play 4 rounds, alternating turns. Each turn you get 2 Action Points.

<hr>

<i class="fas fa-bolt"></i> <b>YOUR TURN (2 AP)</b>

You get 2 Action Points per turn. Spend them on these actions:

<b>MOVE (1 AP):</b> Advance one ruler length. Legs and Wheels use Short Ruler (15cm). Treads use Long Ruler (30cm). You can mix leg types — if you have wheels AND legs, choose which to use each move.

<b>ENGAGE (1 AP):</b> Fire a weapon. Place the shooting device 1 Short Ruler from your mech (or 1 Long Ruler for mortars). Fire the projectile. If it physically hits the enemy mech, that's a hit.

<b>SCAVENGE (1 AP):</b> Pick up HP tokens, Resource Cubes, or Equipment Cubes touching your mech's base. HP tokens restore health. Equipment Cubes let you grab a random part from the scrap pile and attach it immediately.

<b>REPOSITION (1 AP):</b> Rotate your mech, adjust its pose, or stand it up if it fell over.

<hr>

<i class="fas fa-bullseye"></i> <b>SHOOTING & DAMAGE</b>

When you ENGAGE, place your shooting device (crossbow, cannon, or mortar) at the correct proxy distance from your mech. Fire the projectile. If it physically hits the enemy mech, they take damage.

Damage is measured in Damage Points (DP). When hit, place HP tokens equal to the weapon's DP at your mech's feet. These tokens represent lost health — anyone can scavenge them. When your Core runs out of HP tokens, it's destroyed and you lose.

<hr>

<i class="fas fa-trophy"></i> <b>WINNING THE GAME</b>

The game ends after 4 rounds or when one player's Core is destroyed. Count Victory Points from scenario objectives. Most VP wins. Destroying the enemy Core is worth instant victory in most scenarios.

<hr>

<i class="fas fa-ruler"></i> <b>KEY MEASUREMENTS</b>

<b>Short Ruler:</b> 15cm (6 inches) — Used for most movement and shooting
<br><b>Long Ruler:</b> 30cm (12 inches) — Used for Treads and mortar weapons
<br><b>Always measure horizontally</b> — Never diagonally through the air

<hr>

<i class="fas fa-lightbulb"></i> <b>QUICK TIPS</b>

Build your mech in 2-3 colors maximum to unlock your Pilot Perk. Each Core has 4 HP and 8 equipment slots. Scavenge HP tokens from fallen enemies to heal. Equipment Cubes are the only way to modify your mech during combat. Buildings can collapse and deal 1 DP if they fall on mechs.

That's it. Build, deploy, and fight. Physics does the rest.`);

// SETUP_1: Game Setup
updateRule('setup_1', `Before you start playing, you need to understand the basic structure of the game.

<hr>

<i class="fas fa-robot"></i> <b>WHAT YOU BUILD</b>

Each player builds exactly <b>1 Frame</b> (1 Core + 1 Top). That's your mech. One Core with 4 HP and 8 equipment slots.

You get <b>2 Action Points per turn</b> to spend on your mech's actions.

<hr>

<i class="fas fa-ruler"></i> <b>RULERS & MEASUREMENTS</b>

You need two rulers for the game:

<b>Short Ruler:</b> 15cm (6 inches) — Most movement and shooting
<br><b>Long Ruler:</b> 30cm (12 inches) — Treads and mortar weapons

Always measure horizontally along the ground. Never measure diagonally through the air. If terrain blocks your path, you must go around it or over it.

<hr>

<i class="fas fa-building"></i> <b>PHASE 1: TERRAIN BUILDING</b>

Players alternate placing terrain pieces from the available pool. Each piece must be at least 15cm from other terrain and 15cm from board edges.

<b>Exception:</b> Building pieces can stack on top of each other or be placed adjacent (touching). This creates multi-story structures that can collapse if hit by projectiles.

Continue until all terrain is placed or both players agree the battlefield is complete.

<hr>

<i class="fas fa-gear"></i> <b>PHASE 2: SCAVENGING (BUILD PHASE)</b>

Set a 10-minute timer. Build your mech from the shared pool of 3D-printed parts. You need exactly 1 Core and 1 Top. Only Legs, Treads, or Wheels can touch the ground. Your mech must stand on its own when time expires.

<b>Veteran Option:</b> If you already have a mech from a previous game, you can skip scavenging and use your existing mech, OR participate in scavenging and choose at the end (existing vs new).

<hr>

<i class="fas fa-clipboard"></i> <b>PHASE 3: SCENARIO PREPARATION</b>

Read your chosen scenario and prepare the battlefield:

<b>Objectives:</b> Place objective markers (flags, control points) as specified by the scenario.

<b>Resource Cubes:</b> Place Resource Cubes on terrain. Scavenge them to gain 1 HP.

<b>Equipment Cubes:</b> Place Equipment Cubes on terrain. Scavenge them to randomly pick a part from the scrap pile and attach it immediately to your mech. This is the only way to modify your mech during combat.

<hr>

<i class="fas fa-rocket"></i> <b>PHASE 4: DEPLOYMENT</b>

Flip a coin. The loser picks their deployment zone first. The winner deploys last. Place your mech in your deployment zone.

<hr>

<i class="fas fa-swords"></i> <b>PHASE 5: COMBAT</b>

Play 4 rounds. Players alternate turns. Each turn you get 2 AP to spend on your mech's actions. The game ends after Round 4 or when one player's Core is destroyed.`);

// PHASE_2: Scavenging
updateRule('phase_2', `This is the heart of ZERO ASSEMBLY. You have 10 minutes to build your mech from a shared pool of 3D-printed parts. Every mech is unique. Every mech is temporary. This is field assembly under pressure.

<hr>

<i class="fas fa-clock"></i> <b>THE 10-MINUTE BUILD</b>

Set a timer for 10 minutes and start building. Grab parts from the shared pool and assemble your mech. When the timer expires, stop immediately. Your mech must stand on its own without support. If it falls over, you have 30 seconds to fix it.

<hr>

<i class="fas fa-robot"></i> <b>WHAT YOU BUILD</b>

Each player builds exactly <b>1 Frame</b>. One Core, one Top, and whatever equipment you can attach in 10 minutes.

Your mech starts with 4 HP and has 8 equipment slots. Fill those slots with weapons, armor, legs, and utility systems.

<hr>

<i class="fas fa-wrench"></i> <b>BUILD REQUIREMENTS</b>

Your mech must have:

<b>Exactly 1 Core:</b> This is your HP pool. Each Core starts with 4 HP tokens.

<b>Exactly 1 Top:</b> This seals the Core. Without a Top, the Core is invalid.

<b>Valid Feet:</b> Only Legs, Treads, or Wheels can touch the ground. No floating mechs. No mechs standing on weapon mounts or armor plates.

<b>Hybrid Builds:</b> You can install multiple leg types on the same mech (e.g., 2 wheels + 2 legs, or 3 spider legs + 2 treads). During movement, choose which leg type to use based on which requirements you meet. See MOVEMENT & LEG TYPES for details.

Your mech must stand on its own when the timer ends. No leaning against terrain or other mechs.

<hr>

<i class="fas fa-palette"></i> <b>COLOR SYNERGY</b>

Count the number of different colors on your mech at the end of the build phase:

<b>1-3 colors (SYNCHED):</b> Your mech is color-coordinated. You can use 1 Pilot Perk during the match. Choose your perk from the available perk cards.

<b>4+ colors (UNSYNCHED):</b> Your mech is too cobbled together. No perks available. The mismatch of parts creates interference.

Color count is locked at the end of this phase. Scavenging HP tokens or Equipment during combat doesn't change your color count.

<hr>

<i class="fas fa-user-check"></i> <b>VETERAN OPTION</b>

If you already have a mech from a previous game, you have two choices:

<b>Option 1:</b> Skip scavenging entirely and use your existing mech. Place it aside during the build phase.

<b>Option 2:</b> Participate in scavenging and build a new mech. At the end of the 10 minutes, choose which mech to use (existing or new). The unchosen mech goes back into the scrap pile.

This option rewards players who build durable, well-designed mechs that survive multiple battles.

<hr>

<i class="fas fa-lightbulb"></i> <b>BUILD STRATEGY</b>

<b>Color Planning:</b> Stick to 2-3 colors maximum to unlock your Perk. Plan your palette before grabbing parts.

<b>Leg Types:</b> Mix leg types for flexibility. Wheels are fast on flat ground. Legs can climb. Treads cover long distances.

<b>Stability:</b> Build a wide base. Tall, narrow mechs fall over easily when hit.

<b>Equipment Slots:</b> Each Core has 8 equipment slots. Fill them with weapons, armor, and utility systems. More equipment = more options in combat.

<b>Weight Distribution:</b> Balance your mech. Front-heavy mechs tip forward. Back-heavy mechs tip backward.

<hr>

<i class="fas fa-triangle-exclamation"></i> <b>IMPORTANT NOTES</b>

The 10-minute timer is strict. When it expires, stop building immediately. No "just one more piece."

Your mech must stand on its own. If it falls over during the stability check, you have 30 seconds to fix it. If it still can't stand, you must remove parts until it's stable.

Scavenging is competitive. If someone grabs the part you wanted, adapt. That's the nature of field assembly.

Equipment attached during this phase is permanent for the match (unless destroyed). The only way to modify your mech during combat is by scavenging Equipment Cubes.`);

// RULE_1: Actions
updateRule('rule_1', `Every turn you get 2 Action Points (AP). You can spend these AP on four different actions.

<hr>

<i class="fas fa-bolt"></i> <b>THE FOUR ACTIONS</b>

<b><i class="fas fa-person-walking"></i> MOVE (1 AP):</b> Move your mech one ruler length in any direction. The distance depends on your leg type. Legs and Wheels use the Short Ruler (15cm). Treads use the Long Ruler (30cm). If you have multiple leg types on the same mech, choose which to use each time you move.

<b><i class="fas fa-gun"></i> ENGAGE (1 AP):</b> Fire one weapon from your mech. Check the weapon's equipment card for its PROXY distance. Place the toy shooting device that distance from your mech (matching the direction your weapon is pointing), then fire. If the projectile physically hits the enemy mech, they take damage equal to the weapon's DP value.

<b><i class="fas fa-wrench"></i> SCAVENGE (1 AP):</b> Pick up all HP tokens, Resource Cubes, or Equipment Cubes touching your mech's base. HP tokens go back into your Core's HP pool (healing). Resource Cubes give you 1 HP. Equipment Cubes let you grab a random part from the scrap pile and attach it immediately to your mech.

<b><i class="fas fa-rotate"></i> REPOSITION (1 AP):</b> Rotate your mech to face a different direction, adjust its pose (bend joints, change stance), or stand it up if it fell over from damage or knockback.

<hr>

<i class="fas fa-lightbulb"></i> <b>ACTION ECONOMY</b>

You can take the same action multiple times in one turn. MOVE twice to cover more ground. ENGAGE twice if you have multiple weapons. SCAVENGE and then MOVE to grab resources and retreat.

The 2 AP limit forces tactical decisions. Do you advance and shoot? Shoot twice for maximum damage? Scavenge and reposition? Every turn is a choice.`);

// RULE_2: Turn Order (remove multi-mech complexity)
updateRule('rule_2', `Players alternate taking turns throughout each round. The game lasts 4 rounds total. On your turn, you get 2 Action Points to spend on your mech's actions.

<hr>

<i class="fas fa-repeat"></i> <b>TURN STRUCTURE</b>

Each round proceeds in alternating turns. You spend your 2 AP, then your opponent spends their 2 AP. This continues until both players have taken their turns. Then the round ends and a new round begins.

The player who went first in Round 1 goes second in Round 2. Turn order alternates each round to keep things fair.

<hr>

<i class="fas fa-clock"></i> <b>GAME LENGTH</b>

The game lasts exactly 4 rounds. After Round 4 ends, count Victory Points. Most VP wins.

If one player's Core is destroyed before Round 4 ends, the game ends immediately. The surviving player wins.`);

// RULE_7: Pilot Perks (remove multi-mech references)
updateRule('rule_7', `Pilot Perks are powerful once-per-match abilities. If your mech is SYNCHED (1-3 colors), you can use 1 Perk during the match.

<hr>

<i class="fas fa-palette"></i> <b>COLOR SYNERGY</b>

Count the number of different colors on your mech at the end of Phase 2 (Scavenging):

<b>1-3 colors (SYNCHED):</b> You can use 1 Pilot Perk during the match. Choose your perk from the available perk cards.

<b>4+ colors (UNSYNCHED):</b> No perks available. Your mech is too cobbled together.

Color count is locked after Phase 2. Scavenging HP tokens or Equipment during combat doesn't change your color count.

<hr>

<i class="fas fa-cards"></i> <b>CHOOSING YOUR PERK</b>

At the start of the game (after Phase 2), if you're SYNCHED, choose 1 Perk card from the available perks. Place it face-up near your mech.

You can use this perk once during the match. When you use it, flip the card face-down to track that it's been used.

<hr>

<i class="fas fa-bolt"></i> <b>USING PERKS</b>

Perks are activated during your turn. Declare that you're using your perk, apply its effect, then flip the card face-down.

Perks do not cost AP. They're free actions that enhance your turn.

<hr>

<i class="fas fa-lightbulb"></i> <b>PERK STRATEGY</b>

<b>Save for Key Moments:</b> Perks are once per match. Use them when they'll have maximum impact.

<b>Offensive Perks:</b> Use when you have a clear shot at destroying the enemy Core.

<b>Defensive Perks:</b> Use when you're about to take lethal damage.

<b>Mobility Perks:</b> Use to reach objectives or escape danger.`);

// RULE_8: Build Rules (simplify)
updateRule('rule_8', `Every mech must follow basic build rules. These ensure mechs are legal and functional.

<hr>

<i class="fas fa-gear"></i> <b>REQUIRED COMPONENTS</b>

Every mech must have:

<b>Exactly 1 Core:</b> This is your HP pool. Each Core starts with 4 HP.

<b>Exactly 1 Top:</b> This seals the Core. Without a Top, the Core is invalid.

<b>Valid Feet:</b> Only Legs, Treads, or Wheels can touch the ground. No floating mechs. No mechs standing on weapon mounts, armor plates, or other non-foot parts.

<hr>

<i class="fas fa-wrench"></i> <b>HYBRID BUILDS</b>

You can install multiple leg types on the same mech. For example: 2 wheels + 2 biped legs, or 3 spider legs + 2 treads.

During movement, choose which leg type to use based on which requirements you meet. See MOVEMENT & LEG TYPES for qualification requirements.

Hybrid builds provide tactical flexibility but are harder to build in 10 minutes.

<hr>

<i class="fas fa-balance-scale"></i> <b>STABILITY REQUIREMENT</b>

Your mech must stand on its own when the 10-minute timer ends. No leaning against terrain or other mechs. No using tape or glue to hold it together.

If your mech falls over during the stability check, you have 30 seconds to fix it. If it still can't stand, you must remove parts until it's stable.

<hr>

<i class="fas fa-lightbulb"></i> <b>BUILD TIPS</b>

<b>Wide Base:</b> Build a wide, stable base. Narrow mechs fall over easily.

<b>Low Center of Gravity:</b> Keep heavy parts low. Top-heavy mechs tip over.

<b>Test Stability:</b> During the build phase, test your mech's stability. Can it stand after being bumped?

<b>Equipment Slots:</b> Each Core has 8 equipment slots. Fill them with weapons, armor, and utility systems.

<b>Color Planning:</b> Stick to 2-3 colors maximum to unlock your Pilot Perk.`);

console.log('\n✅ Simplified to 1 Frame per player!');
console.log('   - Removed all multi-mech options');
console.log('   - Removed Duo/Trio mech concepts');
console.log('   - Simplified all AP descriptions');
console.log('   - Updated 8 chapters');

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved!\n');
