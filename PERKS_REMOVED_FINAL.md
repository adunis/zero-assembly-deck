# Perks Removed - Pure Physics Combat

## ✅ Complete Removal of Perks System

All Perks/Talents have been completely removed from the game. The game now focuses entirely on pure physics-based combat.

---

## 🗑️ What Was Removed

### 1. **Pilot Perks Chapter (rule_7)**
- ✅ Entire chapter deleted from rules.json
- Was: 10 different perks with once-per-match abilities
- Now: Chapter doesn't exist

### 2. **Perk Selection (phase_2)**
- ✅ Removed perk selection section
- Was: "Choose 1 Pilot Perk before the game starts"
- Now: Just build your mech

### 3. **Perk Timing Tips (phase_5)**
- ✅ Removed strategic perk usage tips
- Was: "Use your Pilot Perk at the right moment"
- Now: Focus on positioning and shooting

### 4. **Talents.json File**
- ✅ Archived to `talents.json.removed`
- Was: 10 perk cards with abilities
- Now: File not loaded by game

### 5. **Frontend Perk Deck Tab**
- ✅ Removed "Perk Deck" tab from UI
- ✅ Removed `renderTalents()` function
- ✅ Removed talent loading from `loadDecks()`
- Now: Only 3 tabs (Rules, Equipment, Devices & Ammo)

---

## 📋 Updated Game Flow

### Before (With Perks):
1. Choose 1 Perk before game
2. Build terrain
3. Build mech (10 minutes)
4. Place objectives and resources
5. Deploy
6. Combat (use perk once per match)

### After (No Perks):
1. Build terrain
2. Build mech (10 minutes)
3. Place objectives and resources
4. Deploy
5. Combat (pure physics)

---

## 🎮 What the Game Focuses On Now

### Core Gameplay Loop:
1. **Building** - 10-minute mech assembly
2. **Positioning** - Movement and terrain control
3. **Shooting** - Physics-based projectile combat
4. **Resource Management** - Scavenging Neuralloy
5. **Tactical Decisions** - When to move, shoot, or scavenge

### No Special Abilities:
- ❌ No once-per-match powers
- ❌ No ability timing decisions
- ❌ No "save your perk" meta-game
- ✅ Pure skill and strategy
- ✅ Physics is the only referee

---

## 📊 Simplification Impact

### Rules Complexity:
- **Before:** 15 rule chapters + 10 perks to learn
- **After:** 14 rule chapters, no perks
- **Reduction:** ~15% fewer rules

### Decision Points:
- **Before:** Build mech + choose perk + when to use perk
- **After:** Build mech + play tactically
- **Result:** Cleaner, more focused gameplay

### Components:
- **Before:** Mech parts + markers + perk cards
- **After:** Mech parts + markers
- **Result:** One less component type to manage

---

## 🎯 Design Philosophy

### Why Remove Perks?

**1. Simplicity**
- Perks added a layer of complexity
- New players had to learn 10 different abilities
- Removed without losing core fun

**2. Focus**
- Game is about physics-based combat
- Perks distracted from core loop
- Now 100% focused on building, positioning, shooting

**3. Balance**
- Perks created balance issues
- Some perks stronger than others
- Removed = perfect balance (everyone equal)

**4. Accessibility**
- Easier to teach without perks
- Faster to start playing
- Lower barrier to entry

**5. Purity**
- Physics is the referee
- No special abilities to remember
- Pure tactical combat

---

## 🎲 What Makes the Game Fun Now

### Without Perks, Fun Comes From:

**1. Mech Building**
- 10-minute creative assembly
- Tactical choices (weapons, legs, armor)
- Every mech is unique

**2. Physics Combat**
- Real projectiles, real hits
- Skill-based shooting
- Satisfying physical feedback

**3. Positioning**
- Terrain control
- Line of sight
- Movement tactics

**4. Resource Management**
- Scavenging Neuralloy
- Healing decisions
- Risk vs reward

**5. Scenario Objectives**
- Different win conditions
- Strategic variety
- Replayability

**6. Player Skill**
- Aim and trajectory
- Tactical decisions
- Mech design choices

---

## 📈 Benefits

### For New Players:
- ✅ **Faster to learn** - No perks to memorize
- ✅ **Easier to teach** - Simpler ruleset
- ✅ **Lower barrier** - Just build and fight
- ✅ **More accessible** - Pure physics gameplay

### For Experienced Players:
- ✅ **Skill-based** - No luck with perk timing
- ✅ **Pure tactics** - Focus on positioning
- ✅ **Faster games** - No perk decision paralysis
- ✅ **Better balance** - Everyone equal

### For Game Masters:
- ✅ **Easier to teach** - One less system
- ✅ **Faster setup** - No perk cards
- ✅ **Better balance** - No perk meta
- ✅ **Cleaner rules** - More focused

---

## 🔍 Files Modified

### Backend:
- ✅ `public/data/rules.json` - Removed rule_7, updated 5 chapters
- ✅ `public/data/talents.json` → `talents.json.removed` (archived)

### Frontend:
- ✅ `public/index.html` - Removed Perk Deck tab
- ✅ `public/index.html` - Removed `renderTalents()` function
- ✅ `public/index.html` - Removed talent loading

### Documentation:
- ✅ `remove-perks-completely.js` - Removal script
- ✅ `PERKS_REMOVED_FINAL.md` - This document

---

## 📋 Updated Quick Reference

### Game Setup (4 Phases):
1. **Terrain** - Place pieces 15cm apart
2. **Build** - 10 minutes, 1 Core + 1 Top
3. **Scenario** - Place Objectives and Resource Cubes
4. **Deploy** - Flip coin, place mechs
5. **Combat** - 4 rounds, 2 AP + free REPOSITION

### Actions (2 AP per turn):
- **MOVE (1 AP)** - Pure Legs 15cm+climb, Pure Wheels/Treads 30cm, Mixed 15cm
- **ENGAGE (1 AP)** - Fire weapon (can fire 2 different weapons)
- **SCAVENGE (1 AP)** - Pick up HP tokens or Resource Cubes
- **REPOSITION (0 AP)** - Free, once per turn

### Markers (4 types):
- **HP Markers** - Lost health
- **Resource Cubes** - Neuralloy (+1 HP)
- **Objective Markers** - Scenario goals
- **Hazard Cubes** - Dangerous terrain

### Win Conditions:
- Destroy enemy Core (instant win)
- Most Victory Points after 4 rounds

---

## 🎉 Result

The game is now:
- **Simpler** - No perks to learn
- **Faster** - No perk decisions
- **Purer** - 100% physics-based
- **More accessible** - Lower barrier to entry
- **More balanced** - Everyone equal
- **More focused** - Core gameplay shines

---

## ✅ Status: COMPLETE

All Perks have been completely removed from the game. The game now focuses entirely on:
- **Building mechs**
- **Physics-based combat**
- **Tactical positioning**
- **Resource management**
- **Player skill**

**No special abilities. No once-per-match powers. Just pure tactical combat.** 🎮
