const fs = require('fs');

// This script builds the complete rules.json with Font Awesome icons
// Based on the conversation history and documentation

const rules = [
  // LORE SECTION (lore_1 through lore_5) - Already in rules-restored.json
  ...JSON.parse(fs.readFileSync('public/data/rules-restored.json', 'utf8')),
  
  // SETUP AND PHASES
  {
    "id": "setup_1",
    "title": "GAME SETUP & PHASES",
    "description": "<i class=\"fas fa-gamepad\"></i> PLAYERS CONTROL: Each player controls a maximum of **2 Frames** (Cores). You get **2 AP per turn total** (not per mech!) to spend on any of your mechs.\n\n<i class=\"fas fa-ruler-combined\"></i> FRAME OPTIONS:\n• **1 Solo Mech** (1 Frame): 4 HP, 8 equipment slots\n• **2 Solo Mechs** (2 Frames): 4 HP each, 8 slots each\n• **1 Duo Mech** (2 Frames): 8 HP, 16 equipment slots\n\n<i class=\"fas fa-building\"></i> PHASE 1 — TERRAIN BUILDING:\nPlayers alternate placing terrain pieces from those available.\n• Must be **15cm from other terrain**\n• Must be **15cm from board edges**\n\n<i class=\"fas fa-gear\"></i> PHASE 2 — SCAVENGING (Build Phase):\nSet a 10-minute timer. Build your mech(s) from available parts.\n• **Veteran Option:** Players with existing mechs can:\n  - Skip scavenging and use existing mech, OR\n  - Participate in scavenging and choose at end (existing vs new)\n\n<i class=\"fas fa-clipboard\"></i> PHASE 3 — SCENARIO PREPARATION:\nRead the chosen scenario instructions and prepare the battlefield:\n• **<i class=\"fas fa-bullseye\"></i> Objectives:** Place objective markers (flags, control points, etc.) as specified by scenario\n• **<i class=\"fas fa-wrench\"></i> Resources:** Place Resource tokens on terrain — scavenge to gain 1 HP\n• **<i class=\"fas fa-box\"></i> Equipment:** Place Equipment cubes on terrain — retrieve to randomly pick a piece from scavenging pile and equip it on your mech however you want (only way to modify mech during game)\n\n<i class=\"fas fa-rocket\"></i> PHASE 4 — DEPLOYMENT:\n• Flip coin: loser picks deployment zone first, winner deploys last\n• Place your mech(s) in your deployment zone\n\n<i class=\"fas fa-swords\"></i> PHASE 5 — COMBAT:\n• Play 4 Rounds\n• Alternate activations\n• Each player gets 2 AP per turn (spend on any mech)",
    "medium": "• Max 2 Frames per player.\n• 2 AP per turn total (not per mech!).\n• Phase 1: Build terrain (15cm spacing).\n• Phase 2: Scavenge/build mechs (10 min).\n• Phase 3: Scenario prep (Objectives, Resources, Equipment).\n• Phase 4: Deploy mechs.\n• Phase 5: Combat (4 Rounds).",
    "quick": "<b>Max:</b> 2 Frames<br><b>AP:</b> 2 per turn total<br><b>Phases:</b> Terrain → Scavenge → Scenario → Deploy → Combat"
  }
];

// Write the file
fs.writeFileSync('public/data/rules-partial.json', JSON.stringify(rules, null, 2), 'utf8');
console.log(`✓ Created rules-partial.json with ${rules.length} entries`);
console.log('  Next: Add remaining rule sections...');
