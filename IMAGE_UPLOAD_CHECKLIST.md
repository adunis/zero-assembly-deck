# Image Upload Checklist

## 📸 Complete Image Upload Guide

You now have **two image systems** set up:
1. **Ammunition Images** (13 images)
2. **Device Images** (10 images: 5 main + 5 icons)

---

## 🎯 AMMUNITION IMAGES (13 Total)

Upload to: `/public/uploads/ammo/`

### Crossbow Ammo (3 images)
- [ ] `standard-bolt.png` - Single bolt (200x200px)
- [ ] `burst-bolt-x2.png` - Two bolts side by side (200x200px)
- [ ] `burst-bolt-x3.png` - Three bolts in spread (200x200px)

### Air Cannon Ammo (2 images)
- [ ] `standard-shell.png` - Round foam ball (200x200px)
- [ ] `explosive-shell.png` - Round ball with warning marks (200x200px)

### Big Air Cannon Ammo (2 images)
- [ ] `standard-big-shell.png` - Large round ball (200x200px)
- [ ] `explosive-big-shell.png` - Large ball with warning marks (200x200px)

### Mortar Ammo (4 images)
- [ ] `mini-rocket-x2.png` - Two small rockets (200x200px)
- [ ] `mini-rocket-x3.png` - Three small rockets (200x200px)
- [ ] `standard-shell-x4.png` - Four shells in grid (200x200px)
- [ ] `nuclear-bomb.png` - Large unique bomb (200x200px)

### Hazard Markers (2 images)
- [ ] `hazard-marker-x2.png` - Two hazard cubes (200x200px)
- [ ] `hazard-marker-x3.png` - Three hazard cubes (200x200px)

---

## 🔫 DEVICE IMAGES (10 Total)

### Main Device Images (5 images)
Upload to: `/public/uploads/devices/`

- [ ] `crossbow.png` - 3D Crossbow photo/render (800x600px)
- [ ] `air-cannon-small.png` - Small Air Cannon photo/render (800x600px)
- [ ] `air-cannon-big.png` - Big Air Cannon photo/render (800x600px)
- [ ] `mortar.png` - Mortar device photo/render (800x600px)
- [ ] `physical-push.png` - Hand pushing illustration (800x600px)

### Device Icons (5 images)
Upload to: `/public/uploads/devices/icons/`

- [ ] `crossbow-icon.png` - Crossbow silhouette (128x128px)
- [ ] `air-cannon-small-icon.png` - Small cannon silhouette (128x128px)
- [ ] `air-cannon-big-icon.png` - Big cannon silhouette (128x128px)
- [ ] `mortar-icon.png` - Mortar silhouette (128x128px)
- [ ] `physical-push-icon.png` - Hand icon (128x128px)

---

## 📁 Directory Structure to Create

```
public/
  uploads/
    ammo/                           ← Create this folder
      standard-bolt.png
      burst-bolt-x2.png
      burst-bolt-x3.png
      standard-shell.png
      explosive-shell.png
      standard-big-shell.png
      explosive-big-shell.png
      mini-rocket-x2.png
      mini-rocket-x3.png
      standard-shell-x4.png
      nuclear-bomb.png
      hazard-marker-x2.png
      hazard-marker-x3.png
    
    devices/                        ← Create this folder
      crossbow.png
      air-cannon-small.png
      air-cannon-big.png
      mortar.png
      physical-push.png
      
      icons/                        ← Create this subfolder
        crossbow-icon.png
        air-cannon-small-icon.png
        air-cannon-big-icon.png
        mortar-icon.png
        physical-push-icon.png
```

---

## 🎨 Quick Image Specs Reference

### Ammunition Images
- **Size**: 200x200px
- **Format**: PNG with transparency
- **Style**: Clean, simple, recognizable
- **Content**: Show the projectile(s)

### Device Main Images
- **Size**: 800x600px (landscape)
- **Format**: PNG or JPG
- **Style**: Product photography
- **Content**: Clear photo/render of device

### Device Icons
- **Size**: 128x128px
- **Format**: PNG with transparency
- **Style**: Simplified silhouette
- **Content**: Recognizable device shape

---

## 🚀 Priority Order

### High Priority (Most Used)
1. **Standard Bolt** - Used by 5 weapons
2. **Crossbow** device + icon - Used by 7 weapons
3. **Standard BIG Shell** - Used by 2 weapons
4. **Big Air Cannon** device + icon - Used by 4 weapons

### Medium Priority
5. **Air Cannon Small** device + icon - Used by 3 weapons
6. **Mortar** device + icon - Used by 5 weapons
7. **Explosive BIG Shell** - Used by 2 weapons
8. **Standard Shell** - Used by 2 weapons

### Lower Priority (Unique/Special)
9. All burst bolts (x2, x3)
10. All mini rockets (x2, x3)
11. Nuclear Bomb
12. Hazard markers
13. Physical Push device + icon

---

## ✅ Testing Checklist

After uploading images:

### Test Ammunition Images
- [ ] Load equipment.json in your app
- [ ] Check that `ammoImagePath` displays correctly
- [ ] Verify all 13 ammo images load
- [ ] Check images look good at small sizes

### Test Device Images
- [ ] Load devices.json in your app
- [ ] Check that `imagePath` displays correctly (main images)
- [ ] Check that `iconPath` displays correctly (icons)
- [ ] Verify all 10 device images load
- [ ] Test icons at various sizes (32px, 64px, 128px)

### Visual Quality
- [ ] Images are clear and recognizable
- [ ] Transparent backgrounds work correctly
- [ ] Colors are consistent across similar items
- [ ] File sizes are reasonable (< 100KB each)

---

## 📝 Notes

### Where to Get Images

**Option 1: Photography**
- Print the actual devices
- Take photos with white background
- Edit to remove background
- Add labels/indicators

**Option 2: 3D Rendering**
- Use Blender or similar software
- Render the 3D models
- Export with transparent background
- Add post-processing

**Option 3: AI Generation**
- Use Midjourney, DALL-E, or Stable Diffusion
- Prompt: "game icon, [item description], transparent background, simple design"
- Post-process to clean up
- Add labels/indicators

**Option 4: Illustration**
- Draw/illustrate in Photoshop, Illustrator, or Procreate
- Use consistent art style
- Export at correct dimensions
- Keep it simple and clear

### Image Optimization
- Use PNG for transparency (ammo, icons)
- Use JPG for photos without transparency (device main images)
- Compress images to reduce file size
- Test loading speed in your app

---

## 🎯 Summary

**Total Images Needed**: 23
- 13 Ammunition images (200x200px)
- 5 Device main images (800x600px)
- 5 Device icons (128x128px)

**Folders to Create**: 3
- `/public/uploads/ammo/`
- `/public/uploads/devices/`
- `/public/uploads/devices/icons/`

**Data Files Ready**:
- ✅ `public/data/equipment.json` (with `ammoImagePath`)
- ✅ `public/data/devices.json` (with `imagePath` and `iconPath`)

**Next Step**: Create and upload the 23 images!
