# AMMUNITION CONSOLIDATION - COMPLETE ✅

## PROBLEM
Ammunition types had quantity suffixes (x2, x3, x4) that created unnecessary duplicates:
- "Burst Bolt (x2)" and "Burst Bolt (x3)" were separate types
- "Mini Rocket (x2)" and "Mini Rocket (x3)" were separate types
- "Hazard Markers (x2)" and "Hazard Markers (x3)" were separate types
- "Standard Shell" appeared in both Air Cannon and Mortar with different suffixes

**Result**: 13 ammunition types with duplicates

---

## SOLUTION
Consolidated ammunition types by removing quantity suffixes. The quantity is specified in the weapon's rule text, not in the ammo type name.

**Result**: 9 unique ammunition types (no duplicates)

---

## CONSOLIDATED AMMUNITION TYPES

### 3D CROSSBOW (2 types)
1. **Standard Bolt** - Used by 5 weapons
2. **Burst Bolt** - Used by 2 weapons (Twin-Link fires 2, Tri-Barrel fires 3)

### AIR CANNON SMALL (3 types)
3. **Standard Shell** - Used by 1 weapon (Pile Driver)
4. **Explosive Shell** - Used by 1 weapon (Breacher Shotgun)
5. **Hazard Markers** - Used by 1 weapon (Mine Dispenser fires 2)

### BIG AIR CANNON (2 types)
6. **Standard BIG Shell** - Used by 2 weapons
7. **Explosive BIG Shell** - Used by 2 weapons

### MORTAR (4 types)
8. **Mini Rocket** - Used by 2 weapons (Brimstone fires 2, Starstreak fires 3)
9. **Standard Shell** - Used by 1 weapon (Carpet-Bombing fires 4)
10. **Nuclear Bomb** - Used by 1 weapon
11. **Hazard Markers** - Used by 1 weapon (Flame Projector fires 3)

**Note**: "Standard Shell" and "Hazard Markers" are shared between devices

---

## CHANGES MADE

### EQUIPMENT.JSON UPDATES

**Consolidated "Burst Bolt":**
- eq_23 (Twin-Link): "Burst Bolt (x2)" → "Burst Bolt"
- eq_25 (Tri-Barrel): "Burst Bolt (x3)" → "Burst Bolt"
- Image path: `/uploads/ammo/burst-bolt.png` (single image)

**Consolidated "Mini Rocket":**
- eq_12 (Brimstone): "Mini Rocket (x2)" → "Mini Rocket"
- eq_13 (Starstreak): "Mini Rocket (x3)" → "Mini Rocket"
- Image path: `/uploads/ammo/mini-rocket.png` (single image)

**Consolidated "Standard Shell":**
- eq_15 (Carpet-Bombing): "Standard Shell (x4)" → "Standard Shell"
- Image path: `/uploads/ammo/standard-shell.png` (shared with Air Cannon)

**Consolidated "Hazard Markers":**
- eq_22 (Mine Dispenser): "Hazard Markers (x2)" → "Hazard Markers"
- eq_38 (Flame Projector): "Hazard Markers (x3)" → "Hazard Markers"
- Image path: `/uploads/ammo/hazard-markers.png` (single image)

### DEVICES.JSON UPDATES

**3D Crossbow:**
- BEFORE: ["Standard Bolt", "Burst Bolt (x2)", "Burst Bolt (x3)"]
- AFTER: ["Standard Bolt", "Burst Bolt"]

**Air Cannon (Small):**
- BEFORE: ["Standard Shell", "Explosive Shell", "Hazard Markers (x2)"]
- AFTER: ["Standard Shell", "Explosive Shell", "Hazard Markers"]

**Mortar:**
- BEFORE: ["Mini Rocket (x2)", "Mini Rocket (x3)", "Standard Shell (x4)", "Nuclear Bomb", "Hazard Markers (x3)"]
- AFTER: ["Mini Rocket", "Standard Shell", "Nuclear Bomb", "Hazard Markers"]

---

## BEFORE & AFTER COMPARISON

### BEFORE (13 ammunition types with duplicates):
1. Standard Bolt
2. Burst Bolt (x2)
3. Burst Bolt (x3)
4. Standard Shell
5. Explosive Shell
6. Standard BIG Shell
7. Explosive BIG Shell
8. Mini Rocket (x2)
9. Mini Rocket (x3)
10. Standard Shell (x4)
11. Nuclear Bomb
12. Hazard Markers (x2)
13. Hazard Markers (x3)

### AFTER (9 unique ammunition types):
1. Standard Bolt
2. Burst Bolt
3. Standard Shell
4. Explosive Shell
5. Standard BIG Shell
6. Explosive BIG Shell
7. Mini Rocket
8. Nuclear Bomb
9. Hazard Markers

**Reduction**: 13 → 9 types (31% reduction)

---

## DEVICES & AMMO TAB LAYOUT

Each device now shows only its unique ammunition types:

```
┌─────────────────────────────────────┐
│ 3D CROSSBOW                         │
│ [Main Image] [Icon]                 │
│ Compatible Ammunition:              │
│ [Standard Bolt] [Burst Bolt]        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ AIR CANNON (SMALL)                  │
│ [Main Image] [Icon]                 │
│ Compatible Ammunition:              │
│ [Standard Shell] [Explosive Shell]  │
│ [Hazard Markers]                    │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ BIG AIR CANNON                      │
│ [Main Image] [Icon]                 │
│ Compatible Ammunition:              │
│ [Standard BIG Shell]                │
│ [Explosive BIG Shell]               │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ MORTAR                              │
│ [Main Image] [Icon]                 │
│ Compatible Ammunition:              │
│ [Mini Rocket] [Standard Shell]      │
│ [Nuclear Bomb] [Hazard Markers]     │
└─────────────────────────────────────┘
```

---

## BENEFITS

✅ **No Duplicates**: Each ammunition type appears exactly once per device
✅ **Cleaner UI**: Fewer ammunition images to upload
✅ **Simpler System**: Quantity is in weapon rules, not ammo names
✅ **Shared Ammo**: "Standard Shell" and "Hazard Markers" correctly shared between devices
✅ **Easier to Maintain**: 9 images instead of 13

---

## FILES MODIFIED

1. **public/data/equipment.json** - Updated 7 weapons to use consolidated ammo names
2. **public/data/devices.json** - Updated all 4 devices with consolidated ammo lists

---

**STATUS**: ✅ COMPLETE
**DATE**: May 8, 2026
**RESULT**: Clean, consolidated ammunition system with no duplicates
