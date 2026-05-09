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

console.log('Batch 2: Continuing rules rewrite...\n');

// RULE_3: Shooting
updateRule('rule_3', `Shooting in ZERO ASSEMBLY is physical. You place a toy device at the correct distance from your mech, aim, and fire. If the projectile hits the enemy mech, they take damage. No dice. No to-hit rolls. Just physics.

<hr>

<i class="fas fa-crosshairs"></i> <b>HOW TO SHOOT</b>

When you take the ENGAGE action, follow these steps:

<b>1. Declare Target:</b> Point to which enemy mech you're shooting at.

<b>2. Check Proxy Distance:</b> Look at your weapon's equipment card. It will say either "Proxy: SHORT" or "Proxy: LONG".

<b>3. Place Device:</b> Place the toy shooting device (crossbow, cannon, or mortar) at the correct proxy distance from your mech. SHORT = 1 Short Ruler (15cm). LONG = 1 Long Ruler (30cm). The device should be placed in the direction your weapon is pointing.

<b>4. Aim:</b> Adjust the device's angle and direction to aim at the target mech.

<b>5. Fire:</b> Trigger the device. The projectile flies through the air.

<b>6. Check Hit:</b> If the projectile physically touches the enemy mech, that's a hit. If it misses, it misses.

<hr>

<i class="fas fa-bullseye"></i> <b>WHAT COUNTS AS A HIT?</b>

A hit is any physical contact between the projectile and the target mech. It doesn't matter if the projectile bounces off, grazes, or hits dead-on. Contact = hit.

If the projectile hits terrain, other mechs, or flies off the table, it's a miss. Only contact with the declared target counts.

<hr>

<i class="fas fa-heart-crack"></i> <b>DAMAGE ON HIT</b>

When you hit, check the weapon's DP (Damage Points) value on its equipment card. The target mech takes that much damage.

The damaged player places HP tokens equal to the DP at their mech's feet. These tokens are no longer part of the mech's HP pool — they're on the ground and can be scavenged by anyone.

<hr>

<i class="fas fa-ruler"></i> <b>PROXY DISTANCES</b>

Proxy distance represents the effective range of the weapon. It's not the weapon's maximum range — it's the distance you place the shooting device from your mech.

<b>SHORT (15cm):</b> Most weapons use SHORT proxy distance. Rifles, cannons, energy beams, shotguns. Place the device 1 Short Ruler from your mech.

<b>LONG (30cm):</b> Long-range weapons like mortars and missile pods use LONG proxy distance. Place the device 1 Long Ruler from your mech.

The proxy distance abstracts the weapon's range while keeping gameplay fast and physical.

<hr>

<i class="fas fa-lightbulb"></i> <b>SHOOTING TIPS</b>

<b>Aim High:</b> Projectiles arc. Aim slightly above your target for better accuracy.

<b>Clear Line of Fire:</b> Make sure terrain isn't blocking your shot. If a building is in the way, your projectile will hit it instead.

<b>Multiple Weapons:</b> If your mech has multiple weapons, you can fire them separately (1 AP each). Fire your rifle, then fire your missile pod.

<b>Device Placement:</b> Place the device carefully. The direction matters — match it to where your weapon is pointing on your mech.

<b>Practice:</b> The more you shoot, the better you'll get. Learn your devices' trajectories and power.`);

// RULE_4: Damage & HP
updateRule('rule_4', `Damage in ZERO ASSEMBLY is tracked with HP tokens. When a mech takes damage, HP tokens are placed at its feet. When a Core runs out of HP tokens, it's destroyed.

<hr>

<i class="fas fa-heart"></i> <b>HP POOLS</b>

Each Core starts with 4 HP. This is represented by 4 HP tokens placed on or near the Core at the start of the game.

When a mech takes damage, remove HP tokens from the Core's HP pool and place them at the mech's feet. The tokens are no longer part of the mech's HP — they're on the ground.

<hr>

<i class="fas fa-heart-crack"></i> <b>TAKING DAMAGE</b>

When your mech is hit by a weapon, check the weapon's DP (Damage Points) value. Remove that many HP tokens from your Core's HP pool and place them at your mech's feet.

Example: Your mech is hit by a rifle (2 DP). Remove 2 HP tokens from your Core and place them at your mech's feet. Your Core now has 2 HP remaining.

<hr>

<i class="fas fa-skull"></i> <b>DESTRUCTION</b>

When a Core runs out of HP tokens (0 HP), it's destroyed. Remove the entire Frame from the battlefield immediately.

If you control 2 Solo Mechs and one is destroyed, you still have the other. If you control 1 Duo Mech (2 Cores connected) and one Core is destroyed, the entire mech is destroyed — both Cores are removed.

<hr>

<i class="fas fa-wrench"></i> <b>HEALING (SCAVENGING HP)</b>

You can heal by scavenging HP tokens. When you take the SCAVENGE action, pick up all HP tokens touching your mech's base. These tokens go back into your Core's HP pool.

You can scavenge your own HP tokens (healing damage you took) or enemy HP tokens (stealing their lost health). This creates tactical decisions: do you advance and attack, or fall back and recover?

Resource Cubes also heal. When you scavenge a Resource Cube, gain 1 HP immediately (add 1 HP token to your Core's HP pool).

<hr>

<i class="fas fa-shield"></i> <b>MAXIMUM HP</b>

Each Core has a maximum of 4 HP. You cannot heal above this limit. If you scavenge HP tokens when already at 4 HP, the excess tokens are wasted.

Exception: Some equipment or perks may increase your maximum HP. Check the equipment card or perk description.

<hr>

<i class="fas fa-lightbulb"></i> <b>HP MANAGEMENT TIPS</b>

<b>Protect Your HP Tokens:</b> When you take damage, HP tokens drop at your feet. If you don't scavenge them quickly, your opponent can steal them.

<b>Deny Enemy Healing:</b> Scavenge enemy HP tokens to prevent them from healing.

<b>Resource Control:</b> Control areas with Resource Cubes. They're free healing.

<b>Retreat When Low:</b> If you're at 1-2 HP, consider retreating to scavenge and heal. A destroyed mech can't score VP.

<b>Duo Mechs:</b> If you built a Duo Mech, track HP separately for each Core. When one Core hits 0 HP, the entire mech is destroyed.`);

console.log('\n✅ Batch 2 complete (rule_3, rule_4)');
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved!\n');
