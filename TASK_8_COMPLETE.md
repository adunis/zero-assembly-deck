# TASK 8: FRAME SYSTEM & PERKS - COMPLETE ✅

## Status: COMPLETE

All requested changes have been implemented and validated.

---

## What Was Changed

### 1. ✅ Perks System Simplified
**All perks are now once-per-match abilities:**
- Players activate perk, use the ability, then flip card face-down
- Cannot use again for rest of match
- If controlling 2 mechs, choose which mech uses the perk

### 2. ✅ Multi-Mech Synergy Perks Added
**5 new perks that reward having 2 mechs:**
1. **🤝 Coordinated Strike** - Both mechs gain +1 DP when targeting same enemy
2. **📡 Tactical Relay** - Gain +2 AP this turn, must split between mechs
3. **🔫 Covering Fire** - When one mech hit, other can counter-attack
4. **🏃 Emergency Regroup** - Both mechs move toward each other for free
5. **💥 Synchronized Assault** - Both mechs attack same target for bonus damage

### 3. ✅ All Existing Perks Updated
**10 existing perks converted to once-per-match format:**
1. ⚡ Overclock - +2 AP this turn
2. 🔧 Scavenge Master - Free scavenge action
3. 🚀 Jump Jets - Free movement ignoring terrain
4. 🎯 Precision Aim - Re-fire on miss
5. 🛡️ Reactive Armor - Counter-damage
6. ⚙️ Stabilizer Legs - Prevent falling
7. 💨 Power Slide - Double movement
8. 🏰 Heavy Plating - Ignore one hit
9. 🔄 Pivot Master - Free repositions
10. 💀 Last Stand - Final shot when destroyed

### 4. ✅ Game Phases Documented
**Correct phase order in rules:**
1. **Terrain Building** - 15cm spacing from terrain/borders
2. **Scavenging** - 10-minute build phase
3. **Deployment** - Place objectives and mechs
4. **Combat** - 4 Rounds, 2 AP per turn

### 5. ✅ Veteran Option Clarified
**Players with existing mechs can:**
- Skip scavenging and use existing mech, OR
- Participate in scavenging and choose at end (existing vs new)

### 6. ✅ 2 AP Per Turn System
**Confirmed and documented:**
- 2 AP per turn TOTAL (not per mech)
- Can spend on any of your mechs
- Can use both AP on one mech or split between mechs
- Prevents activation spam from multiple mechs

---

## Files Modified

### `public/data/talents.json`
- Updated all 10 existing perks to once-per-match format
- Added 5 new multi-mech synergy perks
- Added icons to all perk names
- Added "🎯 Once per match" prefix to all descriptions
- Added "Flip card after use" reminder to all descriptions

### `public/data/rules.json`
- Already updated in previous work
- Contains correct game phases
- Contains 2 AP per turn system
- Contains perk rules with flip card tracking

---

## Validation

All JSON files validated successfully:
- ✅ `rules.json` - Valid
- ✅ `equipment.json` - Valid
- ✅ `talents.json` - Valid

---

## Total Perks: 15

### Standard Perks (10):
1. ⚡ Overclock
2. 🔧 Scavenge Master
3. 🚀 Jump Jets
4. 🎯 Precision Aim
5. 🛡️ Reactive Armor
6. ⚙️ Stabilizer Legs
7. 💨 Power Slide
8. 🏰 Heavy Plating
9. 🔄 Pivot Master
10. 💀 Last Stand

### Multi-Mech Perks (5):
11. 🤝 Coordinated Strike
12. 📡 Tactical Relay
13. 🔫 Covering Fire
14. 🏃 Emergency Regroup
15. 💥 Synchronized Assault

---

## How It Works

### Perk Usage Flow:
1. Player declares they're using their perk
2. If controlling 2 mechs, choose which mech uses it
3. Apply the perk effect
4. Flip the perk card face-down
5. Cannot use again this match

### Multi-Mech Perks:
- Only usable if you control 2 mechs
- Provide synergy between your mechs
- Reward tactical coordination
- Balance the choice between 1 big mech vs 2 small mechs

---

## Strategic Balance

### 1 Solo Mech vs 2 Solo Mechs:

**1 Solo Mech:**
- ✅ Concentrated firepower
- ✅ Simpler to manage
- ✅ Can use any perk
- ❌ Single point of failure
- ❌ Can't use multi-mech perks

**2 Solo Mechs:**
- ✅ Redundancy
- ✅ Board control
- ✅ Can use multi-mech perks
- ✅ Flanking opportunities
- ❌ Split firepower
- ❌ Harder to build

Both strategies are now viable and balanced!

---

## Next Steps

### To Apply Changes:
1. ✅ All files updated
2. ✅ All JSON validated
3. 🔄 **Restart server** to load new data

### To Restart Server:
```bash
# Stop current server (Ctrl+C if running)
# Then restart:
node server.js
```

---

## Summary

The frame system and perks have been successfully simplified:
- **Max 2 Frames per player** (no more 3-7 frame complexity)
- **2 AP per turn total** (prevents activation spam)
- **All perks once per match** (simple tracking with flip cards)
- **5 multi-mech synergy perks** (rewards having 2 mechs)
- **Veteran option** (use existing or build new)
- **Correct game phases** (Terrain → Scavenge → Deploy → Combat)

The system is now **simpler, more balanced, and more tactical**!

---

**STATUS: READY TO PLAY** 🎮
