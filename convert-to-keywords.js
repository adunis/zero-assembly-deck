const fs = require('fs');

// Read equipment
const equipment = JSON.parse(fs.readFileSync('public/data/equipment.json', 'utf8'));

// Convert each equipment item to keyword format
equipment.forEach(eq => {
    let keywords = [];
    let reminderText = [];
    
    // === WEAPONS ===
    if (eq.type && (eq.type.includes('Weapon') || eq.type.includes('Artillery'))) {
        // Firing Type
        if (eq.firingType === 'Direct Fire') {
            keywords.push('**Direct Fire**');
            reminderText.push('Requires LoS, affected by cover');
        } else if (eq.firingType === 'Indirect Fire') {
            keywords.push('**Indirect Fire**');
            reminderText.push('No LoS needed, ignores cover, -1 to hit');
        } else if (eq.firingType === 'Lock-On') {
            keywords.push('**Lock-On**');
            reminderText.push('Turn 1: LOCK (roll 2D6), Turn 2: FIRE (auto-hit)');
        }
        
        // Range
        if (eq.range) {
            if (eq.range.includes('Short')) keywords.push('**Short** (0-15cm)');
            else if (eq.range.includes('Medium')) keywords.push('**Medium** (0-30cm)');
            else if (eq.range.includes('Long')) keywords.push('**Long** (0-45cm)');
            else if (eq.range.includes('Melee')) {
                keywords.push('**Melee**');
                reminderText.push('Base contact, auto-hit');
            }
        }
        
        // Damage
        if (eq.damage !== undefined) {
            keywords.push(`**${eq.damage} DP**`);
        }
        
        // Special Effects
        if (eq.rule) {
            // Multi-Shot
            if (eq.rule.includes('Roll 2D6 twice')) {
                keywords.push('**Multi-Shot 2**');
                reminderText.push('Roll 2D6 twice, each hit deals damage');
            } else if (eq.rule.includes('Roll 2D6 three')) {
                keywords.push('**Multi-Shot 3**');
                reminderText.push('Roll 2D6 three times, each hit deals damage');
            } else if (eq.rule.includes('Roll 2D6 four')) {
                keywords.push('**Multi-Shot 4**');
                reminderText.push('Roll 2D6 four times, each hit deals damage');
            }
            
            // Knockback
            if (eq.rule.includes('3 Finger Flicks')) {
                keywords.push('**Knockback 3**');
                reminderText.push('Perform 3 Finger Flicks on hit');
            } else if (eq.rule.includes('2 Finger Flicks')) {
                keywords.push('**Heavy**');
                reminderText.push('2 Finger Flicks instead of 1');
            }
            
            // Piercing
            if (eq.rule.includes('Ignores Partial Cover')) {
                keywords.push('**Piercing**');
                reminderText.push('Ignores Partial Cover');
            }
            
            // Re-roll
            if (eq.rule.includes('re-roll')) {
                keywords.push('**Reliable**');
                reminderText.push('Re-roll miss once per turn');
            }
            
            // Hazard
            if (eq.rule.includes('hazard markers')) {
                const markerMatch = eq.rule.match(/(\d+) hazard markers/);
                if (markerMatch) {
                    keywords.push(`**Hazard ${markerMatch[1]}**`);
                    reminderText.push(`Place ${markerMatch[1]} hazard markers, enemies touching take 1 DP`);
                }
            }
        }
    }
    
    // === SHIELDS ===
    if (eq.shieldCapacity) {
        keywords.push(`**Shield ${eq.shieldCapacity} SP**`);
        keywords.push('**Recharge**');
        reminderText.push(`Absorbs ${eq.shieldCapacity} hits (1 SP per hit), blocks Finger Flicks`);
        reminderText.push('1 AP = 1 SP');
        
        if (eq.rule && eq.rule.includes('Heavy')) {
            keywords.push('**Heavy Armor**');
            reminderText.push('-5cm movement');
        }
    }
    
    // === ARMOR ===
    if (eq.bonusHP) {
        keywords.push(`**+${eq.bonusHP} HP**`);
        
        if (eq.rule && eq.rule.includes('-5cm movement')) {
            keywords.push('**Heavy Armor**');
            reminderText.push('-5cm movement');
        }
    }
    
    // === COUNTERMEASURES ===
    if (eq.type === 'Countermeasure System') {
        keywords.push('**Countermeasure**');
        
        if (eq.rule && eq.rule.includes('REACTIVE')) {
            keywords.push('**Reactive**');
            reminderText.push('Triggers when enemy tries to LOCK, no AP cost');
            
            if (eq.rule.includes('Roll 1D6')) {
                reminderText.push('Roll 1D6: 4+ = lock fails');
            }
        } else if (eq.rule && eq.rule.includes('ACTIVE')) {
            keywords.push('**Active (1 AP)**');
            reminderText.push('Spend 1 AP to break locks');
        }
        
        if (eq.rule && eq.rule.includes('Passive')) {
            keywords.push('**Passive**');
            reminderText.push('Enemies have -2 to LOCK rolls');
        }
        
        const usesMatch = eq.rule && eq.rule.match(/(\d+) times per game/);
        if (usesMatch) {
            keywords.push(`**Limited ${usesMatch[1]}**`);
            reminderText.push(`${usesMatch[1]} uses per game`);
        } else if (eq.rule && eq.rule.includes('Unlimited')) {
            keywords.push('**Unlimited**');
        }
    }
    
    // === UTILITY ===
    if (eq.type && eq.type.includes('Utility')) {
        if (eq.rule) {
            if (eq.rule.includes('SCAVENGE costs 0 AP')) {
                keywords.push('**Free SCAVENGE**');
                reminderText.push('SCAVENGE costs 0 AP, once per turn');
            }
            
            if (eq.rule.includes('+1 to hit')) {
                keywords.push('**Targeting +1**');
                reminderText.push('+1 to hit, once per turn');
            }
            
            if (eq.rule.includes('+1 DP')) {
                keywords.push('**Damage +1**');
                reminderText.push('Next attack gains +1 DP');
            }
            
            if (eq.rule.includes('+1 to LOCK')) {
                keywords.push('**Lock Assist +1**');
                reminderText.push('+1 to LOCK rolls (Lock-On weapons)');
            }
        }
    }
    
    // === STRUCTURE ===
    if (eq.type && eq.type.includes('Structure')) {
        if (eq.rule) {
            if (eq.rule.includes('double distance')) {
                keywords.push('**Fast Move**');
                reminderText.push('One MOVE covers 2 rulers, once per turn');
            }
            
            if (eq.rule.includes('10cm high')) {
                keywords.push('**Jump Jets**');
                reminderText.push('Climb up to 10cm (instead of 5cm)');
            }
            
            if (eq.rule.includes('connector')) {
                keywords.push('**Connector**');
            }
        }
    }
    
    // === REACTIVE ARMOR ===
    if (eq.name && eq.name.includes('Reactive') && eq.name.includes('Armor')) {
        keywords.push('**Reactive Armor**');
        keywords.push('**Limited 2**');
        reminderText.push('Reduces 3 DP to 2 DP');
        reminderText.push('2 uses per game');
    }
    
    // Build new rule text
    if (keywords.length > 0) {
        const keywordLine = keywords.join(' • ');
        const reminderLine = reminderText.length > 0 ? 
            `<br><i>${reminderText.join(' • ')}</i>` : '';
        
        eq.rule = keywordLine + reminderLine;
    }
    
    // Simplify medium and quick
    if (keywords.length > 0) {
        eq.medium = keywords.join(' • ');
        eq.quick = keywords.slice(0, 3).join(' • ');
    }
});

// Write back
fs.writeFileSync('public/data/equipment.json', JSON.stringify(equipment, null, 2));

console.log('✅ Converted all equipment to keyword format');
console.log(`   Total items: ${equipment.length}`);
console.log('   Keywords are now bold and scannable');
console.log('   Reminder text is italicized');
