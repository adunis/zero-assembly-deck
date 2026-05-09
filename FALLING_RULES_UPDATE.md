# Falling Rules Update

## ✅ Updated Falling Mechanics

### 🎯 New Fallen Condition

**OLD:** Mech tips over = Fallen
**NEW:** Any part of the frame touching the ground = Fallen

### 📐 Fallen Definition

A mech is **Fallen** if:
- Any part of its **frame** (Core, Top, or structural components) is touching the ground
- Only **legs, treads, or wheels** should touch the ground
- If anything else touches → You're Fallen

**Important:** Even if your legs are still touching the ground, if your frame is also touching, you're Fallen and can't move.

---

## 🚫 Fallen Mech Restrictions

### What Fallen Mechs CAN'T Do:
- ❌ **MOVE** - Cannot use MOVE actions at all
  - Even if legs are touching the ground
  - Even if you have wheels/treads
  - Movement is completely disabled

### What Fallen Mechs CAN Do:
- ✅ **ENGAGE** - Can still shoot weapons
- ✅ **SCAVENGE** - Can pick up HP tokens
- ✅ **REPOSITION** - Can rotate, re-pose limbs, or stand up

### Standing Up:
- **Cost:** 1 AP (REPOSITION action)
- **Requirement:** Lift the frame off the ground so only feet touch
- **Result:** Fallen condition removed, can move next activation

---

## 💥 Fall Damage (NEW!)

### Distance-Based Damage

**📏 Short Ruler or less:**
- **Damage:** 0 DP
- **Example:** Falling off a small step, tipping over

**📏 Greater than Short Ruler:**
- **Damage:** 1 DP
- **Example:** Falling off a low building, knocked off a platform

**📏 Greater than Long Ruler:**
- **Damage:** 2 DP
- **Example:** Falling off a tall building, pushed off a cliff

### Measuring Fall Distance

1. Measure **vertically** from where the mech was to where it lands
2. Use a ruler to measure the height of the drop
3. Compare to Short Ruler and Long Ruler lengths
4. Apply damage based on distance

---

## 🌊 Knockback + Fall Damage

### Weapons with Knockback

**Nammo Avalanche Cannon:**
- Pushes enemy 2cm back
- If pushed off a ledge → Fall damage applies
- If tipped over → Fallen condition applies

**Dassault Sonic Repulsor:**
- Pushes enemy 1 Short Ruler back
- If pushed off a ledge → Fall damage applies
- If tipped over → Fallen condition applies

### Combo Example:

1. **Sonic Repulsor hits enemy on rooftop**
2. **Knockback:** Push 1 Short Ruler back
3. **Enemy falls off roof** (height = 1.5 Short Rulers)
4. **Fall Damage:** 1 DP (greater than Short Ruler)
5. **Fallen Condition:** Frame touches ground
6. **Total:** 0 DP from weapon + 1 DP from fall = 1 DP total, plus Fallen

---

## 🎯 Tactical Implications

### Positioning Matters
- **High Ground Advantage:** Enemies can't easily reach you
- **High Ground Risk:** If knocked back, you take fall damage
- **Ledge Fighting:** Position enemies near ledges for knockback combos

### Knockback Weapons Are More Valuable
- **Avalanche Cannon:** 2 DP + knockback + potential fall damage
- **Sonic Repulsor:** 0 DP + massive knockback + potential fall damage
- **Combo Potential:** Push enemies off buildings for extra damage

### Building Design
- **Elevated Positions:** Strong defensive positions but risky
- **Ramps vs Ladders:** Ramps allow wheeled mechs, ladders require climbing
- **Rooftop Combat:** High risk, high reward

---

## 📊 Fall Damage Examples

### Example 1: Small Fall
- **Situation:** Mech tips over on flat ground
- **Fall Distance:** 0 (just tipping)
- **Damage:** 0 DP
- **Result:** Fallen condition only

### Example 2: Medium Fall
- **Situation:** Knocked off a 1-story building
- **Fall Distance:** 1.2 Short Rulers
- **Damage:** 1 DP
- **Result:** 1 DP + Fallen condition

### Example 3: Large Fall
- **Situation:** Pushed off a 2-story building
- **Fall Distance:** 1.5 Long Rulers
- **Damage:** 2 DP
- **Result:** 2 DP + Fallen condition

### Example 4: Knockback Combo
- **Situation:** Avalanche Cannon hits enemy on rooftop
- **Weapon Damage:** 2 DP
- **Knockback:** 2cm push → falls off roof
- **Fall Distance:** 1.3 Short Rulers
- **Fall Damage:** 1 DP
- **Total Damage:** 2 DP + 1 DP = 3 DP + Fallen condition
- **Result:** Devastating combo!

---

## 🎮 Gameplay Impact

### Before Update:
- Falling had no damage
- Fallen = can't move, can shoot
- No incentive to use terrain height

### After Update:
- Falling deals 1-2 DP based on height
- Fallen = frame touching ground (more specific)
- Strong incentive to:
  - Control high ground
  - Use knockback weapons near ledges
  - Build terrain with multiple levels
  - Position carefully near edges

---

## 🏗️ Terrain Building Tips

### Create Vertical Gameplay:
1. **Multi-Level Buildings:** 1-2 stories tall
2. **Platforms:** Elevated firing positions
3. **Ramps:** Allow wheeled mechs to climb
4. **Ledges:** Create knockback opportunities
5. **Cliffs:** High-risk, high-reward positions

### Measure Heights:
- **Low Platform:** 0.5 Short Ruler (no fall damage)
- **Medium Platform:** 1 Short Ruler (1 DP fall damage)
- **High Platform:** 1 Long Ruler (2 DP fall damage)

---

## 📝 Rules Summary

### Fallen Condition:
- **Trigger:** Frame touches ground (not just feet)
- **Effect:** Can't move, can shoot/scavenge/reposition
- **Remove:** 1 AP (REPOSITION) to stand up

### Fall Damage:
- **≤ Short Ruler:** 0 DP
- **> Short Ruler:** 1 DP
- **> Long Ruler:** 2 DP

### Knockback + Fall:
- Knockback can push mechs off ledges
- Fall damage applies based on height
- Fallen condition applies when landing

---

## 🎨 Thematic Integration

### Lore Justification:

**Gravity is the Enemy:** In the Signal War, pilots fear two things:
1. **The Signal** - corrupts AI
2. **Gravity** - destroys mechs

Apex-Frames are heavy. A fall from height can:
- Damage structural integrity
- Knock the pilot unconscious
- Disable weapon systems
- Compromise the neural interface

**Tactical Doctrine:** EDC training emphasizes:
- Secure footing before engaging
- Avoid ledges when under fire
- Use knockback weapons to exploit enemy positioning
- Control high ground but respect the fall

---

**Updated rules now live at: http://localhost:3000**

Check the "Falling & Fall Damage" section in the Rule Deck for full details!
