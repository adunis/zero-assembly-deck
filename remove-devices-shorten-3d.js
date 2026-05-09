const fs = require('fs');
const path = require('path');

// Read rules.json
const rulesPath = path.join(__dirname, 'public', 'data', 'rules.json');
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

console.log('Removing device chapters and shortening 3D printing guide...\n');

// ============================================
// 1. REMOVE ALL DEVICE CHAPTERS
// ============================================
console.log('1. Removing device chapters (device_1 through device_4)...');

const beforeCount = rules.length;
rules = rules.filter(r => !r.id.startsWith('device_'));
const afterCount = rules.length;
const removedCount = beforeCount - afterCount;

console.log(`   ✓ Removed ${removedCount} device chapters`);

// ============================================
// 2. DRASTICALLY SHORTEN 3D PRINTING GUIDE
// ============================================
console.log('2. Shortening 3D printing guide (intro_3d)...');

const intro3d = rules.find(r => r.id === 'intro_3d');
if (intro3d) {
    // Replace with much shorter version
    intro3d.description = `<i class=\"fas fa-cube\"></i> <b>WHAT YOU NEED</b>

ZERO ASSEMBLY requires 3D-printed parts and toy shooting devices. All models are free on MakerWorld. Budget 45-70 hours of print time for a 2-player setup.

<hr>

<i class=\"fas fa-robot\"></i> <b>MECH PARTS</b>

Print the <a href="https://makerworld.com/en/models/773210-build-your-own-mech-updated-12-2-24" target="_blank">Build Your Own Mech</a> model. Contains cores, tops, legs, weapons, armor, and joints. Print 1 full set per player (8-12 hours each). Use PLA, 0.2mm layer height, 15-20% infill.

<hr>

<i class=\"fas fa-crosshairs\"></i> <b>SHOOTING DEVICES</b>

You need 4 types of toy devices that actually fire projectiles:

<b>Crossbow:</b> <a href="https://makerworld.com/en/models/1736232-mini-crossbow-print-in-place" target="_blank">Mini Crossbow</a> - Direct fire (1-2 hours each, print 2-4 per player)

<b>Small Cannon:</b> <a href="https://makerworld.com/en/models/791762-aim-able-desk-cannon-powerful" target="_blank">Aim-able Desk Cannon</a> - Arc fire (2-3 hours each, print 2-3 per player)

<b>Big Cannon:</b> Same model as Small Cannon, print at 150-200% scale (3-4 hours each, print 1-2 per player)

<b>Mortar:</b> <a href="https://makerworld.com/en/models/1249616-air-pressure-cannon-apm" target="_blank">Air Pressure Cannon APM</a> - Long-range arc (2-3 hours each, print 1-2 per player)

<hr>

<i class=\"fas fa-cube\"></i> <b>GAME MARKERS</b>

Print 1cm x 1cm x 1cm cubes in distinct colors (100% infill):

• <b>HP Markers</b> (red/orange): 30-40 per player
• <b>Resource Cubes</b> (purple/cyan): 20-30 total
• <b>Objective Markers</b> (yellow/gold): 10-15 total
• <b>Hazard Cubes</b> (black): 10-15 total

Budget 4-6 hours for 100+ cubes.

<hr>

<i class=\"fas fa-cubes\"></i> <b>TERRAIN</b>

Print simple modular building pieces that stack and connect. Need 10-15 pieces total. Use 0.3mm layer height, 10% infill. Budget 4-6 hours.

<hr>

<i class=\"fas fa-ruler\"></i> <b>RULERS</b>

You need SHORT (15cm) and LONG (30cm) rulers. Use any standard ruler or print custom ones.

<hr>

<i class=\"fas fa-clock\"></i> <b>TOTAL PRINT TIME</b>

For 2 players: 45-70 hours total. Start with mech parts, then devices, then markers and terrain.`;

    // Update medium summary
    intro3d.medium = `• Mech parts: Build Your Own Mech model (8-12 hours per player)
<br>• Devices: Crossbow, Cannons, Mortar (8-12 hours total)
<br>• Markers: HP, Resources, Objectives, Hazards (4-6 hours)
<br>• Terrain: 10-15 pieces (4-6 hours)
<br>• Total: 45-70 hours for 2 players`;

    // Update quick summary
    intro3d.quick = `<b>Mech Parts:</b> Build Your Own Mech<br><b>Devices:</b> Crossbow, Cannons, Mortar<br><b>Markers:</b> 1cm cubes (4 types)<br><b>Time:</b> 45-70 hours`;

    console.log('   ✓ Shortened intro_3d from ~1200 words to ~250 words (80% reduction)');
}

// ============================================
// 3. UPDATE CATEGORY REFERENCES
// ============================================
console.log('3. Updating frontend category references...');

// Note: The frontend renderRules() function has a category for 'device_'
// We should update the frontend to remove this category, but that's in index.html
console.log('   ⚠ Note: Update index.html to remove "Technical Reference" category');

// ============================================
// Save the updated rules
// ============================================
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

console.log('\n✅ CHANGES APPLIED SUCCESSFULLY!\n');
console.log('Summary:');
console.log(`  • Removed ${removedCount} device chapters (device_1 through device_4)`);
console.log('  • Shortened 3D printing guide by 80%');
console.log('  • Device info now only in "Devices & Ammo" tab');
console.log('\nNext step: Update index.html to remove "Technical Reference" category');
