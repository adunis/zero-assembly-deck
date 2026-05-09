const fs = require('fs');

// Read equipment.json
const equipmentPath = './public/data/equipment.json';
let equipment = JSON.parse(fs.readFileSync(equipmentPath, 'utf8'));

// Total: 32 items
// EU: 30% = 10 items
// Asia: 30% = 10 items
// Americas: 30% = 9 items
// Africa/Oceania: 10% = 3 items

// New country distribution with manufacturer names
const newDistribution = [
  // EU (10 items) - Keep EU flag for all European items
  { id: "eq_32", country: "EU", name: "Universal Chassis Core" },
  { id: "eq_31", country: "EU", name: "Canopy Sealer" },
  { id: "eq_33", country: "EU", name: "Articulated Hinge" },
  { id: "eq_34", country: "EU", name: "Extension Strut" },
  { id: "eq_3", country: "EU", name: "AMAP-L Light Plating" },
  { id: "eq_4", country: "EU", name: "Reactive Armor" },
  { id: "eq_5", country: "EU", name: "Fortress Carapace" },
  { id: "eq_6", country: "EU", name: "'Aegis' A.T. Generator" },
  { id: "eq_7", country: "EU", name: "Overboost Drive" },
  { id: "eq_8", country: "EU", name: "Type-V 'Vernier' Jump Jets" },
  
  // ASIA (10 items)
  { id: "eq_1", country: "JP", name: "Manipulator Arm" }, // Japan
  { id: "eq_35", country: "KR", name: "'Argus-Eye' Radome" }, // South Korea
  { id: "eq_2", country: "CN", name: "'Bunker' Pile Driver" }, // China
  { id: "eq_37", country: "SG", name: "M10 'Breacher' Shotgun" }, // Singapore
  { id: "eq_36", country: "IN", name: "Sonic 'Repulsor' Cylinder" }, // India
  { id: "eq_16", country: "TW", name: "G-36 Micro-Rifle" }, // Taiwan
  { id: "eq_17", country: "TH", name: "FAL-X Autocannon" }, // Thailand
  { id: "eq_18", country: "PK", name: "MK-20 'Rhino' Heavy Cannon" }, // Pakistan
  { id: "eq_19", country: "MY", name: "Avalanche Cannon" }, // Malaysia
  { id: "eq_23", country: "ID", name: "Twin-Link Assault Rifle" }, // Indonesia
  
  // AMERICAS (9 items)
  { id: "eq_24", country: "US", name: "KBA Dual Autocannon" }, // USA
  { id: "eq_28", country: "CA", name: "'Lancer' Railgun" }, // Canada
  { id: "eq_20", country: "BR", name: "'Paralyzer' EMP Beam" }, // Brazil
  { id: "eq_21", country: "MX", name: "'Barracuda' ECM Blaster" }, // Mexico
  { id: "eq_25", country: "AR", name: "Tri-Barrel Spread Cannon" }, // Argentina
  { id: "eq_26", country: "CL", name: "'Phalanx' Gatling Array" }, // Chile
  { id: "eq_12", country: "CO", name: "'Brimstone' Micro-Missile Pod" }, // Colombia
  { id: "eq_13", country: "PE", name: "'Starstreak' Missile Rack" }, // Peru
  { id: "eq_15", country: "UY", name: "RBS-70 Carpet-Bombing Pod" }, // Uruguay
  
  // AFRICA/OCEANIA (3 items)
  { id: "eq_14", country: "AU", name: "'Storm Shadow' Demolition Pod" }, // Australia
  { id: "eq_22", country: "ZA", name: "'Skorpion' Mine Dispenser" }, // South Africa
  { id: "eq_38", country: "NZ", name: "'Salamander' Flame Projector" } // New Zealand
];

// Update each equipment item
newDistribution.forEach(update => {
  const item = equipment.find(e => e.id === update.id);
  if (item) {
    item.country = update.country;
    item.name = update.name;
  }
});

// Write back
fs.writeFileSync(equipmentPath, JSON.stringify(equipment, null, 2));

console.log('✅ Redistributed equipment across regions!');
console.log('   📊 Distribution:');
console.log('      • EU: 10 items (31%)');
console.log('      • Asia: 10 items (31%)');
console.log('      • Americas: 9 items (28%)');
console.log('      • Africa/Oceania: 3 items (9%)');
console.log('   🌍 Total: 32 items');
console.log('');
console.log('   🇪🇺 EU countries: All use EU flag');
console.log('   🌏 Asian countries: JP, KR, CN, SG, IN, TW, TH, PK, MY, ID');
console.log('   🌎 American countries: US, CA, BR, MX, AR, CL, CO, PE, UY');
console.log('   🌍 Africa/Oceania: AU, ZA, NZ');
