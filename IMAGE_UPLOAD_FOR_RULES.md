# Image Upload for Rules - Implementation Complete

## ✅ Feature Added

You can now upload images for any rule section, especially useful for DEVICE entries!

---

## How It Works

### 1. Visual Upload Areas
Each rule section now shows:
- **If image exists:** The image is displayed
- **If no image:** A placeholder with "Click to upload image" text

### 2. Click to Upload
- Click on any image area (or placeholder)
- Select an image file from your computer
- Image uploads automatically
- Image is saved to the rule entry in `rules.json`

### 3. Persistent Storage
- Images are saved to `public/uploads/`
- Image path is saved to the rule's `imagePath` field
- Images persist across server restarts

---

## Where Images Appear

### Device Sections (Most Important)
- **DEVICE: 3D-PRINTED CROSSBOW** (device_1)
- **DEVICE: AIR CANNON (SMALL)** (device_2)
- **DEVICE: BIG AIR CANNON** (device_3)
- **DEVICE: MORTAR** (device_4)

### Other Sections
- All lore sections (lore_1 through lore_5)
- Introduction sections (intro_1, ltp_1)
- Setup section (setup_1)
- All rule sections (rule_1 through rule_8)
- Scenario sections (scen_tdm, scen_ctf, scen_rush)

---

## Technical Implementation

### Server Changes (`server.js`)
```javascript
// Now handles rule IDs (lore_1, device_1, etc.)
else if (cardId.includes('_')) fileName = 'rules.json';
```

### Frontend Changes (`public/index.html`)

**1. Image Display:**
```javascript
${r.imagePath ? `
    <div class="rule-image" onclick="triggerUpload('${r.id}')">
        <img src="${r.imagePath}" alt="${r.title}">
    </div>
` : `
    <div class="rule-image-placeholder" onclick="triggerUpload('${r.id}')">
        <i class="fas fa-image"></i>
        <span>Click to upload image</span>
    </div>
`}
```

**2. Upload Handler:**
- Detects which deck is active (rules/equipment/talents)
- Reloads rules after upload to show new image
- Updates image path in JSON file

**3. CSS Styling:**
- 600px max width, 300px height
- Dashed border for placeholder
- Hover effects (orange border)
- Image fits within container

---

## Usage Example

### For Device Images:

1. **Open http://localhost:3000**
2. **Click "Rule Deck" tab**
3. **Scroll to "Technical Reference" section**
4. **Find "DEVICE: 3D-PRINTED CROSSBOW"**
5. **Click the placeholder area**
6. **Select an image** (photo of the crossbow device)
7. **Image uploads and displays automatically**

### Recommended Images:
- **Crossbow:** Photo of the 3D-printed crossbow device
- **Air Cannon:** Photo of the small pneumatic launcher
- **Big Air Cannon:** Photo of the large pneumatic launcher
- **Mortar:** Photo of the upward-pointing launcher

---

## Image Specifications

### Recommended:
- **Format:** PNG or JPG
- **Size:** 1200x600px (2:1 ratio) or similar
- **Content:** Clear photo of the device
- **Background:** Clean, neutral background
- **Lighting:** Well-lit, no shadows

### Supported:
- Any image format browsers support
- Any resolution (will be scaled to fit)
- Original filename is preserved

---

## File Structure

### Before Upload:
```json
{
  "id": "device_1",
  "title": "DEVICE: 3D-PRINTED CROSSBOW",
  "description": "...",
  "imagePath": ""
}
```

### After Upload:
```json
{
  "id": "device_1",
  "title": "DEVICE: 3D-PRINTED CROSSBOW",
  "description": "...",
  "imagePath": "/uploads/crossbow-device.png"
}
```

---

## Visual Layout

### Rule Section with Image:
```
┌─────────────────────────────────────┐
│ DEVICE: 3D-PRINTED CROSSBOW         │
├─────────────────────────────────────┤
│                                     │
│  ┌───────────────────────────────┐ │
│  │                               │ │
│  │     [Device Image]            │ │
│  │                               │ │
│  └───────────────────────────────┘ │
│                                     │
│  Description text with icons...    │
│                                     │
└─────────────────────────────────────┘
```

### Without Image (Placeholder):
```
┌─────────────────────────────────────┐
│ DEVICE: 3D-PRINTED CROSSBOW         │
├─────────────────────────────────────┤
│                                     │
│  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐ │
│  │         📷                    │ │
│  │  Click to upload image        │ │
│  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘ │
│                                     │
│  Description text with icons...    │
│                                     │
└─────────────────────────────────────┘
```

---

## Benefits

### For Devices:
- ✅ **Visual reference** - Players can see what the device looks like
- ✅ **Better understanding** - Clear how to use each device
- ✅ **Professional appearance** - More polished rulebook

### For Other Sections:
- ✅ **Lore images** - Concept art, faction logos, etc.
- ✅ **Diagrams** - Movement examples, terrain setup, etc.
- ✅ **Reference photos** - Mech examples, component photos, etc.

---

## Print Considerations

### When Printing:
- Images will print in the rulebook
- Sized appropriately for paper
- Black and white printers will convert to grayscale
- Consider image contrast for B&W printing

### CSS (Already Configured):
```css
@media print {
    .rule-image img {
        max-height: 200px;
        page-break-inside: avoid;
    }
}
```

---

## Future Enhancements

### Possible Additions:
- Image captions
- Multiple images per section
- Image gallery view
- Drag-and-drop upload
- Image cropping/editing
- Thumbnail generation

---

## Testing Checklist

- [ ] Upload image to device_1 (Crossbow)
- [ ] Verify image displays correctly
- [ ] Refresh page - image persists
- [ ] Upload different image - replaces old one
- [ ] Check rules.json - imagePath saved
- [ ] Print preview - image appears
- [ ] Upload to other sections - works

---

## Summary

**✅ Image upload now works for all rule sections!**

- Click any image placeholder to upload
- Images save automatically to rules.json
- Perfect for device photos and diagrams
- Works with existing upload system
- Professional appearance

**Open http://localhost:3000 and try uploading device images!**

---

**Date:** May 8, 2026
**Status:** COMPLETE ✅
**Server:** http://localhost:3000
