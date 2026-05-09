# MODULAR BUILDINGS SYSTEM ADDED

## ✅ COMPLETED

Updated **Phase 1: Terrain Building** to include comprehensive rules for modular buildings and building collapse mechanics.

---

## 🏗️ MODULAR BUILDINGS SYSTEM

### **Concept:**
Buildings are constructed from individual modular pieces that players place during the Terrain Building phase. Each player places one building piece per turn, creating dynamic, destructible structures.

### **Placement Rules:**

Building pieces have **3 placement options**:

1. **Stack** 📦
   - Place on top of another building piece
   - Creates multi-story structures
   - Provides elevation and cover
   - Risk: Vulnerable to collapse

2. **Adjacent** 🧩
   - Place directly touching another building piece
   - Expands the building horizontally
   - Creates larger structures
   - More stable than stacking

3. **Separate** 📏
   - Place at least 15cm away from all other terrain
   - Starts a new building
   - Follows standard terrain spacing rules

### **Exception to 15cm Rule:**
Building pieces are the **ONLY terrain** that can ignore the 15cm spacing rule. They can be stacked or placed adjacent to create complex structures.

---

## 💥 BUILDING COLLAPSE MECHANICS

### **When Buildings Collapse:**
Buildings can be destroyed by **large projectiles**:
- <i class="fas fa-burst"></i> **Big Air Cannon** (Standard BIG Shell or Explosive BIG Shell)
- <i class="fas fa-rocket"></i> **Mortar** (Mini Rockets, Standard Shells, Nuclear Bomb)
- ☢️ **Nuclear Bomb** (from Mortar)

### **Collapse Effect:**

1. **Hit Piece Destroyed:**
   - The building piece hit by the projectile is removed from the table

2. **Chain Collapse:**
   - Any building pieces stacked **on top** of the destroyed piece also fall
   - Remove all affected pieces immediately

3. **Mech Damage:**
   - Any mech physically touching a collapsing building piece takes **1 DP**
   - Place 1 HP token at their feet
   - Applies to both friendly and enemy mechs

### **What DOESN'T Destroy Buildings:**
- <i class="fas fa-gun"></i> **Small weapons** (Crossbow, standard rifles)
- <i class="fas fa-wind"></i> **Small Air Cannon** (too weak to damage structures)
- <i class="fas fa-hand-fist"></i> **Melee weapons** (can't damage buildings)

---

## 🎯 STRATEGIC IMPLICATIONS

### **Building Advantages:**
- ✅ **Elevation:** High ground for better firing angles
- ✅ **Cover:** Protection from enemy fire
- ✅ **Sniper Positions:** Stack pieces for tall vantage points
- ✅ **Objectives:** Place Resources and Equipment on buildings

### **Building Risks:**
- ❌ **Collapse Damage:** 1 DP to mechs touching collapsing pieces
- ❌ **Artillery Targets:** Big projectiles destroy buildings
- ❌ **Chain Reaction:** Tall buildings collapse completely if base is hit
- ❌ **Friendly Fire:** Your own mechs can be damaged by collapsing buildings

### **Tactical Considerations:**

**For Attackers:**
- Target enemy buildings with artillery to deny cover
- Collapse buildings to damage mechs hiding inside
- Use Nuclear Bombs to destroy entire structures

**For Defenders:**
- Build wide (adjacent) rather than tall (stacked) for stability
- Don't cluster mechs near tall buildings
- Place buildings away from deployment zones
- Balance height advantage vs collapse risk

**For Builders:**
- Create multiple small buildings instead of one tall tower
- Leave escape routes from buildings
- Consider enemy artillery when placing buildings
- Use buildings to funnel enemy movement

---

## 📋 UPDATED CONTENT

### **Phase 1: Terrain Building**

**New Sections Added:**

1. **<i class="fas fa-cubes"></i> MODULAR BUILDINGS:**
   - Explains building piece placement options
   - Stack, Adjacent, or Separate rules
   - Exception to 15cm spacing rule

2. **<i class="fas fa-burst"></i> BUILDING COLLAPSE:**
   - When buildings collapse (big projectiles only)
   - Chain collapse mechanics
   - Mech damage (1 DP to touching mechs)
   - Strategic implications

3. **Updated Strategic Considerations:**
   - Building risk vs reward
   - Collapse zones near deployment
   - Height advantage vs vulnerability

4. **Updated Important Notes:**
   - Building piece exception to spacing
   - Only large projectiles destroy terrain
   - Immediate collapse resolution

### **Updated Summaries:**

**Medium Summary:**
- Added: "Buildings: Modular pieces can stack or be adjacent"
- Added: "Collapse: Big projectiles destroy building pieces, causing chain collapse (1 DP to touching mechs)"

**Quick Summary:**
- Added: "Buildings: Stack/adjacent allowed"
- Added: "Collapse: Big projectiles destroy buildings (1 DP)"

---

## 🎮 GAMEPLAY EXAMPLES

### **Example 1: Building a Tower**
```
Turn 1: Player A places building piece on ground
Turn 2: Player B places building piece on ground (15cm away)
Turn 3: Player A stacks a piece on their first piece (2 stories)
Turn 4: Player B places adjacent to their first piece (wider building)
Turn 5: Player A stacks another piece (3 stories tall!)
```

### **Example 2: Building Collapse**
```
Situation: 3-story building (pieces A, B, C stacked)
          Enemy mech hiding next to piece A

Action: You fire Big Air Cannon at piece A
Result: 
  - Piece A is destroyed (hit by projectile)
  - Pieces B and C collapse (were stacked on A)
  - Enemy mech takes 1 DP (touching piece A)
  - All 3 building pieces removed from table
```

### **Example 3: Safe Building**
```
Situation: Wide building (3 pieces adjacent, not stacked)
          Your mech standing on top

Action: Enemy fires Big Air Cannon at one piece
Result:
  - One piece is destroyed
  - Other 2 pieces remain (not stacked, so no chain collapse)
  - Your mech takes 1 DP (touching destroyed piece)
  - Your mech can still stand on remaining pieces
```

---

## 🔧 TECHNICAL DETAILS

**Files Modified:**
- `public/data/rules.json` - Updated phase_1 chapter

**Script Created:**
- `update-phase1-buildings.js` - Script that updated the phase_1 chapter

**Changes:**
- Added ~800 words of new content
- Added 2 new major sections (Modular Buildings, Building Collapse)
- Updated strategic considerations
- Updated medium and quick summaries
- Added Font Awesome icons for visual clarity

---

## 🚀 SERVER STATUS

**Status:** ✅ Running on http://localhost:3000

**View the Changes:**
1. Open http://localhost:3000 in your browser
2. Click "Rule Deck" tab
3. Scroll to **"Game Phases"** section
4. Read **"PHASE 1: TERRAIN BUILDING"**
5. See the new **MODULAR BUILDINGS** and **BUILDING COLLAPSE** sections

---

## 🎨 VISUAL INDICATORS

The updated chapter uses Font Awesome icons for clarity:

- <i class="fas fa-building"></i> **Objective** - Overall phase goal
- <i class="fas fa-cubes"></i> **Modular Buildings** - Building system section
- <i class="fas fa-burst"></i> **Building Collapse** - Destruction mechanics
- <i class="fas fa-lightbulb"></i> **Strategic Considerations** - Tactical tips
- <i class="fas fa-triangle-exclamation"></i> **Important** - Critical rules
- <i class="fas fa-clock"></i> **Time** - Phase duration

---

## ✅ SUMMARY

Phase 1: Terrain Building now includes:

✅ **Modular Building System:**
- Stack pieces vertically for height
- Place adjacent for width
- Separate by 15cm for new buildings

✅ **Building Collapse Mechanics:**
- Big projectiles destroy buildings
- Chain collapse for stacked pieces
- 1 DP damage to touching mechs

✅ **Strategic Depth:**
- Risk vs reward for tall buildings
- Artillery becomes more valuable
- Terrain is now dynamic and destructible

The battlefield is now truly dynamic — buildings can be built up and torn down during combat, adding a new layer of tactical decision-making!
