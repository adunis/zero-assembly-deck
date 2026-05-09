# AT (ARMOR TOKENS) REMOVAL - COMPLETE

## SUMMARY
Removed the AT (Armor Tokens) system completely from ZERO ASSEMBLY. AT tokens were an unnecessary complexity layer that absorbed damage before HP was lost. The game is simpler and more intuitive without them.

---

## CHANGES MADE

### 1. EQUIPMENT UPDATES (equipment.json)

**eq_6 - 'Aegis' A.T. Generator → 'Aegis' Shield Generator**
- **BEFORE**: Grants +2 AT (Armor Tokens). AT tokens absorb damage before HP is lost. When you would take damage, spend 1 AT token to negate 1 DP.
- **AFTER**: Grants +2 HP.
- **RESULT**: Now a simple +2 HP bonus (same as other armor equipment)

**eq_20 - 'Paralyzer' EMP Beam**
- **BEFORE**: Deals 1 DP. Destroys all enemy AT tokens.
- **AFTER**: Deals 1 DP.
- **RESULT**: Now a standard 1 DP weapon (no special AT-destroying effect)

---

### 2. RULES UPDATES (rules.json)

**rule_4 - DAMAGE & HP**

**Medium Summary:**
- **BEFORE**: "• Hit = place HP tokens at feet (1 per DP).\n<br>• A.T. Shields absorb damage first (vanish when used).\n<br>• 0 HP = destroyed."
- **AFTER**: "• Hit = place HP tokens at feet (1 per DP).\n<br>• 0 HP = destroyed."

**Description Updates:**
- Removed references to Duo Mechs (outdated - game is 1 mech per player)
- Removed references to perks (already removed in previous task)
- Simplified DESTRUCTION section (no more multi-mech scenarios)
- Simplified MAXIMUM HP section (removed perk references)
- Removed "Duo Mechs" tip from HP MANAGEMENT TIPS

---

### 3. DEVICES UPDATES (devices.json)

**device_5 - Physical Push (No Device) - REMOVED**
- This device was only used by Sonic Repulsor Cylinder (eq_36)
- Sonic Repulsor is a physical push weapon that doesn't need a device entry
- Removed entire device entry to clean up the devices list

---

## GAME MARKERS REDUCED

**BEFORE (5 types):**
1. HP Markers
2. Resource Cubes
3. Objective Markers
4. Hazard Markers
5. AT Markers ❌

**AFTER (4 types):**
1. HP Markers
2. Resource Cubes
3. Objective Markers
4. Hazard Markers

---

## IMPACT

**Simplification:**
- Removed 1 marker type (AT tokens)
- Removed 1 damage absorption mechanic
- Removed 1 special weapon effect (AT destruction)
- Equipment is now simpler: just HP bonuses and weapon stats

**Gameplay:**
- Damage is now direct: Hit = place HP tokens at feet
- No intermediate "armor layer" to track
- Healing is simpler: scavenge HP tokens or Resource Cubes
- Combat is more straightforward: DP directly converts to HP loss

**Equipment Balance:**
- 'Aegis' Shield Generator: Now grants +2 HP (consistent with other armor)
- 'Paralyzer' EMP Beam: Now a standard 1 DP weapon (no special effect)

---

## FILES MODIFIED

1. `public/data/equipment.json` - Updated eq_6 and eq_20
2. `public/data/rules.json` - Updated rule_4 (removed AT references, Duo Mech references, perk references)
3. `public/data/devices.json` - Removed device_5 (Physical Push)

---

## NEXT STEPS

User also mentioned:
- "in the Device page there are many ammunitions duplicated in the images"
- Need to investigate and fix duplicate ammunition images in the Devices & Ammo tab

---

**STATUS**: ✅ AT REMOVAL COMPLETE
**DATE**: May 8, 2026
**RESULT**: Game is simpler, more intuitive, and easier to teach
