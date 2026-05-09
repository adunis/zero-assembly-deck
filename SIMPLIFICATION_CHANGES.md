# ZERO ASSEMBLY - Simplification Changes

## Summary
Applied streamlining improvements to reduce complexity while keeping all weapons intact.

---

## 1. ✅ HP TOKEN MECHANIC SIMPLIFIED
**Before:** Drop HP tokens from 15cm height (physics mini-game)
**After:** Place HP tokens at mech's feet

**Benefits:**
- Faster gameplay
- Less table clutter
- Tokens stay near mechs for easier scavenging
- No more "token scatter" randomness

**Equipment Updated:**
- Universal Chassis Core - clarified token placement
- AMAP-L Light Plating - removed special "safe drop" rule (now standard)
- AMAP-M Reactive Armor - changed to "place within 5cm of attacker" instead of drop

---

## 2. ✅ ACTION ECONOMY STREAMLINED
**Before:** 5 actions (MOVE, ENGAGE, SCAVENGE, CALIBRATE, TORSO TWIST)
**After:** 4 actions (MOVE, ENGAGE, SCAVENGE, REPOSITION)

**Changes:**
- CALIBRATE + TORSO TWIST merged into **REPOSITION (1 AP)**
- REPOSITION covers: rotate torso, re-pose limbs, stand up from fallen

**Benefits:**
- Fewer actions to remember
- Cleaner action economy
- Still allows tactical positioning

**Files Updated:**
- rules.json - "Learn to Play" section
- rules.json - "2 AP Action Economy" section
- rules.json - "Falling & Instability" section
- equipment.json - Canopy Sealer (free rotation clarified)
- equipment.json - Argus-Eye Radome (CALIBRATE → REPOSITION)

---

## 3. ✅ COLOR/PURITY SYSTEM SIMPLIFIED
**Before:** 
- 1-2 colors = 2 perks
- 3 colors = 1 perk
- 4+ colors = 0 perks

**After:**
- PURE (1 color) = 2 perks
- MIXED (2+ colors) = 1 perk

**Benefits:**
- Binary choice is clearer
- Easier to explain to new players
- Still rewards focused builds
- No "trap" of accidentally using 4 colors

---

## 4. ✅ PILOT PERKS REDUCED
**Before:** 20 perks
**After:** 10 core perks

**Kept (Combat-Focused):**
- Overclock - AP manipulation
- Scavenge Master - healing efficiency
- Jump Jets - mobility boost
- Precision Aim - close-range accuracy
- Reactive Armor - counter-damage
- Stabilizer Legs - knockback immunity
- Power Slide - speed boost
- Heavy Plating - damage mitigation
- Pivot Master - positioning advantage
- Last Stand - dramatic finish

**Removed (Niche/Complex):**
- Kinetic Shielding, Repair Drone, Ghost Module, Bull Charge, Marksman's Eye, Nano-Coating, System Jammer, Data Leach, Auto-Loader, Thermal Vision

**Benefits:**
- Easier for new players to choose
- All perks are immediately useful
- Less rules overhead

---

## 5. ✅ EQUIPMENT CARD VISUAL IMPROVEMENTS
**Added:**
- Prominent DAMAGE stat (red, large font)
- Clear RANGE indicator (blue, large font)
- Device type shown in stats bar
- Stats only appear on weapons (not structural items)

**Benefits:**
- Instant visual comparison during deck building
- Clear weapon hierarchy
- Professional card layout

---

## WEAPONS PRESERVED
All 38 equipment items kept, including:
- All melee weapons
- All kinetic weapons (autocannons, railguns, etc.)
- All energy weapons (EMP, ECM, etc.)
- All artillery pods (missiles, mortars)
- All hazard weapons (mines, flamers)
- All defense systems
- All mobility systems
- All utility systems

---

## FILES MODIFIED
1. `public/data/rules.json` - 4 rule sections updated
2. `public/data/equipment.json` - 5 equipment items updated
3. `public/data/talents.json` - reduced from 20 to 10 perks
4. `public/index.html` - added damage/range stats display

---

## RESULT
- **Faster to learn** - fewer actions, simpler HP mechanic
- **Faster to play** - no token drops, streamlined actions
- **Easier decisions** - binary color choice, 10 perks instead of 20
- **Better UX** - improved card layout with clear stats
- **Same depth** - all weapons and tactical options preserved
