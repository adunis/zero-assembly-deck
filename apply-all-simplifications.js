const fs = require('fs');
const path = require('path');

// Read rules.json
const rulesPath = path.join(__dirname, 'public', 'data', 'rules.json');
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

console.log('Applying ALL simplifications...\n');

// ============================================
// SIMPLIFICATION 1: Remove "8 equipment slots" limit
// ============================================
console.log('1. Removing "8 equipment slots" limit...');

// ltp_1 - QUICK TIPS
const ltp1 = rules.find(r => r.id === 'ltp_1');
if (ltp1) {
    ltp1.description = ltp1.description.replace(
        'Each Core has 4 HP and 8 equipment slots.',
        'Each Core has 4 HP.'
    );
}

// setup_1 - WHAT YOU BUILD
const setup1 = rules.find(r => r.id === 'setup_1');
if (setup1) {
    setup1.description = setup1.description.replace(
        'One Core with 4 HP and 8 equipment slots.',
        'One Core with 4 HP.'
    );
}

// phase_2 - WHAT YOU BUILD
const phase2 = rules.find(r => r.id === 'phase_2');
if (phase2) {
    phase2.description = phase2.description.replace(
        'Your mech starts with 4 HP and has 8 equipment slots. Fill those slots with weapons, armor, legs, and utility systems.',
        'Your mech starts with 4 HP. Attach whatever weapons, armor, legs, and utility systems you can fit in 10 minutes.'
    );
    
    // Remove from BUILD STRATEGY section
    phase2.description = phase2.description.replace(
        '<b>Equipment Slots:</b> Each Core has 8 equipment slots. Fill them with weapons, armor, and utility systems. More equipment = more options in combat.\n\n',
        ''
    );
}

// rule_8 - BUILD RULES
const rule8 = rules.find(r => r.id === 'rule_8');
if (rule8) {
    rule8.description = rule8.description.replace(
        '<b>Equipment Slots:</b> Each Core has 8 equipment slots. Fill them with weapons, armor, and utility systems.\n\n',
        ''
    );
}

console.log('   ✓ Removed equipment slot limit from 4 chapters');

// ============================================
// SIMPLIFICATION 2: Remove Veteran Option
// ============================================
console.log('2. Removing Veteran Option...');

if (phase2) {
    // Remove entire VETERAN OPTION section
    phase2.description = phase2.description.replace(
        /<hr>\n\n<i class="fas fa-user-check"><\/i> <b>VETERAN OPTION<\/b>\n\nIf you already have a mech from a previous game, you have two choices:\n\n<b>Option 1:<\/b> Skip scavenging entirely and use your existing mech\. Place it aside during the build phase\.\n\n<b>Option 2:<\/b> Participate in scavenging and build a new mech\. At the end of the 10 minutes, choose which mech to use \(existing or new\)\. The unchosen mech goes back into the scrap pile\.\n\nThis option rewards players who build durable, well-designed mechs that survive multiple battles\.\n\n/,
        ''
    );
}

console.log('   ✓ Removed Veteran Option from phase_2');

// ============================================
// SIMPLIFICATION 3: Remove Board Edge Spacing
// ============================================
console.log('3. Removing board edge spacing rule...');

const phase1 = rules.find(r => r.id === 'phase_1');
if (phase1) {
    // Remove board edge spacing from SPACING RULES
    phase1.description = phase1.description.replace(
        '<br>4. <b>Spacing Rules:</b>\n<br>&nbsp;&nbsp;• Each terrain piece must be <b>at least 15cm from any other terrain</b>\n<br>&nbsp;&nbsp;• Each terrain piece must be <b>at least 15cm from board edges</b>\n<br>&nbsp;&nbsp;• <b>EXCEPTION:</b> Building pieces (see below)',
        '<br>4. <b>Spacing Rules:</b>\n<br>&nbsp;&nbsp;• Each terrain piece must be <b>at least 15cm from any other terrain</b>\n<br>&nbsp;&nbsp;• <b>EXCEPTION:</b> Building pieces can stack or connect (see below)'
    );
    
    // Update IMPORTANT section
    phase1.description = phase1.description.replace(
        '• The 15cm spacing rule prevents terrain from being too clustered (except for building pieces, which can be adjacent or stacked)',
        '• The 15cm spacing rule prevents terrain from being too clustered, except building pieces can stack or connect'
    );
}

console.log('   ✓ Removed board edge spacing from phase_1');

// ============================================
// SIMPLIFICATION 4: Remove Building Collapse Damage
// ============================================
console.log('4. Removing building collapse damage...');

if (phase1) {
    // Remove collapse damage section
    phase1.description = phase1.description.replace(
        /<br><b>Collapse Damage:<\/b>\n<br>• If a building piece <b>physically falls on a mech<\/b>, that mech takes <b>1 DP<\/b>\n<br>• Place 1 HP token at the mech's feet\n<br>• Applies to any mech the falling piece touches \(friendly or enemy\)\n<br>• <b>Chain Collapse:<\/b> If a building piece falls and knocks over other pieces, each falling piece deals 1 DP to any mech it touches\n\n/,
        ''
    );
    
    // Update BUILDING COLLAPSE header
    phase1.description = phase1.description.replace(
        '<i class="fas fa-burst"></i> <b>BUILDING COLLAPSE (PHYSICS-BASED):</b>\n<br>Buildings are physical objects — they can fall over or collapse if destabilized!',
        '<i class="fas fa-burst"></i> <b>BUILDING COLLAPSE (PHYSICS-BASED):</b>\n<br>Buildings are physical objects — they can fall over or collapse if destabilized! Fallen buildings become ground-level terrain.'
    );
    
    // Update AFTER COLLAPSE section
    phase1.description = phase1.description.replace(
        '<br><b>After Collapse:</b>\n<br>• Leave fallen building pieces where they land (they become ground-level terrain)\n<br>• Mechs can climb over or move around fallen pieces\n<br>• Fallen pieces can be used as cover',
        '<br><b>After Collapse:</b>\n<br>• Leave fallen pieces where they land — they become ground-level terrain\n<br>• Mechs can climb over or move around fallen pieces\n<br>• Fallen pieces provide cover'
    );
    
    // Update STRATEGIC CONSIDERATIONS
    phase1.description = phase1.description.replace(
        '• <b>Collapse Risk:</b> Don\'t build tall buildings near deployment zones — they might fall on your own mechs\n<br>• <b>Knockdown Tactics:</b> Big projectiles (Big Air Cannon, Mortar) can knock over buildings — use this to your advantage',
        '• <b>Knockdown Tactics:</b> Big projectiles can knock over buildings — use this to create new terrain or block paths'
    );
    
    // Update IMPORTANT section
    phase1.description = phase1.description.replace(
        '• Building pieces are <b>NOT destroyed</b> by projectiles — they\'re just knocked over by physics\n<br>• If a building piece falls, leave it where it lands (becomes ground-level terrain)\n<br>• Falling building pieces deal <b>1 DP to any mech they physically touch</b>\n<br>• Be careful when building tall structures — they\'re unstable and can fall on your own mechs!',
        '• Building pieces are <b>NOT destroyed</b> by projectiles — they\'re just knocked over by physics\n<br>• If a building piece falls, leave it where it lands (becomes ground-level terrain)\n<br>• Tall structures are unstable and can be knocked over — use this tactically'
    );
}

// Also remove from ltp_1 QUICK TIPS
if (ltp1) {
    ltp1.description = ltp1.description.replace(
        'Buildings can collapse and deal 1 DP if they fall on mechs.',
        'Buildings can be knocked over by projectiles.'
    );
}

console.log('   ✓ Removed building collapse damage from phase_1 and ltp_1');

// ============================================
// SIMPLIFICATION 5: Simplify Deployment
// ============================================
console.log('5. Simplifying deployment...');

const phase4 = rules.find(r => r.id === 'phase_4');
if (phase4) {
    // Simplify deployment procedure
    phase4.description = phase4.description.replace(
        '<b>PROCEDURE:</b>\n<br>1. <b>Flip a Coin:</b> Determine who chooses their deployment zone first\n<br>2. <b>Loser Picks Zone First:</b> The player who lost the coin flip chooses their deployment zone first\n<br>3. <b>Winner Deploys Last:</b> The player who won the coin flip deploys their mech last (after seeing where the opponent deployed)',
        '<b>PROCEDURE:</b>\n<br>1. <b>Flip a Coin:</b> Winner chooses their deployment zone\n<br>2. <b>Winner Deploys First:</b> Winner places their mech in their chosen zone\n<br>3. <b>Loser Deploys Second:</b> Loser places their mech in the remaining zone'
    );
    
    // Update medium summary
    phase4.medium = phase4.medium.replace(
        '• Flip coin: loser picks zone first, winner deploys last.',
        '• Flip coin: winner picks zone and deploys first.'
    );
    
    // Update quick summary
    phase4.quick = phase4.quick.replace(
        '<b>Order:</b> Loser picks zone → Winner deploys last',
        '<b>Order:</b> Winner picks zone and deploys first'
    );
}

// Update setup_1
if (setup1) {
    setup1.description = setup1.description.replace(
        'Flip a coin. The loser picks their deployment zone first. The winner deploys last. Place your mech in your deployment zone.',
        'Flip a coin. The winner picks their deployment zone and deploys first. The loser deploys second in the remaining zone.'
    );
}

// Update ltp_1
if (ltp1) {
    ltp1.description = ltp1.description.replace(
        '<b>Phase 4 — Deployment:</b> Flip a coin. Loser picks their deployment zone first, winner deploys last.',
        '<b>Phase 4 — Deployment:</b> Flip a coin. Winner picks their zone and deploys first.'
    );
}

console.log('   ✓ Simplified deployment in phase_4, setup_1, and ltp_1');

// ============================================
// SIMPLIFICATION 6: Remove "measure horizontally" rule
// ============================================
console.log('6. Removing "measure horizontally" instruction...');

if (ltp1) {
    ltp1.description = ltp1.description.replace(
        '<b>Short Ruler:</b> 15cm (6 inches) — Used for Legs and Mixed movement\n<br><b>Long Ruler:</b> 30cm (12 inches) — Used for Wheels/Treads and mortar weapons\n<br><b>Always measure horizontally</b> — Never diagonally through the air',
        '<b>Short Ruler:</b> 15cm (6 inches) — Used for Legs and Mixed movement\n<br><b>Long Ruler:</b> 30cm (12 inches) — Used for Wheels/Treads and mortar weapons'
    );
}

if (setup1) {
    setup1.description = setup1.description.replace(
        'Always measure horizontally along the ground. Never measure diagonally through the air. If terrain blocks your path, you must go around it or over it.',
        'If terrain blocks your path, you must go around it or over it.'
    );
}

console.log('   ✓ Removed measurement instruction from ltp_1 and setup_1');

// ============================================
// SIMPLIFICATION 7: Remove 30-second fix window
// ============================================
console.log('7. Removing 30-second fix window...');

if (phase2) {
    phase2.description = phase2.description.replace(
        'Set a timer for 10 minutes and start building. Grab parts from the shared pool and assemble your mech. When the timer expires, stop immediately. Your mech must stand on its own without support. If it falls over, you have 30 seconds to fix it.',
        'Set a timer for 10 minutes and start building. Grab parts from the shared pool and assemble your mech. When the timer expires, stop immediately. Your mech must stand on its own without support.'
    );
    
    phase2.description = phase2.description.replace(
        'The 10-minute timer is strict. When it expires, stop building immediately. No "just one more piece."\n\nYour mech must stand on its own. If it falls over during the stability check, you have 30 seconds to fix it. If it still can\'t stand, you must remove parts until it\'s stable.\n\n<b>Ground Contact Check:</b> During the stability check, verify that only leg pieces touch the ground. If your Core, weapons, or other parts are touching, you must fix it within the 30-second window.',
        'The 10-minute timer is strict. When it expires, stop building immediately. No "just one more piece."\n\nYour mech must stand on its own. If it falls over or has illegal ground contact (non-leg parts touching), it\'s invalid and must be rebuilt.'
    );
}

console.log('   ✓ Removed 30-second fix window from phase_2');

// ============================================
// SIMPLIFICATION 8: Remove scenario examples from lore_6
// ============================================
console.log('8. Removing scenario examples from lore_6...');

const lore6 = rules.find(r => r.id === 'lore_6');
if (lore6) {
    lore6.description = lore6.description.replace(
        '<b>Scenario Integration:</b>\n<br>• <b>Capture the Flag:</b> Neuralloy caches are the flags\n<br>• <b>King of the Hill:</b> Control the Neuralloy deposit site\n<br>• <b>Extraction:</b> Recover Neuralloy from a crashed transport\n<br>• <b>Salvage Rush:</b> Scavenge the most Neuralloy from a battlefield\n<br>• <b>Convoy Escort:</b> Protect a Neuralloy shipment\n\n<hr>\n\n',
        ''
    );
}

console.log('   ✓ Removed scenario examples from lore_6');

// ============================================
// SIMPLIFICATION 9: Remove "proxy distance" jargon
// ============================================
console.log('9. Removing "proxy distance" jargon...');

if (ltp1) {
    ltp1.description = ltp1.description.replace(
        'When you ENGAGE, place your shooting device (crossbow, cannon, or mortar) at the correct proxy distance from your mech.',
        'When you ENGAGE, place your shooting device (crossbow, cannon, or mortar) 1 ruler away from your mech.'
    );
}

const rule3 = rules.find(r => r.id === 'rule_3');
if (rule3) {
    rule3.description = rule3.description.replace(/proxy distance/gi, 'distance');
}

console.log('   ✓ Removed "proxy distance" jargon from ltp_1 and rule_3');

// ============================================
// SIMPLIFICATION 10: Clarify round structure
// ============================================
console.log('10. Clarifying round structure...');

const phase5 = rules.find(r => r.id === 'phase_5');
if (phase5) {
    phase5.description = phase5.description.replace(
        'Play 4 rounds. Players alternate turns. Each turn you get 2 AP to spend on your mech\'s actions. The game ends after Round 4 or when one player\'s Core is destroyed.',
        'Play 4 rounds. Players alternate taking turns. Each turn you get 2 AP to spend on your mech\'s actions. The game ends after Round 4 or when one player\'s Core is destroyed.'
    );
}

if (setup1) {
    setup1.description = setup1.description.replace(
        'Play 4 rounds. Players alternate turns. Each turn you get 2 AP to spend on your mech\'s actions. The game ends after Round 4 or when one player\'s Core is destroyed.',
        'Play 4 rounds. Players alternate taking turns. Each turn you get 2 AP to spend on your mech\'s actions. The game ends after Round 4 or when one player\'s Core is destroyed.'
    );
}

console.log('   ✓ Clarified round structure in phase_5 and setup_1');

// ============================================
// SIMPLIFICATION 11: Consolidate HP token rules
// ============================================
console.log('11. Consolidating HP token rules...');

// This is already pretty consolidated, but let's make sure the language is consistent
const rule2 = rules.find(r => r.id === 'rule_2');
if (rule2) {
    // Ensure consistent language about HP tokens
    rule2.description = rule2.description.replace(
        'When you take damage, place HP tokens equal to the Damage Points (DP) at your mech\'s feet.',
        'When hit, place HP tokens equal to the weapon\'s DP at your mech\'s feet. These tokens represent lost health — anyone can scavenge them.'
    );
}

console.log('   ✓ Consolidated HP token language in rule_2');

// ============================================
// Save the updated rules
// ============================================
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

console.log('\n✅ ALL SIMPLIFICATIONS APPLIED SUCCESSFULLY!\n');
console.log('Summary of changes:');
console.log('  1. ✓ Removed "8 equipment slots" limit (4 chapters)');
console.log('  2. ✓ Removed Veteran Option (phase_2)');
console.log('  3. ✓ Removed board edge spacing rule (phase_1)');
console.log('  4. ✓ Removed building collapse damage (phase_1, ltp_1)');
console.log('  5. ✓ Simplified deployment (phase_4, setup_1, ltp_1)');
console.log('  6. ✓ Removed "measure horizontally" instruction (ltp_1, setup_1)');
console.log('  7. ✓ Removed 30-second fix window (phase_2)');
console.log('  8. ✓ Removed scenario examples from lore (lore_6)');
console.log('  9. ✓ Removed "proxy distance" jargon (ltp_1, rule_3)');
console.log(' 10. ✓ Clarified round structure (phase_5, setup_1)');
console.log(' 11. ✓ Consolidated HP token rules (rule_2)');
console.log('\nRules are now simpler and more streamlined!');
