const fs = require('fs');

// Define all keywords with their explanations
const KEYWORDS = {
    // Weapon Types
    "Direct Fire": "Requires line of sight. Affected by cover.",
    "Indirect Fire": "No line of sight needed. Ignores cover. -1 to hit.",
    "Lock-On": "Turn 1: LOCK (roll 2D6). Turn 2: FIRE (auto-hit). Cannot lock within 15cm.",
    "Melee": "Base contact required. Auto-hit.",
    
    // Range
    "Short Range": "0-15cm",
    "Medium Range": "0-30cm", 
    "Long Range": "0-45cm",
    
    // Damage & Effects
    "Knockback X": "Perform X Finger Flicks on hit.",
    "Multi-Shot X": "Roll 2D6 X times. Each hit deals damage separately.",
    "Piercing": "Ignores Partial Cover.",
    "Heavy": "Performs 2 Finger Flicks instead of 1.",
    "Blast": "On hit, perform 1 Finger Flick on building pieces within Short range.",
    
    // Defense
    "Shield X SP": "Absorbs X hits (1 SP per hit). Blocks Finger Flicks while active.",
    "Recharge": "Spend 1 AP to restore 1 SP.",
    "Reactive": "Triggers automatically when condition is met. No AP cost.",
    "Heavy Armor": "-5cm movement speed.",
    
    // Utility
    "Connector": "Can attach other equipment to this part.",
    "Climbing": "Can climb terrain up to specified height.",
    "Fast Move": "Movement covers double distance.",
    
    // Countermeasures
    "Countermeasure": "Breaks or prevents Lock-On targeting.",
    "Limited X": "Usable X times per game.",
    
    // Special
    "Once Per Turn": "Can only use this ability once per turn.",
    "Auto-Hit": "No roll required. Automatically hits.",
    "Ignore Cover": "Target's cover provides no penalty."
};

// Read equipment
const equipment = JSON.parse(fs.readFileSync('public/data/equipment.json', 'utf8'));

// Function to convert equipment to keyword format
function convertToKeywords(eq) {
    let keywords = [];
    let reminder = "";
    
    // Weapons
    if (eq.firingType) {
        keywords.push(eq.firingType);
        reminder += `<i>${KEYWORDS[eq.firingType]}</i>`;
    }
    
    if (eq.range) {
        const rangeKey = eq.range.includes('Short') ? 'Short Range' :
                        eq.range.includes('Medium') ? 'Medium Range' :
                        eq.range.includes('Long') ? 'Long Range' : null;
        if (rangeKey) {
            keywords.push(rangeKey);
            if (reminder) reminder += " • ";
            reminder += `<i>${KEYWORDS[rangeKey]}</i>`;
        }
    }
    
    if (eq.damage !== undefined) {
        keywords.push(`${eq.damage} DP`);
    }
    
    // Check for special effects in rule text
    if (eq.rule) {
        // Multi-shot
        const multiShotMatch = eq.rule.match(/Roll 2D6 (\w+) times/);
        if (multiShotMatch) {
            const times = multiShotMatch[1] === 'twice' ? 2 : 
                         multiShotMatch[1] === 'three' ? 3 : 
                         multiShotMatch[1] === 'four' ? 4 : 0;
            if (times > 0) {
                keywords.push(`Multi-Shot ${times}`);
                if (reminder) reminder += " • ";
                reminder += `<i>${KEYWORDS['Multi-Shot X'].replace('X', times)}</i>`;
            }
        }
        
        // Knockback
        if (eq.rule.includes('3 Finger Flicks')) {
            keywords.push('Knockback 3');
            if (reminder) reminder += " • ";
            reminder += `<i>${KEYWORDS['Knockback X'].replace('X', '3')}</i>`;
        } else if (eq.rule.includes('2 Finger Flicks')) {
            keywords.push('Heavy');
            if (reminder) reminder += " • ";
            reminder += `<i>${KEYWORDS.Heavy}</i>`;
        }
        
        // Piercing
        if (eq.rule.includes('Ignores Partial Cover')) {
            keywords.push('Piercing');
            if (reminder) reminder += " • ";
            reminder += `<i>${KEYWORDS.Piercing}</i>`;
        }
        
        // Auto-hit
        if (eq.rule.includes('Automatically hits') || eq.rule.includes('auto-hit')) {
            keywords.push('Auto-Hit');
        }
        
        // Melee
        if (eq.rule.includes('base contact')) {
            keywords.push('Melee');
            if (reminder) reminder += " • ";
            reminder += `<i>${KEYWORDS.Melee}</i>`;
        }
    }
    
    // Shields
    if (eq.shieldCapacity) {
        keywords.push(`Shield ${eq.shieldCapacity} SP`);
        keywords.push('Recharge');
        if (reminder) reminder += " • ";
        reminder += `<i>${KEYWORDS[`Shield X SP`].replace('X', eq.shieldCapacity)}</i>`;
        if (reminder) reminder += " • ";
        reminder += `<i>${KEYWORDS.Recharge}</i>`;
    }
    
    // Armor
    if (eq.bonusHP) {
        keywords.push(`+${eq.bonusHP} HP`);
    }
    
    if (eq.rule && eq.rule.includes('-5cm movement')) {
        keywords.push('Heavy Armor');
        if (reminder) reminder += " • ";
        reminder += `<i>${KEYWORDS['Heavy Armor']}</i>`;
    }
    
    // Countermeasures
    if (eq.type === 'Countermeasure System') {
        keywords.push('Countermeasure');
        if (eq.rule.includes('Reactive') || eq.rule.includes('REACTIVE')) {
            keywords.push('Reactive');
            if (reminder) reminder += " • ";
            reminder += `<i>${KEYWORDS.Reactive}</i>`;
        }
        
        const usesMatch = eq.rule.match(/(\d+) times per game/);
        if (usesMatch) {
            keywords.push(`Limited ${usesMatch[1]}`);
            if (reminder) reminder += " • ";
            reminder += `<i>${KEYWORDS['Limited X'].replace('X', usesMatch[1])}</i>`;
        }
    }
    
    // Utility
    if (eq.rule && eq.rule.includes('Once per turn')) {
        keywords.push('Once Per Turn');
    }
    
    if (eq.rule && eq.rule.includes('connector')) {
        keywords.push('Connector');
    }
    
    return { keywords: keywords.join(' • '), reminder };
}

// Test on a few items
console.log('=== KEYWORD CONVERSION EXAMPLES ===\n');

const testItems = [
    'eq_16', // G-36 Micro-Rifle
    'eq_18', // MK-20 Rhino
    'eq_13', // Starstreak
    'eq_6',  // Aegis Shield
    'eq_46', // Chaff Flares
    'eq_2',  // Bunker Pile Driver
    'eq_23', // Twin-Link
];

testItems.forEach(id => {
    const item = equipment.find(eq => eq.id === id);
    if (item) {
        const converted = convertToKeywords(item);
        console.log(`${item.name}:`);
        console.log(`  Keywords: ${converted.keywords}`);
        console.log(`  Reminder: ${converted.reminder}`);
        console.log('');
    }
});

console.log('\n=== KEYWORD REFERENCE ===\n');
Object.keys(KEYWORDS).forEach(keyword => {
    console.log(`${keyword}: ${KEYWORDS[keyword]}`);
});
