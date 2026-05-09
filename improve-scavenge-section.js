const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('public/data/rules.json', 'utf8'));

// Find and update rule_1 (ACTIONS) with better formatting
const rule1Index = rules.findIndex(r => r.id === 'rule_1');

if (rule1Index !== -1) {
  rules[rule1Index].description = `Every turn you get 2 Action Points (AP) <b>total</b> — not per mech! You can spend these AP on any of your mechs.

<i class="fas fa-person-walking"></i> <b>MOVE (1 AP):</b> Move one of your mechs one ruler length in any direction.

<i class="fas fa-gun"></i> <b>ENGAGE (1 AP):</b> Fire one weapon from one of your mechs. Check the weapon card for its PROXY distance, place the toy device that distance from your mech (matching the direction your weapon is pointing), then fire the device. If the physical projectile hits the enemy mech, they take damage.

<i class="fas fa-wrench"></i> <b>SCAVENGE (1 AP):</b> Pick up one item from the table that is physically touching one of your mech's base:
<br>• <b>HP Token:</b> Add it back to your HP pool — you heal 1 HP. You can scavenge your own lost HP tokens or enemy HP tokens.
<br>• <b><i class="fas fa-wrench"></i> Resource Token:</b> Gain 1 HP immediately (add token to your HP pool).
<br>• <b><i class="fas fa-box"></i> Equipment Cube:</b> Randomly pick one piece from the scavenging pile. You can equip it on your mech however you want. This is the <b>only way to modify your mech during the game</b>.

<i class="fas fa-rotate"></i> <b>REPOSITION (1 AP):</b> Do ONE of the following on one of your mechs:
<br>• Rotate your mech's torso to face any direction
<br>• Re-pose one limb (arm, weapon, leg) to a new angle
<br>• Stand your mech back up if it has fallen over

<i class="fas fa-lightbulb"></i> <b>SPENDING AP:</b> You can spend both AP on one mech, or split them between your mechs.

<b>Examples:</b>
<br>• 2 Solo Mechs: Mech 1 MOVE + Mech 2 MOVE (2 AP)
<br>• 2 Solo Mechs: Mech 1 MOVE + ENGAGE (2 AP on one mech)
<br>• 1 Duo Mech: MOVE + ENGAGE (2 AP)`;

  console.log('✓ Updated ACTIONS section with better formatting');
}

// Find and update rule_1b (BATTLEFIELD OBJECTS) with better formatting
const rule1bIndex = rules.findIndex(r => r.id === 'rule_1b');

if (rule1bIndex !== -1) {
  rules[rule1bIndex].description = `During Scenario Preparation, three types of objects are placed on the battlefield:

<i class="fas fa-bullseye"></i> <b>OBJECTIVES:</b>
<br>Scenario-specific markers (flags, control points, data terminals, etc.). Interact with these according to scenario rules to score Victory Points.
<br>• <b>Examples:</b> Capture flags, hold control points, destroy targets
<br>• <b>Interaction:</b> Varies by scenario (usually requires touching or staying near)
<br>• <b>VP Value:</b> Specified in scenario rules

<i class="fas fa-wrench"></i> <b>RESOURCES:</b>
<br>Resource tokens placed on terrain during setup. Represent battlefield salvage — ammunition caches, spare parts, medical supplies.
<br>• <b>How to Get:</b> SCAVENGE action (1 AP) when physically touching your mech's base
<br>• <b>Effect:</b> Gain 1 HP immediately (add token to your HP pool)
<br>• <b>Strategy:</b> Resources let you heal beyond your starting HP, but you must reach them first

<i class="fas fa-box"></i> <b>EQUIPMENT:</b>
<br>Equipment cubes placed on terrain during setup. Represent advanced battlefield salvage — experimental weapons, prototype systems, rare components.
<br>• <b>How to Get:</b> SCAVENGE action (1 AP) when physically touching your mech's base
<br>• <b>Effect:</b> Randomly pick one piece from the scavenging pile (the parts not used during build phase). You can equip it on your mech however you want — attach it physically to your frame.
<br>• <b>Important:</b> This is the <b>ONLY way to modify or improve your mech during the game</b>. You cannot add equipment any other way.
<br>• <b>Strategy:</b> Equipment cubes can give you weapons, armor, or systems you didn't build with. High risk, high reward — you don't know what you'll get until you pick.

<i class="fas fa-lightbulb"></i> <b>SCAVENGING PRIORITY:</b>
<br>When you SCAVENGE, you can only pick up ONE item touching your base:
<br>• HP Token (yours or enemy's) = Heal 1 HP
<br>• Resource Token = Heal 1 HP
<br>• Equipment Cube = Random equipment from scavenging pile
<br><br>If multiple items are touching your base, choose which one to scavenge.`;

  console.log('✓ Updated BATTLEFIELD OBJECTS section with better formatting');
}

fs.writeFileSync('public/data/rules.json', JSON.stringify(rules, null, 2), 'utf8');
console.log('✓ Saved improved formatting to rules.json');
