const fs = require('fs');

const existing = JSON.parse(fs.readFileSync('public/data/rules.json', 'utf8'));

const finalRules = [
  {
    "id": "rule_6",
    "title": "FALLING & FALL DAMAGE",
    "description": "<i class=\"fas fa-burst\"></i> FALLEN CONDITION: A mech is Fallen if any part of its frame (Core, Top, or structural components) is touching the ground. Only legs, treads, or wheels should touch the ground — if anything else touches, you're Fallen.\n\nFallen mechs:\n• <i class=\"fas fa-xmark\"></i> Can't move (even if legs are still touching the ground)\n• <i class=\"fas fa-check\"></i> Can still shoot\n• <i class=\"fas fa-check\"></i> Can still use other actions (ENGAGE, SCAVENGE, REPOSITION)\n• <i class=\"fas fa-rotate\"></i> Spend 1 AP (REPOSITION) to stand up — lift the frame off the ground so only feet touch\n\n<i class=\"fas fa-ruler\"></i> FALL DAMAGE: When a mech falls from a height:\n\n• **Short Ruler or less:** No damage\n• **Greater than Short Ruler:** Take 1 DP\n• **Greater than Long Ruler:** Take 2 DP\n\n<i class=\"fas fa-lightbulb\"></i> MEASURING FALL DISTANCE: Measure vertically from where the mech was to where it lands. If the mech falls off a building, measure the building's height.\n\n<i class=\"fas fa-triangle-exclamation\"></i> KNOCKBACK + FALL: If a weapon with knockback pushes you off a ledge, you take fall damage based on the height you fell.",
    "medium": "• Fallen = frame touching ground (not just feet).\n• Can't move, can shoot.\n• Stand up = 1 AP (Reposition) — lift frame off ground.\n• Fall damage: >Short Ruler = 1 DP, >Long Ruler = 2 DP.",
    "quick": "<b>Fallen:</b> Frame touches ground<br><b>Can't:</b> Move<br><b>Can:</b> Shoot<br><b>Stand:</b> 1 AP<br><b>Fall Damage:</b> >Short = 1 DP, >Long = 2 DP"
  },
  {
    "id": "rule_7",
    "title": "PILOT PERKS (ONCE PER MATCH)",
    "description": "<i class=\"fas fa-bullseye\"></i> SIMPLIFIED PERKS: All perks are **once per match** abilities. When you use a perk, flip the card face-down to track it's been used.\n\n<i class=\"fas fa-robot\"></i> MULTIPLE MECHS: If you control 2 mechs, choose which mech uses the perk when you activate it.\n\n<i class=\"fas fa-check\"></i> SYNCHED (3 or less colors): You can use 1 Perk during the match.\n\n<i class=\"fas fa-xmark\"></i> UNSYNCHED (4+ colors): No perks available.\n\n<i class=\"fas fa-palette\"></i> COLOR COUNT: Count colors on your mech at the end of the build phase. Scavenging HP tokens during the game doesn't change your color count.\n\n<i class=\"fas fa-lightbulb\"></i> PERK TYPES:\n• **Offensive:** Boost attacks\n• **Defensive:** Reduce damage\n• **Mobility:** Extra movement\n• **Tactical:** Special abilities\n• **Multi-Mech:** Synergize with having 2 mechs (e.g., Coordinated Strike, Tactical Relay)\n\n<i class=\"fas fa-file-lines\"></i> USING PERKS:\n1. Declare you're using your perk\n2. Choose which mech uses it (if you have 2)\n3. Apply the effect\n4. Flip the perk card face-down\n5. Cannot use again this match",
    "medium": "• All perks: once per match.\n• Flip card after use.\n• Synched (1-3 colors) = 1 Perk.\n• Multiple mechs: choose which uses perk.\n• Special multi-mech perks available.",
    "quick": "<b><i class=\"fas fa-check\"></i> SYNCHED:</b> 1 Perk (once per match)<br><b><i class=\"fas fa-xmark\"></i> UNSYNCHED:</b> 0 Perks<br><b>Track:</b> Flip card after use"
  },
  {
    "id": "rule_8",
    "title": "BUILD RULES",
    "description": "Every mech must have:\n• <i class=\"fas fa-gear\"></i> Exactly 1 Core per frame (your HP pool)\n• <i class=\"fas fa-shield\"></i> Exactly 1 Top per frame (seals the Core)\n• <i class=\"fas fa-person\"></i> Valid feet: Only Legs, Treads, or Wheels can touch the ground\n\n<i class=\"fas fa-lightbulb\"></i> HYBRID BUILDS: You can install multiple leg types on the same mech (e.g., 2 wheels + 2 legs, or 3 spider legs + 2 treads). During movement, you choose which leg type to use based on which requirements you meet. See MOVEMENT & LEG TYPES for qualification requirements.\n\n<i class=\"fas fa-robot\"></i> MULTI-FRAME MECHS: If building a Duo/Trio/larger mech, each frame needs its own Core and Top. The frames are physically connected and move as one unit.\n\nYour mech(s) must stand on their own when the 10-minute timer ends.",
    "medium": "• 1 Core + 1 Top per frame required.\n• Only Legs/Treads/Wheels touch ground.\n• Can mix multiple leg types.\n• Multi-frame mechs: connect frames physically.\n• Must stand at timer end.",
    "quick": "<b>Required:</b> 1 Core + 1 Top per frame<br><b>Feet:</b> Legs/Treads/Wheels only<br><b>Hybrid:</b> Multiple leg types allowed"
  },
  {
    "id": "scen_tdm",
    "title": "SCENARIO: DEATHMATCH",
    "description": "Pure combat. No objectives.\n\nVICTORY POINTS:\n• <i class=\"fas fa-heart-crack\"></i> 1 VP per enemy HP token on the table\n• <i class=\"fas fa-skull\"></i> 5 VP per enemy Core destroyed\n\n<i class=\"fas fa-trophy\"></i> Most VP after Round 4 wins.",
    "medium": "• No objectives.\n• 1 VP per HP token, 5 VP per Core.\n• Most VP after 4 Rounds wins.",
    "quick": "<b>VP:</b> 1 per HP token, 5 per Core"
  },
  {
    "id": "scen_ctf",
    "title": "SCENARIO: CAPTURE THE FLAG",
    "description": "SETUP: Place 1 Flag in each deployment zone.\n\nGOAL: <i class=\"fas fa-flag-checkered\"></i> Touch the enemy flag to pick it up. Return it to your flag to score 10 VP.\n\n<i class=\"fas fa-burst\"></i> If the carrier is hit or falls, they drop the flag immediately.\n\n<i class=\"fas fa-trophy\"></i> Most VP after Round 4 wins.",
    "medium": "• Touch enemy flag to carry.\n• Return to your flag = 10 VP.\n• Hit/fall = drop flag.",
    "quick": "<b>Score:</b> 10 VP per flag returned"
  },
  {
    "id": "scen_rush",
    "title": "SCENARIO: RUSH (ATTACK/DEFEND)",
    "description": "SETUP: Defenders place 3 objectives in the center. Attackers deploy on one edge, Defenders in the center.\n\nGOAL: <i class=\"fas fa-swords\"></i> Attackers touch an objective and survive 1 full Round while touching it to destroy it.\n\n<i class=\"fas fa-trophy\"></i> Attackers win if all 3 objectives are destroyed by Round 4. Defenders win if any survive.",
    "medium": "• Attackers: touch + survive 1 Round = destroy.\n• Attackers win if all 3 destroyed.\n• Defenders win if any survive.",
    "quick": "<b>Attack:</b> Touch + survive 1 Round<br><b>Win:</b> Destroy all 3"
  },
  {
    "id": "device_1",
    "title": "DEVICE: 3D-PRINTED CROSSBOW",
    "description": "<i class=\"fas fa-bow-arrow\"></i> Direct-fire mechanical launcher using flex-springs. High velocity, straight trajectory. Must be anchored firmly before firing. Compliant toy design — no metal parts.\n\n<i class=\"fas fa-box\"></i> AMMUNITION:\n• Standard Bolt: Single projectile for precision shots\n• Burst Bolt: Wider bolt representing multiple shots (2-3 projectiles)\n\nDirect-fire weapons shoot in a straight line — what you aim at is what you hit. Used by rifles, railguns, and energy beams.",
    "medium": "• High velocity.\n• Direct trajectory.\n• Must anchor first.\n• Fully 3D-printable.",
    "quick": "<b>Type:</b> Direct-fire crossbow<br><b>Ammo:</b> Standard Bolt, Burst Bolt",
    "imagePath": ""
  },
  {
    "id": "device_2",
    "title": "DEVICE: AIR CANNON (SMALL)",
    "description": "<i class=\"fas fa-wind\"></i> Light pneumatic launcher. Press button to fire in an arc trajectory. Can shoot over low cover. Used by light artillery and support weapons.\n\n<i class=\"fas fa-box\"></i> AMMUNITION:\n• Standard Shell: Basic projectile for standard damage\n• Explosive Shell: Larger projectile head for special effects (knockback, area damage, etc.)\n\nArc-fire weapons shoot in a curved trajectory — they can hit targets behind cover.",
    "medium": "• Light projectiles.\n• Arc trajectory.\n• Can shoot over cover.",
    "quick": "<b>Type:</b> Light arc-fire<br><b>Ammo:</b> Standard Shell, Explosive Shell",
    "imagePath": ""
  },
  {
    "id": "device_3",
    "title": "DEVICE: BIG AIR CANNON",
    "description": "<i class=\"fas fa-burst\"></i> Heavy pneumatic launcher. Press button to fire with greater force in an arc. Requires stable placement. Can shoot over medium cover. Used by heavy artillery.\n\n<i class=\"fas fa-box\"></i> AMMUNITION:\n• Standard BIG Shell: Large projectile for heavy damage\n• Explosive BIG Shell: Extra-large projectile head for maximum impact and special effects\n\nArc-fire weapons shoot in a curved trajectory — they can hit targets behind cover.",
    "medium": "• Heavy projectiles.\n• High force.\n• Arc trajectory.\n• Needs stability.",
    "quick": "<b>Type:</b> Heavy arc-fire<br><b>Ammo:</b> Standard BIG Shell, Explosive BIG Shell",
    "imagePath": ""
  },
  {
    "id": "device_4",
    "title": "DEVICE: MORTAR",
    "description": "<i class=\"fas fa-rocket\"></i> Upward-pointing launcher for extreme high-arc fire. Load multiple projectiles. Fires in a steep arc over tall cover and buildings. Used by missile pods and strategic weapons.\n\n<i class=\"fas fa-box\"></i> AMMUNITION:\n• Mini Rocket: Small missiles for precision strikes (2-4 projectiles)\n• Standard Shell: Same as Air Cannon ammo, for carpet bombing\n• Nuclear Bomb: Giant ammunition that must be dropped from above — massive damage and area effect\n\nMortars have the highest arc trajectory — they can shoot over buildings and hit targets in cover.",
    "medium": "• Extreme arc fire.\n• Multiple projectiles.\n• Shoots over buildings.\n• Strategic weapon.",
    "quick": "<b>Type:</b> Extreme arc-fire / indirect<br><b>Ammo:</b> Mini Rocket, Standard Shell, Nuclear Bomb",
    "imagePath": ""
  }
];

const completeRules = [...existing, ...finalRules];
fs.writeFileSync('public/data/rules.json', JSON.stringify(completeRules, null, 2), 'utf8');

console.log(`✓ Added ${finalRules.length} final sections`);
console.log(`✓ COMPLETE: ${completeRules.length} total entries`);
console.log('');
console.log('✅ rules.json is now complete with Font Awesome icons!');
console.log('');
console.log('Sections included:');
console.log('  • Lore (5)');
console.log('  • Learn to Play (1)');
console.log('  • Setup & Phases (1)');
console.log('  • Core Rules (8)');
console.log('  • Scenarios (3)');
console.log('  • Devices (4)');
console.log('');
console.log('Next: Update talents.json and equipment.json with FA icons');
