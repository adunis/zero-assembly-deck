const fs = require('fs');

// Start with what we have
const existing = JSON.parse(fs.readFileSync('public/data/rules.json', 'utf8'));

// Add all remaining rule sections with FA icons
const additionalRules = [
  {
    "id": "rule_1",
    "title": "ACTIONS (2 AP PER TURN TOTAL)",
    "description": "Every turn you get 2 Action Points (AP) **total** — not per mech! You can spend these AP on any of your mechs.\n\n<i class=\"fas fa-person-walking\"></i> MOVE (1 AP): Move one of your mechs one ruler length in any direction.\n\n<i class=\"fas fa-gun\"></i> ENGAGE (1 AP): Fire one weapon from one of your mechs. Check the weapon card for its PROXY distance, place the toy device that distance from your mech (matching the direction your weapon is pointing), then fire the device. If the physical projectile hits the enemy mech, they take damage.\n\n<i class=\"fas fa-wrench\"></i> SCAVENGE (1 AP): Pick up one item from the table that is physically touching one of your mech's base:\n  • **HP Token:** Add it back to your HP pool — you heal 1 HP. You can scavenge your own lost HP tokens or enemy HP tokens.\n  • **<i class=\"fas fa-wrench\"></i> Resource Token:** Gain 1 HP immediately (add token to your HP pool).\n  • **<i class=\"fas fa-box\"></i> Equipment Cube:** Randomly pick one piece from the scavenging pile. You can equip it on your mech however you want. This is the **only way to modify your mech during the game**.\n\n<i class=\"fas fa-rotate\"></i> REPOSITION (1 AP): Do ONE of the following on one of your mechs:\n  • Rotate your mech's torso to face any direction\n  • Re-pose one limb (arm, weapon, leg) to a new angle\n  • Stand your mech back up if it has fallen over\n\n<i class=\"fas fa-lightbulb\"></i> SPENDING AP: You can spend both AP on one mech, or split them between your mechs.\n\n**Examples:**\n• 2 Solo Mechs: Mech 1 MOVE + Mech 2 MOVE (2 AP)\n• 2 Solo Mechs: Mech 1 MOVE + ENGAGE (2 AP on one mech)\n• 1 Duo Mech: MOVE + ENGAGE (2 AP)",
    "medium": "• 2 AP per turn TOTAL (not per mech).\n• Spend on any of your mechs.\n• Can use both AP on one mech or split between mechs.\n• Move, Engage, Scavenge (HP/Resources/Equipment), or Reposition.",
    "quick": "<table><tr><th>Action</th><th>Cost</th></tr><tr><td><i class=\"fas fa-person-walking\"></i> MOVE</td><td>1 AP</td></tr><tr><td><i class=\"fas fa-gun\"></i> ENGAGE</td><td>1 AP</td></tr><tr><td><i class=\"fas fa-wrench\"></i> SCAVENGE</td><td>1 AP</td></tr><tr><td><i class=\"fas fa-rotate\"></i> REPOSITION</td><td>1 AP</td></tr></table><br><b>Total:</b> 2 AP per turn"
  },
  {
    "id": "rule_1b",
    "title": "BATTLEFIELD OBJECTS",
    "description": "During Scenario Preparation, three types of objects are placed on the battlefield:\n\n<i class=\"fas fa-bullseye\"></i> OBJECTIVES:\nScenario-specific markers (flags, control points, data terminals, etc.). Interact with these according to scenario rules to score Victory Points.\n• **Examples:** Capture flags, hold control points, destroy targets\n• **Interaction:** Varies by scenario (usually requires touching or staying near)\n• **VP Value:** Specified in scenario rules\n\n<i class=\"fas fa-wrench\"></i> RESOURCES:\nResource tokens placed on terrain during setup. Represent battlefield salvage — ammunition caches, spare parts, medical supplies.\n• **How to Get:** SCAVENGE action (1 AP) when physically touching your mech's base\n• **Effect:** Gain 1 HP immediately (add token to your HP pool)\n• **Strategy:** Resources let you heal beyond your starting HP, but you must reach them first\n\n<i class=\"fas fa-box\"></i> EQUIPMENT:\nEquipment cubes placed on terrain during setup. Represent advanced battlefield salvage — experimental weapons, prototype systems, rare components.\n• **How to Get:** SCAVENGE action (1 AP) when physically touching your mech's base\n• **Effect:** Randomly pick one piece from the scavenging pile (the parts not used during build phase). You can equip it on your mech however you want — attach it physically to your frame.\n• **Important:** This is the **ONLY way to modify or improve your mech during the game**. You cannot add equipment any other way.\n• **Strategy:** Equipment cubes can give you weapons, armor, or systems you didn't build with. High risk, high reward — you don't know what you'll get until you pick.\n\n<i class=\"fas fa-lightbulb\"></i> SCAVENGING PRIORITY:\nWhen you SCAVENGE, you can only pick up ONE item touching your base:\n• HP Token (yours or enemy's) = Heal 1 HP\n• Resource Token = Heal 1 HP\n• Equipment Cube = Random equipment from scavenging pile\n\nIf multiple items are touching your base, choose which one to scavenge.",
    "medium": "• Objectives: Scenario-specific, score VP.\n• Resources: Scavenge for +1 HP.\n• Equipment: Scavenge for random part from pile (only way to modify mech during game).\n• Scavenge action picks up one item touching your base.",
    "quick": "<b><i class=\"fas fa-bullseye\"></i> Objectives:</b> Score VP per scenario<br><b><i class=\"fas fa-wrench\"></i> Resources:</b> +1 HP<br><b><i class=\"fas fa-box\"></i> Equipment:</b> Random part (only way to modify mech)"
  }
];

// Combine all rules
const completeRules = [...existing, ...additionalRules];

// Write complete file
fs.writeFileSync('public/data/rules.json', JSON.stringify(completeRules, null, 2), 'utf8');

console.log(`✓ Added ${additionalRules.length} more rule sections`);
console.log(`✓ Total entries: ${completeRules.length}`);
console.log('✓ Font Awesome icons applied throughout');
console.log('');
console.log('Current sections:');
completeRules.forEach(r => console.log(`  - ${r.id}: ${r.title}`));
