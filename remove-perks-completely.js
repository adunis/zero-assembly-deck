const fs = require('fs');

const rulesPath = './public/data/rules.json';
const talentsPath = './public/data/talents.json';

let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

console.log('🗑️  REMOVING PERKS COMPLETELY FROM THE GAME...\n');

// Remove rule_7 (Pilot Perks chapter) entirely
const rule7Index = rules.findIndex(r => r.id === 'rule_7');
if (rule7Index !== -1) {
  rules.splice(rule7Index, 1);
  console.log('✓ REMOVED: rule_7 (Pilot Perks chapter)');
}

// Update phase_2 - remove perk selection section
const phase2 = rules.find(r => r.id === 'phase_2');
if (phase2) {
  phase2.description = phase2.description.replace(
    /<hr>\s*<i class="fas fa-star"><\/i> <b>PILOT PERKS<\/b>.*?(?=<hr>|$)/gs,
    ''
  );
  
  phase2.medium = phase2.medium.replace(/• Choose 1 Perk before game\.\n<br>/g, '');
  phase2.quick = phase2.quick.replace(/<b>Perks:<\/b> Choose 1 before game/g, '<b>Build:</b> Any colors, any parts');
  
  console.log('✓ UPDATED: phase_2 (removed perk selection)');
}

// Update phase_5 - remove perk timing tip
const phase5 = rules.find(r => r.id === 'phase_5');
if (phase5) {
  phase5.description = phase5.description.replace(
    /<b>Perk Timing:<\/b> Use your Pilot Perk at the right moment\. Once per match means you need to make it count\.\s*/g,
    ''
  );
  console.log('✓ UPDATED: phase_5 (removed perk timing tip)');
}

// Update ltp_1 - remove perk references
const ltp1 = rules.find(r => r.id === 'ltp_1');
if (ltp1) {
  ltp1.description = ltp1.description.replace(
    /Each player chooses 1 Pilot Perk before the game starts\./g,
    'Build your mech from any available parts.'
  );
  console.log('✓ UPDATED: ltp_1 (removed perk reference)');
}

// Update intro_3d - remove perk references from printing guide
const intro3d = rules.find(r => r.id === 'intro_3d');
if (intro3d) {
  intro3d.description = intro3d.description.replace(
    /Print in whatever colors you prefer\. Color choice is purely aesthetic\./g,
    'Print in whatever colors you prefer. Build mechs that look cool and are easy to identify.'
  );
  console.log('✓ UPDATED: intro_3d (cleaned up color reference)');
}

// Update setup_1 - remove any perk references
const setup1 = rules.find(r => r.id === 'setup_1');
if (setup1) {
  // No specific perk references found, but check anyway
  if (setup1.description.toLowerCase().includes('perk')) {
    setup1.description = setup1.description.replace(/perk/gi, '');
    console.log('✓ UPDATED: setup_1 (removed perk references)');
  }
}

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

// Also rename talents.json to talents.json.backup (keep for reference but not used)
if (fs.existsSync(talentsPath)) {
  const backupPath = './public/data/talents.json.removed';
  fs.renameSync(talentsPath, backupPath);
  console.log('✓ ARCHIVED: talents.json → talents.json.removed (perks no longer used)');
}

console.log('\n💾 Saved rules.json!');
console.log('\n📋 SUMMARY:');
console.log('════════════════════════════════════════════════════════');
console.log('✓ REMOVED: rule_7 (Pilot Perks chapter)');
console.log('✓ REMOVED: All perk references from all chapters');
console.log('✓ ARCHIVED: talents.json (no longer needed)');
console.log('════════════════════════════════════════════════════════');
console.log('\n🎯 RESULT: Pure physics-based combat!');
console.log('\nThe game is now focused entirely on:');
console.log('  • Building your mech (10 minutes)');
console.log('  • Positioning and movement');
console.log('  • Shooting and physics');
console.log('  • Resource management (Neuralloy)');
console.log('  • Tactical decisions');
console.log('\nNo special abilities, no once-per-match powers.');
console.log('Just skill, strategy, and physics! 🎮');
