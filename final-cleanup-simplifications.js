const fs = require('fs');

const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

console.log('🧹 FINAL CLEANUP OF ALL EQUIPMENT CUBE REFERENCES...\n');

rules.forEach((rule) => {
  let changed = false;
  const originalDesc = rule.description;
  
  // Remove any remaining Equipment Cube mentions
  if (rule.description.includes('Equipment Cube')) {
    rule.description = rule.description.replace(/Equipment Cubes?:.*?(?=\n\n<b>|$)/gs, '');
    rule.description = rule.description.replace(/Scavenge them to upgrade your mech mid-game\. A well-timed equipment upgrade can turn the tide\.\s*/g, '');
    rule.description = rule.description.replace(/Equipment Cubes let you grab a random part from the scrap pile and attach it immediately to your mech\.\s*/g, '');
    rule.description = rule.description.replace(/Resource Cubes give you 1 HP\. /g, 'Resource Cubes grant +1 HP (Neuralloy field repairs). ');
    rule.description = rule.description.replace(/Control the center of the board to access Equipment Cubes first\.\s*/g, '');
    changed = true;
  }
  
  // Remove multi-mech references (we simplified to 1 mech per player)
  if (rule.description.includes('2 Solo Mechs') || rule.description.includes('Duo Mech')) {
    rule.description = rule.description.replace(/Building 2 Solo Mechs.*?hard to chew through\.\s*/g, '');
    changed = true;
  }
  
  // Clean up double line breaks
  rule.description = rule.description.replace(/\n\n\n+/g, '\n\n');
  
  if (changed) {
    console.log(`✓ Cleaned up: ${rule.id}`);
  }
});

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

console.log('\n💾 Saved rules.json!');
console.log('✅ All Equipment Cube references removed!');
console.log('✅ All multi-mech references removed!');
