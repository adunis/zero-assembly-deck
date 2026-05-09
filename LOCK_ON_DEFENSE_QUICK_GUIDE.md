# 🎯 LOCK-ON DEFENSE QUICK GUIDE

## How to Avoid Lock-On Missiles

---

## 🏃 METHOD 1: RUSH THEM (No Equipment Needed)

**Minimum Range Rule:** Lock-On weapons can't lock within 0-15cm

```
┌─────────────────────────────────────────────┐
│  Enemy Mech                    Your Mech    │
│     🤖                            🤖         │
│     │◄────── 40cm ──────►│                  │
│     │                     │                  │
│  [Locked!]                                   │
└─────────────────────────────────────────────┘

Your Turn: MOVE twice (30cm total)

┌─────────────────────────────────────────────┐
│  Enemy Mech    Your Mech                    │
│     🤖          🤖                           │
│     │◄─ 10cm ─►│                            │
│     │           │                            │
│  [Lock Broken! Too Close!]                  │
└─────────────────────────────────────────────┘
```

**Cost:** 2 AP (MOVE × 2)
**Success Rate:** 100%
**Uses:** Unlimited

---

## 🎆 METHOD 2: CHAFF FLARES (Reactive)

**Equipment:** 'Chaff' Flare Dispenser (eq_46)

```
Enemy Turn:
┌─────────────────────────────────────────────┐
│  Enemy: "I ENGAGE to LOCK onto you"         │
│  You: "I deploy Chaff Flares (reactive)"    │
│                                              │
│  Roll 1D6: [5] ← Success!                   │
│                                              │
│  Result: Lock fails, enemy wastes 1 AP      │
└─────────────────────────────────────────────┘
```

**Cost:** 0 AP (reactive)
**Success Rate:** 50% (4+ on 1D6)
**Uses:** 3 per game

---

## 💨 METHOD 3: SMOKE ECM (Active)

**Equipment:** 'Smoke' ECM Pod (eq_47)

```
Your Turn (enemy has LOCK token on you):
┌─────────────────────────────────────────────┐
│  You: "DEPLOY COUNTERMEASURES (1 AP)"       │
│                                              │
│  Effect:                                     │
│  ✓ All locks broken (guaranteed)            │
│  ✓ Smoke deployed (-2 to hit this turn)     │
│  ✓ Still have 1 AP left to act              │
└─────────────────────────────────────────────┘
```

**Cost:** 1 AP
**Success Rate:** 100%
**Uses:** 2 per game
**Bonus:** Smoke (-2 to hit with Direct Fire)

---

## 👻 METHOD 4: GHOST STEALTH (Passive + Active)

**Equipment:** 'Ghost' Stealth System (eq_48)

```
Enemy Turn:
┌─────────────────────────────────────────────┐
│  Enemy: "I ENGAGE to LOCK onto you"         │
│  You: "Ghost Stealth - you need 9+ to lock" │
│                                              │
│  Enemy rolls 2D6: [7] ← Fails!              │
│  (Would have succeeded normally)            │
└─────────────────────────────────────────────┘

If enemy succeeds:
┌─────────────────────────────────────────────┐
│  Your Turn:                                  │
│  You: "DEPLOY COUNTERMEASURES (1 AP)"       │
│  Lock broken, still have 1 AP left          │
└─────────────────────────────────────────────┘
```

**Cost:** 0 AP (passive), 1 AP (active break)
**Success Rate:** Reduces enemy lock from 58% to 28%
**Uses:** Unlimited

---

## 📊 COMPARISON TABLE

| Method | Equipment | AP Cost | Success | Uses | Best For |
|--------|-----------|---------|---------|------|----------|
| **Rush** | None | 2 AP | 100% | ∞ | Aggressive builds |
| **Chaff** | eq_46 | 0 AP | 50% | 3 | Reactive defense |
| **Smoke** | eq_47 | 1 AP | 100% | 2 | Guaranteed break |
| **Ghost** | eq_48 | 0/1 AP | -2 penalty | ∞ | Best all-around |

---

## 🎮 EXAMPLE COMBAT

### Turn-by-Turn Breakdown

**Setup:**
- Enemy: Javelin Lock-On Launcher (3 DP, Long range, 2 flicks)
- You: Chaff Flare Dispenser (3 uses)
- Distance: 40cm

---

**ROUND 1**

**Enemy Turn:**
```
Enemy: "I ENGAGE to LOCK onto you with Javelin"
You: "I deploy Chaff Flares (reactive, no AP cost)"
Roll 1D6: [5] Success!
→ Lock fails, enemy wastes 1 AP
→ Enemy uses remaining 1 AP to MOVE closer (now 25cm away)
```

**Your Turn:**
```
You: MOVE (15cm) + ENGAGE with G-36 Rifle
→ Now 10cm away from enemy
→ Roll 2D6 to hit: [8] Hit! Deal 1 DP + Finger Flick
```

---

**ROUND 2**

**Enemy Turn:**
```
Enemy: "I ENGAGE to LOCK onto you again"
You: "I deploy Chaff Flares (2 uses left)"
Roll 1D6: [2] Fail!
→ Lock succeeds, LOCK token placed on you
→ Enemy uses remaining 1 AP to MOVE back (now 25cm away)
```

**Your Turn:**
```
Option A: Rush within 15cm to break lock (MOVE once)
Option B: DEPLOY COUNTERMEASURES if you had Smoke ECM
Option C: Accept the hit next turn (3 DP + 2 flicks)

You choose: MOVE twice toward enemy (30cm)
→ Now at -5cm (you're past them!)
→ Lock breaks (within minimum range)
```

---

**ROUND 3**

**Enemy Turn:**
```
Enemy: Cannot lock (you're within 15cm)
Enemy: MOVE away (30cm) + ENGAGE with different weapon
→ Now 25cm away
```

**Your Turn:**
```
You: MOVE (15cm) + ENGAGE
→ Stay within 25cm to prevent long-range locks
```

**Result:** You successfully countered Lock-On weapon using:
1. Chaff Flares (1 use)
2. Rush tactics (minimum range)
3. Aggressive positioning

---

## 💡 TACTICAL TIPS

### When to Use Each Method

**Rush (No Equipment):**
- ✅ You have high mobility (Pure Wheels/Treads = 30cm)
- ✅ Enemy is within 2 MOVE actions (30cm)
- ✅ You want to engage in close combat anyway
- ❌ Enemy is too far away (>30cm)
- ❌ You're using Lock-On weapons yourself (moving breaks your lock)

**Chaff Flares (Reactive):**
- ✅ You need AP for offense (no AP cost)
- ✅ Enemy has single Lock-On weapon
- ✅ You're willing to gamble (50% chance)
- ❌ Enemy has multiple Lock-On weapons (limited uses)
- ❌ You need guaranteed defense

**Smoke ECM (Active):**
- ✅ You need guaranteed lock break
- ✅ You can spare 1 AP
- ✅ You want bonus smoke effect
- ❌ You need AP for offense
- ❌ You're facing many Lock-On weapons (only 2 uses)

**Ghost Stealth (Passive + Active):**
- ✅ You're facing multiple Lock-On threats
- ✅ You want unlimited defense
- ✅ You can spare 1 AP when needed
- ❌ You need reactive defense (passive only reduces chance)

---

## 🎯 PRIORITY TARGETS

### Which Locks to Counter

**High Priority (Use Countermeasures):**
- Javelin Lock-On Launcher (3 DP + 2 flicks)
- Swarm Multi-Lock System (can lock 2 targets)
- Any Lock-On when you're low HP

**Medium Priority (Consider Rushing):**
- Starstreak Missile Rack (2 DP)
- Seeker Smart Missile (2 DP, mobile lock)

**Low Priority (Accept Hit or Rush):**
- Any 1 DP Lock-On weapon
- Lock-On when you have shields (absorbs hit)

---

## 📈 PROBABILITY MATH

### Lock Success Rates

**Normal Lock-On:**
- Roll 2D6, need 7+
- Success: 58% (21/36 combinations)

**vs Chaff Flares:**
- Roll 2D6 (need 7+), then roll 1D6 (need 4+)
- Success: 58% × 50% = 29%

**vs Ghost Stealth:**
- Roll 2D6, need 9+ (instead of 7+)
- Success: 28% (10/36 combinations)

**vs Rush (Minimum Range):**
- Cannot lock within 15cm
- Success: 0%

**vs Smoke ECM:**
- Breaks existing lock
- Success: 0% (lock broken)

---

## 🛡️ BUILD RECOMMENDATIONS

### Aggressive Build
```
Equipment:
- Chaff Flare Dispenser (reactive, no AP cost)
- Pure Wheels/Treads (30cm movement)
- Direct Fire weapons

Strategy:
- Use flares to negate locks while advancing
- Rush within 15cm to break locks
- Engage in close combat
```

### Defensive Build
```
Equipment:
- Smoke ECM Pod (guaranteed lock break + smoke)
- Energy Shield (absorb hits)
- Indirect Fire weapons

Strategy:
- Break locks with ECM when needed
- Use shields to absorb hits
- Fight from cover with Indirect Fire
```

### Balanced Build
```
Equipment:
- Ghost Stealth System (passive + active)
- Mixed weapons (Direct + Lock-On)
- Standard mobility

Strategy:
- Passive defense makes locking hard
- Can break locks actively when needed
- Flexible offense and defense
```

---

## ✅ QUICK CHECKLIST

**When Enemy Attempts to Lock:**
- [ ] Do I have reactive countermeasures? (Chaff Flares)
- [ ] Can I rush within 15cm next turn? (2 MOVE actions)
- [ ] Do I have active countermeasures? (Smoke ECM, Ghost Stealth)
- [ ] Can I move out of range? (Beyond weapon's max range)
- [ ] Should I just accept the hit? (Low damage, have shields)

**When Enemy Has Lock Token on Me:**
- [ ] Can I rush within 15cm? (Break lock automatically)
- [ ] Do I have active countermeasures? (1 AP to break)
- [ ] Can I move out of range? (Break lock automatically)
- [ ] Should I pressure enemy to move? (Break their lock)
- [ ] Should I accept the hit? (Save countermeasures for later)

---

## 🎉 SUMMARY

**Lock-On weapons are powerful but have clear counters:**

1. **Minimum Range (0-15cm)** - Rush them to break locks
2. **Chaff Flares** - 50% chance to negate lock attempts
3. **Smoke ECM** - Guaranteed lock break + smoke bonus
4. **Ghost Stealth** - Make locking very hard (-2 penalty)

**Choose your defense based on:**
- Your build (aggressive vs defensive)
- Your AP availability (reactive vs active)
- Enemy threat level (high damage vs low damage)
- Your equipment (countermeasures vs none)

**Lock-On weapons are no longer unstoppable! 🛡️🚀**
