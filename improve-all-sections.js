const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('public/data/rules.json', 'utf8'));

// Improve SETUP section
const setupIndex = rules.findIndex(r => r.id === 'setup_1');
if (setupIndex !== -1) {
  rules[setupIndex].description = `<i class="fas fa-gamepad"></i> <b>PLAYERS CONTROL:</b> Each player controls a maximum of <b>2 Frames</b> (Cores). You get <b>2 AP per turn total</b> (not per mech!) to spend on any of your mechs.

<i class="fas fa-ruler-combined"></i> <b>FRAME OPTIONS:</b>
<br>• <b>1 Solo Mech</b> (1 Frame): 4 HP, 8 equipment slots
<br>• <b>2 Solo Mechs</b> (2 Frames): 4 HP each, 8 slots each
<br>• <b>1 Duo Mech</b> (2 Frames): 8 HP, 16 equipment slots

<i class="fas fa-building"></i> <b>PHASE 1 — TERRAIN BUILDING:</b>
<br>Players alternate placing terrain pieces from those available.
<br>• Must be <b>15cm from other terrain</b>
<br>• Must be <b>15cm from board edges</b>

<i class="fas fa-gear"></i> <b>PHASE 2 — SCAVENGING (Build Phase):</b>
<br>Set a 10-minute timer. Build your mech(s) from available parts.
<br>• <b>Veteran Option:</b> Players with existing mechs can:
<br>&nbsp;&nbsp;- Skip scavenging and use existing mech, OR
<br>&nbsp;&nbsp;- Participate in scavenging and choose at end (existing vs new)

<i class="fas fa-clipboard"></i> <b>PHASE 3 — SCENARIO PREPARATION:</b>
<br>Read the chosen scenario instructions and prepare the battlefield:
<br>• <b><i class="fas fa-bullseye"></i> Objectives:</b> Place objective markers (flags, control points, etc.) as specified by scenario
<br>• <b><i class="fas fa-wrench"></i> Resources:</b> Place Resource tokens on terrain — scavenge to gain 1 HP
<br>• <b><i class="fas fa-box"></i> Equipment:</b> Place Equipment cubes on terrain — retrieve to randomly pick a piece from scavenging pile and equip it on your mech however you want (only way to modify mech during game)

<i class="fas fa-rocket"></i> <b>PHASE 4 — DEPLOYMENT:</b>
<br>• Flip coin: loser picks deployment zone first, winner deploys last
<br>• Place your mech(s) in your deployment zone

<i class="fas fa-swords"></i> <b>PHASE 5 — COMBAT:</b>
<br>• Play 4 Rounds
<br>• Alternate activations
<br>• Each player gets 2 AP per turn (spend on any mech)`;
}

// Improve SHOOTING section
const shootingIndex = rules.findIndex(r => r.id === 'rule_3');
if (shootingIndex !== -1) {
  rules[shootingIndex].description = `Your 3D-printed weapon shows where you're aiming. To fire:

<b>1. CHECK PROXY DISTANCE:</b> Look at your weapon card. It shows either SHORT, LONG, TOUCH, or CLOSE.

<b>2. PLACE THE DEVICE:</b>
<br>• <i class="fas fa-ruler"></i> <b>SHORT:</b> Place the toy device 1 Short Ruler away from your mech's base, in the direction your weapon is pointing
<br>• <i class="fas fa-ruler"></i><i class="fas fa-ruler"></i> <b>LONG:</b> Place the toy device 1 Long Ruler away from your mech's base (missiles can shoot around corners!)
<br>• <i class="fas fa-hand-fist"></i> <b>TOUCH:</b> Your mech must be physically touching the enemy (melee weapons)
<br>• <i class="fas fa-burst"></i> <b>CLOSE:</b> Place the device within 10cm of the target (point-blank weapons)

<b>3. AIM:</b> The device should point in the same direction as your 3D-printed weapon. Imagine a line from your weapon through the device to the target.

<b>4. FIRE:</b> Press the button or trigger on the toy device to launch the projectile.

<b>5. CHECK HIT:</b> If the physical projectile touches any part of the enemy mech, it's a hit. The enemy takes damage.

<i class="fas fa-location-dot"></i> <b>PROXY DISTANCE</b> is how far you can place the shooting device from your mech. It represents your weapon's tactical flexibility — missiles (LONG) can be fired from far away to shoot around corners, while direct-fire weapons (SHORT) must be placed closer.`;
}

// Improve MOVEMENT section
const movementIndex = rules.findIndex(r => r.id === 'rule_5');
if (movementIndex !== -1) {
  rules[movementIndex].description = `<i class="fas fa-person-walking"></i> <b>MOVE (1 AP)</b> advances your mech one ruler length in any direction. Measure from your mech's current position to where it will end up. The ruler must be placed flat on the ground — measure horizontal distance only, not diagonal through the air.

<i class="fas fa-gear"></i> <b>HYBRID LOCOMOTION:</b> Your mech can have MULTIPLE leg types installed at the same time (wheels + legs, treads + spider legs, etc.). You qualify for a movement type if you meet its minimum requirements:

<i class="fas fa-circle"></i> <b>WHEELS:</b> Requires at least 2 wheels touching the ground. Move 1 Long Ruler per action. Ground-locked — cannot climb vertical surfaces or stairs. Fastest on flat terrain.

<i class="fas fa-tractor"></i> <b>TREADS:</b> Requires at least 2 treads touching the ground (on the tread side, not the wheel side). Move 1 Short Ruler per action. Ground-locked — cannot climb vertical surfaces or stairs. Stable but slower than wheels.

<i class="fas fa-spider"></i> <b>SPIDER:</b> Requires at least 3 spider legs touching the ground. Move 1 Short Ruler per action. Can climb vertical surfaces by spending 1 AP to reach any elevated position (buildings, platforms, etc.). Place your mech on the elevated surface.

<i class="fas fa-person"></i> <b>BIPED:</b> Requires exactly 2 legs touching the ground. Move 1 Short Ruler per action. Can climb vertical surfaces by spending 1 AP to reach any elevated position. Additionally, bipeds automatically step over obstacles under 5cm tall without spending extra AP (small rubble, low walls, etc.).

<i class="fas fa-lightbulb"></i> <b>CHOOSING MOVEMENT:</b> If you qualify for multiple movement types (e.g., you have 2 wheels + 2 legs), you choose which movement type to use each time you MOVE. You can switch between movement types during the same activation.

<i class="fas fa-person-climbing"></i> <b>CLIMBING EXPLAINED:</b> To climb, declare you're climbing, spend 1 AP, and place your mech on the elevated surface (roof, platform, etc.). You don't measure distance when climbing — the 1 AP gets you to the top regardless of height. You must be physically touching the structure you want to climb.`;
}

fs.writeFileSync('public/data/rules.json', JSON.stringify(rules, null, 2), 'utf8');
console.log('✓ Improved formatting for SETUP, SHOOTING, and MOVEMENT sections');
console.log('✓ Better structure and readability');
