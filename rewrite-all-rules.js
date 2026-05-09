const fs = require('fs');

// Read current rules
const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

// Find and rewrite each chapter
rules = rules.map(rule => {
  // Skip lore and intro_3d (already good)
  if (['lore_1', 'lore_2', 'lore_3', 'lore_4', 'lore_5', 'intro_3d'].includes(rule.id)) {
    return rule;
  }

  // Rewrite based on ID
  switch(rule.id) {
    case 'ltp_1':
      return {
        ...rule,
        description: `ZERO ASSEMBLY is a physics wargame where you build modular mechs and fight using real toy weapons. No dice. No math. If your shot hits, it hits.

The game unfolds in five phases. First, you build the battlefield by placing terrain. Then you have 10 minutes to assemble your mech from 3D-printed parts. After setting up scenario objectives and resources, you deploy your forces and fight for 4 rounds.

<hr>

<i class="fas fa-gamepad"></i> <b>THE FIVE PHASES</b>

<b>Phase 1 — Terrain Building:</b> Players alternate placing terrain pieces with 15cm spacing. Buildings can stack or connect to create multi-story structures.

<b>Phase 2 — Scavenging:</b> Set a 10-minute timer and build your mech(s) from available parts. Each player controls up to 2 Frames (Cores). Choose your colors carefully — 1-3 colors gives you 1 Perk, but 4+ colors means no perks.

<b>Phase 3 — Scenario Prep:</b> Place objective markers, Resource Cubes (scavenge for HP), and Equipment Cubes (scavenge to modify your mech mid-game).

<b>Phase 4 — Deployment:</b> Flip a coin. Loser picks their deployment zone first, winner deploys last.

<b>Phase 5 — Combat:</b> Play 4 rounds, alternating turns. Each turn you get 2 Action Points total to spend across all your mechs.

<hr>

<i class="fas fa-bolt"></i> <b>YOUR TURN (2 AP TOTAL)</b>

You get 2 Action Points per turn. Spend them on any of your mechs:

<b>MOVE (1 AP):</b> Advance one ruler length. Legs and Wheels use Short Ruler (15cm). Treads use Long Ruler (30cm). You can mix leg types — if you have wheels AND legs, choose which to use each move.

<b>ENGAGE (1 AP):</b> Fire a weapon. Place the shooting device 1 Short Ruler from your mech (or 1 Long Ruler for mortars). Fire the projectile. If it physically hits the enemy mech, that's a hit.

<b>SCAVENGE (1 AP):</b> Pick up HP tokens, Resource Cubes, or Equipment Cubes touching your mech's base. HP tokens restore health. Equipment Cubes let you grab a random part from the scrap pile and attach it immediately.

<b>REPOSITION (1 AP):</b> Rotate your mech, adjust its pose, or stand it up if it fell over.

<hr>

<i class="fas fa-bullseye"></i> <b>SHOOTING & DAMAGE</b>

When you ENGAGE, place your shooting device (crossbow, cannon, or mortar) at the correct proxy distance from your mech. Fire the projectile. If it physically hits the enemy mech, they take damage.

Damage is measured in Damage Points (DP). When hit, place HP tokens equal to the weapon's DP at your mech's feet. These tokens represent lost health — anyone can scavenge them. When your Core runs out of HP tokens, it's destroyed.

<hr>

<i class="fas fa-trophy"></i> <b>WINNING THE GAME</b>

The game ends after 4 rounds or when one player loses all their Cores. Count Victory Points from scenario objectives. Most VP wins. Destroying an enemy Core is worth instant victory in most scenarios.

<hr>

<i class="fas fa-ruler"></i> <b>KEY MEASUREMENTS</b>

<b>Short Ruler:</b> 15cm (6 inches) — Used for most movement and shooting
<br><b>Long Ruler:</b> 30cm (12 inches) — Used for Treads and mortar weapons
<br><b>Always measure horizontally</b> — Never diagonally through the air

<hr>

<i class="fas fa-lightbulb"></i> <b>QUICK TIPS</b>

Build your mech in 2-3 colors maximum to unlock your Pilot Perk. Control 2 smaller mechs for board presence, or 1 big mech for concentrated firepower. Scavenge HP tokens from fallen enemies to heal. Equipment Cubes are the only way to modify your mech during combat. Buildings can collapse and deal 1 DP if they fall on mechs.

That's it. Build, deploy, and fight. Physics does the rest.`
      };

    case 'setup_1':
      return {
        ...rule,
        description: `Before you start playing, you need to understand the basic structure of the game and what each player controls.

<hr>

<i class="fas fa-robot"></i> <b>WHAT YOU CONTROL</b>

Each player controls up to <b>2 Frames</b> (Cores). A Frame is a mech with one Core. You can build your forces in three ways:

<b>1 Solo Mech (1 Frame):</b> One mech with 4 HP and 8 equipment slots. Concentrated firepower, but if it dies, you're out.

<b>2 Solo Mechs (2 Frames):</b> Two separate mechs, each with 4 HP and 8 slots. Better board control and redundancy. If one dies, you still have the other.

<b>1 Duo Mech (2 Frames):</b> Two Frames physically connected into one giant mech. 8 HP total, 16 equipment slots. Massive firepower but single target — if it goes down, you lose both Cores.

You get <b>2 Action Points per turn TOTAL</b> — not per mech. Spend them on any of your mechs in any combination.

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

Set a 10-minute timer. Build your mech(s) from the shared pool of 3D-printed parts. Each Frame needs exactly 1 Core and 1 Top. Only Legs, Treads, or Wheels can touch the ground. Your mech must stand on its own when time expires.

<b>Veteran Option:</b> If you already have a mech from a previous game, you can skip scavenging and use your existing mech, OR participate in scavenging and choose at the end (existing vs new).

<hr>

<i class="fas fa-clipboard"></i> <b>PHASE 3: SCENARIO PREPARATION</b>

Read your chosen scenario and prepare the battlefield:

<b>Objectives:</b> Place objective markers (flags, control points) as specified by the scenario.

<b>Resource Cubes:</b> Place Resource Cubes on terrain. Scavenge them to gain 1 HP.

<b>Equipment Cubes:</b> Place Equipment Cubes on terrain. Scavenge them to randomly pick a part from the scrap pile and attach it immediately to your mech. This is the only way to modify your mech during combat.

<hr>

<i class="fas fa-rocket"></i> <b>PHASE 4: DEPLOYMENT</b>

Flip a coin. The loser picks their deployment zone first. The winner deploys last. Place your mech(s) in your deployment zone.

<hr>

<i class="fas fa-swords"></i> <b>PHASE 5: COMBAT</b>

Play 4 rounds. Players alternate activations. Each turn you get 2 AP to spend on any of your mechs. The game ends after Round 4 or when one player loses all their Cores.`
      };

    case 'phase_1':
      // Already well-written, keep it
      return rule;

    case 'phase_2':
      return {
        ...rule,
        description: `This is the heart of ZERO ASSEMBLY. You have 10 minutes to build your mech(s) from a shared pool of 3D-printed parts. Every mech is unique. Every mech is temporary. This is field assembly under pressure.

<hr>

<i class="fas fa-clock"></i> <b>THE 10-MINUTE BUILD</b>

Set a timer for 10 minutes and start building. Grab parts from the shared pool and assemble your mech(s). When the timer expires, stop immediately. Your mech must stand on its own without support. If it falls over, you have 30 seconds to fix it.

<hr>

<i class="fas fa-robot"></i> <b>FRAME OPTIONS</b>

Decide how many Frames (Cores) you want to build. Each player controls up to 2 Frames maximum.

<b>1 Solo Mech (1 Frame):</b> One mech with 4 HP and 8 equipment slots. All your firepower in one place. If it dies, you're out of the game.

<b>2 Solo Mechs (2 Frames):</b> Two separate mechs, each with 4 HP and 8 slots. Better board control and redundancy. If one dies, you still have the other. Remember: you still only get 2 AP per turn total, so you'll be splitting actions between them.

<b>1 Duo Mech (2 Frames):</b> Two Frames physically connected into one giant mech. 8 HP total and 16 equipment slots. Massive firepower and durability, but it's a single target. If it goes down, you lose both Cores at once.

<hr>

<i class="fas fa-wrench"></i> <b>BUILD REQUIREMENTS</b>

Every Frame must have:

<b>Exactly 1 Core:</b> This is your HP pool. Each Core starts with 4 HP tokens.

<b>Exactly 1 Top:</b> This seals the Core. Without a Top, the Core is invalid.

<b>Valid Feet:</b> Only Legs, Treads, or Wheels can touch the ground. No floating mechs. No mechs standing on weapon mounts or armor plates.

<b>Hybrid Builds:</b> You can install multiple leg types on the same mech (e.g., 2 wheels + 2 legs, or 3 spider legs + 2 treads). During movement, choose which leg type to use based on which requirements you meet. See MOVEMENT & LEG TYPES for details.

<b>Multi-Frame Mechs:</b> If building a Duo or larger mech, each Frame needs its own Core and Top. The Frames must be physically connected and move as one unit.

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

<b>Redundancy:</b> If building 2 Solo Mechs, give them different loadouts. One for close range, one for long range.

<hr>

<i class="fas fa-triangle-exclamation"></i> <b>IMPORTANT NOTES</b>

The 10-minute timer is strict. When it expires, stop building immediately. No "just one more piece."

Your mech must stand on its own. If it falls over during the stability check, you have 30 seconds to fix it. If it still can't stand, you must remove parts until it's stable.

Scavenging is competitive. If someone grabs the part you wanted, adapt. That's the nature of field assembly.

Equipment attached during this phase is permanent for the match (unless destroyed). The only way to modify your mech during combat is by scavenging Equipment Cubes.`
      };

    case 'phase_3':
      return {
        ...rule,
        description: `After building your mechs, you prepare the battlefield for combat. This phase sets up the scenario objectives, resources, and equipment that will drive the tactical decisions during the match.

<hr>

<i class="fas fa-clipboard"></i> <b>CHOOSE YOUR SCENARIO</b>

Select a scenario from the available options (Team Deathmatch, Capture the Flag, Rush, etc.). Each scenario has different objectives, victory conditions, and setup requirements. Read the scenario rules carefully before proceeding.

<hr>

<i class="fas fa-bullseye"></i> <b>PLACE OBJECTIVES</b>

Follow the scenario instructions to place objective markers on the battlefield. These might be:

<b>Control Points:</b> Flags or markers that must be held for Victory Points.

<b>Extraction Zones:</b> Areas where mechs must reach to score.

<b>Targets:</b> Specific terrain pieces or markers that must be destroyed.

Objective placement is usually specified by the scenario (e.g., "place 3 flags in the center of the board, 15cm apart"). Some scenarios let players alternate placing objectives.

<hr>

<i class="fas fa-cube"></i> <b>PLACE RESOURCE CUBES</b>

Resource Cubes represent scavengable HP on the battlefield. Place them on terrain pieces throughout the board. When a mech scavenges a Resource Cube, it gains 1 HP immediately.

<b>Recommended Quantity:</b> 20-30 Resource Cubes for a 2-player game. More cubes = longer, more forgiving matches. Fewer cubes = brutal, decisive combat.

<b>Placement Strategy:</b> Spread them across the battlefield. Place some in dangerous positions (open ground, near enemy deployment) and some in safe positions (behind cover, near your deployment). This creates tactical decisions: risk vs reward.

<hr>

<i class="fas fa-box"></i> <b>PLACE EQUIPMENT CUBES</b>

Equipment Cubes represent scavengable gear on the battlefield. When a mech scavenges an Equipment Cube, the player immediately picks a random part from the scrap pile and attaches it to their mech. This is the only way to modify your mech during combat.

<b>Recommended Quantity:</b> 10-15 Equipment Cubes for a 2-player game.

<b>Placement Strategy:</b> Place Equipment Cubes in contested areas — near objectives, in the center of the board, or on elevated terrain. Make players fight for the ability to upgrade their mechs.

<b>How It Works:</b> When you scavenge an Equipment Cube, physically pick up your mech, grab a random part from the scrap pile (close your eyes or have your opponent pick), and attach it immediately. Then place your mech back where it was. This happens during your SCAVENGE action.

<hr>

<i class="fas fa-triangle-exclamation"></i> <b>HAZARD CUBES (OPTIONAL)</b>

Some scenarios use Hazard Cubes to mark dangerous terrain. When a mech moves through or ends its turn touching a Hazard Cube, it takes 1 DP. Use these to create minefields, radiation zones, or unstable ground.

<hr>

<i class="fas fa-lightbulb"></i> <b>SETUP TIPS</b>

<b>Balance:</b> Place resources and equipment evenly across the board. Don't favor one side.

<b>Objectives First:</b> Place objectives before resources and equipment. This ensures resources are placed strategically around objectives.

<b>Elevation:</b> Place some cubes on elevated terrain (platforms, building tops). This rewards mechs with climbing ability.

<b>Clustering:</b> Group 2-3 Resource Cubes together in key locations. This creates "resource hotspots" worth fighting over.

<b>Scenario Synergy:</b> In Capture the Flag, place resources near flags. In Rush, place them along the path to the enemy deployment. Match resource placement to scenario objectives.

<hr>

<i class="fas fa-clock"></i> <b>TIME</b>

This phase typically takes 3-5 minutes. Once all objectives, resources, and equipment are placed, proceed to Phase 4: Deployment.`
      };

    case 'phase_4':
      return {
        ...rule,
        description: `With the battlefield prepared, it's time to deploy your forces. Deployment determines your starting position and sets the stage for the opening moves of combat.

<hr>

<i class="fas fa-coins"></i> <b>DETERMINE DEPLOYMENT ORDER</b>

Flip a coin or roll dice to determine deployment order.

<b>Loser:</b> Picks their deployment zone first.
<br><b>Winner:</b> Deploys their mech(s) last.

This creates a tactical trade-off. The loser gets to choose the better deployment zone (closer to objectives, better cover, etc.). The winner gets to see where the enemy deploys and react accordingly.

<hr>

<i class="fas fa-map"></i> <b>DEPLOYMENT ZONES</b>

Deployment zones are usually defined by the scenario. Common setups:

<b>Opposite Edges:</b> Each player deploys within 15cm of opposite board edges. Classic head-to-head setup.

<b>Corners:</b> Each player deploys in opposite corners. Creates diagonal engagement angles.

<b>Asymmetric:</b> One player deploys in a small zone (defender), the other deploys along an entire board edge (attacker). Used in Rush scenarios.

If the scenario doesn't specify deployment zones, use opposite board edges (15cm deep).

<hr>

<i class="fas fa-rocket"></i> <b>DEPLOYING YOUR MECHS</b>

Place your mech(s) anywhere within your deployment zone. They can face any direction. If you control 2 Solo Mechs, you can place them anywhere in your zone — together for mutual support, or spread out for board control.

<b>Deployment Rules:</b>

Your mech must be fully within your deployment zone. No part of the mech can extend outside the zone.

Your mech must be at least 5cm from board edges (to prevent accidental falls).

Your mech must be standing upright and stable.

If you control 2 mechs, deploy them one at a time (your choice of order).

<hr>

<i class="fas fa-lightbulb"></i> <b>DEPLOYMENT STRATEGY</b>

<b>Cover:</b> Deploy behind terrain if possible. Starting in the open makes you an easy target.

<b>Objectives:</b> Deploy closer to objectives you plan to contest. Don't deploy far from your win condition.

<b>Range:</b> If you have long-range weapons (mortars, artillery), deploy with clear firing lanes. If you have short-range weapons (melee, shotguns), deploy closer to the center.

<b>Spread vs Concentration:</b> If you control 2 mechs, decide whether to deploy them together (concentrated firepower, mutual support) or spread out (board control, multiple threats).

<b>React to Enemy:</b> If you deploy last, position your mechs to counter the enemy deployment. If they deployed aggressively, deploy defensively. If they deployed passively, deploy aggressively.

<hr>

<i class="fas fa-swords"></i> <b>READY FOR COMBAT</b>

Once both players have deployed, Phase 5: Combat begins. Determine who takes the first turn (usually the player who deployed first, but check your scenario rules).

The battlefield is set. The mechs are ready. Let the Kinetic War begin.`
      };

    case 'phase_5':
      return {
        ...rule,
        description: `Combat is where everything comes together. You'll spend 4 rounds maneuvering, shooting, and scavenging in a desperate fight for victory.

<hr>

<i class="fas fa-repeat"></i> <b>ROUND STRUCTURE</b>

The game lasts 4 rounds. Each round, players alternate taking turns until both players have activated all their mechs. Then the next round begins.

<b>Turn Order:</b> The scenario specifies who goes first in Round 1 (usually the player who deployed first). After that, players alternate. If you went first in Round 1, your opponent goes first in Round 2.

<b>Alternating Activations:</b> Players take turns activating one mech at a time. If you control 2 mechs and your opponent controls 1, you'll activate twice in a row at some point. That's normal.

<hr>

<i class="fas fa-bolt"></i> <b>YOUR TURN (2 AP TOTAL)</b>

On your turn, you get 2 Action Points (AP) to spend across all your mechs. You can spend both AP on one mech, or split them between mechs. Your choice.

<b>Available Actions:</b>

<b>MOVE (1 AP):</b> Advance one ruler length based on your leg type. Legs/Wheels use Short Ruler (15cm). Treads use Long Ruler (30cm).

<b>ENGAGE (1 AP):</b> Fire a weapon. Place the shooting device at the correct proxy distance and fire. If the projectile hits, it hits.

<b>SCAVENGE (1 AP):</b> Pick up all HP tokens, Resource Cubes, or Equipment Cubes touching your mech's base.

<b>REPOSITION (1 AP):</b> Rotate your mech, adjust its pose, or stand it up if it fell over.

You can take the same action twice (e.g., MOVE twice, or ENGAGE twice if you have multiple weapons).

<hr>

<i class="fas fa-crosshairs"></i> <b>COMBAT RESOLUTION</b>

When you ENGAGE, follow these steps:

1. Declare which weapon you're using and which enemy mech you're targeting.
2. Place the shooting device at the correct proxy distance from your mech (1 Short Ruler for most weapons, 1 Long Ruler for mortars).
3. Aim and fire the projectile.
4. If the projectile physically hits the enemy mech, they take damage equal to the weapon's DP.
5. The damaged player places HP tokens equal to the DP at their mech's feet.

<b>Physics is the referee.</b> If the projectile hits, it hits. If it misses, it misses. No dice. No to-hit rolls. Just real-world accuracy.

<hr>

<i class="fas fa-heart-crack"></i> <b>DAMAGE & DESTRUCTION</b>

When your mech takes damage, place HP tokens at its feet. These tokens represent lost health. Anyone can scavenge them (including your opponent).

Each Core starts with 4 HP. When a Core runs out of HP tokens, it's destroyed. Remove the entire Frame from the battlefield.

<b>Multi-Frame Mechs:</b> If you built a Duo Mech (2 Cores connected), track HP separately for each Core. When one Core is destroyed, the entire mech is destroyed (both Cores are removed).

<hr>

<i class="fas fa-flag-checkered"></i> <b>END OF ROUND</b>

When both players have spent all their AP and activated all their mechs, the round ends. Check for scenario-specific end-of-round effects (e.g., "gain 1 VP for each objective you control").

Start the next round. The player who went second in the previous round goes first in the new round.

<hr>

<i class="fas fa-trophy"></i> <b>END OF GAME</b>

The game ends when:

<b>Round 4 Ends:</b> After 4 full rounds, count Victory Points. Most VP wins.

<b>Total Annihilation:</b> If one player loses all their Cores, the game ends immediately. The surviving player wins.

<b>Scenario Condition:</b> Some scenarios have special win conditions (e.g., "extract 3 Resource Cubes to your deployment zone"). Check your scenario rules.

<hr>

<i class="fas fa-medal"></i> <b>VICTORY POINTS</b>

VP are earned based on scenario objectives. Common sources:

<b>Objectives Held:</b> Control points, flags, extraction zones.
<br><b>Enemy Cores Destroyed:</b> Usually worth 2-3 VP each.
<br><b>Resources Collected:</b> Some scenarios award VP for scavenging.
<br><b>Survival:</b> Some scenarios award VP for keeping your Cores alive.

Count VP at the end of the game. Most VP wins. Ties are broken by most HP remaining.

<hr>

<i class="fas fa-lightbulb"></i> <b>COMBAT TIPS</b>

<b>Scavenge Early:</b> HP tokens on the ground are vulnerable. Scavenge them before your opponent does.

<b>Positioning:</b> Use terrain for cover. Don't stand in the open.

<b>Focus Fire:</b> Concentrate damage on one enemy mech to destroy it quickly.

<b>Objectives Win Games:</b> Don't get distracted by combat. Play the scenario objectives.

<b>Equipment Cubes:</b> Scavenge them to upgrade your mech mid-game. A well-timed equipment upgrade can turn the tide.

<b>Perk Timing:</b> Use your Pilot Perk at the right moment. Once per match means you need to make it count.`
      };

    default:
      return rule;
  }
});

// Write back
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

console.log('✅ Phase chapters rewritten!');
console.log('   - ltp_1: Learn to Play');
console.log('   - setup_1: Game Setup');
console.log('   - phase_2: Scavenging');
console.log('   - phase_3: Scenario Prep');
console.log('   - phase_4: Deployment');
console.log('   - phase_5: Combat');
