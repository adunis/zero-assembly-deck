# AMMUNITION IMAGE ANALYSIS

## CURRENT AMMUNITION TYPES (19 weapons total)

### UNIQUE AMMUNITION TYPES (13 total):

1. **standard-bolt.png** - Used by 5 weapons ✅ (Crossbow direct fire)
   - G-36 Micro-Rifle (eq_16)
   - FAL-X Autocannon (eq_17)
   - 'Lancer' Railgun (eq_28)
   - 'Paralyzer' EMP Beam (eq_20)
   - 'Phalanx' Gatling Array (eq_26)

2. **burst-bolt-x2.png** - Used by 1 weapon ✅
   - Twin-Link Assault Rifle (eq_23)

3. **burst-bolt-x3.png** - Used by 1 weapon ✅
   - Tri-Barrel Spread Cannon (eq_25)

4. **standard-shell.png** - Used by 1 weapon ✅ (Air Cannon ammo)
   - 'Bunker' Pile Driver (eq_2)

5. **explosive-shell.png** - Used by 1 weapon ✅
   - M10 'Breacher' Shotgun (eq_37)

6. **standard-big-shell.png** - Used by 2 weapons ✅ (Big Cannon ammo)
   - MK-20 'Rhino' Heavy Cannon (eq_18)
   - KBA Dual Autocannon (eq_24)

7. **explosive-big-shell.png** - Used by 2 weapons ✅
   - Avalanche Cannon (eq_19)
   - 'Barracuda' ECM Blaster (eq_21)

8. **mini-rocket-x2.png** - Used by 1 weapon ✅
   - 'Brimstone' Micro-Missile Pod (eq_12)

9. **mini-rocket-x3.png** - Used by 1 weapon ✅
   - 'Starstreak' Missile Rack (eq_13)

10. **standard-shell-x4.png** - Used by 1 weapon ✅
    - RBS-70 Carpet-Bombing Pod (eq_15)

11. **nuclear-bomb.png** - Used by 1 weapon ✅
    - 'Storm Shadow' Demolition Pod (eq_14)

12. **hazard-marker-x2.png** - Used by 1 weapon ✅
    - 'Skorpion' Mine Dispenser (eq_22)

13. **hazard-marker-x3.png** - Used by 1 weapon ✅
    - 'Salamander' Flame Projector (eq_38)

---

## ANALYSIS

**DUPLICATES FOUND**: ✅ YES - But they are INTENTIONAL

The "duplicates" are actually **shared ammunition types** used by multiple weapons:

1. **standard-bolt.png** - Shared by 5 crossbow weapons (correct - they all use the same ammo)
2. **standard-big-shell.png** - Shared by 2 big cannon weapons (correct - same ammo type)
3. **explosive-big-shell.png** - Shared by 2 big cannon weapons (correct - same ammo type)

---

## DEVICES & AMMO TAB ISSUE

The user mentioned "many ammunitions duplicated in the images" on the Device page.

**POSSIBLE ISSUES:**

1. **Frontend Display Bug**: The Devices & Ammo tab might be showing the same ammunition image multiple times (once for each weapon that uses it)

2. **Solution**: The frontend should display each UNIQUE ammunition type only ONCE, with a list of weapons that use it.

**CURRENT STRUCTURE (devices.json):**
```json
{
  "id": "device_1",
  "name": "3D Crossbow",
  "ammoTypes": [
    "Standard Bolt",
    "Burst Bolt (x2)",
    "Burst Bolt (x3)"
  ]
}
```

This is correct - each device lists its ammunition types.

**RECOMMENDATION:**
- Check the frontend rendering code in `public/index.html`
- The "Devices & Ammo" tab should show:
  - Each device with its image
  - Each unique ammunition type with its image (not repeated per weapon)
  - Upload buttons for each unique image

---

## CORRECT AMMUNITION COUNT

**Total Unique Ammunition Types**: 13
**Total Weapons Using Ammo**: 19
**Shared Ammo Types**: 3 (standard-bolt, standard-big-shell, explosive-big-shell)

This is CORRECT and INTENTIONAL - weapons that use the same device should share ammunition types.
