# Rules Repetition Analysis

## Summary

Your rules.json file has **significant repetition** across sections. The same concepts are explained multiple times in different sections.

## Main Issues

### 1. **GLOSSARY duplicates detailed sections**

The GLOSSARY section (5,253 chars) contains mini-explanations of concepts that are fully explained elsewhere:

- **Finger Flick** - Explained in GLOSSARY, then again in full detail in:
  - LEARN TO PLAY (6 mentions)
  - SHOOTING & LINE OF SIGHT (6 mentions)
  - DAMAGE & HP (2 mentions)
  - MOVEMENT & TERRAIN (2 mentions)

- **Weapon Types** (Direct/Indirect/Lock-On) - Explained in GLOSSARY, then again in:
  - SHOOTING & LINE OF SIGHT (full detailed explanations)

- **Actions** (MOVE, ENGAGE, SCAVENGE, REPOSITION, RECHARGE) - Explained in GLOSSARY, then again in:
  - ACTIONS & TURN ORDER (full detailed explanations)

### 2. **LEARN TO PLAY duplicates other sections**

The "LEARN TO PLAY IN 5 MINUTES" section (3,984 chars) is essentially a summary of:
- Build requirements (duplicates build rules)
- Actions (duplicates ACTIONS & TURN ORDER)
- Shooting (duplicates SHOOTING & LINE OF SIGHT)
- Finger Flick (duplicates multiple sections)

### 3. **Backup files taking up space**

You had 8 backup/test files that are no longer needed:
- ✅ DELETED: rules-partial.json, rules-restored.json, rules-test.json, rules.json.corrupted
- ✅ DELETED: equipment.json.backup, equipment.json.backup2
- ✅ DELETED: talents.json.backup, talents.json.removed

## Recommendations

### Option A: Keep Current Structure (Minimal Changes)

**Pros:** Players can find info in multiple places
**Cons:** Lots of repetition, harder to maintain

**Changes:**
1. Shorten GLOSSARY to just definitions (1-2 sentences each)
2. Remove detailed explanations from GLOSSARY
3. Keep full explanations only in dedicated sections

### Option B: Streamline Structure (Recommended)

**Reorganize into:**

1. **QUICK START** (replaces LEARN TO PLAY)
   - 5-minute overview
   - Points to detailed sections

2. **GLOSSARY** (keep as-is)
   - Quick reference only
   - Short definitions

3. **CORE RULES** (detailed sections)
   - Actions & Turn Order
   - Shooting & Line of Sight
   - Damage & HP
   - Movement & Terrain

4. **LORE** (keep as-is)
   - The Signal War
   - Factions & Neuralloy

5. **SCENARIOS** (keep as-is)
   - Deathmatch, CTF, Rush

**Benefits:**
- Eliminate 60-70% of repetition
- Easier to maintain
- Clearer structure
- Faster to read

### Option C: Radical Simplification

**Create 3 tiers:**

1. **ULTRA-QUICK** (1 page)
   - Core concepts only
   - For experienced players

2. **QUICK REFERENCE** (2-3 pages)
   - Current GLOSSARY
   - Action summaries

3. **FULL RULES** (detailed)
   - Everything else
   - No repetition

## Specific Repetition Examples

### Finger Flick Explanation

**Appears in 5 sections with nearly identical text:**

1. GLOSSARY: "After a successful hit... 1-2 DP = 1 Flick..."
2. LEARN TO PLAY: "When your attack hits, you perform a Finger Flick..."
3. SHOOTING & LINE OF SIGHT: "When you hit, flick the target mech..."
4. DAMAGE & HP: Mentions flicks blocked by shields
5. MOVEMENT & TERRAIN: Mentions flicks causing falls

**Solution:** Keep detailed explanation in ONE place (SHOOTING section), reference it elsewhere.

### Action Explanations

**MOVE, ENGAGE, SCAVENGE, REPOSITION, RECHARGE** are explained:
- In GLOSSARY (short version)
- In LEARN TO PLAY (medium version)
- In ACTIONS & TURN ORDER (full version)

**Solution:** 
- GLOSSARY: 1 sentence each
- ACTIONS section: Full details
- Remove from LEARN TO PLAY (just reference the sections)

## Next Steps

**Choose your approach:**

1. **Quick Fix** (10 minutes)
   - Shorten GLOSSARY definitions
   - Remove redundant explanations

2. **Medium Refactor** (30 minutes)
   - Implement Option B structure
   - Consolidate sections

3. **Full Rewrite** (1-2 hours)
   - Implement Option C
   - Create tiered reference system

**I can help with any of these!** Let me know which approach you prefer.
