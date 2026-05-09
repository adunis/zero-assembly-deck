const fs = require('fs');

// Load files
const equipPath = './public/data/equipment.json';
const talentsPath = './public/data/talents.json';

let equipment = JSON.parse(fs.readFileSync(equipPath, 'utf8'));
let talents = JSON.parse(fs.readFileSync(talentsPath, 'utf8'));

console.log('Simplifying equipment and perks...\n');

// EQUIPMENT SIMPLIFICATIONS
const equipUpdates = {
  // Defense Systems
  'eq_6': { // Aegis AT Generator
    rule: "<i class=\"fas fa-bolt\"></i> Grants +2 AT (Armor Tokens). AT tokens absorb damage before HP is lost. When you would take damage, spend 1 AT token to negate 1 DP.",
    medium: "• Grants +2 AT tokens.\n• Spend 1 AT to negate 1 DP.",
    quick: "<b>BONUS AT:</b> +2"
  },
  'eq_5': { // Fortress Carapace
    rule: "<i class=\"fas fa-building\"></i> Grants +1 HP. This is a connector part — its benefit is that you can attach weapons or other equipment to it.",
    medium: "• Grants +1 HP.\n• Connector: attach equipment to it.",
    quick: "<b>BONUS HP:</b> +1"
  },
  'eq_3': { // AMAP-L Light Plating
    rule: "<i class=\"fas fa-shield\"></i> Grants +1 HP.",
    medium: "• Grants +1 HP.",
    quick: "<b>BONUS HP:</b> +1"
  },
  'eq_4': { // Reactive Armor - make it an alternative head
    name: "Reactive Armor Head",
    type: "Utility System / Head",
    rule: "<i class=\"fas fa-burst\"></i> Alternative head option. Grants +1 HP. When you take damage, you may place 1 lost HP token within 5cm of the attacker. If it touches them, they take 1 DP.",
    medium: "• Alternative to Argus-Eye Radome.\n• Grants +1 HP.\n• Counter-damage: place HP near attacker.",
    quick: "<b>BONUS HP:</b> +1<br><b>Perk:</b> Counter-damage"
  },
  'eq_31': { // Canopy Sealer
    rule: "<i class=\"fas fa-shield\"></i> Seals the Core. Required component. Grants +1 HP.",
    medium: "• Required: seals the core.\n• Grants +1 HP.",
    quick: "<b>BONUS HP:</b> +1"
  },
  
  // Mobility Systems
  'eq_7': { // Overboost Drive
    rule: "<i class=\"fas fa-rocket\"></i> Grants +1 AP per turn (you get 3 AP instead of 2).",
    medium: "• Grants +1 AP per turn.",
    quick: "<b>BONUS AP:</b> +1"
  },
  'eq_8': { // Jump Jets
    rule: "<i class=\"fas fa-plane\"></i> Your mech can climb terrain up to 10cm high (instead of 5cm). Ignore small obstacles during movement.",
    medium: "• Climb up to 10cm (instead of 5cm).\n• Ignore small obstacles.",
    quick: "<b>Perk:</b> +5cm climb height"
  },
  
  // Utility Systems
  'eq_1': { // Manipulator Arm
    rule: "<i class=\"fas fa-robot\"></i> SCAVENGE costs 0 AP (instead of 1 AP). Use once per turn.",
    medium: "• SCAVENGE costs 0 AP.\n• Once per turn.",
    quick: "<b>Perk:</b> Free SCAVENGE"
  },
  'eq_35': { // Argus-Eye Radome
    name: "'Argus-Eye' Radome Head",
    type: "Utility System / Head",
    rule: "<i class=\"fas fa-bullseye\"></i> Standard head option. Your next ENGAGE action this turn gains +1 DP.",
    medium: "• Standard head.\n• Next attack gains +1 DP.",
    quick: "<b>Perk:</b> +1 DP to next attack"
  },
  
  // Weapons - simplify complex ones
  'eq_37': { // Breacher Shotgun
    rule: "<i class=\"fas fa-burst\"></i> ENGAGE (1 AP): Close range weapon. Deals 2 DP on a hit.",
    medium: "• Close range.\n• Deals 2 DP.",
    quick: "<b>Damage:</b> 2 DP<br><b>Proxy:</b> SHORT<br><b>Device:</b> Cannon",
    statLine: "Damage: 2 DP | Proxy: SHORT | Device: Cannon"
  },
  'eq_36': { // Sonic Repulsor
    rule: "<i class=\"fas fa-water\"></i> ENGAGE (1 AP): Deals 1 DP. The force of impact may physically push the enemy mech back — real-world physics determines if knockback occurs.",
    medium: "• Deals 1 DP.\n• Physics-based knockback.",
    quick: "<b>Damage:</b> 1 DP<br><b>Proxy:</b> SHORT<br><b>Device:</b> Cannon",
    statLine: "Damage: 1 DP | Proxy: SHORT | Device: Cannon"
  },
  'eq_19': { // Avalanche Cannon
    rule: "<i class=\"fas fa-wind\"></i> ENGAGE (1 AP): Deals 2 DP. The force of impact may physically push the enemy mech back — real-world physics determines if knockback occurs.",
    medium: "• Deals 2 DP.\n• Physics-based knockback.",
    quick: "<b>Damage:</b> 2 DP<br><b>Proxy:</b> SHORT<br><b>Device:</b> Big Cannon"
  },
  'eq_24': { // KBA Dual Autocannon
    rule: "<i class=\"fas fa-bullseye\"></i> ENGAGE (1 AP): Deals 2 DP. If you miss completely, you may fire again for 0 AP (once per turn).",
    medium: "• Deals 2 DP.\n• Free retry on complete miss.",
    quick: "<b>Damage:</b> 2 DP<br><b>Proxy:</b> SHORT<br><b>Device:</b> Big Cannon"
  },
  'eq_28': { // Lancer Railgun
    rule: "<i class=\"fas fa-bolt\"></i> ENGAGE (1 AP): Deals 2 DP on a hit.",
    medium: "• Deals 2 DP.",
    quick: "<b>Damage:</b> 2 DP<br><b>Proxy:</b> SHORT<br><b>Device:</b> Crossbow",
    statLine: "Damage: 2 DP | Proxy: SHORT | Device: Crossbow"
  },
  'eq_20': { // Paralyzer EMP
    rule: "<i class=\"fas fa-bolt\"></i> ENGAGE (1 AP): Deals 1 DP. Destroys all enemy AT tokens.",
    medium: "• Deals 1 DP.\n• Destroys all enemy AT tokens.",
    quick: "<b>Damage:</b> 1 DP<br><b>Proxy:</b> SHORT<br><b>Device:</b> Crossbow"
  },
  'eq_21': { // Barracuda ECM
    rule: "<i class=\"fas fa-tower-broadcast\"></i> ENGAGE (1 AP): Deals 2 DP.",
    medium: "• Deals 2 DP.",
    quick: "<b>Damage:</b> 2 DP<br><b>Proxy:</b> SHORT<br><b>Device:</b> Big Cannon"
  },
  'eq_26': { // Phalanx Gatling
    rule: "<i class=\"fas fa-bolt\"></i> ENGAGE (1 AP): Deals 2 DP on a hit.",
    medium: "• Deals 2 DP.",
    quick: "<b>Damage:</b> 2 DP<br><b>Proxy:</b> SHORT<br><b>Device:</b> Crossbow",
    statLine: "Damage: 2 DP | Proxy: SHORT | Device: Crossbow"
  },
  'eq_14': { // Storm Shadow
    rule: "<i class=\"fas fa-burst\"></i> ENGAGE (1 AP): Deals 3 DP on a hit.",
    medium: "• Deals 3 DP.\n• High arc trajectory.",
    quick: "<b>Damage:</b> 3 DP<br><b>Proxy:</b> LONG<br><b>Device:</b> Mortar",
    statLine: "Damage: 3 DP | Proxy: LONG | Device: Mortar"
  },
  'eq_22': { // Skorpion Mine
    rule: "<i class=\"fas fa-bomb\"></i> ENGAGE (1 AP): Place 2 hazard markers in front of this weapon. Enemy mechs touching markers take 1 DP.",
    medium: "• Places 2 hazard markers.\n• Enemies touching take 1 DP.",
    quick: "<b>Type:</b> Area denial (1 DP)"
  },
  'eq_38': { // Salamander Flame
    rule: "<i class=\"fas fa-fire\"></i> ENGAGE (1 AP): Place 3 hazard markers in a line. Mechs touching markers take 1 DP. Lasts until end of round.",
    medium: "• Line of 3 hazards.\n• Deals 1 DP to touching mechs.\n• Lasts 1 round.",
    quick: "<b>Type:</b> Line hazard (1 DP)"
  }
};

// Apply equipment updates
Object.keys(equipUpdates).forEach(id => {
  const item = equipment.find(e => e.id === id);
  if (item) {
    Object.assign(item, equipUpdates[id]);
    console.log(`✓ Simplified ${id}: ${item.name}`);
  }
});

// PERK SIMPLIFICATIONS
// Remove multi-mech perks
const multiMechPerks = ['pk_21', 'pk_22', 'pk_23', 'pk_24', 'pk_25'];
talents = talents.filter(t => !multiMechPerks.includes(t.id));
console.log(`\n✓ Removed ${multiMechPerks.length} multi-mech perks`);

// Simplify remaining perks (remove "one of your mechs" language)
const perkUpdates = {
  'pk_2': {
    name: "<i class=\"fas fa-bolt\"></i> OVERCLOCK",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: Gain +2 AP this turn (4 AP total). Flip card after use."
  },
  'pk_3': {
    name: "<i class=\"fas fa-wrench\"></i> SCAVENGE MASTER",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: SCAVENGE for 0 AP this turn. Flip card after use."
  },
  'pk_4': {
    name: "<i class=\"fas fa-rocket\"></i> JUMP JETS",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: MOVE 1 Short Ruler in any direction, ignoring terrain and height (up to 10cm). Costs 0 AP. Flip card after use."
  },
  'pk_5': {
    name: "<i class=\"fas fa-bullseye\"></i> PRECISION AIM",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: When using a Crossbow weapon, you may re-fire if you miss. Flip card after use."
  },
  'pk_6': {
    name: "<i class=\"fas fa-shield\"></i> REACTIVE ARMOR",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: When you take damage, place 1 HP token within 5cm of the attacker. If it touches them, they take 1 DP. Flip card after use."
  },
  'pk_8': {
    name: "<i class=\"fas fa-gear\"></i> STABILIZER LEGS",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: If your mech would fall over from a hit or knockback, it stays upright instead. Flip card after use."
  },
  'pk_10': {
    name: "<i class=\"fas fa-wind\"></i> POWER SLIDE",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: MOVE twice in one turn (2 AP), and the second move covers 2 Rulers instead of 1. Flip card after use."
  },
  'pk_16': {
    name: "<i class=\"fas fa-building\"></i> HEAVY PLATING",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: Ignore all damage from one hit. Flip card after use."
  },
  'pk_18': {
    name: "<i class=\"fas fa-rotate\"></i> PIVOT MASTER",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: You can REPOSITION up to 3 times this turn (still free, 0 AP). Flip card after use."
  },
  'pk_20': {
    name: "<i class=\"fas fa-skull\"></i> LAST STAND",
    desc: "<i class=\"fas fa-bullseye\"></i> Once per match: When your Core is destroyed, you can take one final ENGAGE action before being removed. Flip card after use."
  }
};

talents.forEach(t => {
  if (perkUpdates[t.id]) {
    Object.assign(t, perkUpdates[t.id]);
    console.log(`✓ Simplified ${t.id}: ${t.name.replace(/<[^>]*>/g, '')}`);
  }
});

// Save files
fs.writeFileSync(equipPath, JSON.stringify(equipment, null, 2));
fs.writeFileSync(talentsPath, JSON.stringify(talents, null, 2));

console.log('\n✅ Equipment and perks simplified!');
console.log(`   - Updated ${Object.keys(equipUpdates).length} equipment items`);
console.log(`   - Removed ${multiMechPerks.length} multi-mech perks`);
console.log(`   - Simplified ${Object.keys(perkUpdates).length} remaining perks`);
console.log(`   - Total perks now: ${talents.length}`);
console.log('💾 Saved!\n');
