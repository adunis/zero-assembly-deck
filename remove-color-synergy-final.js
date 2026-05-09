const fs = require('fs');

const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

console.log('🎨 REMOVING ALL COLOR SYNERGY REFERENCES...\n');

// Update phase_2
const phase2 = rules.find(r => r.id === 'phase_2');
if (phase2) {
  // Remove color synergy section
  phase2.description = phase2.description.replace(
    /<hr>\s*<i class="fas fa-palette"><\/i> <b>COLOR SYNERGY<\/b>.*?(?=<hr>|$)/gs,
    ''
  );
  
  // Add simple perk selection
  phase2.description = phase2.description.replace(
    /Your mech cannot be modified during combat — build wisely\./,
    `Your mech cannot be modified during combat — build wisely.

<hr>

<i class="fas fa-star"></i> <b>PILOT PERKS</b>

Each player chooses 1 Pilot Perk before the game starts. Perks are powerful once-per-match abilities. Choose wisely — you can only use it once!

Flip your perk card face-up after using it to show it's been spent.`
  );
  
  console.log('✓ Updated phase_2: Removed color synergy, added simple perk selection');
}

// Update rule_7 (Pilot Perks)
const rule7 = rules.find(r => r.id === 'rule_7');
if (rule7) {
  rule7.description = `Pilot Perks are powerful once-per-match abilities. Each player chooses 1 Perk before the game starts.

<hr>

<i class="fas fa-star"></i> <b>CHOOSING YOUR PERK</b>

Before Phase 1 (Terrain Building), each player selects 1 Pilot Perk card from the available perks. This is your special ability for the match.

<b>Available Perks:</b>
<br>• <b>OVERCLOCK:</b> Gain +2 AP this turn (4 AP total)
<br>• <b>SCAVENGE MASTER:</b> SCAVENGE for 0 AP this turn
<br>• <b>JUMP JETS:</b> MOVE 1 Short Ruler ignoring terrain (up to 10cm height)
<br>• <b>PRECISION AIM:</b> Re-fire if you miss with a Crossbow weapon
<br>• <b>REACTIVE ARMOR:</b> When damaged, place 1 HP token within 5cm of attacker (1 DP if it touches them)
<br>• <b>STABILIZER LEGS:</b> Don't fall over from hits or knockback
<br>• <b>POWER SLIDE:</b> MOVE twice (2 AP), second move covers 2 Rulers
<br>• <b>HEAVY PLATING:</b> Ignore all damage from one hit
<br>• <b>PIVOT MASTER:</b> REPOSITION up to 3 times this turn
<br>• <b>LAST STAND:</b> When Core destroyed, take one final ENGAGE action

<hr>

<i class="fas fa-bolt"></i> <b>USING YOUR PERK</b>

You can use your Perk once per match, at any time during your turn (unless the perk specifies otherwise).

<b>When to Use:</b>
<br>• Declare "I'm using my Perk" before resolving the ability
<br>• Follow the perk's instructions
<br>• Flip the perk card face-up to show it's been used
<br>• You cannot use the perk again this match

<b>Timing:</b>
<br>• Most perks are used during your turn
<br>• Some perks (like REACTIVE ARMOR) trigger during opponent's turn
<br>• LAST STAND triggers when your Core is destroyed

<hr>

<i class="fas fa-lightbulb"></i> <b>PERK STRATEGY</b>

<b>Save It:</b> Don't waste your perk early. Wait for the critical moment.

<b>Game-Changers:</b> OVERCLOCK can turn a losing position into a winning one. LAST STAND can secure victory even in defeat.

<b>Defensive Perks:</b> HEAVY PLATING and STABILIZER LEGS can save your mech from destruction.

<b>Offensive Perks:</b> PRECISION AIM and REACTIVE ARMOR punish enemies who attack you.

<b>Mobility Perks:</b> JUMP JETS and POWER SLIDE let you reach objectives or escape danger.

Your perk is your ace in the hole. Use it wisely.`;

  rule7.medium = '• All perks: once per match.\n<br>• Choose 1 Perk before game starts.\n<br>• Flip card after use.\n<br>• Use at critical moments for maximum impact.';
  
  rule7.quick = '<b>Selection:</b> Choose 1 before game<br><b>Usage:</b> Once per match<br><b>Track:</b> Flip card after use';
  
  console.log('✓ Updated rule_7: Removed color synergy, simplified perk system');
}

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

console.log('\n💾 Saved rules.json!');
console.log('✅ All color synergy references removed!');
console.log('✅ Perk system simplified: Choose 1 before game, no color restrictions!');
