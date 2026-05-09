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

console.log('Simplifying movement rules...\n');

// LTP_1: Update Learn to Play with new movement
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

<b>MOVE (1 AP):</b> Advance one ruler length. Pure Legs use Short Ruler (15cm) and can climb. Pure Wheels or Pure Treads use Long Ruler (30cm) but cannot climb. Mixed leg types use Short Ruler with no climbing.

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

<b>Short Ruler:</b> 15cm (6 inches) — Used for Legs and Mixed movement
<br><b>Long Ruler:</b> 30cm (12 inches) — Used for Wheels/Treads and mortar weapons
<br><b>Always measure horizontally</b> — Never diagonally through the air

<hr>

<i class="fas fa-lightbulb"></i> <b>QUICK TIPS</b>

Build your mech in 2-3 colors maximum to unlock your Pilot Perk. Each Core has 4 HP and 8 equipment slots. Pure Wheels or Treads move 30cm but can't climb. Pure Legs move 15cm but can climb terrain. Mixed leg types move 15cm with no climbing. Scavenge HP tokens to heal. Buildings can collapse and deal 1 DP if they fall on mechs.

That's it. Build, deploy, and fight. Physics does the rest.`);

// RULE_1: Update Actions
updateRule('rule_1', `Every turn you get 2 Action Points (AP). You can spend these AP on four different actions.

<hr>

<i class="fas fa-bolt"></i> <b>THE FOUR ACTIONS</b>

<b><i class="fas fa-person-walking"></i> MOVE (1 AP):</b> Move your mech one ruler length in any direction. The distance and abilities depend on your leg type qualification:

• <b>Pure Legs:</b> Move 1 Short Ruler (15cm). Can climb terrain up to 5cm high.
• <b>Pure Wheels or Pure Treads:</b> Move 1 Long Ruler (30cm). Cannot climb.
• <b>Mixed:</b> Move 1 Short Ruler (15cm). Cannot climb.

See MOVEMENT & LEG TYPES for qualification requirements.

<b><i class="fas fa-gun"></i> ENGAGE (1 AP):</b> Fire one weapon from your mech. Check the weapon's equipment card for its PROXY distance. Place the toy shooting device that distance from your mech (matching the direction your weapon is pointing), then fire. If the projectile physically hits the enemy mech, they take damage equal to the weapon's DP value.

<b><i class="fas fa-wrench"></i> SCAVENGE (1 AP):</b> Pick up all HP tokens, Resource Cubes, or Equipment Cubes touching your mech's base. HP tokens go back into your Core's HP pool (healing). Resource Cubes give you 1 HP. Equipment Cubes let you grab a random part from the scrap pile and attach it immediately to your mech.

<b><i class="fas fa-rotate"></i> REPOSITION (1 AP):</b> Rotate your mech to face a different direction, adjust its pose (bend joints, change stance), or stand it up if it fell over from damage or knockback.

<hr>

<i class="fas fa-lightbulb"></i> <b>ACTION ECONOMY</b>

You can take the same action multiple times in one turn. MOVE twice to cover more ground. ENGAGE twice if you have multiple weapons. SCAVENGE and then MOVE to grab resources and retreat.

The 2 AP limit forces tactical decisions. Do you advance and shoot? Shoot twice for maximum damage? Scavenge and reposition? Every turn is a choice.`);

// RULE_5: Complete rewrite of Movement & Leg Types
updateRule('rule_5', `Movement in ZERO ASSEMBLY is physical. You pick up your mech and move it one ruler length in any direction. The distance and abilities depend on your leg type.

<hr>

<i class="fas fa-person-walking"></i> <b>HOW TO MOVE</b>

When you take the MOVE action, pick up your mech and move it one ruler length in any direction. Place the ruler's starting point where your mech currently stands, then move your mech to the ruler's end point.

You can move in any direction — forward, backward, sideways, diagonally. You can change facing during the move. You can move around terrain or over it (if your leg type allows).

<hr>

<i class="fas fa-shoe-prints"></i> <b>LEG TYPE QUALIFICATION</b>

Before you move, check which leg types are touching the ground. This determines your movement type.

<b>Pure Legs:</b> Only leg pieces (biped, spider, etc.) are touching the ground. No wheels or treads touching.

<b>Pure Wheels:</b> Only wheel pieces are touching the ground. No legs or treads touching.

<b>Pure Treads:</b> Only tread pieces are touching the ground. No legs or wheels touching.

<b>Mixed:</b> Multiple different leg types are touching the ground (e.g., 2 legs + 1 wheel, or 1 tread + 2 spider legs).

<hr>

<i class="fas fa-ruler"></i> <b>MOVEMENT TYPES</b>

Based on your qualification, you use one of these movement types:

<b>PURE LEGS:</b>
<br>• Distance: 1 Short Ruler (15cm)
<br>• Can climb terrain up to 5cm high
<br>• Can move through rough ground

<b>PURE WHEELS or PURE TREADS:</b>
<br>• Distance: 1 Long Ruler (30cm)
<br>• Cannot climb terrain
<br>• Must go around obstacles

<b>MIXED:</b>
<br>• Distance: 1 Short Ruler (15cm)
<br>• Cannot climb terrain
<br>• Must go around obstacles

<hr>

<i class="fas fa-mountain"></i> <b>CLIMBING</b>

Only Pure Legs can climb. If you qualify for Pure Legs movement, you can climb terrain up to 5cm high. Place your mech on top of platforms, buildings, or elevated terrain.

Pure Wheels, Pure Treads, and Mixed movement cannot climb. If terrain blocks your path, you must find another route.

<hr>

<i class="fas fa-building"></i> <b>MOVING THROUGH BUILDINGS</b>

You can move through buildings. If your movement path goes through a building piece, push your mech through it. The building may fall over from the collision.

If a building piece falls on your mech during your move, your mech takes 1 DP immediately. Place 1 HP token at your mech's feet.

This creates risk-reward decisions. Moving through buildings is faster but dangerous.

<hr>

<i class="fas fa-people-arrows"></i> <b>COLLISIONS & PUSHING</b>

You can push adjacent mechs as you move. If your movement path would collide with another mech, you can push it alongside you (up to 5cm). No damage is dealt.

You cannot push mechs that are significantly larger or heavier than yours (GM discretion). You cannot push mechs through terrain or off the table.

<hr>

<i class="fas fa-ruler"></i> <b>MEASURING MOVEMENT</b>

Always measure movement horizontally along the ground. Never measure diagonally through the air.

If you're moving up or down terrain, measure the horizontal distance, not the slope distance. Climbing a 5cm platform counts as 0cm of horizontal movement — you just go straight up.

<hr>

<i class="fas fa-lightbulb"></i> <b>MOVEMENT TIPS</b>

<b>Pure Wheels/Treads Dominate Distance:</b> 30cm movement is double the distance of legs. If you can build a stable wheel or tread mech, it's incredibly mobile on flat ground.

<b>Pure Legs for Climbing:</b> Legs can reach elevated positions. High ground provides better firing angles and safety from melee.

<b>Mixed is the Penalty:</b> If you mix leg types, you get Short movement with no climbing — the worst of both worlds. Stick to one leg type for best results.

<b>Plan Your Build:</b> Decide during the build phase: do you want speed (wheels/treads) or climbing (legs)? Don't mix unless you have a good reason.

<b>Wheels = Treads:</b> Wheels and treads are functionally identical. Both move 30cm, neither can climb. Choose based on aesthetics and stability.

<hr>

<i class="fas fa-wrench"></i> <b>MINIMUM REQUIREMENTS</b>

To qualify for any movement type, you need at least 2 leg pieces touching the ground (or 1 tread piece).

If you have fewer than 2 leg pieces (and no treads), your mech is immobilized and cannot MOVE.`);

console.log('\n✅ Movement rules simplified!');
console.log('   - Wheels = Treads (both LONG, no climbing)');
console.log('   - Pure leg type requirement added');
console.log('   - Mixed movement type added (SHORT, no climbing)');
console.log('   - Updated 3 chapters');

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved!\n');
