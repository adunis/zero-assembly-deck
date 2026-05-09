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

console.log('Adding ground contact clarification...\n');

// RULE_5: Movement & Leg Types - add ground contact rules
updateRule('rule_5', `Movement in ZERO ASSEMBLY is physical. You pick up your mech and move it one ruler length in any direction. The distance and abilities depend on your leg type.

<hr>

<i class="fas fa-person-walking"></i> <b>HOW TO MOVE</b>

When you take the MOVE action, pick up your mech and move it one ruler length in any direction. Place the ruler's starting point where your mech currently stands, then move your mech to the ruler's end point.

You can move in any direction — forward, backward, sideways, diagonally. You can change facing during the move. You can move around terrain or over it (if your leg type allows).

<hr>

<i class="fas fa-shoe-prints"></i> <b>GROUND CONTACT RULE</b>

<b>CRITICAL:</b> Only leg pieces (Legs, Wheels, or Treads) can touch the ground. No other parts may touch the ground:

• ❌ Cores cannot touch the ground
• ❌ Tops cannot touch the ground
• ❌ Weapons cannot touch the ground
• ❌ Linkages cannot touch the ground
• ❌ Connection parts cannot touch the ground
• ❌ Armor cannot touch the ground
• ✅ Only Legs, Wheels, or Treads can touch the ground

If any non-leg part touches the ground, your mech is illegal and must be rebuilt.

<hr>

<i class="fas fa-check"></i> <b>LEG TYPE QUALIFICATION</b>

Before you move, check which leg types are touching the ground. This determines your movement type.

<b>Pure Legs:</b> Only leg pieces (biped, spider, etc.) are touching the ground. No wheels or treads touching. No other parts touching.

<b>Pure Wheels:</b> Only wheel pieces are touching the ground. No legs or treads touching. No other parts touching.

<b>Pure Treads:</b> Only tread pieces are touching the ground. No legs or wheels touching. No other parts touching.

<b>Mixed:</b> Multiple different leg types are touching the ground (e.g., 2 legs + 1 wheel, or 1 tread + 2 spider legs). No other parts touching.

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

<b>Ground Contact:</b> During the build phase, check that only leg pieces touch the ground. If your Core or weapons are dragging, raise them up or add more legs.

<hr>

<i class="fas fa-wrench"></i> <b>MINIMUM REQUIREMENTS</b>

To qualify for any movement type, you need at least 2 leg pieces touching the ground (or 1 tread piece).

If you have fewer than 2 leg pieces (and no treads), your mech is immobilized and cannot MOVE.

Remember: Only leg pieces can touch the ground. No exceptions.`);

// RULE_8: Build Rules - add ground contact requirement
updateRule('rule_8', `Every mech must follow basic build rules. These ensure mechs are legal and functional.

<hr>

<i class="fas fa-gear"></i> <b>REQUIRED COMPONENTS</b>

Every mech must have:

<b>Exactly 1 Core:</b> This is your HP pool. Each Core starts with 4 HP.

<b>Exactly 1 Top:</b> This seals the Core. Without a Top, the Core is invalid.

<b>Valid Feet:</b> Only Legs, Treads, or Wheels can touch the ground. No other parts may touch the ground.

<hr>

<i class="fas fa-exclamation-triangle"></i> <b>GROUND CONTACT RULE</b>

<b>CRITICAL:</b> Only leg pieces (Legs, Wheels, or Treads) can touch the ground. No other parts may touch the ground:

• ❌ Cores cannot touch the ground
• ❌ Tops cannot touch the ground
• ❌ Weapons cannot touch the ground
• ❌ Linkages cannot touch the ground
• ❌ Connection parts cannot touch the ground
• ❌ Armor cannot touch the ground
• ✅ Only Legs, Wheels, or Treads can touch the ground

If any non-leg part touches the ground when your mech is standing, your mech is illegal. You must rebuild it or add more legs to raise the non-leg parts off the ground.

<hr>

<i class="fas fa-wrench"></i> <b>HYBRID BUILDS</b>

You can install multiple leg types on the same mech. For example: 2 wheels + 2 biped legs, or 3 spider legs + 2 treads.

During movement, your qualification depends on which leg types are touching the ground. See MOVEMENT & LEG TYPES for details.

<b>Warning:</b> Hybrid builds use Mixed movement (Short Ruler, no climbing) — the worst of both worlds. Stick to one leg type for best results.

<hr>

<i class="fas fa-balance-scale"></i> <b>STABILITY REQUIREMENT</b>

Your mech must stand on its own when the 10-minute timer ends. No leaning against terrain or other mechs. No using tape or glue to hold it together.

If your mech falls over during the stability check, you have 30 seconds to fix it. If it still can't stand, you must remove parts until it's stable.

<b>Check Ground Contact:</b> When testing stability, verify that only leg pieces touch the ground. If your Core, weapons, or other parts are touching, your mech is illegal.

<hr>

<i class="fas fa-lightbulb"></i> <b>BUILD TIPS</b>

<b>Wide Base:</b> Build a wide, stable base. Narrow mechs fall over easily.

<b>Low Center of Gravity:</b> Keep heavy parts low. Top-heavy mechs tip over.

<b>Raise Non-Leg Parts:</b> Make sure your Core, Top, weapons, and other parts are raised off the ground. Only legs should touch.

<b>Test Stability:</b> During the build phase, test your mech's stability. Can it stand after being bumped? Are only legs touching the ground?

<b>Equipment Slots:</b> Each Core has 8 equipment slots. Fill them with weapons, armor, and utility systems.

<b>Color Planning:</b> Stick to 2-3 colors maximum to unlock your Pilot Perk.

<b>Leg Type Choice:</b> Decide early: Pure Legs (15cm + climb), Pure Wheels/Treads (30cm, no climb), or Mixed (15cm, no climb). Don't mix unless necessary.`);

// PHASE_2: Add ground contact check to build phase
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

<b>Valid Feet:</b> Only Legs, Treads, or Wheels can touch the ground. No other parts may touch the ground.

<hr>

<i class="fas fa-exclamation-triangle"></i> <b>GROUND CONTACT RULE</b>

<b>CRITICAL:</b> Only leg pieces (Legs, Wheels, or Treads) can touch the ground. No other parts may touch the ground:

• ❌ Cores cannot touch the ground
• ❌ Tops cannot touch the ground
• ❌ Weapons cannot touch the ground
• ❌ Linkages cannot touch the ground
• ❌ Connection parts cannot touch the ground
• ❌ Armor cannot touch the ground
• ✅ Only Legs, Wheels, or Treads can touch the ground

If any non-leg part touches the ground, your mech is illegal and must be rebuilt. Check this during the stability test.

<hr>

<i class="fas fa-shoe-prints"></i> <b>LEG TYPE CHOICE</b>

You can install multiple leg types on the same mech (e.g., 2 wheels + 2 legs). However, during movement, your qualification depends on which leg types are touching the ground:

<b>Pure Legs:</b> Only legs touching = 15cm movement + climbing
<br><b>Pure Wheels/Treads:</b> Only wheels or treads touching = 30cm movement, no climbing
<br><b>Mixed:</b> Multiple leg types touching = 15cm movement, no climbing

<b>Recommendation:</b> Stick to one leg type for best results. Mixed movement is the worst of both worlds.

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

<b>Leg Type Choice:</b> Decide early: Pure Legs (15cm + climb), Pure Wheels/Treads (30cm, no climb), or Mixed (15cm, no climb). Don't mix unless necessary.

<b>Stability:</b> Build a wide base. Tall, narrow mechs fall over easily when hit.

<b>Ground Contact:</b> Make sure only leg pieces touch the ground. Raise your Core, weapons, and other parts off the ground.

<b>Equipment Slots:</b> Each Core has 8 equipment slots. Fill them with weapons, armor, and utility systems. More equipment = more options in combat.

<b>Weight Distribution:</b> Balance your mech. Front-heavy mechs tip forward. Back-heavy mechs tip backward.

<hr>

<i class="fas fa-triangle-exclamation"></i> <b>IMPORTANT NOTES</b>

The 10-minute timer is strict. When it expires, stop building immediately. No "just one more piece."

Your mech must stand on its own. If it falls over during the stability check, you have 30 seconds to fix it. If it still can't stand, you must remove parts until it's stable.

<b>Ground Contact Check:</b> During the stability check, verify that only leg pieces touch the ground. If your Core, weapons, or other parts are touching, you must fix it within the 30-second window.

Scavenging is competitive. If someone grabs the part you wanted, adapt. That's the nature of field assembly.

Equipment attached during this phase is permanent for the match (unless destroyed). The only way to modify your mech during combat is by scavenging Equipment Cubes.`);

console.log('\n✅ Ground contact rule clarified!');
console.log('   - Only Legs, Wheels, or Treads can touch ground');
console.log('   - No Cores, Tops, Weapons, Linkages, or other parts');
console.log('   - Updated 3 chapters (rule_5, rule_8, phase_2)');

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved!\n');
