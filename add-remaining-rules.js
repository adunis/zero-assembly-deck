const fs = require('fs');

const existing = JSON.parse(fs.readFileSync('public/data/rules.json', 'utf8'));

const moreRules = [
  {
    "id": "rule_2",
    "title": "TURN ORDER & ACTIVATIONS",
    "description": "Players alternate taking turns. On your turn, you get **2 AP total** to spend on any of your mechs.\n\n<i class=\"fas fa-bullseye\"></i> TURN STRUCTURE:\n1. **Your Turn:** Spend 2 AP on any of your mechs\n2. **Opponent's Turn:** They spend 2 AP on any of their mechs\n3. **Repeat** until all players have taken a turn\n4. **Round Ends:** Start a new round\n\n<i class=\"fas fa-swords\"></i> The game lasts **4 Rounds**.\n\n<i class=\"fas fa-lightbulb\"></i> STRATEGIC CHOICE: 1 Mech vs 2 Mechs\n\n**1 Solo Mech (1 Frame):**\n• <i class=\"fas fa-check\"></i> All equipment on one platform (concentrated firepower)\n• <i class=\"fas fa-check\"></i> Simpler to manage\n• <i class=\"fas fa-check\"></i> Easier to build in 10 minutes\n• <i class=\"fas fa-xmark\"></i> Single point of failure\n• <i class=\"fas fa-xmark\"></i> Can only be in one place\n\n**2 Solo Mechs (2 Frames):**\n• <i class=\"fas fa-check\"></i> Redundancy (losing one doesn't end game)\n• <i class=\"fas fa-check\"></i> Board control (two locations)\n• <i class=\"fas fa-check\"></i> Flanking opportunities\n• <i class=\"fas fa-xmark\"></i> Split firepower (must divide 2 AP between them)\n• <i class=\"fas fa-xmark\"></i> Harder to build in 10 minutes\n• <i class=\"fas fa-xmark\"></i> 4 HP each (die faster)\n\n**1 Duo Mech (2 Frames):**\n• <i class=\"fas fa-check\"></i> 8 HP total (harder to kill)\n• <i class=\"fas fa-check\"></i> 16 equipment slots (more firepower)\n• <i class=\"fas fa-check\"></i> Concentrated force\n• <i class=\"fas fa-xmark\"></i> Single target\n• <i class=\"fas fa-xmark\"></i> Can only be in one place",
    "medium": "• Players alternate turns.\n• 2 AP per turn total (spend on any mech).\n• Game = 4 Rounds.\n• Choice: 1 mech (power) vs 2 mechs (flexibility).",
    "quick": "<b>Flow:</b> You act (2 AP) → Opponent acts (2 AP) → Repeat<br><b>Game:</b> 4 Rounds"
  },
  {
    "id": "rule_3",
    "title": "SHOOTING",
    "description": "Your 3D-printed weapon shows where you're aiming. To fire:\n\n1️⃣ CHECK PROXY DISTANCE: Look at your weapon card. It shows either SHORT, LONG, TOUCH, or CLOSE.\n\n2️⃣ PLACE THE DEVICE: \n   • <i class=\"fas fa-ruler\"></i> SHORT: Place the toy device 1 Short Ruler away from your mech's base, in the direction your weapon is pointing\n   • <i class=\"fas fa-ruler\"></i><i class=\"fas fa-ruler\"></i> LONG: Place the toy device 1 Long Ruler away from your mech's base (missiles can shoot around corners!)\n   • <i class=\"fas fa-hand-fist\"></i> TOUCH: Your mech must be physically touching the enemy (melee weapons)\n   • <i class=\"fas fa-burst\"></i> CLOSE: Place the device within 10cm of the target (point-blank weapons)\n\n3️⃣ AIM: The device should point in the same direction as your 3D-printed weapon. Imagine a line from your weapon through the device to the target.\n\n4️⃣ FIRE: Press the button or trigger on the toy device to launch the projectile.\n\n5️⃣ CHECK HIT: If the physical projectile touches any part of the enemy mech, it's a hit. The enemy takes damage.\n\n<i class=\"fas fa-location-dot\"></i> PROXY DISTANCE is how far you can place the shooting device from your mech. It represents your weapon's tactical flexibility — missiles (LONG) can be fired from far away to shoot around corners, while direct-fire weapons (SHORT) must be placed closer.",
    "medium": "• Weapon card shows proxy distance.\n• Place device at that distance from your mech.\n• Aim in same direction as your weapon.\n• Fire. Physical hit = hit.",
    "quick": "<b>Proxy:</b> Device placement distance<br><b><i class=\"fas fa-ruler\"></i> SHORT:</b> 1 Short Ruler<br><b><i class=\"fas fa-ruler\"></i><i class=\"fas fa-ruler\"></i> LONG:</b> 1 Long Ruler"
  },
  {
    "id": "rule_4",
    "title": "DAMAGE & HP",
    "description": "When hit, you take Damage Points (DP) shown on the weapon card.\n\n<i class=\"fas fa-heart-crack\"></i> For each 1 DP, place 1 HP token at your mech's feet. These become scrap — anyone can scavenge them to heal.\n\n<i class=\"fas fa-bolt\"></i> If you have A.T. Shields, lose those first (they vanish — can't be scavenged).\n\n<i class=\"fas fa-skull\"></i> When your Core reaches 0 HP, you're destroyed.",
    "medium": "• Hit = place HP tokens at feet (1 per DP).\n• A.T. Shields absorb damage first (vanish when used).\n• 0 HP = destroyed.",
    "quick": "<b>On Hit:</b> Place HP tokens at feet<br><b>0 HP:</b> Destroyed"
  },
  {
    "id": "rule_5",
    "title": "MOVEMENT & LEG TYPES",
    "description": "<i class=\"fas fa-person-walking\"></i> MOVE (1 AP) advances your mech one ruler length in any direction. Measure from your mech's current position to where it will end up. The ruler must be placed flat on the ground — measure horizontal distance only, not diagonal through the air.\n\n<i class=\"fas fa-gear\"></i> HYBRID LOCOMOTION: Your mech can have MULTIPLE leg types installed at the same time (wheels + legs, treads + spider legs, etc.). You qualify for a movement type if you meet its minimum requirements:\n\n• <i class=\"fas fa-circle\"></i> WHEELS: Requires at least 2 wheels touching the ground. Move 1 Long Ruler per action. Ground-locked — cannot climb vertical surfaces or stairs. Fastest on flat terrain.\n\n• <i class=\"fas fa-tractor\"></i> TREADS: Requires at least 2 treads touching the ground (on the tread side, not the wheel side). Move 1 Short Ruler per action. Ground-locked — cannot climb vertical surfaces or stairs. Stable but slower than wheels.\n\n• <i class=\"fas fa-spider\"></i> SPIDER: Requires at least 3 spider legs touching the ground. Move 1 Short Ruler per action. Can climb vertical surfaces by spending 1 AP to reach any elevated position (buildings, platforms, etc.). Place your mech on the elevated surface.\n\n• <i class=\"fas fa-person\"></i> BIPED: Requires exactly 2 legs touching the ground. Move 1 Short Ruler per action. Can climb vertical surfaces by spending 1 AP to reach any elevated position. Additionally, bipeds automatically step over obstacles under 5cm tall without spending extra AP (small rubble, low walls, etc.).\n\n<i class=\"fas fa-lightbulb\"></i> CHOOSING MOVEMENT: If you qualify for multiple movement types (e.g., you have 2 wheels + 2 legs), you choose which movement type to use each time you MOVE. You can switch between movement types during the same activation.\n\n<i class=\"fas fa-person-climbing\"></i> CLIMBING EXPLAINED: To climb, declare you're climbing, spend 1 AP, and place your mech on the elevated surface (roof, platform, etc.). You don't measure distance when climbing — the 1 AP gets you to the top regardless of height. You must be physically touching the structure you want to climb.",
    "medium": "• Mechs can have multiple leg types.\n• Qualify if you meet minimum requirements.\n• Wheels (2+) = Long Ruler, ground only.\n• Treads (2+) = Short Ruler, ground only.\n• Spider (3+) = Short Ruler, can climb.\n• Biped (2) = Short Ruler, can climb, ignore <5cm obstacles.\n• Choose which movement type to use each MOVE action.",
    "quick": "<table><tr><th>Legs</th><th>Min Required</th><th>Move</th><th>Climb</th></tr><tr><td><i class=\"fas fa-circle\"></i> Wheels</td><td>2 wheels</td><td>Long</td><td>No</td></tr><tr><td><i class=\"fas fa-tractor\"></i> Treads</td><td>2 treads</td><td>Short</td><td>No</td></tr><tr><td><i class=\"fas fa-spider\"></i> Spider</td><td>3 legs</td><td>Short</td><td>1 AP</td></tr><tr><td><i class=\"fas fa-person\"></i> Biped</td><td>2 legs</td><td>Short</td><td>1 AP</td></tr></table>"
  }
];

const completeRules = [...existing, ...moreRules];
fs.writeFileSync('public/data/rules.json', JSON.stringify(completeRules, null, 2), 'utf8');

console.log(`✓ Added ${moreRules.length} more sections`);
console.log(`✓ Total: ${completeRules.length} entries`);
