const fs = require('fs');

// Read the main rules file
const rulesData = JSON.parse(fs.readFileSync('./public/data/rules.json', 'utf8'));

console.log('=== RULES FILE ANALYSIS ===\n');
console.log(`Total sections: ${rulesData.length}\n`);

// Analyze each section
rulesData.forEach((section, index) => {
    console.log(`${index + 1}. ${section.title} (ID: ${section.id})`);
    console.log(`   Description length: ${section.description.length} chars`);
    console.log(`   Medium length: ${section.medium ? section.medium.length : 0} chars`);
    console.log(`   Quick length: ${section.quick ? section.quick.length : 0} chars`);
    console.log('');
});

// Check for duplicate content
console.log('\n=== CHECKING FOR REPETITION ===\n');

// Extract key phrases that might be repeated
const phrases = [];
rulesData.forEach(section => {
    const text = section.description.toLowerCase();
    
    // Check for common repeated phrases
    const commonPhrases = [
        'action points',
        'finger flick',
        'line of sight',
        'roll 2d6',
        'need 7+',
        'direct fire',
        'indirect fire',
        'lock-on',
        'energy shield',
        'hp tokens',
        'resource cubes',
        'reposition',
        'engage',
        'scavenge',
        'recharge'
    ];
    
    commonPhrases.forEach(phrase => {
        const count = (text.match(new RegExp(phrase, 'g')) || []).length;
        if (count > 0) {
            phrases.push({
                section: section.title,
                phrase: phrase,
                count: count
            });
        }
    });
});

// Group by phrase
const phraseMap = {};
phrases.forEach(item => {
    if (!phraseMap[item.phrase]) {
        phraseMap[item.phrase] = [];
    }
    phraseMap[item.phrase].push({
        section: item.section,
        count: item.count
    });
});

// Show phrases that appear in multiple sections
Object.keys(phraseMap).forEach(phrase => {
    const sections = phraseMap[phrase];
    if (sections.length > 1) {
        console.log(`"${phrase}" appears in ${sections.length} sections:`);
        sections.forEach(s => {
            console.log(`  - ${s.section} (${s.count}x)`);
        });
        console.log('');
    }
});

// Check for backup files
console.log('\n=== BACKUP FILES ===\n');
const files = fs.readdirSync('./public/data');
const ruleFiles = files.filter(f => f.includes('rules') && f.endsWith('.json'));
ruleFiles.forEach(file => {
    const stats = fs.statSync(`./public/data/${file}`);
    console.log(`${file}: ${stats.size} bytes`);
});

console.log('\n=== RECOMMENDATIONS ===\n');
console.log('1. DELETE backup files: rules-partial.json, rules-restored.json, rules-test.json, rules.json.corrupted');
console.log('2. KEEP only: rules.json (main file)');
console.log('3. The glossary section contains many definitions that are repeated in detail sections');
console.log('4. Consider: Keep glossary as quick reference, remove redundant explanations from other sections');
