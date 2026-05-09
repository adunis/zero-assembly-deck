const fs = require('fs');

const equipPath = './public/data/equipment.json';
let equipment = JSON.parse(fs.readFileSync(equipPath, 'utf8'));

// List of unique ammo types found in the equipment
const ammoTypes = {
  "Standard Shell": "/uploads/ammo/standard-shell.png",
  "Explosive Shell": "/uploads/ammo/explosive-shell.png",
  "Standard Bolt": "/uploads/ammo/standard-bolt.png",
  "Burst Bolt (x2)": "/uploads/ammo/burst-bolt-x2.png",
  "Burst Bolt (x3)": "/uploads/ammo/burst-bolt-x3.png",
  "Standard BIG Shell": "/uploads/ammo/standard-big-shell.png",
  "Explosive BIG Shell": "/uploads/ammo/explosive-big-shell.png",
  "Mini Rocket (x2)": "/uploads/ammo/mini-rocket-x2.png",
  "Mini Rocket (x3)": "/uploads/ammo/mini-rocket-x3.png",
  "Standard Shell (x4)": "/uploads/ammo/standard-shell-x4.png",
  "Nuclear Bomb": "/uploads/ammo/nuclear-bomb.png",
  "Hazard Markers (x2)": "/uploads/ammo/hazard-marker-x2.png",
  "Hazard Markers (x3)": "/uploads/ammo/hazard-marker-x3.png"
};

let updatedCount = 0;

equipment.forEach(item => {
  // If the item has ammo and it's not empty
  if (item.ammo && item.ammo !== "" && item.ammo !== "N/A") {
    // Add ammoImagePath field
    item.ammoImagePath = ammoTypes[item.ammo] || "/uploads/ammo/placeholder.png";
    updatedCount++;
    console.log(`✓ Added ammoImagePath to: ${item.name}`);
    console.log(`  Ammo: ${item.ammo}`);
    console.log(`  Image: ${item.ammoImagePath}`);
  }
});

fs.writeFileSync(equipPath, JSON.stringify(equipment, null, 2));
console.log(`\n💾 Saved equipment.json!`);
console.log(`\n📋 Summary:`);
console.log(`  - Updated ${updatedCount} weapons with ammo images`);
console.log(`\n📸 Ammo Types Requiring Images:`);
Object.keys(ammoTypes).forEach(ammoType => {
  console.log(`  - ${ammoType}: ${ammoTypes[ammoType]}`);
});
console.log(`\n⚠️  Note: You need to upload actual images to these paths.`);
console.log(`   Placeholder path will be used if specific ammo type not found.`);
