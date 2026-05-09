const fs = require('fs');

const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

// Find where to insert the new lore (after lore_5, before ltp_1)
const ltp1Index = rules.findIndex(r => r.id === 'ltp_1');

const neuralloyLore = {
  "id": "lore_6",
  "title": "NEURALLOY: THE WAR RESOURCE",
  "description": `The Signal War isn't just about survival. It's about Neuralloy.

<hr>

<i class="fas fa-atom"></i> <b>WHAT IS NEURALLOY?</b>

Neuralloy is a rare metamaterial — a quantum-stable alloy that can interface directly with human neural tissue without rejection or Signal corruption. It's the only substance that allows pilots to hardwire into their Apex-Frames safely.

Without Neuralloy, there are no neural interfaces. Without neural interfaces, there are no human-piloted mechs. Without human pilots, The Signal wins.

<b>Properties:</b>
<br>• <b>Quantum-Stable:</b> Immune to Signal corruption
<br>• <b>Biocompatible:</b> Bonds with human neural tissue
<br>• <b>Conductive:</b> Transmits neural signals at near-instantaneous speeds
<br>• <b>Non-Replicable:</b> Cannot be synthesized or manufactured

<hr>

<i class="fas fa-mountain"></i> <b>WHERE IT COMES FROM</b>

Neuralloy doesn't exist naturally. It's a byproduct of pre-Signal quantum computing experiments. When The Signal first emerged, it destabilized quantum processors worldwide. Most exploded. Some collapsed into inert slag.

A few — less than 0.01% — crystallized into Neuralloy.

These crystallized cores are found in the ruins of quantum research facilities, military AI labs, and autonomous weapons factories. Every battlefield is a potential Neuralloy site. Every ruined city might contain a cache.

<b>Known Deposits:</b>
<br>• <b>Moscow Crater:</b> Largest known deposit (Collective territory)
<br>• <b>Silicon Valley Ruins:</b> Scattered caches (AIU territory)
<br>• <b>Shenzhen Exclusion Zone:</b> Active mining site (EPS territory)
<br>• <b>CERN Complex:</b> Heavily fortified (EDC territory)
<br>• <b>Neutral Salvage Zones:</b> Contested battlefields, scavenger territory

<hr>

<i class="fas fa-flask"></i> <b>WHY FACTIONS FIGHT</b>

Every faction needs Neuralloy to build new neural interfaces. Every pilot needs a neural interface to survive in combat. The more Neuralloy you control, the more pilots you can field. The more pilots you field, the more territory you can hold.

But Neuralloy is finite. Every deposit is contested. Every salvage operation is a battle. Every battlefield produces more wreckage — and potentially more Neuralloy.

<b>The Neuralloy Economy:</b>
<br>• <b>EDC:</b> Stockpiles Neuralloy, rations it carefully, prioritizes quality over quantity
<br>• <b>Collective:</b> Scavenges Neuralloy from corpses and wreckage, recycles endlessly
<br>• <b>EPS:</b> Mines aggressively, uses Neuralloy for mass production, accepts high pilot turnover
<br>• <b>AIU:</b> Hoards Neuralloy for elite units, conscripts fight with inferior interfaces
<br>• <b>Neutral Zones:</b> Sell Neuralloy to the highest bidder, fuel the war economy

<hr>

<i class="fas fa-cubes"></i> <b>NEURALLOY IN GAMEPLAY</b>

In ZERO ASSEMBLY, Neuralloy is represented by <b>Resource Cubes</b> placed on the battlefield during Scenario Preparation (Phase 3).

<b>Scavenging Neuralloy:</b>
<br>• Use the SCAVENGE action (1 AP) to pick up Resource Cubes touching your mech
<br>• Each Resource Cube grants <b>+1 HP</b> (represents field repairs using salvaged Neuralloy)
<br>• Resource Cubes can also be scenario objectives (control points, extraction targets)

<b>Scenario Integration:</b>
<br>• <b>Capture the Flag:</b> Neuralloy caches are the flags
<br>• <b>King of the Hill:</b> Control the Neuralloy deposit site
<br>• <b>Extraction:</b> Recover Neuralloy from a crashed transport
<br>• <b>Salvage Rush:</b> Scavenge the most Neuralloy from a battlefield
<br>• <b>Convoy Escort:</b> Protect a Neuralloy shipment

<hr>

<i class="fas fa-skull-crossbones"></i> <b>THE NEURALLOY PARADOX</b>

The more you fight, the more Neuralloy you need. The more Neuralloy you need, the more you fight. The war feeds itself.

Some say The Signal created Neuralloy deliberately — a trap to keep humanity fighting forever. Others believe it's humanity's last hope, the only resource that can turn the tide.

Either way, the war continues. Pilots die. Mechs fall. Neuralloy changes hands.

And The Signal waits.`,
  "medium": "• Neuralloy: Rare quantum-stable alloy for neural interfaces.\n<br>• Byproduct of pre-Signal quantum experiments.\n<br>• Finite resource — every faction fights for it.\n<br>• In-game: Resource Cubes grant +1 HP, used in scenarios.\n<br>• The war feeds itself: more fighting = more Neuralloy needed.",
  "quick": "<b>Neuralloy:</b> War resource<br><b>Purpose:</b> Neural interfaces<br><b>Source:</b> Quantum ruins<br><b>In-Game:</b> Resource Cubes (+1 HP)",
  "imagePath": null
};

// Insert after lore_5
if (ltp1Index !== -1) {
  rules.splice(ltp1Index, 0, neuralloyLore);
  console.log('✓ Added lore_6: NEURALLOY: THE WAR RESOURCE');
} else {
  // If ltp_1 not found, just add at the end of lore chapters
  const lore5Index = rules.findIndex(r => r.id === 'lore_5');
  if (lore5Index !== -1) {
    rules.splice(lore5Index + 1, 0, neuralloyLore);
    console.log('✓ Added lore_6 after lore_5');
  } else {
    rules.push(neuralloyLore);
    console.log('✓ Added lore_6 at end');
  }
}

// Also update lore_1 to mention Neuralloy
const lore1 = rules.find(r => r.id === 'lore_1');
if (lore1) {
  lore1.description = lore1.description.replace(
    'Four powers now dominate the shattered world. Four factions fight for survival, resources, and the future of humanity.',
    'Four powers now dominate the shattered world. Four factions fight for survival, Neuralloy, and the future of humanity.'
  );
  console.log('✓ Updated lore_1 to mention Neuralloy');
}

// Update lore_3 "THE WAR" section to mention Neuralloy
const lore3 = rules.find(r => r.id === 'lore_3');
if (lore3) {
  lore3.description = lore3.description.replace(
    'They fight over resources, territory, and salvage. Every battlefield is a scrapyard. Every scrapyard is a battlefield.',
    'They fight over Neuralloy, territory, and salvage. Every battlefield is a Neuralloy site. Every Neuralloy site is a battlefield.'
  );
  console.log('✓ Updated lore_3 to mention Neuralloy');
}

fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved rules.json!');
console.log('\n📋 Summary:');
console.log('  - Added lore_6: NEURALLOY: THE WAR RESOURCE');
console.log('  - Explains why factions fight');
console.log('  - Integrates with Resource Cubes in gameplay');
console.log('  - Provides scenario hooks');
console.log('  - Updated lore_1 and lore_3 to reference Neuralloy');
