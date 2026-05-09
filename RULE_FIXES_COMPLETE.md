# RULE FIXES COMPLETE

## ✅ ALL CHANGES IMPLEMENTED

Successfully implemented all requested rule fixes and improvements.

---

## 🔄 1. MERGED HP TOKENS AND RESOURCE TOKENS

### **Old System:**
- HP Tokens: Placed when you take damage
- Resource Tokens: Placed on terrain during setup
- Two separate concepts, confusing terminology

### **New System:**
- **Resource Cubes:** Single unified concept
- When you take damage → Place Resource Cubes at your feet
- During setup → Place Resource Cubes on terrain
- Scavenge any Resource Cube → Gain 1 HP

### **Benefits:**
- ✅ Simpler terminology
- ✅ Easier to understand
- ✅ Consistent across all rules
- ✅ Lost HP becomes scavengeable resources

### **Updated Rules:**
- `rule_1`: ACTIONS — Updated SCAVENGE action
- `rule_1b`: BATTLEFIELD OBJECTS — Merged into Resource Cubes
- `rule_4`: DAMAGE & HP — Now places Resource Cubes
- `phase_3`: SCENARIO PREPARATION — Uses Resource Cube terminology
- `setup_1`: GAME SETUP & PHASES — Uses Resource Cube terminology

---

## 💥 2. REMOVED FORCED KNOCKBACK FROM PROJECTILES

### **Old System:**
- Avalanche Cannon: "Push enemy mech straight back exactly 2cm"
- Sonic Repulsor: "Push enemy mech straight back exactly 1 Short Ruler"
- Forced, measured knockback

### **New System:**
- **Physics-based knockback:** Projectile impact may physically push the mech
- Real-world physics determines if knockback occurs
- No forced measurements

### **Updated Equipment:**

**Avalanche Cannon (eq_19):**
```
Old: Deals 2 DP, push enemy straight back exactly 2cm
New: Deals 2 DP. The force of impact may physically push 
     the enemy mech back — real-world physics determines 
     if knockback occurs.
```

**Sonic 'Repulsor' Cylinder (eq_36):**
```
Old: Deals 0 DP, push enemy straight back exactly 1 Short Ruler
New: Deals 1 DP. The sonic blast may physically push the 
     enemy mech back — real-world physics determines if 
     knockback occurs.
```

### **Benefits:**
- ✅ Consistent with "physics is the referee" philosophy
- ✅ No forced measurements
- ✅ More intuitive gameplay
- ✅ Projectile force naturally determines knockback

---

## 🚀 3. FIXED OVERBOOST DRIVE

### **Old System:**
- "Spend 1 AP to MOVE one extra Short Ruler straight ahead"
- "Allows a 3rd MOVE action in a single activation"
- **Problem:** You only get 2 AP per turn, can't move 3 times!

### **New System:**
- **"Once per activation, when you spend 1 AP to MOVE, you may move 1 Long Ruler instead of 1 Short Ruler"**
- Must move straight ahead
- Extends movement distance, doesn't add extra actions

### **How It Works:**
- Normal MOVE: 1 AP = 1 Short Ruler (15cm)
- With Overboost: 1 AP = 1 Long Ruler (30cm)
- Still costs 1 AP, just covers more distance

### **Example:**
```
Turn with Overboost Drive:
• MOVE (1 AP) with Overboost → 30cm straight ahead
• ENGAGE (1 AP) → Fire weapon
Total: 2 AP used, moved 30cm + shot
```

### **Benefits:**
- ✅ Works with 2 AP system
- ✅ Still provides mobility advantage
- ✅ Clear and simple
- ✅ Balanced (once per activation, straight only)

---

## 📏 4. ADDED RULER DEFINITIONS

### **Added to `setup_1: GAME SETUP & PHASES`:**

```
RULERS:
• Short Ruler: 15cm (6 inches)
• Long Ruler: 30cm (12 inches)
• Use any ruler or measuring tape
• Always measure horizontally (flat on ground), 
  never diagonally through air
```

### **Benefits:**
- ✅ Explicit measurements
- ✅ No ambiguity
- ✅ Clear for new players
- ✅ Includes measurement guidelines

---

## 🤝 5. ADDED COLLISION & PUSHING RULES

### **Added to `rule_5: MOVEMENT & LEG TYPES`:**

**Mech Collisions:**
- Mechs cannot move through each other
- If your movement would cause a collision, stop before contact
- You can push adjacent mechs: as you move, push an adjacent enemy alongside you
- Pushing does not cost extra AP and deals no damage
- Pushed mechs move with you (up to your full movement distance)
- If a pushed mech hits terrain or another mech, it stops (you continue moving)

**Moving Through Buildings:**
- You CAN move through buildings — simply push your mech along your movement path
- If buildings are in the way, push through them physically
- Buildings may fall over as you move through them (real-world physics)
- If a building piece falls on your mech, you take 1 DP (place 1 Resource Cube)
- If a building piece falls on an enemy mech, they take 1 DP
- **Risk vs Reward:** Moving through buildings is fast but dangerous!

**Pushing Strategy:**
- Push enemies off ledges (they take fall damage)
- Push enemies into unstable buildings (buildings may fall on them)
- Push enemies away from objectives
- Push enemies into your line of fire

### **Benefits:**
- ✅ Clear collision rules
- ✅ Pushing adds tactical depth
- ✅ Moving through buildings is risky but possible
- ✅ Physics-based (buildings may fall)
- ✅ Creates dynamic gameplay

---

## 🔧 6. CLARIFIED EQUIPMENT ATTACHMENT TIMING

### **Updated in `rule_1: ACTIONS`:**

**SCAVENGE (1 AP):**
```
Equipment Cube: Randomly pick one piece from the scavenging pile. 
Attach it immediately to your mech however you want (pick up your 
mech, modify it, put it back). This is the only way to modify 
your mech during the game.
```

### **Updated in `rule_1b: BATTLEFIELD OBJECTS`:**

**EQUIPMENT CUBES:**
```
Effect: Randomly pick one piece from the scavenging pile. 
Attach it immediately to your mech however you want — pick up 
your mech, physically attach the part, and put it back where it was.
```

### **How It Works:**
1. Spend 1 AP to SCAVENGE an Equipment Cube
2. Randomly pick a piece from the scavenging pile
3. Pick up your mech from the table
4. Physically attach the new part
5. Put your mech back where it was
6. Continue your turn

### **Benefits:**
- ✅ Clear timing (immediate)
- ✅ No ambiguity
- ✅ Physical modification during game
- ✅ Test stability after attaching

---

## 📊 SUMMARY OF CHANGES

### **Files Modified:**
- `public/data/rules.json` — Updated 6 rule entries
- `public/data/equipment.json` — Updated 3 equipment items

### **Rules Updated:**
1. `setup_1` — Added ruler definitions
2. `rule_1` — Updated SCAVENGE action (Resource Cubes, immediate attachment)
3. `rule_1b` — Merged HP/Resource tokens into Resource Cubes
4. `rule_4` — Updated damage to place Resource Cubes
5. `rule_5` — Added collision, pushing, and moving through buildings
6. `phase_3` — Updated terminology to Resource Cubes

### **Equipment Updated:**
1. `eq_19` — Avalanche Cannon (physics-based knockback)
2. `eq_36` — Sonic Repulsor Cylinder (physics-based knockback)
3. `eq_7` — Overboost Drive (extends movement distance)

---

## 🎮 GAMEPLAY IMPACT

### **Simpler:**
- ✅ One type of cube instead of two (Resource Cubes)
- ✅ Clear ruler measurements (15cm/30cm)
- ✅ Immediate equipment attachment (no waiting)

### **More Consistent:**
- ✅ All knockback is physics-based
- ✅ All movement follows same rules
- ✅ All cubes work the same way

### **More Tactical:**
- ✅ Pushing enemies creates new strategies
- ✅ Moving through buildings is risky but rewarding
- ✅ Overboost Drive provides meaningful mobility

### **More Intuitive:**
- ✅ Physics determines outcomes
- ✅ No forced measurements
- ✅ Clear terminology

---

## 🚀 SERVER STATUS

**Status:** ✅ Running on http://localhost:3000

**View the Changes:**
1. Open http://localhost:3000 in your browser
2. Click "Rule Deck" tab
3. Review updated rules:
   - **GAME SETUP & PHASES** — See ruler definitions
   - **ACTIONS** — See Resource Cube scavenging
   - **BATTLEFIELD OBJECTS** — See unified Resource Cubes
   - **DAMAGE & HP** — See Resource Cube placement
   - **MOVEMENT & LEG TYPES** — See collision and pushing rules
4. Click "Equipment Deck" tab
5. Review updated equipment:
   - **Overboost Drive** — See new movement extension
   - **Avalanche Cannon** — See physics-based knockback
   - **Sonic Repulsor Cylinder** — See physics-based knockback

---

## ✅ ALL FIXES COMPLETE

The rules are now:
- ✅ Simpler (Resource Cubes instead of HP/Resource tokens)
- ✅ More consistent (physics-based knockback)
- ✅ Better balanced (Overboost Drive works with 2 AP)
- ✅ Clearer (ruler definitions, equipment timing)
- ✅ More tactical (collision, pushing, moving through buildings)

The game is ready for playtesting!
