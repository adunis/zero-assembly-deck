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

console.log('Batch 3: Movement & Leg Types...\n');

// RULE_5: Movement & Leg Types (16 bullets - big one!)
updateRule('rule_5', `Movement in ZERO ASSEMBLY is physical. You pick up your mech and move it one ruler length in any direction. The distance depends on your leg type.

<hr>

<i class="fas fa-person-walking"></i> <b>HOW TO MOVE</b>

When you take the MOVE action, pick up your mech and move it one ruler length in any direction. Place the ruler's starting point where your mech currently stands, then move your mech to the ruler's end point.

You can move in any direction — forward, backward, sideways, diagonally. You can change facing during the move. You can move around terrain or over it (if your leg type allows).

<hr>

<i class="fas fa-shoe-prints"></i> <b>LEG TYPES & MOVEMENT DISTANCE</b>

Your mech's leg type determines how far it moves:

<b>Legs (Biped, Spider, etc.):</b> Move 1 Short Ruler (15cm). Legs are versatile — they can climb terrain and navigate rough ground.

<b>Wheels:</b> Move 1 Short Ruler (15cm). Wheels are fast on flat ground but cannot climb. They must go around obstacles.

<b>Treads:</b> Move 1 Long Ruler (30cm). Treads cover the most distance but are less maneuverable. They can push through light obstacles.

<hr>

<i class="fas fa-wrench"></i> <b>HYBRID BUILDS (MULTIPLE LEG TYPES)</b>

You can install multiple leg types on the same mech. For example: 2 wheels + 2 biped legs, or 3 spider legs + 2 treads.

When you MOVE, choose which leg type to use. You must meet the qualification requirements for that leg type (see below). If you qualify for multiple leg types, choose which to use each time you move.

This creates tactical flexibility. Use wheels for speed on flat ground, then switch to legs to climb a building.

<hr>

<i class="fas fa-check"></i> <b>LEG TYPE QUALIFICATION</b>

To use a leg type for movement, you must meet its requirements:

<b>Legs:</b> At least 2 leg pieces touching the ground. Can be any combination (2 biped legs, 2 spider legs, 1 biped + 1 spider, etc.).

<b>Wheels:</b> At least 2 wheel pieces touching the ground.

<b>Treads:</b> At least 1 tread piece touching the ground.

If you don't meet the requirements for any leg type, you cannot MOVE. Your mech is immobilized.

<hr>

<i class="fas fa-mountain"></i> <b>CLIMBING & TERRAIN</b>

<b>Legs:</b> Can climb terrain up to 5cm high. Place your mech on top of platforms, buildings, or elevated terrain. Legs can also move through rough ground without penalty.

<b>Wheels:</b> Cannot climb. Must go around obstacles. Wheels are restricted to flat ground. If terrain blocks your path, you must find another route.

<b>Treads:</b> Can push through light obstacles (rubble, small walls) but cannot climb. Treads treat rough ground as flat ground.

<hr>

<i class="fas fa-building"></i> <b>MOVING THROUGH BUILDINGS</b>

You can move through buildings. If your movement path goes through a building piece, push your mech through it. The building may fall over from the collision.

If a building piece falls on your mech during your move, your mech takes 1 DP immediately. Place 1 HP token at your mech's feet.

This creates risk-reward decisions. Moving through buildings is faster but dangerous.

<hr>

<i class="fas fa-people-arrows"></i> <b>COLLISIONS & PUSHING</b>

You can push adjacent mechs as you move. If your movement path would collide with another mech, you can push it alongside you (up to 5cm). No damage is dealt.

You cannot push mechs that are significantly larger or heavier than yours (GM discretion). You cannot push mechs through terrain or off the table.

Pushing creates tactical opportunities. Push an enemy mech out of cover. Push a friendly mech into scavenging range.

<hr>

<i class="fas fa-ruler"></i> <b>MEASURING MOVEMENT</b>

Always measure movement horizontally along the ground. Never measure diagonally through the air.

If you're moving up or down terrain, measure the horizontal distance, not the slope distance. Climbing a 5cm platform counts as 0cm of horizontal movement — you just go straight up.

<hr>

<i class="fas fa-lightbulb"></i> <b>MOVEMENT TIPS</b>

<b>Hybrid Builds:</b> Mix leg types for flexibility. Wheels for speed, legs for climbing.

<b>Treads Dominate:</b> Treads move 30cm — double the distance of legs/wheels. If you can build a stable tread mech, it's incredibly mobile.

<b>Climbing Advantage:</b> Legs can reach elevated positions. High ground provides better firing angles and safety from melee.

<b>Wheels Need Flat Ground:</b> If the battlefield is cluttered with terrain, wheels struggle. Legs are more versatile.

<b>Plan Your Route:</b> Think ahead. Can you reach that objective in one move? Do you need to climb? Is there a faster route?

<b>Retreat Options:</b> Always have an escape route. If you're low on HP, you need to be able to retreat and scavenge.`);

console.log('\n✅ Batch 3 complete (rule_5 - Movement)');
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved!\n');
