# 🎲 ZERO ASSEMBLY: DICE CONVERSION COMPLETE

## What Changed

Your game has been successfully converted from a **physics-based toy game** to a **traditional dice-based tabletop wargame**.

### Before
- Fire real toy devices (crossbows, cannons, mortars)
- Physical projectiles determine hits
- "If it touches, it hits"
- No dice, no modifiers

### After
- Roll 2D6 to hit (need 7+)
- Line of sight and range bands
- Cover and movement modifiers
- Strategic positioning matters

---

## What Stayed the Same

✅ **10-minute mecha building** - Still the core of the game
✅ **Modular 3D-printed parts** - Build your custom mech
✅ **Ground contact rules** - Only legs/wheels/treads touch ground
✅ **2 AP + free REPOSITION** - Action economy unchanged
✅ **HP tokens at feet** - Damage tracking system
✅ **Resource cubes (Neuralloy)** - Scavenge for +1 HP
✅ **4 rounds** - Game length
✅ **All scenarios** - Deathmatch, CTF, Rush

---

## Quick Start: New Combat System

### To Hit
1. Check line of sight to target
2. Measure range (Short 0-15cm, Medium 15-30cm, Long 30-45cm)
3. Roll 2D6, need 7+ to hit
4. Apply modifiers:
   - **Range:** Short +1, Medium 0, Long -1
   - **Cover:** Partial -1, Heavy -2
   - **Movement:** Target moved -1, Shooter moved -1
5. Deal damage if you hit

### Example
Shooting at Medium range (0) at a target in Partial Cover (-1):
- Roll 2D6, need 8+ to hit (7 base + 1 for cover)
- If you roll 8 or higher, deal weapon's DP damage

---

## What You Need

### Required
- ✅ 3D-printed mech parts
- ✅ **2D6 per player** (standard 6-sided dice)
- ✅ HP markers (red cubes)
- ✅ Resource cubes (purple cubes)
- ✅ Objective markers (yellow cubes)
- ✅ Terrain pieces
- ✅ Ruler or measuring tape

### NOT Required Anymore
- ❌ Toy crossbow
- ❌ Toy cannons
- ❌ Toy mortar
- ❌ Projectiles

---

## Files Updated

### Rules (public/data/rules.json)
- ✅ Learn to Play - Rewritten for dice combat
- ✅ Shooting Rules - Complete LoS and dice system
- ✅ 3D Printing Guide - Removed toy devices, added dice
- ✅ Lore - Updated to "Tactical Doctrine"

### Equipment (public/data/equipment.json)
- ✅ All 38 items updated
- ✅ Weapons now have range and damage stats
- ✅ Removed toy device requirements

### Removed
- ❌ devices.json - No longer needed

---

## Why This Change?

### Advantages
1. **Safer** - No projectiles flying around
2. **More accessible** - Dice are cheaper than toy devices
3. **More strategic** - Positioning and cover matter
4. **Faster** - Roll dice vs. aim and fire
5. **Easier to balance** - Adjust modifiers vs. physical skill

### What You Lose
- Physical satisfaction of hitting target
- "Wow" factor of flying projectiles
- Unique physics-based gameplay

### What You Gain
- Traditional wargame tactics
- Predictable probabilities
- Safer gameplay
- Faster setup and play
- More strategic depth

---

## Next Steps

1. **Print dice** - Get 2D6 per player (or use existing dice)
2. **Read new rules** - Check Learn to Play and Shooting sections
3. **Playtest** - Try the new system
4. **Provide feedback** - Is 7+ the right target? Are modifiers balanced?

---

## Quick Reference Card

### To-Hit Formula
**2D6 + Modifiers ≥ 7**

### Modifiers
| Situation | Modifier |
|-----------|----------|
| Short range (0-15cm) | +1 |
| Medium range (15-30cm) | 0 |
| Long range (30-45cm) | -1 |
| Partial cover | -1 |
| Heavy cover | -2 |
| Target moved last turn | -1 |
| Shooter moved this turn | -1 |

### Hit Probabilities
| Target Number | Chance |
|---------------|--------|
| 6+ | 72% |
| 7+ | 58% |
| 8+ | 42% |
| 9+ | 28% |
| 10+ | 17% |

---

## Full Documentation

See **DICE_CONVERSION_COMPLETE.md** for:
- Complete weapon stats
- Detailed mechanics explanation
- Playtesting priorities
- Balance analysis
- Migration guide

---

**Ready to play! 🎲🤖**
