const fs = require('fs');

const rules = JSON.parse(fs.readFileSync('public/data/rules.json', 'utf8'));

// Find and update the ltp_1 entry
const ltpIndex = rules.findIndex(r => r.id === 'ltp_1');

if (ltpIndex !== -1) {
  rules[ltpIndex] = {
    "id": "ltp_1",
    "title": "LEARN TO PLAY IN 5 MINUTES",
    "description": "ZERO ASSEMBLY is a physics wargame set in the Signal War of 2030. Build a mech from 3D-printed parts, then fight using real toy cannons. No dice. No math. If your shot hits, it hits.\n\n<i class=\"fas fa-gamepad\"></i> GAME PHASES:\n1. <i class=\"fas fa-building\"></i> TERRAIN BUILDING: Players alternate placing terrain (15cm spacing)\n2. <i class=\"fas fa-gear\"></i> SCAVENGING: 10-minute timer to build your mech(s) from parts\n3. <i class=\"fas fa-clipboard\"></i> SCENARIO PREP: Place Objectives, Resources, and Equipment on terrain\n4. <i class=\"fas fa-rocket\"></i> DEPLOYMENT: Deploy your mech(s) in your zone\n5. <i class=\"fas fa-swords\"></i> COMBAT: Play 4 Rounds, alternating turns\n\n<i class=\"fas fa-bolt\"></i> YOUR TURN: You get 2 Action Points (AP). Spend them on:\n• <i class=\"fas fa-person-walking\"></i> MOVE (1 AP) — advance one ruler length\n• <i class=\"fas fa-gun\"></i> ENGAGE (1 AP) — fire your weapon\n• <i class=\"fas fa-wrench\"></i> SCAVENGE (1 AP) — pick up HP token, Resource, or Equipment\n• <i class=\"fas fa-rotate\"></i> REPOSITION (1 AP) — rotate, re-pose, or stand up\n\n<i class=\"fas fa-bullseye\"></i> SHOOTING: Place the device 1 Short Ruler from your mech (or 1 Long Ruler for missiles). Fire. If it hits the enemy — that's a hit.\n\n<i class=\"fas fa-heart-crack\"></i> DAMAGE: On a hit, place HP tokens equal to the weapon's damage at your mech's feet. Anyone can scavenge them.\n\n<i class=\"fas fa-trophy\"></i> WINNING: Most Victory Points after Round 4, or destroy the enemy Core for instant victory.",
    "medium": "• 5 Phases: Terrain → Scavenge → Scenario → Deploy → Combat.\n• 2 AP per turn: Move, Engage, Scavenge, or Reposition.\n• Physical hits = place HP tokens at feet.\n• Win: Most VP after 4 Rounds or Core destroyed.",
    "quick": "<b>Phases:</b> 5 steps from terrain to combat<br><b>Core Rules:</b> 2 AP per turn &bull; Physical hits count &bull; 0 HP = destroyed"
  };
  
  console.log('✓ Updated ltp_1 with Font Awesome icons');
} else {
  console.log('✗ Could not find ltp_1 entry');
}

// Write back
fs.writeFileSync('public/data/rules.json', JSON.stringify(rules, null, 2), 'utf8');
console.log('✓ Saved rules.json');
console.log('✓ All emojis in LEARN TO PLAY section replaced with FA icons');
