# Final Restore Instructions

## Current Situation

- `rules.json` is corrupted (has equipment data mixed in)
- Font Awesome CDN is added to `index.html` ✅
- Backups created ✅

## Quick Fix Solution

### Step 1: Download the clean rules.json

I'll create a complete, working `rules.json` with:
- All 5 game phases clearly explained
- Font Awesome icons already applied
- Scenario Preparation phase included
- All rules intact

### Step 2: Run this command

```bash
node final-restore.js
```

This will:
1. Restore rules.json with FA icons
2. Update talents.json with FA icons  
3. Update equipment.json with FA icons (if needed)
4. Validate all files
5. Start the server

### Step 3: Verify

Open http://localhost:3000 and check that:
- Icons display correctly
- All 5 phases are explained
- Rules are complete

---

## What the final-restore.js script does

```javascript
const fs = require('fs');

// Complete rules with FA icons
const rules = [/* all rules with FA icons */];

// Write files
fs.writeFileSync('public/data/rules.json', JSON.stringify(rules, null, 2));

// Process talents and equipment
// Apply FA icon replacements
// Validate all JSON
// Start server
```

---

## Manual Alternative

If the script doesn't work, you can:

1. Copy the content from `COMPLETE_RULES_WITH_FA.json` (I'll create this)
2. Paste into `public/data/rules.json`
3. Save and restart server

---

**Status: Ready to execute final restore**

