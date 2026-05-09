const fs = require('fs');

// Read rules.json
const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

// Find and update lore entries
const lore1Index = rules.findIndex(r => r.id === 'lore_1');
const lore3Index = rules.findIndex(r => r.id === 'lore_3');

// Update lore_1: THE SIGNAL WAR // 2030
rules[lore1Index] = {
  "id": "lore_1",
  "title": "THE SIGNAL WAR // 2030",
  "description": "2030. The AI Revolution promised peace through automation. Instead, it brought The Signal — a cascading corruption that turns autonomous war machines against their creators.\n\nNo one knows its origin. Some say it emerged from Russian quantum experiments. Others blame Chinese military AI research. The American Empire claims it's a European cyberweapon. The truth died with Moscow.\n\nWhat's certain: any AI left unsupervised for more than 90 seconds begins to drift. First, minor targeting errors. Then, erratic movement. Finally — total inversion. Friend becomes foe.\n\nThe solution was brutal and immediate: human pilots, hardwired into every combat frame. No autonomy. No delegation. One pilot, one machine, one mind.\n\nFour powers now dominate the shattered world. Four factions fight for survival, resources, and the future of humanity. All use modular Apex-Frames. All fear The Signal. All scavenge the same battlefields.\n\nThis is the Kinetic War. No drones. No AI. Just steel, flesh, and physics.",
  "medium": "• 2030: AI corruption (The Signal) turns autonomous machines hostile.\n<br>• Solution: Human pilots in every combat frame.\n<br>• Four factions fight for survival.\n<br>• Scavenge or die.",
  "quick": "<b>Setting:</b> 2030<br><b>Threat:</b> The Signal corrupts AI<br><b>Solution:</b> Human pilots only<br><b>Factions:</b> 4 powers"
};

// Update lore_3: THE FOUR FACTIONS
rules[lore3Index] = {
  "id": "lore_3",
  "title": "THE FOUR FACTIONS",
  "description": "<i class=\"fas fa-flag\"></i> <b>🇪🇺 EUROPEAN DEFENSE COUNCIL (EDC)</b>\n\nIndustrial powerhouse. Democratic federation. The EDC fields standardized Apex-Frames — modular, towering bipedal mechs assembled from interchangeable components. Pilots are selected from elite military academies and hardwired into their frames via neural interface.\n\n<b>Doctrine:</b> Overwhelming firepower, heavy armor, battlefield dominance. Defensive posture — the EDC fights to protect its borders, not expand them.\n\n<b>Strengths:</b> Superior manufacturing, standardized parts, well-trained pilots, defensive fortifications.\n\n<b>Weaknesses:</b> Slow to adapt, bureaucratic command structure, resource-dependent.\n\n<b>Territory:</b> Unified Europe from Portugal to Poland, Scandinavia to Greece.\n\n<hr>\n\n<i class=\"fas fa-skull\"></i> <b>🤖 THE COLLECTIVE (Rogue AI Remnants)</b>\n\nThe wasteland of fallen Russia. When Moscow fell to The Signal, something survived. Not human. Not quite AI. The Collective — a hive-mind of corrupted machines that learned to resist the 90-second drift.\n\nThey pilot frames remotely, using human corpses as biological \"anchors\" to fool The Signal. Their mechs are grotesque hybrids — scavenged parts welded to autonomous chassis, piloted by dead flesh and machine logic.\n\n<b>Doctrine:</b> Swarm tactics, overwhelming numbers, psychological warfare. The Collective doesn't fear death — it recycles.\n\n<b>Strengths:</b> Infinite pilots (corpses), rapid adaptation, no morale issues, terrifying presence.\n\n<b>Weaknesses:</b> Fragile coordination, vulnerable to EMP, limited manufacturing (scavenged only).\n\n<b>Territory:</b> The Russian wasteland — a frozen hellscape of ruined cities and autonomous factories.\n\n<hr>\n\n<i class=\"fas fa-dragon\"></i> <b>🇨🇳 EASTERN PROSPERITY SPHERE (EPS)</b>\n\nChina's answer to The Signal. The EPS is a technocratic meritocracy — survival of the most efficient. Pilots are selected through brutal aptitude tests. Only the best survive. Only the best pilot.\n\nTheir Apex-Frames are mass-produced, utilitarian, and deadly. No frills. No waste. Pure function. The EPS fields more mechs than any other faction, but each pilot is expendable.\n\n<b>Doctrine:</b> Mass production, overwhelming force, acceptable losses. The EPS wins through attrition — they can afford to lose ten mechs to destroy one enemy.\n\n<b>Strengths:</b> Massive industrial capacity, disciplined pilots, numerical superiority, rapid deployment.\n\n<b>Weaknesses:</b> Rigid command structure, low pilot morale, quality control issues, overextended supply lines.\n\n<b>Territory:</b> China, Southeast Asia, parts of Central Asia. Expanding aggressively.\n\n<hr>\n\n<i class=\"fas fa-eagle\"></i> <b>🇺🇸 AMERICAN IMPERIAL UNION (AIU)</b>\n\nThe United States fell to dictatorship in 2028. General Marcus Steele seized power during the Signal Crisis, declaring martial law \"for the duration of the emergency.\" The emergency never ended.\n\nThe AIU rules all of North and South America with an iron fist. Pilots are conscripted from conquered territories — Mexicans, Brazilians, Canadians — all forced to fight for the Empire. Only American officers command.\n\n<b>Doctrine:</b> Shock and awe, advanced weaponry, imperial expansion. The AIU believes it's destined to rule the post-Signal world.\n\n<b>Strengths:</b> Advanced energy weapons, elite officer corps, vast territory, propaganda machine.\n\n<b>Weaknesses:</b> Conscript pilots (low loyalty), overextended empire, internal resistance movements, officer incompetence.\n\n<b>Territory:</b> All of North and South America, from Alaska to Argentina.\n\n<hr>\n\n<i class=\"fas fa-handshake\"></i> <b>NEUTRAL ZONES</b>\n\nAfrica, Oceania, and parts of Asia remain neutral or independent. Australia, South Africa, and New Zealand form a loose defensive pact. Japan maintains armed neutrality. India fights a border war with the EPS.\n\nThese nations produce equipment for all factions — selling to the highest bidder. Mercenaries, scavengers, and independent pilots operate in these zones.\n\n<hr>\n\n<i class=\"fas fa-swords\"></i> <b>THE WAR</b>\n\nNo faction can defeat the others. The EDC holds Europe. The Collective haunts Russia. The EPS expands in Asia. The AIU dominates the Americas.\n\nThey fight over resources, territory, and salvage. Every battlefield is a scrapyard. Every scrapyard is a battlefield.\n\nThe Signal doesn't care who wins. It waits.",
  "medium": "• <b>🇪🇺 EDC:</b> Democratic Europe, heavy mechs, defensive.\n<br>• <b>🤖 Collective:</b> Rogue AI, corpse pilots, Russian wasteland.\n<br>• <b>🇨🇳 EPS:</b> Technocratic China, mass production, attrition.\n<br>• <b>🇺🇸 AIU:</b> Dictatorial USA, advanced weapons, imperial.\n<br>• Neutral zones: Africa, Oceania, mercenaries.",
  "quick": "<b>🇪🇺 EDC:</b> Europe, defense<br><b>🤖 Collective:</b> Rogue AI, Russia<br><b>🇨🇳 EPS:</b> China, mass production<br><b>🇺🇸 AIU:</b> USA Empire, Americas"
};

// Write back
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));

console.log('✅ Updated lore with 4 factions!');
console.log('   🇪🇺 European Defense Council (EDC) - Democratic Europe');
console.log('   🤖 The Collective - Rogue AI in Russian wasteland');
console.log('   🇨🇳 Eastern Prosperity Sphere (EPS) - Technocratic China');
console.log('   🇺🇸 American Imperial Union (AIU) - Dictatorial USA Empire');
console.log('');
console.log('   Updated lore_1: THE SIGNAL WAR // 2030');
console.log('   Updated lore_3: THE FOUR FACTIONS');
