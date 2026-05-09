# ZERO ASSEMBLY RULES REVIEW & IMPROVEMENT SUGGESTIONS

## 📋 CURRENT RULES STRUCTURE

### **Lore (5 entries)**
- lore_1: THE SIGNAL WAR // 2030
- lore_2: THE SIGNAL CORRUPTION
- lore_3: THE FOUR FACTIONS
- lore_4: APEX-FRAMES: MODULAR WAR MACHINES
- lore_5: THE KINETIC DOCTRINE

### **Introduction (2 entries)**
- ltp_1: LEARN TO PLAY IN 5 MINUTES
- setup_1: GAME SETUP & PHASES

### **Game Phases (5 entries)**
- phase_1: TERRAIN BUILDING
- phase_2: SCAVENGING (BUILD PHASE)
- phase_3: SCENARIO PREPARATION
- phase_4: DEPLOYMENT
- phase_5: COMBAT

### **Core Mechanics (8 entries)**
- rule_1: ACTIONS (2 AP PER TURN TOTAL)
- rule_1b: BATTLEFIELD OBJECTS
- rule_2: TURN ORDER & ACTIVATIONS
- rule_3: SHOOTING
- rule_4: DAMAGE & HP
- rule_5: MOVEMENT & LEG TYPES
- rule_6: FALLING & FALL DAMAGE
- rule_7: PILOT PERKS (ONCE PER MATCH)
- rule_8: BUILD RULES

### **Scenarios (2+ entries)**
- scen_tdm: DEATHMATCH
- scen_ctf: CAPTURE THE FLAG
- (More scenarios likely exist)

### **Technical Reference (4 entries)**
- device_1: 3D-PRINTED CROSSBOW
- device_2: AIR CANNON (SMALL)
- device_3: BIG AIR CANNON
- device_4: MORTAR

---

## ✅ STRENGTHS OF CURRENT RULES

### **1. Clear Structure**
- Well-organized into logical categories
- Progressive complexity (lore → intro → phases → mechanics)
- Good use of icons and visual hierarchy

### **2. Physics-First Philosophy**
- "Physics is the referee" is consistent throughout
- Building collapse based on real-world physics
- Projectile hits determined by actual contact
- No abstract dice rolls or calculations

### **3. Comprehensive Phase System**
- All 5 phases clearly explained
- Each phase has objective, procedure, strategic considerations
- Good balance of detail vs readability

### **4. Rich Lore**
- Four distinct factions with unique identities
- Compelling setting (The Signal War)
- Lore supports gameplay mechanics

### **5. Modular Design**
- 10-minute build phase is unique and engaging
- Color synergy system is simple and elegant
- Equipment scavenging adds mid-game adaptation

---

## 🔧 SUGGESTED IMPROVEMENTS

### **CRITICAL ISSUES**

#### **1. Missing: Line of Sight Rules**
**Problem:** No clear rules for when you can shoot at an enemy.
- Can you shoot through buildings?
- Does cover block shots?
- What about partial cover?

**Suggestion:** Add `rule_9: LINE OF SIGHT & COVER`
```
LINE OF SIGHT:
• You can only ENGAGE targets you can see
• Draw an imaginary line from your weapon to the enemy Core
• If terrain blocks this line, you cannot shoot

COVER:
• Full Cover: Target completely hidden → Cannot shoot
• Partial Cover: Target partially visible → Can shoot, but harder to hit
• No Cover: Target fully visible → Normal shooting

CHECKING COVER:
• Crouch down to weapon level and look
• If you can see any part of the enemy Core, you can shoot
• Physics determines if your projectile hits
```

#### **2. Missing: Simultaneous Damage Resolution**
**Problem:** What happens if both mechs destroy each other in the same round?

**Suggestion:** Add to `rule_4: DAMAGE & HP`
```
SIMULTANEOUS DESTRUCTION:
• If both mechs reach 0 HP in the same Round, it's a draw
• Count Victory Points to determine winner
• If VP is tied, the game is a draw
```

#### **3. Missing: Mech Collision Rules**
**Problem:** What happens if mechs bump into each other during movement?

**Suggestion:** Add to `rule_5: MOVEMENT & LEG TYPES`
```
COLLISIONS:
• Mechs cannot move through each other
• If your movement would cause a collision, stop before contact
• You can push enemy mechs: spend 1 AP to push an adjacent enemy 1cm
• Pushing can knock over unstable mechs (they become Fallen)
```

#### **4. Unclear: Equipment Attachment During Game**
**Problem:** When you scavenge Equipment, can you attach it immediately or must you wait?

**Suggestion:** Clarify in `rule_1: ACTIONS`
```
SCAVENGE (1 AP):
• Equipment Cube: Randomly pick one piece from scavenging pile
• Attach it immediately to your mech (no additional AP cost)
• You can attach it however you want (any connection point)
• Test stability after attaching — if your mech falls over, it becomes Fallen
```

---

### **BALANCE ISSUES**

#### **5. 2 AP Total Might Be Too Restrictive**
**Problem:** With 2 mechs, you can only move OR shoot each, not both.

**Current:** 2 AP total per turn
**Alternative Options:**
- **Option A:** 2 AP per mech (4 AP total for 2 mechs) — More action, faster gameplay
- **Option B:** 3 AP total per turn — Allows MOVE + ENGAGE + REPOSITION
- **Option C:** Keep 2 AP but add "Free Actions" (like rotating weapons)

**Recommendation:** Playtest with 3 AP total to see if it improves flow.

#### **6. Color Synergy Might Be Too Punishing**
**Problem:** 4+ colors = no perks at all. This heavily punishes diverse builds.

**Current:** 1-3 colors = 1 Perk, 4+ colors = 0 Perks
**Alternative:**
- 1-2 colors = 2 Perks
- 3-4 colors = 1 Perk
- 5+ colors = 0 Perks

**Recommendation:** Make the threshold more forgiving (4 colors still gets 1 perk).

#### **7. Falling Damage Might Be Too Harsh**
**Problem:** Falling from >Long Ruler = 2 DP. This is 50% of a mech's HP!

**Current:** >Short Ruler = 1 DP, >Long Ruler = 2 DP
**Alternative:**
- >Short Ruler = 1 DP
- >Long Ruler = 1 DP + Fallen condition
- >2x Long Ruler = 2 DP + Fallen condition

**Recommendation:** Keep current rules but add warning in Phase 1 about building height.

---

### **CLARITY IMPROVEMENTS**

#### **8. Add: Weapon Arc Rules**
**Problem:** Can you shoot behind you? What's your firing arc?

**Suggestion:** Add to `rule_3: SHOOTING`
```
FIRING ARC:
• Your weapon can only shoot in the direction it's pointing
• You cannot shoot behind your mech without REPOSITION
• 180° arc in front of your mech (hemisphere)
• Use common sense: if the weapon physically points at the target, you can shoot
```

#### **9. Add: Terrain Height Rules**
**Problem:** How tall is "tall terrain"? When does elevation matter?

**Suggestion:** Add to `phase_1: TERRAIN BUILDING`
```
TERRAIN HEIGHT CATEGORIES:
• Low Terrain: 0-5cm (rubble, low walls) — Bipeds step over for free
• Medium Terrain: 5-15cm (buildings, platforms) — Provides cover
• Tall Terrain: 15cm+ (towers, multi-story buildings) — Blocks line of sight

ELEVATION ADVANTAGE:
• Shooting from higher ground: Easier to hit (better angle)
• Shooting uphill: Harder to hit (worse angle)
• Physics determines actual hits
```

#### **10. Add: Ruler Lengths**
**Problem:** "Short Ruler" and "Long Ruler" are mentioned but never defined.

**Suggestion:** Add to `setup_1: GAME SETUP & PHASES`
```
RULERS:
• Short Ruler: 15cm (6 inches)
• Long Ruler: 30cm (12 inches)
• Use any ruler or measuring tape
• Measure horizontally (flat on ground), not diagonally through air
```

---

### **MISSING RULES**

#### **11. Add: Overwatch/Reaction Fire**
**Problem:** No way to respond to enemy movement on their turn.

**Suggestion:** Add `rule_10: OVERWATCH (OPTIONAL RULE)`
```
OVERWATCH (1 AP):
• Declare Overwatch at the end of your turn
• Choose one weapon and a 90° arc
• If an enemy moves through that arc during their turn, you may fire once
• Resolve immediately when triggered
• Overwatch ends at the start of your next turn

LIMITATIONS:
• Can only Overwatch with one weapon
• Cannot move while on Overwatch
• Overwatch is cancelled if you take damage
```

#### **12. Add: Terrain Destruction**
**Problem:** Can you destroy terrain other than buildings?

**Suggestion:** Add to `phase_1: TERRAIN BUILDING`
```
DESTRUCTIBLE TERRAIN:
• Buildings: Can be knocked over by projectiles (physics-based)
• Rubble: Cannot be destroyed
• Platforms: Cannot be destroyed
• Walls: Cannot be destroyed

CREATING RUBBLE:
• When a building falls, it becomes ground-level rubble
• Rubble provides light cover (low terrain)
• Mechs can move through rubble (counts as difficult terrain)
```

#### **13. Add: Multi-Player Rules**
**Problem:** Rules assume 2 players. What about 3-4 players?

**Suggestion:** Add `rule_11: MULTI-PLAYER GAMES`
```
3-4 PLAYER GAMES:
• Each player controls 1 mech (not 2)
• Turn order: Clockwise around table
• Deployment: Divide table into equal zones (triangles or squares)
• Victory: Most VP after 4 Rounds
• Alliances: Players can form temporary alliances (no rules enforcement)

FREE-FOR-ALL:
• Every player for themselves
• Can shoot anyone
• Last mech standing wins (or most VP after 4 Rounds)

TEAM GAMES:
• 2v2: Partners sit opposite each other
• Shared VP pool
• Can coordinate but each player controls their own mech
```

---

### **QUALITY OF LIFE IMPROVEMENTS**

#### **14. Add: Quick Reference Card**
**Suggestion:** Create `rule_qr: QUICK REFERENCE`
```
ACTIONS (2 AP PER TURN):
• MOVE (1 AP): 1 ruler length
• ENGAGE (1 AP): Fire weapon
• SCAVENGE (1 AP): Pick up HP/Resource/Equipment
• REPOSITION (1 AP): Rotate/re-pose/stand up

PROXY DISTANCES:
• SHORT: 1 Short Ruler (15cm)
• LONG: 1 Long Ruler (30cm)
• TOUCH: Physical contact
• CLOSE: Within 10cm

DAMAGE:
• Hit = Place HP tokens at feet
• A.T. Shields absorb first
• 0 HP = Destroyed

FALLING:
• >Short Ruler = 1 DP
• >Long Ruler = 2 DP
```

#### **15. Add: Common Mistakes**
**Suggestion:** Add to `ltp_1: LEARN TO PLAY`
```
COMMON MISTAKES:
❌ Spending 2 AP per mech (it's 2 AP total!)
❌ Measuring diagonally through air (measure flat on ground)
❌ Forgetting to place HP tokens at feet when damaged
❌ Trying to shoot through solid terrain (need line of sight)
❌ Building mechs that can't stand (test stability!)
❌ Placing Resources on the ground (must be on terrain)
```

#### **16. Add: Glossary**
**Suggestion:** Add `rule_glossary: GLOSSARY OF TERMS`
```
AP: Action Points (you get 2 per turn)
DP: Damage Points (how much damage a weapon deals)
HP: Hit Points (your mech's health)
Core: The central piece of your mech (your HP pool)
Top: The piece that seals your Core
Frame: One Core + one Top = one Frame
Proxy Distance: How far you place the shooting device from your mech
A.T. Shield: Absorbs damage before HP (cannot be scavenged)
Fallen: Mech is tipped over (cannot move until standing up)
Scavenging Pile: Unused parts from build phase
```

---

### **ADVANCED RULES (OPTIONAL)**

#### **17. Add: Weather Effects**
**Suggestion:** Add `rule_advanced_1: WEATHER (OPTIONAL)`
```
WEATHER EFFECTS:
Roll 1d6 at start of game:
1-2: Clear (no effect)
3-4: Wind (projectiles drift 2cm left or right randomly)
5: Rain (all movement -5cm)
6: Fog (line of sight reduced to 30cm)
```

#### **18. Add: Veteran Pilot Skills**
**Suggestion:** Add `rule_advanced_2: VETERAN SKILLS (CAMPAIGN)`
```
CAMPAIGN MODE:
• Track wins/losses across multiple games
• After 3 wins, gain 1 Veteran Skill
• Skills are permanent (keep between games)

EXAMPLE SKILLS:
• Marksman: +5cm range on all weapons
• Engineer: Build time +2 minutes
• Scavenger: Scavenge costs 0 AP once per game
• Tactician: Start with 3 AP on first turn
```

---

## 📊 PRIORITY RANKING

### **MUST ADD (Critical for Gameplay):**
1. ✅ Line of Sight & Cover rules
2. ✅ Ruler length definitions (15cm/30cm)
3. ✅ Equipment attachment timing
4. ✅ Collision rules
5. ✅ Simultaneous destruction resolution

### **SHOULD ADD (Improves Clarity):**
6. ✅ Firing arc rules
7. ✅ Terrain height categories
8. ✅ Common mistakes section
9. ✅ Glossary of terms
10. ✅ Quick reference card

### **NICE TO HAVE (Adds Depth):**
11. ⭐ Overwatch/reaction fire
12. ⭐ Multi-player rules (3-4 players)
13. ⭐ Terrain destruction rules
14. ⭐ Weather effects (optional)
15. ⭐ Veteran skills (campaign mode)

### **BALANCE TESTING NEEDED:**
16. 🔬 2 AP vs 3 AP per turn
17. 🔬 Color synergy thresholds
18. 🔬 Falling damage values

---

## 🎯 RECOMMENDED NEXT STEPS

### **Phase 1: Critical Rules (Do First)**
1. Add Line of Sight & Cover rules
2. Define ruler lengths explicitly
3. Clarify equipment attachment timing
4. Add collision rules
5. Add simultaneous destruction resolution

### **Phase 2: Clarity Improvements (Do Second)**
6. Add firing arc rules
7. Add terrain height categories
8. Create quick reference card
9. Add glossary
10. Add common mistakes section

### **Phase 3: Optional Content (Do Later)**
11. Add multi-player rules
12. Add overwatch rules
13. Add advanced/optional rules
14. Create campaign mode rules

### **Phase 4: Playtesting (Ongoing)**
15. Test 2 AP vs 3 AP
16. Test color synergy thresholds
17. Test falling damage values
18. Gather player feedback

---

## 💡 DESIGN PHILOSOPHY NOTES

### **What Makes Zero Assembly Unique:**
- ✅ Physics-based combat (no dice)
- ✅ 10-minute build phase (modular mechs)
- ✅ Real toy weapons (tactile gameplay)
- ✅ Scavenging system (dynamic adaptation)
- ✅ Color synergy (visual cohesion)

### **Keep These Core Principles:**
- Physics is the referee
- Simple rules, complex tactics
- Every mech is unique
- Scavenging is survival
- Fast gameplay (4 rounds)

### **Avoid These Pitfalls:**
- ❌ Don't add dice rolls
- ❌ Don't add complex math
- ❌ Don't add too many special rules
- ❌ Don't make games longer than 60 minutes
- ❌ Don't punish creative builds too harshly

---

## ✅ SUMMARY

**Current State:** Rules are well-structured and comprehensive, with strong lore and clear phases.

**Main Gaps:**
- Line of sight rules
- Ruler definitions
- Equipment attachment timing
- Collision rules
- Multi-player support

**Recommended Additions:**
- 5 critical rules (must add)
- 5 clarity improvements (should add)
- 5 optional rules (nice to have)

**Balance Testing Needed:**
- AP per turn (2 vs 3)
- Color synergy thresholds
- Falling damage values

**Overall Assessment:** 8/10 — Solid foundation, needs minor additions for completeness.
