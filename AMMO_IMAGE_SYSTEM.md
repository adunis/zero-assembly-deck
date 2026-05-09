# Ammunition Image System

## Overview
Each weapon that uses ammunition now has an `ammoImagePath` field that points to an image showing what the projectile looks like. This helps players identify which physical projectiles to use with each weapon.

---

## Implementation

### Data Structure
Each equipment item with ammunition now includes:
```json
{
  "id": "eq_16",
  "name": "G-36 Micro-Rifle",
  "device": "3D Crossbow",
  "ammo": "Standard Bolt",
  "ammoImagePath": "/uploads/ammo/standard-bolt.png",
  ...
}
```

### Field Details
- **ammo**: Text description of the ammunition type
- **ammoImagePath**: Path to the image file showing the projectile

---

## Ammunition Types & Image Paths

### Crossbow Ammunition
| Ammo Type | Image Path | Used By |
|-----------|------------|---------|
| Standard Bolt | `/uploads/ammo/standard-bolt.png` | G-36 Micro-Rifle, FAL-X Autocannon, Lancer Railgun, Paralyzer EMP Beam, Phalanx Gatling Array |
| Burst Bolt (x2) | `/uploads/ammo/burst-bolt-x2.png` | Twin-Link Assault Rifle |
| Burst Bolt (x3) | `/uploads/ammo/burst-bolt-x3.png` | Tri-Barrel Spread Cannon |

### Air Cannon Ammunition
| Ammo Type | Image Path | Used By |
|-----------|------------|---------|
| Standard Shell | `/uploads/ammo/standard-shell.png` | Bunker Pile Driver |
| Explosive Shell | `/uploads/ammo/explosive-shell.png` | M10 Breacher Shotgun |

### Big Air Cannon Ammunition
| Ammo Type | Image Path | Used By |
|-----------|------------|---------|
| Standard BIG Shell | `/uploads/ammo/standard-big-shell.png` | MK-20 Rhino Heavy Cannon, KBA Dual Autocannon |
| Explosive BIG Shell | `/uploads/ammo/explosive-big-shell.png` | Avalanche Cannon, Barracuda ECM Blaster |

### Mortar Ammunition
| Ammo Type | Image Path | Used By |
|-----------|------------|---------|
| Mini Rocket (x2) | `/uploads/ammo/mini-rocket-x2.png` | Brimstone Micro-Missile Pod |
| Mini Rocket (x3) | `/uploads/ammo/mini-rocket-x3.png` | Starstreak Missile Rack |
| Standard Shell (x4) | `/uploads/ammo/standard-shell-x4.png` | RBS-70 Carpet-Bombing Pod |
| Nuclear Bomb | `/uploads/ammo/nuclear-bomb.png` | Storm Shadow Demolition Pod |

### Hazard Markers
| Ammo Type | Image Path | Used By |
|-----------|------------|---------|
| Hazard Markers (x2) | `/uploads/ammo/hazard-marker-x2.png` | Skorpion Mine Dispenser |
| Hazard Markers (x3) | `/uploads/ammo/hazard-marker-x3.png` | Salamander Flame Projector |

---

## Image Requirements

### Technical Specifications
- **Format**: PNG with transparency (recommended)
- **Size**: 200x200 pixels (recommended)
- **Background**: Transparent or white
- **Style**: Clear, simple, easy to identify at small sizes

### Content Guidelines
Each image should show:
1. **The projectile itself** (bolt, shell, rocket, marker)
2. **Quantity indicator** if multiple (x2, x3, x4)
3. **Visual distinction** from other ammo types

### Example Image Content

**Standard Bolt**
- Single crossbow bolt
- Straight, simple design
- Clear silhouette

**Burst Bolt (x2)**
- Two crossbow bolts side by side
- Wider than standard bolt
- "x2" indicator

**Standard Shell**
- Round projectile
- Foam or rubber ball appearance
- Medium size

**Standard BIG Shell**
- Larger round projectile
- Same style as Standard Shell but bigger
- Clear size difference

**Mini Rocket (x2)**
- Two small rocket shapes
- Pointed tips
- "x2" indicator

**Nuclear Bomb**
- Large, distinctive projectile
- Unique shape (different from shells)
- Intimidating appearance

**Hazard Markers**
- Small cube or token shapes
- Red/orange color scheme
- Quantity indicator (x2 or x3)

---

## Usage in UI

### Equipment Cards
Display the ammo image alongside the weapon:
```html
<div class="weapon-card">
  <img src="/uploads/weapon-image.png" alt="Weapon" />
  <div class="ammo-info">
    <span>Ammo: Standard Bolt</span>
    <img src="/uploads/ammo/standard-bolt.png" alt="Standard Bolt" class="ammo-icon" />
  </div>
</div>
```

### Build Phase
Show ammo images when selecting weapons:
- Help players identify which physical projectiles they need
- Visual reference for what to load into devices
- Quick identification during gameplay

### Reference Sheet
Create a printable ammo reference sheet:
- All ammo types with images
- Device compatibility
- Quick lookup during games

---

## File Organization

### Directory Structure
```
public/
  uploads/
    ammo/
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
      placeholder.png (fallback)
```

---

## Next Steps

### 1. Create Images
You need to create or source 13 unique ammo images:
- 3 Crossbow ammo types
- 2 Air Cannon ammo types
- 2 Big Air Cannon ammo types
- 4 Mortar ammo types
- 2 Hazard marker types

### 2. Upload Images
Place images in `/public/uploads/ammo/` directory with exact filenames as specified above.

### 3. Update UI Components
Modify equipment card components to display `ammoImagePath` images.

### 4. Create Reference Sheet
Design a printable PDF showing all ammo types with images for quick reference during gameplay.

---

## Benefits

### For Players
- ✅ **Visual clarity**: See exactly what projectile to use
- ✅ **Quick identification**: No need to read text descriptions
- ✅ **Faster setup**: Grab the right projectiles quickly
- ✅ **Better organization**: Sort physical projectiles by type

### For Game Design
- ✅ **Professional presentation**: Visual polish
- ✅ **Reduced confusion**: Clear communication
- ✅ **Accessibility**: Visual + text information
- ✅ **Scalability**: Easy to add new ammo types

---

## Status: ✅ DATA STRUCTURE COMPLETE

- ✅ Added `ammoImagePath` field to 19 weapons
- ✅ Defined 13 unique ammo types
- ✅ Created image path structure
- ⏳ **TODO**: Create and upload actual images
- ⏳ **TODO**: Update UI to display ammo images
