# ✅ Scenario Preparation Phase - Update Complete

## What Was Added

A new game phase has been added between Scavenging and Deployment: **Scenario Preparation**.

---

## Updated Game Flow

### Before:
1. Terrain Building
2. Scavenging
3. ~~Deployment~~ ❌
4. Combat

### After:
1. 🏗️ Terrain Building
2. ⚙️ Scavenging
3. 📋 **Scenario Preparation** ⭐ NEW
4. 🚀 Deployment
5. ⚔️ Combat

---

## Three Types of Battlefield Objects

### 🎯 1. OBJECTIVES
**Purpose:** Scenario-specific victory conditions
- Flags to capture
- Control points to hold
- Targets to destroy
- **Interaction:** Per scenario rules
- **Reward:** Victory Points

### 🔧 2. RESOURCES
**Purpose:** Battlefield healing
- Resource tokens on terrain
- **How to Get:** SCAVENGE action (1 AP)
- **Effect:** Gain 1 HP immediately
- **Strategy:** Sustain in long fights

### 📦 3. EQUIPMENT
**Purpose:** Mid-game mech modification
- Equipment cubes on terrain
- **How to Get:** SCAVENGE action (1 AP)
- **Effect:** Randomly pick one piece from scavenging pile
- **Important:** **ONLY way to modify mech during game**
- **Strategy:** High risk, high reward

---

## Updated SCAVENGE Action

### Before:
- Pick up HP token → Heal 1 HP

### After:
Pick up ONE item touching your base:
- **HP Token** → Heal 1 HP
- **🔧 Resource Token** → Heal 1 HP
- **📦 Equipment Cube** → Random equipment from scavenging pile

---

## Strategic Impact

### Map Control:
- Forces movement toward objectives
- Can't just sit back and shoot
- Rewards aggressive positioning

### Risk/Reward:
- **Resources:** Safe, predictable healing
- **Equipment:** Risky, could get powerful weapon or useful armor
- Players choose their risk tolerance

### Comeback Mechanics:
- Bad build? Gamble on equipment cubes
- Good build? Secure resources to sustain
- Multiple paths to victory

### Multi-Mech Synergy:
- 2 mechs can split objectives
- One secures resources, other fights
- One gambles on equipment, other plays safe

---

## Equipment System Details

### The Scavenging Pile:
- All parts NOT used during 10-minute build phase
- Leftover weapons, armor, legs, systems
- Random pool of available equipment

### How It Works:
1. Touch Equipment Cube with your mech
2. SCAVENGE action (1 AP) to pick up cube
3. Randomly pick one piece from scavenging pile
4. Physically attach it to your mech however you want
5. Can use it immediately (if weapon, can ENGAGE same turn if have AP)

### Why It's Powerful:
- **Only way to modify mech during game**
- Can get weapons you didn't build with
- Can add armor to increase survivability
- Can change your tactical options mid-game
- Creates dynamic gameplay

### Why It's Risky:
- Don't know what you'll get (random)
- Must expose yourself to reach cube
- Enemy can contest the cube
- Might get something you don't need

---

## Example Scenario

### "RESOURCE WAR" Scenario:

**Setup:**
- **Objectives:** 3 Control Points (center)
  - Hold at end of round = 2 VP each
- **Resources:** 6 Resource Tokens (scattered)
  - Scavenge for +1 HP
- **Equipment:** 2 Equipment Cubes (contested areas)
  - Random equipment from pile

**Victory:**
- Most VP after 4 Rounds
- Control Points + destroyed frames

**Strategy Options:**
1. **Aggressive:** Rush center for control points
2. **Sustain:** Secure resources for healing
3. **Gamble:** Go for equipment cubes for power spike
4. **Balanced:** Mix of all three

---

## Files Updated

### ✅ `public/data/rules.json`

**Updated Sections:**
1. **setup_1** - Game Setup & Phases
   - Added Phase 3: Scenario Preparation
   - Explains three object types
   - Updated phase numbering (Deployment = Phase 4, Combat = Phase 5)

2. **rule_1** - Actions
   - Expanded SCAVENGE action
   - Now picks up HP tokens, Resources, or Equipment
   - Explains priority when multiple items touching base

3. **rule_1b** - Battlefield Objects (NEW)
   - Complete explanation of Objectives
   - Complete explanation of Resources
   - Complete explanation of Equipment
   - Scavenging priority rules

---

## Validation

### JSON Validation:
- ✅ `rules.json` validated successfully
- ✅ No syntax errors
- ✅ All sections properly formatted

### Server Status:
- ✅ Server restarted
- ✅ Running on http://localhost:3000
- ✅ Updated rules live

---

## Documentation Created

### New Files:
1. **SCENARIO_PREPARATION_PHASE.md**
   - Complete documentation of new phase
   - Detailed explanation of all three object types
   - Strategic implications
   - Example scenarios
   - Design philosophy

2. **SCENARIO_PREP_UPDATE_SUMMARY.md** (this file)
   - Quick reference summary
   - What changed
   - Why it matters

---

## Design Philosophy

### Why This System?

**1. Solves Static Gameplay:**
- Mechs can now change during game
- Not locked into build phase decisions
- Creates dynamic, evolving battles

**2. Rewards Map Control:**
- Must move to secure objectives
- Can't turtle in one position
- Encourages aggressive play

**3. Creates Comeback Opportunities:**
- Behind on VP? Gamble on equipment
- Low HP? Secure resources
- Multiple paths to victory

**4. Fits Lore:**
- Signal War = scavenging warfare
- Pilots adapt with battlefield salvage
- Modular mechs modified on the fly

**5. Balances Multi-Mech:**
- 2 mechs can split objectives better
- But 1 big mech can hold positions
- Both strategies viable

---

## Example Turn Sequence

**Setup:**
- Player A: 1 Duo Mech (8 HP, center position)
- Player B: 2 Solo Mechs (4 HP each, flanking)

**Turn 1:**
- **Player A:** Duo Mech MOVE toward Equipment Cube + ENGAGE Player B's Mech 1
- **Player B:** Mech 1 MOVE toward Resource, Mech 2 MOVE toward Control Point

**Turn 2:**
- **Player A:** Duo Mech SCAVENGE Equipment Cube (gets Heavy Cannon!) + REPOSITION to attach
- **Player B:** Mech 1 SCAVENGE Resource (+1 HP), Mech 2 touches Control Point

**Turn 3:**
- **Player A:** Duo Mech ENGAGE with new Heavy Cannon + MOVE toward Control Point
- **Player B:** Mech 1 MOVE, Mech 2 ENGAGE Player A

**Result:**
- Player A got powerful weapon from Equipment Cube
- Player B secured Resource and Control Point
- Both strategies working!

---

## Key Takeaways

### For Players:
1. **Scenario Preparation is a new phase** - set up battlefield objects
2. **Three object types** - Objectives, Resources, Equipment
3. **SCAVENGE picks up all three** - choose wisely
4. **Equipment cubes = only way to modify mech** - high risk, high reward
5. **Map control matters** - must move to secure objectives

### For Game Design:
1. **Dynamic gameplay** - mechs evolve during game
2. **Multiple strategies** - aggressive, sustain, gamble
3. **Comeback mechanics** - bad build can be fixed
4. **Thematic** - fits Signal War scavenging lore
5. **Balanced** - both 1 mech and 2 mechs viable

---

## Next Steps

### Ready to Play:
- ✅ All rules updated
- ✅ Server running
- ✅ Documentation complete

### To Test:
1. Create a scenario with all three object types
2. Place Resources and Equipment on terrain
3. Play through and see how it feels
4. Adjust placement and quantities as needed

### Scenario Design Tips:
- **Resources:** 4-6 tokens, spread around board
- **Equipment:** 2-3 cubes, in contested areas
- **Objectives:** Per scenario, usually 3-5
- Balance risk/reward of each object type

---

**STATUS: COMPLETE** ✅
**DATE: May 8, 2026**
**SERVER: Running on http://localhost:3000**

The Scenario Preparation phase is now live and ready to play!
