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

console.log('Batch 4: Falling, Perks, Build Rules...\n');

// RULE_6: Falling & Fall Damage
updateRule('rule_6', `Mechs can fall over from damage, knockback, or instability. When a mech falls, it must spend 1 AP to stand back up.

<hr>

<i class="fas fa-person-falling"></i> <b>WHEN MECHS FALL</b>

A mech falls over in these situations:

<b>Heavy Damage:</b> If a mech takes 3+ DP from a single hit, it may fall over (player's choice to represent the impact).

<b>Knockback:</b> Some melee weapons have knockback effects. If knocked back, the mech falls over.

<b>Instability:</b> If a mech is poorly balanced (top-heavy, narrow base), it may fall over when moved or hit. This is a physical consequence of bad design.

<b>Terrain Collapse:</b> If the terrain a mech is standing on collapses or is knocked over, the mech falls.

When a mech falls, lay it on its side. It cannot take actions until it stands up.

<hr>

<i class="fas fa-rotate"></i> <b>STANDING UP</b>

A fallen mech must use the REPOSITION action (1 AP) to stand back up. Pick up the mech and place it upright in the same location.

While fallen, a mech cannot MOVE, ENGAGE, or SCAVENGE. It can only REPOSITION to stand up.

<hr>

<i class="fas fa-heart-crack"></i> <b>FALL DAMAGE</b>

Falling from elevation deals damage. If a mech falls from a height of 5cm or more, it takes 1 DP. Place 1 HP token at the mech's feet.

Falling from 10cm or more deals 2 DP. Falling from 15cm or more deals 3 DP.

This creates risk for mechs on elevated terrain. High ground provides tactical advantages but falling is dangerous.

<hr>

<i class="fas fa-building"></i> <b>FALLING BUILDINGS</b>

If a building piece falls on a mech, the mech takes 1 DP. This applies whether the mech is standing or already fallen.

Multiple building pieces falling on the same mech deal damage separately. If 3 building pieces fall on a mech, it takes 3 DP total.

<hr>

<i class="fas fa-lightbulb"></i> <b>FALLING TIPS</b>

<b>Build Stable Mechs:</b> Wide bases and low centers of gravity prevent falling. Tall, narrow mechs fall easily.

<b>Falling is Costly:</b> Losing 1 AP to stand up is a significant penalty. Avoid falling if possible.

<b>Knockback Weapons:</b> Melee weapons with knockback can disable enemies for a turn. Use them tactically.

<b>Elevation Risk:</b> High ground is powerful but dangerous. One fall can deal massive damage.

<b>Protect Fallen Mechs:</b> If your mech falls, prioritize standing it up next turn. Fallen mechs are vulnerable.`);

// RULE_7: Pilot Perks
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

If you control 2 mechs, choose which mech uses the perk when you activate it. Some perks specifically require multiple mechs (Multi-Mech perks).

Perks do not cost AP. They're free actions that enhance your turn.

<hr>

<i class="fas fa-robot"></i> <b>MULTI-MECH PERKS</b>

Some perks are labeled "Multi-Mech" and require you to control 2 mechs. These perks provide synergy between your mechs:

<b>Coordinated Strike:</b> Both mechs gain +1 DP if they can see the same target.

<b>Tactical Relay:</b> Gain +2 AP this turn (4 AP total), but you must spend at least 1 AP on each mech.

<b>Covering Fire:</b> If one mech is hit, the other can immediately make a free ENGAGE action.

Multi-Mech perks reward building 2 Solo Mechs instead of 1 Solo or 1 Duo.

<hr>

<i class="fas fa-lightbulb"></i> <b>PERK STRATEGY</b>

<b>Save for Key Moments:</b> Perks are once per match. Use them when they'll have maximum impact.

<b>Offensive Perks:</b> Use when you have a clear shot at destroying an enemy Core.

<b>Defensive Perks:</b> Use when you're about to take lethal damage.

<b>Mobility Perks:</b> Use to reach objectives or escape danger.

<b>Multi-Mech Synergy:</b> If you built 2 mechs, consider Multi-Mech perks for extra power.`);

// RULE_8: Build Rules
updateRule('rule_8', `Every mech must follow basic build rules. These ensure mechs are legal and functional.

<hr>

<i class="fas fa-gear"></i> <b>REQUIRED COMPONENTS</b>

Every Frame (Core) must have:

<b>Exactly 1 Core:</b> This is your HP pool. Each Core starts with 4 HP.

<b>Exactly 1 Top:</b> This seals the Core. Without a Top, the Core is invalid.

<b>Valid Feet:</b> Only Legs, Treads, or Wheels can touch the ground. No floating mechs. No mechs standing on weapon mounts, armor plates, or other non-foot parts.

<hr>

<i class="fas fa-wrench"></i> <b>HYBRID BUILDS</b>

You can install multiple leg types on the same mech. For example: 2 wheels + 2 biped legs, or 3 spider legs + 2 treads.

During movement, choose which leg type to use based on which requirements you meet. See MOVEMENT & LEG TYPES for qualification requirements.

Hybrid builds provide tactical flexibility but are harder to build in 10 minutes.

<hr>

<i class="fas fa-robot"></i> <b>MULTI-FRAME MECHS</b>

If you're building a Duo Mech (or larger), each Frame needs its own Core and Top. The Frames must be physically connected and move as one unit.

Track HP separately for each Core. When one Core is destroyed, the entire mech is destroyed (all Cores are removed).

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

console.log('\n✅ Batch 4 complete (rule_6, rule_7, rule_8)');
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved!\n');
