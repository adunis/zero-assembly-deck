# 🛡️ COUNTERMEASURE SYSTEM
## Flares, ECM, and Lock-On Defense

**Status:** Fully implemented
**Purpose:** Provide defensive options against Lock-On weapons

---

## 📋 OVERVIEW

The Countermeasure System adds defensive equipment to counter Lock-On weapons. Players can now equip flares, ECM pods, and stealth systems to break missile locks and avoid guaranteed hits.

**Key Features:**
- **Reactive Countermeasures** - Trigger when enemy attempts to lock (no AP cost)
- **Active Countermeasures** - Spend 1 AP to break existing locks
- **Passive Countermeasures** - Make it harder for enemies to lock onto you
- **Limited Uses** - Most countermeasures have 2-3 uses per game

---

## 🎮 NEW ACTION: DEPLOY COUNTERMEASURES

### Action Details

**Cost:** 1 AP (for active countermeasures) or Reactive (no AP cost)

**Effect:** Break Lock-On targeting on your mech

**Types:**
1. **Reactive** - Triggers automatically when enemy attempts to LOCK (no AP cost)
2. **Active** - Spend 1 AP to break existing locks or create defensive effects
3. **Passive** - Continuous effect that makes locking harder

### When to Use

**Reactive Countermeasures:**
- Enemy declares LOCK attempt on you
- You immediately declare reactive countermeasure
- Roll to see if lock is broken
- If successful, enemy wastes their ENGAGE action

**Active Countermeasures:**
- Enemy has already locked onto you (LOCK token on your mech)
- Spend 1 AP to break the lock
- Lock token is removed
- Enemy must re-lock next turn

**Passive Countermeasures:**
- Always active (no declaration needed)
- Enemies have penalty to lock rolls
- Can still use active ability to break existing locks

---

## 🛡️ COUNTERMEASURE EQUIPMENT

### 1. 'Chaff' Flare Dispenser (eq_46)

**Type:** Reactive Countermeasure
**Country:** 🇺🇸 US
**Cost:** Physical Attach

**Effect:**
- **Reactive:** When enemy attempts to LOCK onto you, deploy flares (no AP cost)
- **Roll 1D6:** On 4+, lock attempt fails automatically
- **Enemy wastes ENGAGE action** if lock fails
- **3 uses per game** (track with tokens)

**Tactical Use:**
- Best against single Lock-On weapons
- 50% chance to negate lock attempt
- Forces enemy to waste AP
- Limited uses - save for critical moments

**Example:**
```
Enemy Turn:
- Enemy: "I ENGAGE to LOCK onto you with Starstreak Missile"
- You: "I deploy Chaff Flares (reactive, no AP cost)"
- You roll 1D6: Result = 5 (success!)
- Enemy's lock attempt fails, they waste 1 AP
- No LOCK token placed
```

---

### 2. 'Smoke' ECM Pod (eq_47)

**Type:** Active Countermeasure
**Country:** 🇪🇺 EU
**Cost:** Physical Attach

**Effect:**
- **Active:** DEPLOY COUNTERMEASURES (1 AP)
- **Breaks ALL locks** on your mech immediately (no roll required)
- **Place smoke marker** at your mech's base
- **While in smoke (this turn only):** Enemies have -2 to hit you with Direct Fire weapons
- **2 uses per game**

**Tactical Use:**
- Guaranteed lock break (no roll needed)
- Bonus defensive effect (smoke)
- Good against multiple Lock-On weapons
- Can break locks after they're established

**Example:**
```
Your Turn (enemy has LOCK token on you):
- You: "I DEPLOY COUNTERMEASURES (1 AP) using Smoke ECM Pod"
- Remove all LOCK tokens from your mech
- Place smoke marker at your base
- This turn: Enemies have -2 to hit you with Direct Fire
- Smoke dissipates at end of turn
```

---

### 3. 'Ghost' Stealth System (eq_48)

**Type:** Passive + Active Countermeasure
**Country:** 🇯🇵 JP
**Cost:** Physical Attach

**Effect:**
- **Passive:** Enemies attempting to LOCK onto you have -2 to their lock roll (need 9+ instead of 7+)
- **Active:** Spend 1 AP to break existing lock immediately (DEPLOY COUNTERMEASURES action)
- **Unlimited uses**

**Tactical Use:**
- Makes you very hard to lock (only 28% chance vs 58% normally)
- Can still break locks if they succeed
- No usage limit
- Best all-around countermeasure

**Example:**
```
Enemy Turn:
- Enemy: "I ENGAGE to LOCK onto you with Javelin"
- You: "I have Ghost Stealth System - you need 9+ to lock"
- Enemy rolls 2D6: Result = 8 (fails!)
- No LOCK token placed

Later, if enemy succeeds:
- Your Turn: "I DEPLOY COUNTERMEASURES (1 AP) to break the lock"
- Remove LOCK token
```

---

## 📊 COUNTERMEASURE COMPARISON

| Equipment | Type | Success Rate | Uses | AP Cost | Bonus Effect |
|-----------|------|--------------|------|---------|--------------|
| **Chaff Flares** | Reactive | 50% (4+ on 1D6) | 3 | 0 (reactive) | None |
| **Smoke ECM** | Active | 100% | 2 | 1 AP | Smoke (-2 hit) |
| **Ghost Stealth** | Passive + Active | -2 to enemy lock | Unlimited | 1 AP (active) | Always harder to lock |

---

## 🎯 LOCK-ON VS COUNTERMEASURES

### Minimum Range Rule

**Lock-On weapons cannot lock targets within Short range (0-15cm)**

**Why:** Missiles need distance to track and maneuver. Too close = can't lock.

**Tactical Implications:**
- **Aggressive counter:** Rush Lock-On users to get within 15cm
- **Lock breaks:** If target moves within 15cm after lock, lock breaks
- **Close combat:** Lock-On weapons are useless at close range

**Example:**
```
Turn 1:
- Enemy locks onto you from 40cm away (Long range)
- LOCK token placed

Turn 2:
- You MOVE twice (30cm total) toward enemy
- Now at 10cm distance (within Short range)
- LOCK automatically breaks (too close!)
- Enemy cannot fire locked missile
```

---

## 🎮 TACTICAL SCENARIOS

### Scenario 1: Reactive Defense

**Situation:** Enemy has Starstreak Missile Rack (2 DP, Long range, Lock-On)

**Your Equipment:** Chaff Flare Dispenser (3 uses)

**Enemy Turn 1:**
- Enemy: "I ENGAGE to LOCK onto you"
- You: "I deploy Chaff Flares (reactive)"
- Roll 1D6: 5 (success!)
- Lock fails, enemy wastes 1 AP

**Enemy Turn 2:**
- Enemy: "I ENGAGE to LOCK onto you again"
- You: "I deploy Chaff Flares again (2 uses left)"
- Roll 1D6: 2 (fail!)
- Lock succeeds, LOCK token placed

**Your Turn:**
- Option A: MOVE within 15cm to break lock (minimum range)
- Option B: MOVE out of range to break lock
- Option C: Accept the hit next turn (2 DP guaranteed)

---

### Scenario 2: Active Defense

**Situation:** Enemy has locked onto you (LOCK token on your mech)

**Your Equipment:** Smoke ECM Pod (2 uses)

**Your Turn:**
- You: "I DEPLOY COUNTERMEASURES (1 AP) using Smoke ECM"
- Remove LOCK token
- Place smoke marker
- Enemies have -2 to hit you with Direct Fire this turn
- You still have 1 AP left - MOVE or ENGAGE

**Result:** Lock broken, bonus defense, still have 1 AP to act

---

### Scenario 3: Passive Defense

**Situation:** Enemy has Javelin Lock-On Launcher (3 DP, Long range, 2 flicks)

**Your Equipment:** Ghost Stealth System (unlimited uses)

**Enemy Turn 1:**
- Enemy: "I ENGAGE to LOCK onto you"
- You: "Ghost Stealth System - you need 9+ to lock"
- Enemy rolls 2D6: 7 (fails! - would have succeeded normally)
- No lock

**Enemy Turn 2:**
- Enemy: "I ENGAGE to LOCK onto you again"
- You: "Still need 9+"
- Enemy rolls 2D6: 10 (success!)
- LOCK token placed

**Your Turn:**
- You: "I DEPLOY COUNTERMEASURES (1 AP) to break lock"
- Remove LOCK token
- Still have 1 AP left

**Result:** Made locking very hard, can still break locks if needed

---

### Scenario 4: Rush Tactics

**Situation:** Enemy has Swarm Multi-Lock System (can lock 2 targets)

**Your Equipment:** None (no countermeasures)

**Strategy:** Use minimum range rule

**Turn 1:**
- Enemy locks onto you from 40cm away
- LOCK token placed

**Your Turn:**
- MOVE twice (30cm total) toward enemy
- Now at 10cm distance (within Short range)
- LOCK automatically breaks!

**Turn 2:**
- Enemy cannot lock (you're within 15cm)
- Enemy must MOVE away or use different weapon
- You can ENGAGE with Direct Fire weapons

**Result:** Neutralized Lock-On threat without countermeasures

---

## 💡 ADVANCED TACTICS

### Countermeasure Management

**Limited Uses:**
- Chaff Flares: 3 uses
- Smoke ECM: 2 uses
- Ghost Stealth: Unlimited

**When to Use:**
- **Save for high-damage threats:** Don't waste flares on 1 DP missiles
- **Use early against Javelin:** 3 DP + 2 flicks is devastating
- **Combine with movement:** Break lock + move to safety
- **Bait and waste:** Force enemy to waste AP on failed locks

### Loadout Decisions

**Chaff Flares (Reactive):**
- ✅ No AP cost (reactive)
- ✅ Can negate lock attempts
- ❌ Only 50% success rate
- ❌ Limited uses (3)
- **Best for:** Aggressive builds that need AP for offense

**Smoke ECM (Active):**
- ✅ Guaranteed lock break
- ✅ Bonus smoke effect
- ❌ Costs 1 AP
- ❌ Limited uses (2)
- **Best for:** Defensive builds that can spare AP

**Ghost Stealth (Passive + Active):**
- ✅ Always makes locking harder
- ✅ Unlimited uses
- ✅ Can still break locks actively
- ❌ Costs 1 AP to break locks
- **Best for:** Balanced builds facing multiple Lock-On threats

### Counter-Counter Tactics

**If you're using Lock-On weapons:**

**Against Chaff Flares:**
- Try to lock multiple times (they only have 3 uses)
- Use other weapons first to bait flare usage
- Switch to Direct Fire or Indirect Fire weapons

**Against Smoke ECM:**
- Lock early before they can break it
- Use multiple Lock-On weapons (they can only break once per turn)
- Pressure them to use AP on other actions

**Against Ghost Stealth:**
- Accept the -2 penalty (28% lock chance)
- Use Direct Fire weapons instead
- Get close to force them into melee range

**Against Minimum Range:**
- Stay at Long range (30-45cm)
- Use MOVE to maintain distance
- Combine with Indirect Fire weapons for close targets

---

## 📈 PROBABILITY ANALYSIS

### Lock Success Rates

| Scenario | Roll Needed | Chance | Notes |
|----------|-------------|--------|-------|
| **Normal Lock** | 7+ | 58% | Standard Lock-On |
| **vs Chaff Flares** | 7+, then 4+ | 29% | 58% × 50% |
| **vs Ghost Stealth** | 9+ | 28% | -2 penalty |
| **vs Smoke ECM** | N/A | 0% | Breaks existing lock |

### Countermeasure Effectiveness

**Chaff Flares:**
- 50% chance to negate each lock attempt
- 3 uses = can potentially stop 3 locks
- Expected value: 1.5 locks stopped per game

**Smoke ECM:**
- 100% chance to break locks
- 2 uses = can break 2 locks guaranteed
- Bonus: -2 to hit for 1 turn (2 times)

**Ghost Stealth:**
- Reduces lock chance from 58% to 28% (52% reduction)
- Unlimited passive effect
- Can break locks actively (unlimited)

---

## ✅ INTEGRATION CHECKLIST

### Rules Updated
- ✅ Added DEPLOY COUNTERMEASURES action to rule_1
- ✅ Updated Lock-On procedure with countermeasure mentions
- ✅ Clarified minimum range rule (0-15cm)
- ✅ Updated medium and quick summaries

### Equipment Added
- ✅ eq_46: Chaff Flare Dispenser (Reactive, 3 uses)
- ✅ eq_47: Smoke ECM Pod (Active, 2 uses, smoke effect)
- ✅ eq_48: Ghost Stealth System (Passive + Active, unlimited)

### HTML Fixed
- ✅ Removed undefined `e.device` reference
- ✅ Now displays `firingType` instead

### Documentation
- ✅ COUNTERMEASURE_SYSTEM_COMPLETE.md (this file)

---

## 🎉 RESULT

**Countermeasure System provides:**
- ✅ **Defensive options** - Counter Lock-On weapons
- ✅ **Tactical variety** - 3 different countermeasure types
- ✅ **Strategic depth** - Manage limited uses
- ✅ **Counter-play** - Lock-On weapons have weaknesses
- ✅ **Build diversity** - Countermeasures vs armor vs shields
- ✅ **Minimum range rule** - Rush tactics work without equipment

**Lock-On weapons now have meaningful counterplay! 🛡️🚀**

---

## 📝 SUMMARY FOR USER

### What Changed

1. **Fixed "undefined" bug** - Equipment cards now show weapon type correctly
2. **Added 3 countermeasure equipment items:**
   - Chaff Flare Dispenser (reactive, 50% chance, 3 uses)
   - Smoke ECM Pod (active, guaranteed, 2 uses, smoke bonus)
   - Ghost Stealth System (passive -2 to lock, unlimited)
3. **Added DEPLOY COUNTERMEASURES action** to rules
4. **Clarified minimum range rule** - Lock-On can't lock within 0-15cm

### How It Works

**Minimum Range (No Equipment Needed):**
- Lock-On weapons can't lock targets within 15cm
- If you're locked and move within 15cm, lock breaks
- Rush Lock-On users to neutralize them

**Countermeasures (Equipment Required):**
- **Reactive:** Trigger when enemy tries to lock (no AP cost)
- **Active:** Spend 1 AP to break existing locks
- **Passive:** Make it harder for enemies to lock

### Tactical Options

**Against Lock-On weapons, you can:**
1. **Rush them** - Get within 15cm to break lock (no equipment needed)
2. **Use flares** - 50% chance to negate lock attempt (reactive)
3. **Use ECM** - Guaranteed lock break + smoke (1 AP)
4. **Use stealth** - Make locking much harder (-2 penalty)
5. **Move away** - Get out of range to break lock
6. **Pressure shooter** - Force them to move (breaks lock)

**All questions answered! 🎯**
