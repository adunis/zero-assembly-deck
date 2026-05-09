# PHYSICS-BASED BUILDING COLLAPSE UPDATE

## ✅ COMPLETED

Updated Phase 1: Terrain Building to reflect that building collapse is determined by **real-world physics**, not by game rules. Buildings are not "destroyed" by projectiles — they can only be physically knocked over, and falling pieces deal damage to mechs they touch.

---

## 🏗️ NEW BUILDING COLLAPSE SYSTEM

### **Core Principle: Physics is the Referee**

Buildings are physical objects on the table. They follow real-world physics, not abstract game rules.

---

## 💥 HOW COLLAPSE WORKS

### **Buildings Are NOT Destroyed:**
- ❌ Projectiles do NOT "destroy" building pieces
- ❌ No special "building HP" or "destruction rules"
- ✅ Buildings are just terrain — they exist until physically knocked over

### **Projectiles Can Knock Over Buildings:**
- ✅ If a projectile hits a building piece hard enough, it might knock it over
- ✅ Big projectiles (Big Air Cannon, Mortar, Nuclear Bomb) are more likely to knock over buildings
- ✅ Small projectiles (Crossbow, rifles) are less likely to affect buildings
- ✅ **Real-world physics determines if it falls** — if it tips over in real life, it falls in the game

### **Collapse Damage:**
- If a building piece **physically falls on a mech**, that mech takes **1 DP**
- Place 1 HP token at the mech's feet
- Applies to **any mech** the falling piece touches (friendly or enemy)
- **Chain Collapse:** If a falling piece knocks over other pieces, each falling piece deals 1 DP to any mech it touches

### **After Collapse:**
- Leave fallen building pieces where they land
- Fallen pieces become **ground-level terrain**
- Mechs can climb over or move around fallen pieces
- Fallen pieces can be used as cover

---

## 🎯 STRATEGIC IMPLICATIONS

### **Building Stability:**
- **Tall, narrow buildings** are easier to knock over
- **Wide, low buildings** are more stable
- **Stacked pieces** are vulnerable to chain collapse
- **Adjacent pieces** are more stable (wider base)

### **Tactical Considerations:**

**For Builders:**
- Build wide bases for stability
- Don't stack too high near deployment zones
- Consider wind, table vibrations, and projectile impacts
- Test stability by gently nudging during building phase

**For Attackers:**
- Target unstable buildings with big projectiles
- Aim for base pieces to cause chain collapse
- Use knockdown to deny enemy cover
- Collapse buildings onto enemy mechs for damage

**For Defenders:**
- Don't cluster mechs near tall buildings
- Build escape routes from unstable structures
- Use fallen pieces as improvised cover
- Rebuild collapsed buildings if time allows

---

## 📋 UPDATED RULES

### **Building Collapse (Physics-Based):**

**How Collapse Works:**
1. Buildings are NOT destroyed by projectiles — they're just terrain
2. However, projectiles can physically knock over unstable building pieces
3. If a projectile hits a building piece hard enough to knock it over, it falls
4. **Real-world physics determines collapse** — if it falls in real life, it falls in the game

**Collapse Damage:**
1. If a building piece physically falls on a mech, that mech takes 1 DP
2. Place 1 HP token at the mech's feet
3. Applies to any mech the falling piece touches (friendly or enemy)
4. **Chain Collapse:** If a building piece falls and knocks over other pieces, each falling piece deals 1 DP to any mech it touches

**After Collapse:**
1. Leave fallen building pieces where they land (they become ground-level terrain)
2. Mechs can climb over or move around fallen pieces
3. Fallen pieces can be used as cover

---

## 🎮 GAMEPLAY EXAMPLES

### **Example 1: Unstable Tower**
```
Situation: 4-story building (pieces stacked vertically)
          Enemy mech hiding behind base piece

Action: You fire Big Air Cannon at the base piece
Result: 
  - Projectile hits base piece hard
  - Base piece tips over (real-world physics)
  - Top 3 pieces fall as well (chain collapse)
  - Base piece falls on enemy mech → 1 DP
  - All 4 pieces now lie on the ground as terrain
```

### **Example 2: Stable Building**
```
Situation: Wide building (4 pieces adjacent, not stacked)
          Your mech standing next to it

Action: Enemy fires Mortar at one piece
Result:
  - Projectile hits one piece
  - Piece is sturdy (wide base, not stacked)
  - Piece does NOT fall over
  - No damage to anyone
  - Building remains standing
```

### **Example 3: Friendly Fire**
```
Situation: 3-story building near your deployment zone
          Your mech standing next to it

Action: You fire Big Air Cannon at enemy (miss)
Result:
  - Projectile hits your own building
  - Building tips over
  - Falls on YOUR mech → 1 DP to you!
  - Lesson: Be careful with big projectiles near your own buildings
```

### **Example 4: Tactical Knockdown**
```
Situation: Enemy mech on top of 2-story building
          Building is narrow and unstable

Action: You fire Mortar at the base piece
Result:
  - Projectile hits base, building tips over
  - Top piece falls on enemy mech → 1 DP
  - Enemy mech also takes fall damage (fell from height)
  - Enemy loses elevated position
  - Fallen pieces become ground-level cover
```

---

## 🔧 TECHNICAL DETAILS

**Files Modified:**
- `public/data/rules.json` - Updated phase_1 chapter

**Script Created:**
- `update-building-physics.js` - Script that updated the phase_1 chapter

**Changes:**
- Removed "building destruction" mechanics
- Added physics-based collapse explanation
- Emphasized real-world physics as referee
- Clarified that fallen pieces remain as terrain
- Updated strategic considerations for stability
- Updated medium and quick summaries

---

## 🎨 DESIGN PHILOSOPHY

### **Why Physics-Based?**

**Simplicity:**
- No need to track "building HP"
- No need for special destruction rules
- Players can see and understand what happens

**Realism:**
- Buildings don't magically disappear when hit
- Collapse is intuitive and visible
- Matches the game's "physics is the referee" philosophy

**Tactical Depth:**
- Players must consider building stability
- Big projectiles have a new use (knockdown)
- Terrain becomes dynamic without complex rules

**Fun:**
- Watching buildings fall is satisfying
- Accidental collapses create memorable moments
- Encourages creative building strategies

---

## 🚀 SERVER STATUS

**Status:** ✅ Running on http://localhost:3000

**View the Changes:**
1. Open http://localhost:3000 in your browser
2. Click "Rule Deck" tab
3. Scroll to **"Game Phases"** section
4. Read **"PHASE 1: TERRAIN BUILDING"**
5. See the updated **BUILDING COLLAPSE (PHYSICS-BASED)** section

---

## ✅ SUMMARY

Building collapse is now physics-based:

✅ **Buildings are NOT destroyed** by projectiles
✅ **Projectiles can knock over** unstable buildings
✅ **Real-world physics** determines if a building falls
✅ **Falling pieces deal 1 DP** to mechs they touch
✅ **Fallen pieces remain** as ground-level terrain
✅ **Chain collapse** possible if pieces knock over other pieces
✅ **Stability matters** — wide bases are more stable than tall towers

The system is simple, intuitive, and adds tactical depth without complex rules. Physics is the referee!
