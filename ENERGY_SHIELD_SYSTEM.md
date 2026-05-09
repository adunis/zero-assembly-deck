# ⚡ ENERGY SHIELD SYSTEM
## Active Defense Mechanic for Zero Assembly

**Status:** Fully integrated
**Purpose:** Provide dynamic defense that requires tactical management

---

## 🎯 OVERVIEW

**Energy Shields** are a unique defense system that works differently from armor:

**Armor (HP):**
- Permanent hit points
- Lost HP becomes tokens at feet
- Can be scavenged back
- Subject to Finger Flicks

**Energy Shields (SP):**
- Temporary shield points
- Absorbs hits (1 SP per hit, regardless of DP)
- **Blocks Finger Flicks** while active
- Must be recharged with AP
- Cannot be scavenged

---

## 📋 HOW SHIELDS WORK

### Basic Mechanics

**Shield Points (SP):**
- Each shield has a capacity (e.g., 3 SP)
- Track SP with different colored tokens (blue recommended)
- SP is separate from HP

**Damage Absorption:**
When you're hit and have active shield:
1. **Lose 1 SP** (regardless of weapon's DP value)
2. **No HP damage** taken
3. **No HP tokens** placed at feet
4. **No Finger Flicks** performed (shield absorbs impact)

**Shield Depletion:**
- When SP reaches 0, shield is depleted
- Further hits damage HP normally
- Finger Flicks resume

**Recharging:**
- **RECHARGE action (1 AP):** Restore 1 SP
- Cannot RECHARGE and ENGAGE in same turn
- Choose offense or defense each turn

### Example Combat

**Scenario:** You have Aegis Shield (3 SP) and 4 HP

**Turn 1:**
- Enemy hits you with 2 DP weapon
- Shield absorbs: Lose 1 SP (now 2 SP)
- No HP damage, no flick
- Your turn: RECHARGE (1 AP) back to 3 SP

**Turn 2:**
- Enemy hits you twice (multi-shot weapon)
- First hit: Lose 1 SP (now 2 SP)
- Second hit: Lose 1 SP (now 1 SP)
- No HP damage, no flicks
- Your turn: RECHARGE twice (2 AP) back to 3 SP

**Turn 3:**
- Enemy hits you with 3 DP weapon
- Shield absorbs: Lose 1 SP (now 2 SP)
- Still no HP damage (DP doesn't matter!)
- Your turn: ENGAGE instead of recharging

**Turn 4:**
- Enemy hits you 3 times (tri-barrel cannon)
- First hit: Lose 1 SP (now 1 SP)
- Second hit: Lose 1 SP (now 0 SP - DEPLETED!)
- Third hit: Shield down! Lose 1 HP, perform flick
- Your turn: RECHARGE (1 AP) to restore 1 SP

---

## 🛡️ SHIELD VARIANTS

### 1. 'Aegis' Shield Generator (Standard)
**Capacity:** 3 SP
**Recharge:** 1 AP = 1 SP
**Special:** None
**Best For:** Balanced defense

**Tactical Use:**
- Reliable 3-hit protection
- Standard recharge rate
- Good all-around choice
- Blocks 3 Finger Flicks

---

### 2. 'Barrier' Light Shield (Fast Recharge)
**Capacity:** 2 SP
**Recharge:** 1 AP = 2 SP (full recharge!)
**Special:** Fast recharge
**Best For:** Aggressive playstyle

**Tactical Use:**
- Lower capacity but instant full recharge
- Can recharge to full in 1 AP
- Good for hit-and-run tactics
- Spend 1 AP defending, 1 AP attacking

**Example:**
- Turn 1: Get hit twice, shield depleted
- Turn 2: RECHARGE (1 AP) = full 2 SP, ENGAGE (1 AP)
- Turn 3: Shield back at full, ready to absorb

---

### 3. 'Fortress' Heavy Shield (High Capacity)
**Capacity:** 4 SP
**Recharge:** 1 AP = 1 SP
**Special:** -5cm movement penalty
**Best For:** Defensive/tank builds

**Tactical Use:**
- Highest capacity (4 hits)
- Blocks 4 Finger Flicks
- Trade-off: Slower movement
- Pure Legs: 10cm (instead of 15cm)
- Pure Wheels/Treads: 25cm (instead of 30cm)

**Build Synergy:**
- Pair with long-range weapons
- Don't need to move much
- Tank role: absorb damage for team
- Control objectives from static position

---

### 4. 'Reactive' Adaptive Shield (Auto-Recharge)
**Capacity:** 2 SP
**Recharge:** Auto +1 SP at turn start (free!)
**Special:** Passive regeneration
**Best For:** Sustained combat

**Tactical Use:**
- Automatically gains 1 SP at start of your turn
- No AP cost for passive recharge
- Can still use RECHARGE action for +1 more
- Never need to spend both AP on defense

**Example:**
- Turn 1: Get hit, down to 1 SP
- Turn 2 Start: Auto-recharge to 2 SP (free!)
- Turn 2: MOVE + ENGAGE (both AP for offense)
- Shield regenerates passively

**Synergy:**
- Best for aggressive players
- Always have AP for offense
- Shield maintains itself
- Excellent for prolonged fights

---

### 5. 'Overload' Burst Shield (One-Use)
**Capacity:** 3 SP
**Recharge:** Cannot recharge after overload
**Special:** When depleted, flick attacker 2x
**Best For:** Aggressive counter-attack

**Tactical Use:**
- Standard 3 SP capacity
- When shield reaches 0 SP, triggers OVERLOAD
- Perform 2 Finger Flicks on the attacker (if within Short range)
- Shield permanently destroyed after overload
- Cannot be recharged

**Overload Trigger:**
- Enemy depletes your shield (hits you when at 1 SP)
- If attacker is within Short range (15cm):
  - Perform 2 Finger Flicks on attacker
  - Can knock them back, make them fall, etc.
- Shield is destroyed (remove from mech)
- Continue with HP only

**Tactical Considerations:**
- High-risk, high-reward
- Great for close-range brawlers
- Punishes enemies who get close
- One-time use limits long-term value
- Best in short, aggressive games

**Example:**
- Turn 1: Enemy hits you (2 SP remaining)
- Turn 2: Enemy hits you (1 SP remaining)
- Turn 3: Enemy hits you at close range
  - Shield depleted (0 SP)
  - OVERLOAD triggers!
  - Perform 2 flicks on attacker
  - Attacker falls over
  - Shield destroyed (remove from mech)
- Turn 4+: No shield, rely on HP

---

## 🎮 TACTICAL IMPLICATIONS

### Shield vs. Armor Decision

**Choose Shields When:**
- You want to block Finger Flicks
- You can afford AP for recharging
- You face multi-shot weapons (shields absorb each hit for 1 SP)
- You want active defense management

**Choose Armor When:**
- You want permanent HP
- You can't spare AP for recharging
- You face high-DP single-shot weapons
- You want passive defense

**Example Comparison:**

**Scenario:** Enemy has Twin-Link Rifle (2 shots, 1 DP each)

**With Armor (+2 HP):**
- Hit 1: Lose 1 HP, perform flick
- Hit 2: Lose 1 HP, perform flick
- Result: -2 HP, 2 flicks taken

**With Aegis Shield (3 SP):**
- Hit 1: Lose 1 SP (2 SP remaining)
- Hit 2: Lose 1 SP (1 SP remaining)
- Result: -2 SP, 0 flicks taken, can recharge

**Shields are better against multi-shot weapons!**

---

### Recharge Timing

**When to Recharge:**

**1. After Taking Damage**
- Shield at 1 SP or 0 SP
- Recharge before enemy's next turn
- Maintain protection

**2. Before Advancing**
- Moving into danger zone
- Recharge to full before engaging
- Prepare for incoming fire

**3. During Lulls**
- Enemy out of range
- No immediate threats
- Top off shield capacity

**When NOT to Recharge:**

**1. When You Can Kill**
- Enemy at low HP
- Finish them before they shoot again
- Offense > defense

**2. When Shield is Full**
- Already at max capacity
- Use AP for offense/movement
- Don't waste actions

**3. When You Need Objectives**
- Scenario requires movement
- Capturing flags/objectives
- Shield can wait

---

### Action Economy

**Standard Turn (No Shield):**
- 2 AP: MOVE + ENGAGE
- Or: ENGAGE + ENGAGE
- Or: MOVE + MOVE

**Shield Turn Options:**

**Defensive Turn:**
- RECHARGE + RECHARGE (restore 2 SP)
- Full defense, no offense

**Balanced Turn:**
- RECHARGE + MOVE
- Or: RECHARGE + SCAVENGE
- Maintain shield, support actions

**Aggressive Turn:**
- MOVE + ENGAGE
- Or: ENGAGE + ENGAGE
- No recharge, full offense

**Cannot Do:**
- ❌ RECHARGE + ENGAGE (forbidden!)
- Must choose offense OR defense

---

### Build Synergies

**Shield + Long-Range Weapons:**
- Stay at distance
- Recharge between shots
- Minimize incoming fire
- Example: Aegis Shield + Lancer Railgun

**Shield + Mobility:**
- Hit and run tactics
- Recharge while repositioning
- Hard to pin down
- Example: Barrier Shield + Pure Wheels

**Shield + Tank Build:**
- Fortress Shield + Heavy Armor
- Maximum survivability
- Control objectives
- Example: Fortress Shield + AMAP-L Plating

**Shield + Auto-Recharge:**
- Reactive Shield + Aggressive weapons
- Never stop attacking
- Shield maintains itself
- Example: Reactive Shield + Twin-Link Rifle

**Shield + Overload:**
- Overload Shield + Melee weapons
- Close-range brawler
- Punish attackers
- Example: Overload Shield + Bunker Pile Driver

---

## 🎲 SHIELD MATH

### Effective Hit Points

**Aegis Shield (3 SP) + 4 HP = 7 effective hits**
- First 3 hits: Absorbed by shield (no flicks)
- Next 4 hits: Damage HP (with flicks)

**Fortress Shield (4 SP) + 4 HP = 8 effective hits**
- First 4 hits: Absorbed by shield (no flicks)
- Next 4 hits: Damage HP (with flicks)
- Trade-off: -5cm movement

**Armor (+2 HP) = 6 HP total**
- All 6 hits: Damage HP (with flicks)
- No recharge needed
- Permanent protection

### Recharge Efficiency

**Aegis Shield:**
- 3 SP capacity
- 1 AP = 1 SP
- 3 AP to fully recharge from 0

**Barrier Shield:**
- 2 SP capacity
- 1 AP = 2 SP (full)
- 1 AP to fully recharge from 0
- **Most AP-efficient!**

**Fortress Shield:**
- 4 SP capacity
- 1 AP = 1 SP
- 4 AP to fully recharge from 0
- **Least AP-efficient**

**Reactive Shield:**
- 2 SP capacity
- Auto +1 SP per turn (free)
- 1 AP = 1 SP (manual)
- **Best passive efficiency**

---

## 💡 ADVANCED TACTICS

### Shield Baiting

**Tactic:** Let shield deplete intentionally

**How:**
1. Advance with full shield
2. Take hits, shield absorbs
3. When shield at 1 SP, bait enemy into close range
4. Enemy depletes shield
5. If using Overload Shield: Counter-flick attacker!

**Risk:** Vulnerable after shield down

---

### Shield Cycling

**Tactic:** Alternate between shields and offense

**How:**
1. Turn 1: ENGAGE + ENGAGE (full offense)
2. Turn 2: RECHARGE + RECHARGE (full defense)
3. Turn 3: ENGAGE + ENGAGE (full offense)
4. Repeat cycle

**Best With:** Aegis or Fortress Shield (high capacity)

---

### Shield Tanking

**Tactic:** Absorb damage for teammates

**How:**
1. Equip Fortress Shield (4 SP)
2. Position in front of allies
3. Draw enemy fire
4. Shield absorbs hits
5. Recharge during lulls
6. Allies attack freely

**Best For:** Team games, objective control

---

### Shield Rushing

**Tactic:** Aggressive advance with shield protection

**How:**
1. Equip Barrier Shield (fast recharge)
2. Advance toward enemy
3. Shield absorbs incoming fire
4. Reach close range
5. Full offense (shield can recharge quickly)

**Best With:** Close-range weapons (shotguns, melee)

---

### Passive Regeneration

**Tactic:** Never stop attacking

**How:**
1. Equip Reactive Shield (auto-recharge)
2. Always use both AP for offense/movement
3. Shield regenerates passively
4. Maintain pressure on enemy
5. Only manually recharge if critical

**Best For:** Aggressive players, sustained combat

---

## 🔍 COUNTER-PLAY

### Against Shields

**1. Multi-Shot Weapons**
- Each hit depletes 1 SP
- Twin-Link Rifle: 2 hits = 2 SP
- Tri-Barrel Cannon: 3 hits = 3 SP
- Deplete shields quickly

**2. Sustained Pressure**
- Don't let them recharge
- Attack every turn
- Force them to choose: recharge or die

**3. High-DP Weapons**
- Shields absorb 1 SP regardless of DP
- But high DP matters when shield is down
- Save heavy weapons for after shield depletes

**4. Knockback Weapons**
- Shields block Finger Flicks
- But Sonic Repulsor still works (0 DP, 3 flicks)
- Wait for shield to deplete, then knockback

**5. Overload Bait**
- If enemy has Overload Shield
- Deplete it from Long range
- Avoid close range when shield at 1 SP

---

## 📊 SHIELD COMPARISON TABLE

| Shield | SP | Recharge | Special | Best For |
|--------|----|----|---------|----------|
| **Aegis** | 3 | 1 AP = 1 SP | None | Balanced |
| **Barrier** | 2 | 1 AP = 2 SP | Fast recharge | Aggressive |
| **Fortress** | 4 | 1 AP = 1 SP | -5cm move | Tank |
| **Reactive** | 2 | Auto +1/turn | Passive regen | Sustained |
| **Overload** | 3 | One-use | 2 flicks on attacker | Counter-attack |

---

## ✅ INTEGRATION CHECKLIST

### Rules Updated
- ✅ Actions & Turn Order - Added RECHARGE action
- ✅ Damage & HP - Complete Energy Shield section
- ✅ Shooting & Line of Sight - Shields block Finger Flicks

### Equipment Added
- ✅ Aegis Shield Generator (3 SP, standard)
- ✅ Barrier Light Shield (2 SP, fast recharge)
- ✅ Fortress Heavy Shield (4 SP, -5cm move)
- ✅ Reactive Adaptive Shield (2 SP, auto-recharge)
- ✅ Overload Burst Shield (3 SP, one-use, counter-flick)

### Documentation
- ✅ ENERGY_SHIELD_SYSTEM.md (this file)

---

## 🎉 RESULT

**Energy Shields provide:**
- ✅ **Active defense** - Requires tactical management
- ✅ **Flick immunity** - Blocks knockback while active
- ✅ **Action economy** - Trade offense for defense
- ✅ **Build variety** - 5 different shield types
- ✅ **Tactical depth** - Recharge timing matters
- ✅ **Counter-play** - Multi-shot weapons are effective
- ✅ **Unique mechanics** - Different from passive armor

**Shields are now a viable alternative to armor with distinct gameplay! ⚡🛡️**
