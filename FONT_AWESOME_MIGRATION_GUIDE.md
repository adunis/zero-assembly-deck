# Font Awesome Icon Migration Guide

## Overview

This guide explains how to replace all emojis in the Zero Assembly game with Font Awesome icons for better cross-platform compatibility and professional appearance.

---

## Step 1: Add Font Awesome to HTML

✅ **COMPLETED** - Font Awesome 6.5.1 has been added to `public/index.html`:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

---

## Step 2: Emoji to Font Awesome Mapping

### Complete Replacement Table

| Emoji | Font Awesome Icon | HTML Code |
|-------|-------------------|-----------|
| ⚡ | Bolt | `<i class="fas fa-bolt"></i>` |
| 🚶 | Person Walking | `<i class="fas fa-person-walking"></i>` |
| 🔫 | Gun | `<i class="fas fa-gun"></i>` |
| 🔧 | Wrench | `<i class="fas fa-wrench"></i>` |
| 🔄 | Rotate | `<i class="fas fa-rotate"></i>` |
| 🎯 | Bullseye | `<i class="fas fa-bullseye"></i>` |
| 💔 | Heart Crack | `<i class="fas fa-heart-crack"></i>` |
| 🏆 | Trophy | `<i class="fas fa-trophy"></i>` |
| 🎮 | Gamepad | `<i class="fas fa-gamepad"></i>` |
| 📐 | Ruler Combined | `<i class="fas fa-ruler-combined"></i>` |
| 🏗️ | Building | `<i class="fas fa-building"></i>` |
| ⚙️ | Gear | `<i class="fas fa-gear"></i>` |
| 📋 | Clipboard | `<i class="fas fa-clipboard"></i>` |
| 🚀 | Rocket | `<i class="fas fa-rocket"></i>` |
| ⚔️ | Swords | `<i class="fas fa-swords"></i>` |
| 📦 | Box | `<i class="fas fa-box"></i>` |
| 💡 | Lightbulb | `<i class="fas fa-lightbulb"></i>` |
| 📏 | Ruler | `<i class="fas fa-ruler"></i>` |
| 👊 | Hand Fist | `<i class="fas fa-hand-fist"></i>` |
| 💥 | Burst | `<i class="fas fa-burst"></i>` |
| 📍 | Location Dot | `<i class="fas fa-location-dot"></i>` |
| ☠️ | Skull | `<i class="fas fa-skull"></i>` |
| 🛞 | Circle (Wheel) | `<i class="fas fa-circle"></i>` |
| 🚜 | Tractor | `<i class="fas fa-tractor"></i>` |
| 🕷️ | Spider | `<i class="fas fa-spider"></i>` |
| 🦿 | Person (Biped) | `<i class="fas fa-person"></i>` |
| 🧗 | Person Climbing | `<i class="fas fa-person-climbing"></i>` |
| ❌ | X Mark | `<i class="fas fa-xmark"></i>` |
| ✅ | Check | `<i class="fas fa-check"></i>` |
| ⚠️ | Triangle Exclamation | `<i class="fas fa-triangle-exclamation"></i>` |
| 🤖 | Robot | `<i class="fas fa-robot"></i>` |
| 🎨 | Palette | `<i class="fas fa-palette"></i>` |
| 📝 | File Lines | `<i class="fas fa-file-lines"></i>` |
| 🛡️ | Shield | `<i class="fas fa-shield"></i>` |
| 🏁 | Flag Checkered | `<i class="fas fa-flag-checkered"></i>` |
| 💨 | Wind | `<i class="fas fa-wind"></i>` |
| 🏹 | Bow Arrow | `<i class="fas fa-bow-arrow"></i>` |

---

## Step 3: Files to Update

### Files Requiring Updates:
1. ✅ `public/index.html` - Font Awesome CDN added
2. ⏳ `public/data/rules.json` - Replace emojis
3. ⏳ `public/data/talents.json` - Replace emojis  
4. ⏳ `public/data/equipment.json` - Replace emojis (if any)

---

## Step 4: Automated Replacement Script

### Node.js Script (`replace-emojis.js`)

```javascript
const fs = require('fs');

const replacements = {
  '⚡': '<i class="fas fa-bolt"></i>',
  '🚶': '<i class="fas fa-person-walking"></i>',
  '🔫': '<i class="fas fa-gun"></i>',
  '🔧': '<i class="fas fa-wrench"></i>',
  '🔄': '<i class="fas fa-rotate"></i>',
  '🎯': '<i class="fas fa-bullseye"></i>',
  '💔': '<i class="fas fa-heart-crack"></i>',
  '🏆': '<i class="fas fa-trophy"></i>',
  '🎮': '<i class="fas fa-gamepad"></i>',
  '📐': '<i class="fas fa-ruler-combined"></i>',
  '🏗️': '<i class="fas fa-building"></i>',
  '⚙️': '<i class="fas fa-gear"></i>',
  '📋': '<i class="fas fa-clipboard"></i>',
  '🚀': '<i class="fas fa-rocket"></i>',
  '⚔️': '<i class="fas fa-swords"></i>',
  '📦': '<i class="fas fa-box"></i>',
  '💡': '<i class="fas fa-lightbulb"></i>',
  '📏': '<i class="fas fa-ruler"></i>',
  '👊': '<i class="fas fa-hand-fist"></i>',
  '💥': '<i class="fas fa-burst"></i>',
  '📍': '<i class="fas fa-location-dot"></i>',
  '☠️': '<i class="fas fa-skull"></i>',
  '🛞': '<i class="fas fa-circle"></i>',
  '🚜': '<i class="fas fa-tractor"></i>',
  '🕷️': '<i class="fas fa-spider"></i>',
  '🦿': '<i class="fas fa-person"></i>',
  '🧗': '<i class="fas fa-person-climbing"></i>',
  '❌': '<i class="fas fa-xmark"></i>',
  '✅': '<i class="fas fa-check"></i>',
  '⚠️': '<i class="fas fa-triangle-exclamation"></i>',
  '🤖': '<i class="fas fa-robot"></i>',
  '🎨': '<i class="fas fa-palette"></i>',
  '📝': '<i class="fas fa-file-lines"></i>',
  '🛡️': '<i class="fas fa-shield"></i>',
  '🏁': '<i class="fas fa-flag-checkered"></i>',
  '💨': '<i class="fas fa-wind"></i>',
  '🏹': '<i class="fas fa-bow-arrow"></i>'
};

function replaceEmojis(str) {
  if (typeof str !== 'string') return str;
  let result = str;
  for (const [emoji, icon] of Object.entries(replacements)) {
    result = result.split(emoji).join(icon);
  }
  return result;
}

function processObject(obj) {
  if (typeof obj === 'string') {
    return replaceEmojis(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(processObject);
  } else if (obj && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = processObject(value);
    }
    return result;
  }
  return obj;
}

// Process each file
const files = ['rules.json', 'talents.json', 'equipment.json'];

files.forEach(filename => {
  const path = `public/data/${filename}`;
  try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    const processed = processObject(data);
    fs.writeFileSync(path, JSON.stringify(processed, null, 2), 'utf8');
    console.log(`✓ Replaced emojis in ${filename}`);
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
  }
});

console.log('\n✅ All emojis replaced with Font Awesome icons!');
```

### How to Run:

```bash
node replace-emojis.js
```

---

## Step 5: Manual Replacement (If Needed)

If the automated script fails, you can manually replace emojis using find-and-replace in your text editor:

### Example Replacements:

**Before:**
```json
"description": "⚡ YOUR TURN: You get 2 Action Points (AP). Spend them on:\n• 🚶 MOVE (1 AP)"
```

**After:**
```json
"description": "<i class=\"fas fa-bolt\"></i> YOUR TURN: You get 2 Action Points (AP). Spend them on:\n• <i class=\"fas fa-person-walking\"></i> MOVE (1 AP)"
```

---

## Step 6: CSS Styling (Optional)

Add custom styling for Font Awesome icons in your CSS:

```css
/* Icon styling */
.fas {
    margin-right: 4px;
    color: var(--accent-orange);
}

/* Specific icon colors */
.fa-bolt { color: #ffeb3b; }
.fa-heart-crack { color: #f44336; }
.fa-trophy { color: #ffd700; }
.fa-skull { color: #666; }
.fa-check { color: #4caf50; }
.fa-xmark { color: #f44336; }
```

---

## Step 7: Verification

After replacement, verify:

1. **JSON Validity:**
```bash
node -e "JSON.parse(require('fs').readFileSync('public/data/rules.json', 'utf8')); console.log('✓ Valid');"
```

2. **Visual Check:**
- Start server: `node server.js`
- Open http://localhost:3000
- Check that icons display correctly
- Verify no broken emojis remain

---

## Benefits of Font Awesome Icons

### Advantages:
- ✅ **Cross-platform compatibility** - Works on all devices
- ✅ **Consistent appearance** - Same look everywhere
- ✅ **Scalable** - Vector-based, scales perfectly
- ✅ **Customizable** - Can change color, size with CSS
- ✅ **Professional** - More polished appearance
- ✅ **Accessible** - Better screen reader support

### Comparison:

| Feature | Emojis | Font Awesome |
|---------|--------|--------------|
| Cross-platform | ❌ Varies | ✅ Consistent |
| Customizable | ❌ Limited | ✅ Full CSS control |
| File size | ✅ Built-in | ⚠️ Requires CDN |
| Accessibility | ⚠️ Limited | ✅ Better |
| Professional | ⚠️ Casual | ✅ Professional |

---

## Troubleshooting

### Issue: Icons not displaying

**Solution:**
- Check Font Awesome CDN is loaded in `<head>`
- Check browser console for errors
- Verify internet connection (CDN requires online access)

### Issue: JSON parse errors

**Solution:**
- Validate JSON syntax
- Check for unescaped quotes in icon HTML
- Use `\"` instead of `"` inside JSON strings

### Issue: Icons look wrong

**Solution:**
- Check icon class names match Font Awesome 6.x
- Verify `fas` (solid) vs `far` (regular) vs `fab` (brands)
- Add custom CSS for sizing/coloring

---

## Alternative: Self-Hosted Font Awesome

If you want to avoid CDN dependency:

1. Download Font Awesome from https://fontawesome.com/download
2. Extract to `public/fonts/fontawesome/`
3. Update HTML:

```html
<link rel="stylesheet" href="/fonts/fontawesome/css/all.min.css">
```

---

## Rollback Plan

If you need to revert:

1. **Restore from backup:**
```bash
cp public/data/rules.json.backup public/data/rules.json
cp public/data/talents.json.backup public/data/talents.json
```

2. **Or reverse the replacements:**
- Run script with reversed mapping
- Replace `<i class="fas fa-bolt"></i>` with `⚡`

---

## Status

- ✅ Font Awesome CDN added to HTML
- ✅ Replacement script created
- ⏳ Awaiting execution on data files
- ⏳ Testing and verification needed

---

**Next Steps:**
1. Create backups of all JSON files
2. Run replacement script
3. Validate JSON files
4. Test in browser
5. Adjust CSS styling if needed

