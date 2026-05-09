const fs = require('fs');

const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

// Find rule_1 (ACTIONS)
const rule1 = rules.find(r => r.id === 'rule_1');

if (rule1) {
  // Update the ENGAGE description in rule_1
  rule1.description = rule1.description.replace(
    /<b><i class="fas fa-gun"><\/i> ENGAGE \(1 AP\):<\/b> Fire one weapon from your mech\. Check the weapon's equipment card for its PROXY distance\. Place the toy shooting device that distance from your mech \(matching the direction your weapon is pointing\), then fire\. If the projectile physically hits the enemy mech, they take damage equal to the weapon's DP value\./,
    `<b><i class="fas fa-gun"></i> ENGAGE (1 AP):</b> Fire one weapon from your mech. Check the weapon's equipment card for its PROXY distance. Place the toy shooting device that distance from your mech (matching the direction your weapon is pointing), then fire. If the projectile physically hits the enemy mech, they take damage equal to the weapon's DP value. You can use ENGAGE twice per turn if you fire different weapons.`
  );
  
  // Update the ACTION ECONOMY section
  rule1.description = rule1.description.replace(
    /You can take the same AP action multiple times in one turn\. MOVE twice to cover more ground\. ENGAGE twice if you have multiple weapons\. SCAVENGE and then MOVE to grab resources and retreat\./,
    `You can take the same AP action multiple times in one turn. MOVE twice to cover more ground. ENGAGE twice if you have multiple weapons (must be different weapons). SCAVENGE and then MOVE to grab resources and retreat.`
  );
  
  console.log('✓ Updated rule_1 (ACTIONS)');
}

// Find ltp_1 (LEARN TO PLAY)
const ltp1 = rules.find(r => r.id === 'ltp_1');

if (ltp1) {
  // Update ENGAGE description in ltp_1
  ltp1.description = ltp1.description.replace(
    /<b>ENGAGE \(1 AP\):<\/b> Fire a weapon\. Place the shooting device 1 Short Ruler from your mech \(or 1 Long Ruler for mortars\)\. Fire the projectile\. If it physically hits the enemy mech, that's a hit\./,
    `<b>ENGAGE (1 AP):</b> Fire a weapon. Place the shooting device 1 Short Ruler from your mech (or 1 Long Ruler for mortars). Fire the projectile. If it physically hits the enemy mech, that's a hit. You can ENGAGE twice per turn if you use different weapons.`
  );
  
  console.log('✓ Updated ltp_1 (LEARN TO PLAY)');
}

// Find rule_3 (SHOOTING)
const rule3 = rules.find(r => r.id === 'rule_3');

if (rule3) {
  // Add a new section about multiple weapons
  const multipleWeaponsSection = `\n\n<hr>\n\n<i class=\"fas fa-gun\"></i><i class=\"fas fa-gun\"></i> <b>MULTIPLE WEAPONS PER TURN</b>\n\nYou can use ENGAGE twice in one turn if you fire different weapons. Each ENGAGE costs 1 AP, so firing two weapons costs 2 AP total.\n\n<b>Requirements:</b>\n• Must use different weapons (cannot fire the same weapon twice)\n• Each weapon must be attached to your mech\n• Each ENGAGE follows the normal shooting rules\n\n<b>Examples:</b>\n• ENGAGE (Rifle) → ENGAGE (Missile Pod) = Valid\n• ENGAGE (Rifle) → ENGAGE (Rifle) = Invalid (same weapon)\n• ENGAGE (Cannon) → REPOSITION → ENGAGE (Railgun) = Valid\n\n<b>Tactical Use:</b>\nDual-wielding weapons lets you deal massive damage in one turn, but it uses both your AP. You won't be able to MOVE or SCAVENGE that turn. Use this when you need to finish off an enemy or when you're in a good firing position.`;
  
  rule3.description = rule3.description + multipleWeaponsSection;
  
  console.log('✓ Updated rule_3 (SHOOTING) - Added multiple weapons section');
}

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved rules.json!');
console.log('\n📋 Summary:');
console.log('  - ENGAGE can be used twice per turn');
console.log('  - Must use different weapons');
console.log('  - Each ENGAGE costs 1 AP (2 AP total for two shots)');
