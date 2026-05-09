# DICE-BASED WARGAME CONVERSION ✅
## From Physics-Based Toys to Traditional Wargame Mechanics

**Date:** May 9, 2026
**Status:** Complete

---

## 🎯 CONVERSION OVERVIEW

Zero Assembly has been successfully converted from a physics-based toy game to a traditional dice-based tabletop wargame. The core mecha building mechanics remain intact, but combat now uses line of sight, range bands, and dice rolls instead of physical projectiles.

---

## 📋 MAJOR CHANGES

### 1. ✅ Combat System: Physics → Dice

**Before:**
- Place toy device (crossbow, cannon, mortar) at specific distance
- Fire physical projectile
- If projectile touches enemy = hit
- No dice, no modifiers

**After:**
- Check line of sight to target
- Measure range (Short 0-15cm, Medium 15-30cm, Long 30-45cm)
- Roll 2D6, need 7+ to hit
- Apply modifiers for range, cover, movement
- Deal damage on successful hit

---

### 2. ✅ To-Hit System

**Base Roll:** 2D6, need 7+ to hit (58% chance)

**Range Modifiers:**
- **Short (0-15cm):** +1 to hit (72% chance)
- **Medium (15-30cm):** No modifier (58% chance)
- **Long (30-45cm):** -1 to hit (42% chance)
- **Beyond 45cm:** Cannot shoot

**Cover Modifiers:**
- **Partial Cover (25-75% obscured):** -1 to hit
- **Heavy Cover (75%+ obscured):** -2 to hit

**Movement Modifiers:**
- **Target moved last turn:** -1 to hit
- **Shooter moved this turn:** -1 to hit

**Example:** Shooting at Medium range (0) at a target in Partial Cover (-1) who moved last turn (-1) = need 9+ to hit (28% chance)

---

### 3. ✅ Line of Sight Rules

**How It Works:**
- Draw imaginary line from your weapon to any visible part of target
- Terrain blocks LoS if it completely obscures the target
- Get down to eye level with your mech to check accurately
- Partial obstruction = cover modifier, not blocked LoS

**Cover Determination:**
- **No Cover:** Target fully visible
- **Partial Cover:** 25-75% of target hidden
- **Heavy Cover:** 75%+ of target hidden

---

### 4. ✅ Equipment Conversion

All weapons converted from toy devices to dice-based stats:

**Removed Fields:**
- `device` (e.g., "3D Crossbow", "Air Cannon", "Mortar")
- `ammo` (e.g., "Standard Bolt", "Explosive Shell")
- `ammoImagePath`
- `proxyDistance`

**Added Fields:**
- `range` (e.g., "Short (0-15cm)", "Medium (0-30cm)", "Long (0-45cm)")
- `damage` (numeric DP value)

**Special Weapon Properties:**
- **Melee weapons:** Auto-hit when in base contact
- **Shotguns/Heavy Cannons:** Ignore Partial Cover
- **Artillery (missiles):** Ignore all cover
- **Multi-shot weapons:** Roll multiple times per ENGAGE
- **Knockback weapons:** Push targets on hit

---

### 5. ✅ Weapon Categories

**Melee Weapons:**
- Range: Base contact
- Auto-hit (no roll needed)
- Example: Bunker Pile Driver (3 DP)

**Close-Quarters Weapons:**
- Range: Short (0-15cm)
- Often ignore Partial Cover
- Example: M10 Breacher Shotgun (2 DP, ignores Partial Cover)

**Kinetic Weapons:**
- Range: Medium (0-30cm) or Long (0-45cm)
- Standard direct-fire weapons
- Example: G-36 Micro-Rifle (1 DP, Medium range)

**Energy Weapons:**
- Range: Short to Medium
- Similar to kinetic but different flavor
- Example: Paralyzer EMP Beam (1 DP, Medium range)

**Artillery Pods:**
- Range: Long (0-45cm)
- Ignore all cover (indirect fire)
- Often multi-shot
- Example: Starstreak Missile Rack (1 DP per hit, 3 shots, ignores cover)

**Hazard Weapons:**
- Place markers on battlefield
- Enemies touching markers take damage
- Example: Skorpion Mine Dispenser (2 markers, 1 DP each)

---

### 6. ✅ Lore Updates

**Removed:**
- "Kinetic Doctrine" (no processors = no corruption)
- References to "dumb projectiles" and "pneumatic cannons"
- "Physics is the only referee"

**Added:**
- "Tactical Doctrine" (human pilots make all decisions)
- Emphasis on tactical decision-making
- "Tactical War" instead of "Kinetic War"

**Kept:**
- The Signal (AI corruption in 90 seconds)
- Human pilots required
- Four factions
- Neuralloy resource
- Modular Apex-Frames

---

### 7. ✅ Rules Updates

**Learn to Play (ltp_1):**
- Changed from "physics wargame" to "tactical wargame"
- Updated shooting procedure to dice-based
- Added range bands (Short/Medium/Long)
- Removed toy device references

**Shooting Rules (rule_3):**
- Complete rewrite for dice-based combat
- Added LoS checking procedure
- Added to-hit modifiers table
- Added cover rules
- Removed physical projectile mechanics

**Actions & Turn Order (rule_1):**
- Updated ENGAGE description to mention dice rolls
- Added "Roll 2D6, need 7+ to hit"
- Kept all other actions unchanged

**3D Printing Guide (intro_3d):**
- Removed all toy device printing instructions
- Removed crossbow, cannon, mortar links
- Added dice requirements (2D6 per player minimum)
- Updated to focus on mech parts and markers only

---

## 🎲 DICE MECHANICS SUMMARY

### Core Roll
- **2D6, need 7+ to hit**
- Average roll: 7 (58% success rate)

### Probability Table
| Target Number | Probability |
|---------------|-------------|
| 5+ | 83% |
| 6+ | 72% |
| 7+ | 58% |
| 8+ | 42% |
| 9+ | 28% |
| 10+ | 17% |
| 11+ | 8% |
| 12+ | 3% |

### Common Scenarios
| Scenario | Modifiers | Target | Chance |
|----------|-----------|--------|--------|
| Point-blank, no cover | +1 (Short) | 6+ | 72% |
| Medium range, no cover | 0 | 7+ | 58% |
| Long range, no cover | -1 (Long) | 8+ | 42% |
| Medium, partial cover | -1 (Cover) | 8+ | 42% |
| Medium, heavy cover | -2 (Cover) | 9+ | 28% |
| Long, partial cover, moved | -3 (Long, Cover, Move) | 10+ | 17% |

---

## 🔧 WHAT STAYED THE SAME

### Core Gameplay Loop
✅ **10-Minute Build Phase** - Still the heart of the game
✅ **Modular Mech Construction** - Build from 3D-printed parts
✅ **Ground Contact Rule** - Only legs/wheels/treads touch ground
✅ **Pure Legs vs Mixed** - Movement choices still matter
✅ **2 AP + Free REPOSITION** - Action economy unchanged
✅ **HP System with Tokens** - Place tokens at feet when damaged
✅ **Resource Cubes (Neuralloy)** - Scavenge for +1 HP
✅ **4 Rounds** - Game length unchanged
✅ **Scenarios** - Deathmatch, Capture the Flag, Rush

### Equipment Effects
✅ **Armor grants +HP** - Defense systems still work the same
✅ **Heads grant bonuses** - Argus-Eye (+1 DP), Sentinel (+1 to hit)
✅ **Mobility tops** - Overboost (double move), Jump Jets (climb higher)
✅ **Manipulator Arm** - Free SCAVENGE action

---

## 📦 WHAT YOU NEED TO PLAY

### Required
- ✅ 3D-printed mech parts (Build Your Own Mech model)
- ✅ **2D6 per player** (4-6 dice recommended)
- ✅ HP markers (red/orange 1cm cubes)
- ✅ Resource Cubes (purple/cyan 1cm cubes)
- ✅ Objective markers (yellow/gold 1cm cubes)
- ✅ Hazard markers (black 1cm cubes)
- ✅ Terrain pieces (10-15 stackable buildings)
- ✅ Measuring tools (ruler or range sticks)

### NOT Required Anymore
- ❌ 3D Crossbow toy
- ❌ Air Cannon toy
- ❌ Big Air Cannon toy
- ❌ Mortar toy
- ❌ Projectiles (bolts, shells, rockets)

---

## 🎮 GAMEPLAY IMPACT

### Advantages of Dice-Based System

**1. Safety**
- No risk of projectiles hitting eyes or faces
- No small parts flying across the room
- Safer for younger players

**2. Accessibility**
- No need to print and assemble 4 different toy devices
- Dice are cheaper and more available than toy devices
- Faster setup (no loading projectiles)

**3. Strategy**
- Positioning matters more (cover, range bands)
- Predictable probabilities (can calculate odds)
- More tactical decision-making
- Less randomness from physical skill

**4. Speed**
- Faster combat resolution (roll dice vs. aim and fire)
- No time spent retrieving projectiles
- No disputes about "did it hit?"

**5. Balance**
- Easier to balance weapons (adjust modifiers)
- No advantage for players with better aim
- Consistent results across different play environments

### What You Lose

**1. Physical Interaction**
- No satisfaction of physically hitting target
- Less "toy" feel, more "game" feel
- No physics-based knockdowns

**2. Spectacle**
- Less visual excitement (no flying projectiles)
- Less "wow" factor for observers
- Less unique compared to other wargames

**3. Simplicity**
- Need to track modifiers (range, cover, movement)
- Need to calculate probabilities
- More rules to remember

---

## 🎯 DESIGN PHILOSOPHY

### Core Principle
**"Keep the mecha building, improve the strategy"**

The 10-minute build phase is the unique hook of Zero Assembly. The conversion preserves this while making combat more strategic and accessible.

### Why This Works

**1. Building is Still Physical**
- You still assemble real 3D-printed mechs
- Structural choices still matter (leg types, armor placement)
- Visual customization still important

**2. Combat is Now Strategic**
- Line of sight creates tactical positioning
- Cover mechanics reward smart movement
- Range bands create weapon specialization
- Dice create tension without physical skill requirement

**3. Best of Both Worlds**
- Physical building phase (unique, creative)
- Strategic combat phase (balanced, tactical)
- Fast gameplay (10 min build + 30 min combat)

---

## 📊 WEAPON BALANCE

### Damage Output Comparison

**Light Weapons (1 DP):**
- G-36 Micro-Rifle: 1 DP, Medium range
- FAL-X Autocannon: 1 DP, Medium range
- Paralyzer EMP Beam: 1 DP, Medium range

**Medium Weapons (2 DP):**
- M10 Breacher Shotgun: 2 DP, Short, ignores Partial Cover
- MK-20 Rhino Cannon: 2 DP, Medium, ignores Partial Cover
- Lancer Railgun: 2 DP, Long range
- Phalanx Gatling Array: 2 DP, Medium range

**Heavy Weapons (3 DP):**
- Bunker Pile Driver: 3 DP, Melee, auto-hit
- Storm Shadow Demolition Pod: 3 DP, Long, ignores cover

**Multi-Shot Weapons:**
- Twin-Link Assault Rifle: 1 DP × 2 shots, Medium
- Tri-Barrel Spread Cannon: 1 DP × 3 shots, Short
- Brimstone Micro-Missile Pod: 1 DP × 2 shots, Long, ignores cover
- Starstreak Missile Rack: 1 DP × 3 shots, Long, ignores cover
- RBS-70 Carpet-Bombing Pod: 1 DP × 4 shots, Long, ignores cover

**Special Weapons:**
- Sonic Repulsor Cylinder: 0 DP, Short, knockback 15cm
- Avalanche Cannon: 2 DP, Medium, knockback 5cm
- Skorpion Mine Dispenser: 1 DP, Short, 2 hazard markers
- Salamander Flame Projector: 1 DP, Medium, 3 hazard markers (1 round)

### Expected Damage Per ENGAGE

**At Medium Range, No Cover (58% hit chance):**
- 1 DP weapon: 0.58 DP average
- 2 DP weapon: 1.16 DP average
- 3 DP weapon: 1.74 DP average
- 2-shot weapon (1 DP each): 1.16 DP average
- 3-shot weapon (1 DP each): 1.74 DP average

**At Short Range, No Cover (72% hit chance):**
- 1 DP weapon: 0.72 DP average
- 2 DP weapon: 1.44 DP average
- 3-shot weapon (1 DP each): 2.16 DP average

**Artillery (Long Range, Ignores Cover, 42% hit chance):**
- 2-shot weapon: 0.84 DP average
- 3-shot weapon: 1.26 DP average
- 4-shot weapon: 1.68 DP average

---

## 🔄 MIGRATION GUIDE

### For Existing Players

**If you already have the toy devices:**
- You can still use them as visual props
- They're no longer mechanically required
- Keep them for aesthetic purposes

**If you're mid-campaign:**
- Finish current game with old rules
- Start next game with new rules
- No need to rebuild mechs (building rules unchanged)

**If you're teaching new players:**
- Use new rules from the start
- Simpler to explain (no toy device setup)
- Faster to get into first game

---

## ✅ FILES UPDATED

### Rules (public/data/rules.json)
- ✅ `lore_1` - Updated to "Tactical Doctrine"
- ✅ `ltp_1` - Complete rewrite for dice-based combat
- ✅ `intro_3d` - Removed toy devices, added dice requirements
- ✅ `rule_1` - Updated ENGAGE action description
- ✅ `rule_3` - Complete rewrite for shooting & LoS

### Equipment (public/data/equipment.json)
- ✅ All 38 equipment entries updated
- ✅ Removed: device, ammo, ammoImagePath, proxyDistance
- ✅ Added: range, damage (for weapons)
- ✅ Updated: rule, medium, quick, statLine descriptions

### Documentation
- ✅ Created: DICE_CONVERSION_COMPLETE.md (this file)

---

## 🎉 RESULT

**Zero Assembly is now:**
- ✅ Safer (no projectiles)
- ✅ More accessible (no toy devices needed)
- ✅ More strategic (LoS, cover, positioning)
- ✅ Faster to play (dice vs. aiming)
- ✅ Easier to balance (adjust modifiers)
- ✅ Still unique (10-minute mecha building)
- ✅ Still tactical (terrain, movement, loadouts)

**The game retains its core identity while becoming a proper tabletop wargame!**

---

## 📝 NEXT STEPS

### Recommended Additions

**1. Advanced Rules (Optional)**
- Overwatch actions (shoot during opponent's turn)
- Suppression (penalties for being shot at)
- Morale/pilot skill system
- Weather/terrain effects

**2. Campaign System**
- Pilot experience and skills
- Mech upgrades between battles
- Narrative scenarios
- Faction-specific bonuses

**3. Expanded Equipment**
- More weapon variety
- Electronic warfare systems
- Repair equipment
- Faction-unique parts

**4. Scenarios**
- More objective types
- Asymmetric battles
- Multi-player scenarios (3-4 players)
- Cooperative vs. AI scenarios

---

## 🔍 PLAYTESTING PRIORITIES

### Test These Mechanics

**1. To-Hit Balance**
- Is 7+ the right target number?
- Are modifiers too punishing?
- Do artillery weapons feel overpowered (ignore cover)?

**2. Range Bands**
- Are 15cm/30cm/45cm the right distances?
- Do weapons feel distinct at different ranges?
- Is Long range too hard to hit (-1 modifier)?

**3. Cover System**
- Is Partial Cover (-1) vs. Heavy Cover (-2) clear enough?
- Do players use cover effectively?
- Is cover too strong or too weak?

**4. Multi-Shot Weapons**
- Are they balanced vs. single-shot weapons?
- Is rolling multiple times tedious?
- Do they feel powerful enough?

**5. Special Weapons**
- Do knockback weapons feel useful?
- Are hazard weapons worth using?
- Do melee weapons see play (auto-hit but risky)?

### Feedback Questions

- How long does combat take? (Target: 30-40 minutes)
- Is the to-hit math easy to calculate?
- Do players enjoy the LoS checking?
- Does positioning feel important?
- Are there dominant strategies?
- Do all weapon types see use?

---

## 🎲 QUICK REFERENCE

### To-Hit Formula
**2D6 + Range Modifier + Cover Modifier + Movement Modifiers ≥ 7**

### Range Modifiers
- Short (0-15cm): +1
- Medium (15-30cm): 0
- Long (30-45cm): -1

### Cover Modifiers
- No Cover: 0
- Partial Cover: -1
- Heavy Cover: -2

### Movement Modifiers
- Target moved last turn: -1
- Shooter moved this turn: -1

### Special Rules
- **Melee:** Auto-hit in base contact
- **Ignore Partial Cover:** Shotguns, heavy cannons
- **Ignore All Cover:** Artillery (missiles)
- **Multi-Shot:** Roll separately for each shot
- **Knockback:** Push target on hit
- **Hazard Markers:** Place on battlefield, damage on contact

---

**Conversion Complete! Ready for playtesting! 🎲🤖**
