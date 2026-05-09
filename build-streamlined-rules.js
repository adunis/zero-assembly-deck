const fs = require('fs');

// Read existing rules
const oldRules = JSON.parse(fs.readFileSync('./public/data/rules.json', 'utf8'));

// Create new 3-tier structure
const newRules = [
  // TIER 1: ULTRA-QUICK (for experienced players)
  {
    id: "ultra_quick",
    title: "⚡ ULTRA-QUICK RULES",
    description: `<i class="fas fa-bolt"></i> <b>FOR EXPERIENCED PLAYERS</b>

<b>Setup:</b> Terrain → Build (10 min, 1 Core + 1 Top) → Scenario → Deploy → Fight (4 rounds)

<b>Turn:</b> 2 AP + 1 free REPOSITION

<b>Actions:</b> MOVE (legs 15cm+climb | wheels 30cm) • ENGAGE (2D6, need 7+, deal DP + Flick) • SCAVENGE (HP/Cubes) • RECHARGE (1 SP) • COUNTERMEASURES

<b>Weapons:</b> Direct (LoS, cover) • Indirect (no LoS, -1) • Lock-On (2 turns, auto-hit, >15cm)

<b>Damage:</b> Place HP tokens at feet • 0 HP = destroyed • Shields absorb 1 hit per SP, block flicks

<b>Flick:</b> 1-2 DP = 1 flick | 3 DP = 2 flicks | Falls >5cm = +1 DP

<b>Win:</b> Most VP after 4 rounds or destroy enemy Core`,
    medium: "<b>Setup:</b> 5 phases<br><b>Turn:</b> 2 AP + free REPOSITION<br><b>Roll:</b> 2D6, need 7+<br><b>Flick:</b> After every hit<br><b>Win:</b> VP or destroy Core",
    quick: "<b>2 AP</b> • <b>2D6 (7+)</b> • <b>Flick on hit</b> • <b>4 rounds</b>"
  },

  // TIER 2: QUICK REFERENCE (condensed glossary)
  {
    id: "quick_ref",
    title: "📖 QUICK REFERENCE",
    description: oldRules[0].description, // Keep the glossary as-is
    medium: oldRules[0].medium,
    quick: oldRules[0].quick
  },

  // LORE SECTIONS (keep as-is)
  oldRules[2], // THE SIGNAL WAR
  oldRules[1], // FACTIONS & NEURALLOY

  // TIER 3: DETAILED RULES (no repetition)
  {
    id: "setup",
    title: "🎮 GAME SETUP",
    description: `<i class="fas fa-gamepad"></i> <b>THE FIVE PHASES</b>

ZERO ASSEMBLY games follow a structured setup process. Each phase prepares a different aspect of the battle.

<hr>

<i class="fas fa-mountain"></i> <b>PHASE 1: TERRAIN</b>

Players alternate placing terrain pieces on the battlefield. Each piece must be at least 15cm from other terrain. Place 10-15 pieces total for a standard game.

Terrain provides cover and blocks line of sight. Taller pieces create better cover.

<hr>

<i class="fas fa-wrench"></i> <b>PHASE 2: BUILD MECH (10 MINUTES)</b>

Each player has exactly 10 minutes to assemble their mech from 3D-printed parts.

<b>Requirements:</b>
• Exactly 1 Core (provides 4 HP)
• Exactly 1 Top (seals the Core)
• Ground Contact: Only Legs, Wheels, or Treads may touch the ground

<b>Leg Types:</b>
• <b>Pure Legs:</b> Only legs touching = 15cm movement + climbing (up to 5cm)
• <b>Pure Wheels/Treads:</b> Only wheels/treads touching = 30cm movement, no climbing
• <b>Mixed:</b> Multiple leg types touching = 15cm movement, no climbing

<b>Recommendation:</b> Stick to one leg type for best performance.

<hr>

<i class="fas fa-flag"></i> <b>PHASE 3: SCENARIO</b>

Choose a scenario (Deathmatch, Capture the Flag, or Rush). Place objective markers and Resource Cubes according to scenario rules.

<hr>

<i class="fas fa-chess"></i> <b>PHASE 4: DEPLOY</b>

Flip a coin. Winner chooses their deployment zone. Loser deploys first, winner deploys second. Mechs must start within their deployment zone.

<hr>

<i class="fas fa-swords"></i> <b>PHASE 5: COMBAT</b>

Play 4 rounds. Players alternate taking turns. The player who went first in Round 1 goes second in Round 2 (alternates each round).`,
    medium: "5 Phases: Terrain → Build (10 min) → Scenario → Deploy → Combat (4 rounds)",
    quick: "<b>5 Phases</b> • <b>10 min build</b> • <b>4 rounds</b>"
  },

  {
    id: "actions",
    title: "⚡ ACTIONS & TURN STRUCTURE",
    description: `<i class="fas fa-bolt"></i> <b>ACTION POINTS (AP)</b>

Each turn you get <b>2 AP</b> to spend on actions. You can use the same action twice (e.g., MOVE twice) or mix actions (e.g., MOVE then ENGAGE).

<hr>

<i class="fas fa-running"></i> <b>MOVE (1 AP)</b>

Advance one ruler length in any direction. Your movement distance depends on which leg types are touching the ground:

• <b>Pure Legs:</b> 15cm + can climb up to 5cm
• <b>Pure Wheels/Treads:</b> 30cm, no climbing
• <b>Mixed:</b> 15cm, no climbing

During movement, you can push terrain and ram enemies. Only touch YOUR OWN mech.

<hr>

<i class="fas fa-crosshairs"></i> <b>ENGAGE (1 AP)</b>

Fire a weapon at an enemy. Roll 2D6 to hit (need 7+ before modifiers). On a hit, deal damage equal to the weapon's DP value and perform Finger Flick(s).

You can ENGAGE twice per turn if you use different weapons.

See "SHOOTING & LINE OF SIGHT" for full details.

<hr>

<i class="fas fa-hand-holding"></i> <b>SCAVENGE (1 AP)</b>

Pick up all HP tokens or Resource Cubes touching your mech's base.

• <b>HP Tokens:</b> Return to your Core's HP pool (healing)
• <b>Resource Cubes:</b> Gain +1 HP immediately

You can scavenge your own HP tokens or enemy HP tokens.

<hr>

<i class="fas fa-bolt-lightning"></i> <b>RECHARGE (1 AP)</b>

Restore 1 Shield Point (SP) to an Energy Shield on your mech (up to the shield's maximum capacity).

<b>Restriction:</b> You cannot RECHARGE and ENGAGE in the same turn — choose offense or defense.

<b>Example:</b> Your Aegis Shield (3 SP max) is at 1 SP. Spend 1 AP to RECHARGE, restoring it to 2 SP. Next turn, RECHARGE again to reach 3 SP.

<hr>

<i class="fas fa-shield-halved"></i> <b>DEPLOY COUNTERMEASURES (1 AP or Reactive)</b>

Break Lock-On targeting on your mech. Check equipment card for details.

• <b>Reactive (0 AP):</b> Triggers automatically when enemy tries to lock. Roll to break.
• <b>Active (1 AP):</b> Break existing locks or create defensive effects.

<b>Example:</b> Enemy tries to LOCK. You have Chaff Flares (reactive). Roll 1D6: 4+ = lock fails.

<hr>

<i class="fas fa-rotate"></i> <b>REPOSITION (0 AP, Free)</b>

Rotate your mech, bend joints, adjust pose, or stand up if fallen. Your mech's position on the table cannot change.

Use once per turn, before, after, or between other actions.

<hr>

<i class="fas fa-repeat"></i> <b>TURN STRUCTURE</b>

Players alternate taking turns. You spend your 2 AP (and optionally use your free REPOSITION), then your opponent spends their 2 AP (and optionally uses their free REPOSITION). After both players have taken their turns, the round ends.

The player who went first in Round 1 goes second in Round 2. Turn order alternates each round to keep things fair.

The game lasts exactly 4 rounds. After Round 4 ends, count Victory Points. Most VP wins. If one player's Core is destroyed before Round 4 ends, the game ends immediately. The surviving player wins.

<hr>

<i class="fas fa-cubes"></i> <b>BATTLEFIELD OBJECTS</b>

<b>HP Tokens:</b> Represent lost health. When hit, place HP tokens at your mech's feet. Anyone can scavenge them.

<b>Shield Tokens:</b> Represent shield capacity. Use different colored tokens (e.g., blue) to track SP separately from HP.

<b>Resource Cubes:</b> Neuralloy salvage. Scavenge for +1 HP (field repairs).

<b>Objective Markers:</b> Scenario objectives. Control or capture them for Victory Points.

<b>Hazard Markers:</b> Dangerous terrain. Mechs touching them take 1 DP.

<b>LOCK Tokens:</b> Mark locked targets. Removed after firing.`,
    medium: "2 AP per turn: MOVE, ENGAGE, SCAVENGE, RECHARGE, COUNTERMEASURES. 1 free REPOSITION. Cannot RECHARGE + ENGAGE same turn. Game = 4 Rounds.",
    quick: "<b>2 AP</b> • <b>6 actions</b> • <b>Free REPOSITION</b> • <b>4 rounds</b>"
  },

  {
    id: "shooting",
    title: "🎯 SHOOTING & LINE OF SIGHT",
    description: oldRules[6].description, // Keep shooting rules as-is (already detailed)
    medium: oldRules[6].medium,
    quick: oldRules[6].quick
  },

  {
    id: "damage",
    title: "💔 DAMAGE & HP",
    description: oldRules[7].description, // Keep damage rules as-is
    medium: oldRules[7].medium,
    quick: oldRules[7].quick
  },

  {
    id: "movement",
    title: "🏃 MOVEMENT & TERRAIN",
    description: oldRules[8].description, // Keep movement rules as-is
    medium: oldRules[8].medium,
    quick: oldRules[8].quick
  },

  // 3D PRINTING GUIDE
  oldRules[4],

  // SCENARIOS
  oldRules[9],
  oldRules[10],
  oldRules[11]
];

// Write new rules
fs.writeFileSync('./public/data/rules-streamlined.json', JSON.stringify(newRules, null, 2));

console.log('✅ Streamlined rules created!');
console.log(`   Old: ${oldRules.length} sections`);
console.log(`   New: ${newRules.length} sections`);
console.log('');
console.log('Structure:');
console.log('  TIER 1: Ultra-Quick (1 section)');
console.log('  TIER 2: Quick Reference (1 section)');
console.log('  LORE: 2 sections');
console.log('  TIER 3: Detailed Rules (7 sections)');
console.log('  SCENARIOS: 3 sections');
console.log('');
console.log('Next: Review rules-streamlined.json, then replace rules.json');
