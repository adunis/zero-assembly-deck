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

console.log('Making REPOSITION a free action...\n');

// LTP_1: Learn to Play
updateRule('ltp_1', `ZERO ASSEMBLY is a physics wargame where you build a modular mech and fight using real toy weapons. No dice. No math. If your shot hits, it hits.

The game unfolds in five phases. First, you build the battlefield by placing terrain. Then you have 10 minutes to assemble your mech from 3D-printed parts. After setting up scenario objectives and resources, you deploy your forces and fight for 4 rounds.

<hr>

<i class="fas fa-gamepad"></i> <b>THE FIVE PHASES</b>

<b>Phase 1 — Terrain Building:</b> Players alternate placing terrain pieces with 15cm spacing. Buildings can stack or connect to create multi-story structures.

<b>Phase 2 — Scavenging:</b> Set a 10-minute timer and build your mech from available parts. Each player builds 1 Frame (1 Core + 1 Top). Choose your colors carefully — 1-3 colors gives you 1 Perk, but 4+ colors means no perks.

<b>Phase 3 — Scenario Prep:</b> Place objective markers, Resource Cubes (scavenge for HP), and Equipment Cubes (scavenge to modify your mech mid-game).

<b>Phase 4 — Deployment:</b> Flip a coin. Loser picks their deployment zone first, winner deploys last.

<b>Phase 5 — Combat:</b> Play 4 rounds, alternating turns. Each turn you get 2 Action Points plus 1 free REPOSITION.

<hr>

<i class="fas fa-bolt"></i> <b>YOUR TURN (2 AP + FREE REPOSITION)</b>

You get 2 Action Points per turn. Spend them on these actions:

<b>MOVE (1 AP):</b> Advance one ruler length. Pure Legs use Short Ruler (15cm) and can climb. Pure Wheels or Pure Treads use Long Ruler (30cm) but cannot climb. Mixed leg types use Short Ruler with no climbing.

<b>ENGAGE (1 AP):</b> Fire a weapon. Place the shooting device 1 Short Ruler from your mech (or 1 Long Ruler for mortars). Fire the projectile. If it physically hits the enemy mech, that's a hit.

<b>SCAVENGE (1 AP):</b> Pick up HP tokens, Resource Cubes, or Equipment Cubes touching your mech's base. HP tokens restore health. Equipment Cubes let you grab a random part from the scrap pile and attach it immediately.

<b>REPOSITION (0 AP, Free):</b> Rotate your mech, bend joints, adjust pose, or stand up if fallen. You can do any number of modifications as long as your mech's position on the table doesn't change. Use this once per turn, before, after, or between other actions.

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

Build your mech in 2-3 colors maximum to unlock your Pilot Perk. Each Core has 4 HP and 8 equipment slots. Pure Wheels or Treads move 30cm but can't climb. Pure Legs move 15cm but can climb terrain. Mixed leg types move 15cm with no climbing. Use your free REPOSITION to adjust facing and pose between actions. Scavenge HP tokens to heal. Buildings can collapse and deal 1 DP if they fall on mechs.

That's it. Build, deploy, and fight. Physics does the rest.`);

// RULE_1: Actions
updateRule('rule_1', `Every turn you get 2 Action Points (AP) plus 1 free REPOSITION. You can spend AP on three different actions, and use REPOSITION once per turn for free.

<hr>

<i class="fas fa-bolt"></i> <b>THE THREE ACTIONS (COST AP)</b>

<b><i class="fas fa-person-walking"></i> MOVE (1 AP):</b> Move your mech one ruler length in any direction. The distance and abilities depend on your leg type qualification:

• <b>Pure Legs:</b> Move 1 Short Ruler (15cm). Can climb terrain up to 5cm high.
• <b>Pure Wheels or Pure Treads:</b> Move 1 Long Ruler (30cm). Cannot climb.
• <b>Mixed:</b> Move 1 Short Ruler (15cm). Cannot climb.

See MOVEMENT & LEG TYPES for qualification requirements.

<b><i class="fas fa-gun"></i> ENGAGE (1 AP):</b> Fire one weapon from your mech. Check the weapon's equipment card for its PROXY distance. Place the toy shooting device that distance from your mech (matching the direction your weapon is pointing), then fire. If the projectile physically hits the enemy mech, they take damage equal to the weapon's DP value.

<b><i class="fas fa-wrench"></i> SCAVENGE (1 AP):</b> Pick up all HP tokens, Resource Cubes, or Equipment Cubes touching your mech's base. HP tokens go back into your Core's HP pool (healing). Resource Cubes give you 1 HP. Equipment Cubes let you grab a random part from the scrap pile and attach it immediately to your mech.

<hr>

<i class="fas fa-rotate"></i> <b>FREE ACTION (NO AP COST)</b>

<b>REPOSITION (0 AP, Free):</b> Rotate your mech to face a different direction, bend joints, adjust its pose, or stand it up if it fell over. You can make any number of modifications to your mech as long as its position on the table doesn't change.

<b>Restrictions:</b>
• Can only REPOSITION once per turn
• Can be done before, after, or between other actions
• Cannot change your mech's position on the table (no moving)
• Cannot be used to avoid damage or effects already applied

<b>Examples:</b>
• REPOSITION (rotate to face enemy) → MOVE → ENGAGE
• MOVE → REPOSITION (adjust pose) → ENGAGE
• ENGAGE → REPOSITION (stand up after knockback) → MOVE
• REPOSITION (stand up) → MOVE → MOVE

<hr>

<i class="fas fa-lightbulb"></i> <b>ACTION ECONOMY</b>

You can take the same AP action multiple times in one turn. MOVE twice to cover more ground. ENGAGE twice if you have multiple weapons. SCAVENGE and then MOVE to grab resources and retreat.

The 2 AP limit forces tactical decisions. Do you advance and shoot? Shoot twice for maximum damage? Scavenge and reposition? Every turn is a choice.

Use your free REPOSITION strategically. Rotate to face a new threat. Adjust your pose to aim better. Stand up after being knocked down. It's free, so use it every turn.`);

// RULE_2: Turn Order
updateRule('rule_2', `Players alternate taking turns throughout each round. The game lasts 4 rounds total. On your turn, you get 2 Action Points to spend on your mech's actions, plus 1 free REPOSITION.

<hr>

<i class="fas fa-repeat"></i> <b>TURN STRUCTURE</b>

Each round proceeds in alternating turns. You spend your 2 AP (and optionally use your free REPOSITION), then your opponent spends their 2 AP (and optionally uses their free REPOSITION). This continues until both players have taken their turns. Then the round ends and a new round begins.

The player who went first in Round 1 goes second in Round 2. Turn order alternates each round to keep things fair.

<hr>

<i class="fas fa-bolt"></i> <b>ACTION POINTS & FREE REPOSITION</b>

Each turn you get:
• <b>2 AP:</b> Spend on MOVE, ENGAGE, or SCAVENGE
• <b>1 Free REPOSITION:</b> Use once per turn, before, after, or between AP actions

REPOSITION doesn't cost AP, so you always have it available. Use it to rotate, adjust pose, or stand up.

<hr>

<i class="fas fa-clock"></i> <b>GAME LENGTH</b>

The game lasts exactly 4 rounds. After Round 4 ends, count Victory Points. Most VP wins.

If one player's Core is destroyed before Round 4 ends, the game ends immediately. The surviving player wins.`);

console.log('\n✅ REPOSITION is now a free action!');
console.log('   - Costs 0 AP');
console.log('   - Can be used once per turn');
console.log('   - Can be done before, after, or between other actions');
console.log('   - Cannot change mech position on table');
console.log('   - Updated 3 chapters');

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved!\n');
