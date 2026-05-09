# Scenario Preparation Phase - Documentation

## Overview

A new phase has been added between Scavenging and Deployment: **Scenario Preparation**. This phase sets up the battlefield with three types of interactive objects.

---

## Updated Game Phases

### Complete Phase Order:
1. **🏗️ Terrain Building** - Place terrain pieces (15cm spacing)
2. **⚙️ Scavenging** - Build mechs (10 minutes)
3. **📋 Scenario Preparation** - Set up battlefield objects ⭐ NEW
4. **🚀 Deployment** - Deploy mechs in zones
5. **⚔️ Combat** - Play 4 Rounds

---

## Scenario Preparation Phase

### What Happens:
Players read the chosen scenario instructions and prepare the battlefield by placing three types of objects:

---

## 🎯 Type 1: OBJECTIVES

**Purpose:** Scenario-specific victory conditions

**Examples:**
- Flags to capture
- Control points to hold
- Data terminals to hack
- Targets to destroy

**Interaction:**
- Varies by scenario
- Usually requires touching or staying near
- Scores Victory Points

**Placement:**
- Specified in scenario rules
- Usually placed by mutual agreement or alternating

---

## 🔧 Type 2: RESOURCES

**Purpose:** Battlefield healing/recovery

**What They Are:**
- Resource tokens placed on terrain
- Represent ammunition caches, spare parts, medical supplies
- Battlefield salvage that provides immediate benefit

**How to Get:**
- Use SCAVENGE action (1 AP)
- Must be physically touching your mech's base
- Pick up the token

**Effect:**
- **Gain 1 HP immediately**
- Add token to your HP pool
- Can heal beyond starting HP

**Strategy:**
- Resources let you sustain longer in combat
- Must reach them before enemy does
- Risk vs reward: move toward resource or engage enemy?

**Placement:**
- Placed during Scenario Preparation
- Usually on terrain pieces (buildings, platforms, etc.)
- Can be placed by scenario rules or mutual agreement

---

## 📦 Type 3: EQUIPMENT

**Purpose:** Mid-game mech modification

**What They Are:**
- Equipment cubes placed on terrain
- Represent experimental weapons, prototype systems, rare components
- Advanced battlefield salvage

**How to Get:**
- Use SCAVENGE action (1 AP)
- Must be physically touching your mech's base
- Pick up the cube

**Effect:**
- **Randomly pick one piece from the scavenging pile**
- The scavenging pile = all parts NOT used during build phase
- You can equip it on your mech however you want
- Physically attach it to your frame

**IMPORTANT:**
- This is the **ONLY way to modify or improve your mech during the game**
- You cannot add equipment any other way
- You don't know what you'll get until you pick (random)

**Strategy:**
- High risk, high reward
- Could get a powerful weapon you didn't build with
- Could get armor to increase survivability
- Could get a system that changes your tactics
- Must physically reach the cube (exposes you to enemy fire)

**Placement:**
- Placed during Scenario Preparation
- Usually on terrain pieces in contested areas
- Can be placed by scenario rules or mutual agreement

---

## SCAVENGE Action (Updated)

The SCAVENGE action now picks up multiple types of items:

### What You Can Scavenge:
1. **HP Token** (yours or enemy's) → Heal 1 HP
2. **🔧 Resource Token** → Heal 1 HP
3. **📦 Equipment Cube** → Random equipment from scavenging pile

### Rules:
- Costs 1 AP
- Pick up ONE item touching your mech's base
- If multiple items touching base, choose which one to scavenge
- Item must be physically touching your base

### Priority Decision:
If multiple items are touching your base, you must choose:
- **HP Token:** Guaranteed 1 HP heal
- **Resource Token:** Guaranteed 1 HP heal (same as HP token)
- **Equipment Cube:** Unknown equipment (could be powerful weapon or useful armor)

---

## Strategic Implications

### Resource Control:
- Resources provide sustain in long fights
- Controlling resource-rich areas gives advantage
- Forces movement and map control

### Equipment Gamble:
- Equipment cubes create high-value objectives
- Risk: Must expose yourself to reach them
- Reward: Could get game-changing equipment
- Uncertainty: Don't know what you'll get

### Tactical Choices:
- **Aggressive:** Rush equipment cubes for power spike
- **Defensive:** Control resources for sustain
- **Balanced:** Mix of both based on situation

### Multi-Mech Advantage:
- 2 mechs can split objectives
- One mech secures resources while other fights
- One mech gambles on equipment while other plays safe

---

## Example Scenario Setup

### "SCAVENGER'S GAMBIT" Scenario:

**Objectives:**
- 3 Control Points (center of board)
- Hold control point at end of round = 2 VP

**Resources:**
- 4 Resource Tokens placed on terrain
- Corners of the board

**Equipment:**
- 2 Equipment Cubes placed on terrain
- Near center, in contested areas

**Victory:**
- Most VP after 4 Rounds
- Control Points + destroyed enemy frames

**Strategy:**
- Rush center for VP from control points?
- Secure corners for resource sustain?
- Gamble on equipment cubes for power spike?

---

## Design Philosophy

### Why This System?

**1. Dynamic Gameplay:**
- Mechs aren't static after build phase
- Can adapt during game
- Creates comeback opportunities

**2. Map Control:**
- Forces movement and positioning
- Can't just sit back and shoot
- Rewards aggressive play

**3. Risk/Reward:**
- Resources = safe, predictable
- Equipment = risky, unpredictable
- Players choose their risk tolerance

**4. Scavenging Theme:**
- Fits the Signal War lore
- Pilots scavenge battlefield for advantage
- Modular mechs can be modified on the fly

**5. Balances Build Phase:**
- Bad build? Gamble on equipment cubes
- Good build? Secure resources to sustain
- Creates multiple paths to victory

---

## Implementation Details

### Files Updated:
- ✅ `public/data/rules.json`
  - Updated setup_1 (Game Setup & Phases)
  - Updated rule_1 (Actions - SCAVENGE expanded)
  - Added rule_1b (Battlefield Objects)

### New Rule Sections:
- **setup_1:** Added Phase 3 - Scenario Preparation
- **rule_1:** Expanded SCAVENGE to include Resources and Equipment
- **rule_1b:** New section explaining all three object types

### Validation:
- ✅ JSON validated successfully
- ✅ Server running with updated rules

---

## Example Turn Sequence

**Turn 1:**
- Player A: Mech 1 MOVE toward Equipment Cube (1 AP) + MOVE again (1 AP)
- Player B: Mech 1 MOVE + ENGAGE Player A (2 AP)

**Turn 2:**
- Player A: Mech 1 SCAVENGE Equipment Cube (1 AP) → Gets random weapon!
- Player A: Mech 1 REPOSITION to attach new weapon (1 AP)
- Player B: Mech 1 MOVE toward Resource Token (1 AP) + ENGAGE (1 AP)

**Turn 3:**
- Player A: Mech 1 ENGAGE with new weapon (1 AP) + MOVE (1 AP)
- Player B: Mech 1 SCAVENGE Resource Token (1 AP) → Heals 1 HP + MOVE (1 AP)

---

## Summary

### Key Points:
1. **New Phase:** Scenario Preparation (between Scavenging and Deployment)
2. **Three Object Types:**
   - 🎯 Objectives (scenario-specific VP)
   - 🔧 Resources (heal 1 HP)
   - 📦 Equipment (random part from scavenging pile)
3. **SCAVENGE Action:** Now picks up HP tokens, Resources, or Equipment
4. **Only Way to Modify:** Equipment cubes are the ONLY way to change your mech during game
5. **Strategic Depth:** Creates map control, risk/reward, and comeback mechanics

---

**STATUS: IMPLEMENTED** ✅
**DATE: May 8, 2026**
