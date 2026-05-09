# ENGAGE Action Update: Dual Weapon Support

## Change Summary
Updated the ENGAGE action to allow firing **2 different weapons per turn**.

---

## New Rule
**You can use ENGAGE twice per turn if you fire different weapons.**

### Requirements:
- ✅ Must use **different weapons** (cannot fire the same weapon twice)
- ✅ Each weapon must be attached to your mech
- ✅ Each ENGAGE costs **1 AP** (2 AP total for two shots)
- ✅ Each ENGAGE follows normal shooting rules

### Valid Examples:
- ✅ ENGAGE (Rifle) → ENGAGE (Missile Pod)
- ✅ ENGAGE (Cannon) → REPOSITION → ENGAGE (Railgun)
- ✅ REPOSITION → ENGAGE (Shotgun) → ENGAGE (EMP Beam)

### Invalid Examples:
- ❌ ENGAGE (Rifle) → ENGAGE (Rifle) — Same weapon used twice
- ❌ ENGAGE (Cannon) → ENGAGE (Cannon) — Same weapon used twice

---

## Tactical Implications

### Offensive Power
- **Maximum Damage:** Players can now deal up to 6 DP in one turn (e.g., Pile Driver 3 DP + Storm Shadow 3 DP)
- **Finishing Moves:** Use dual weapons to destroy weakened enemies in one turn
- **Alpha Strike:** Sacrifice mobility for devastating firepower

### Trade-offs
- **No Movement:** Using 2 AP for ENGAGE means no MOVE actions that turn
- **No Scavenging:** Cannot SCAVENGE HP or Equipment if you fire twice
- **Positioning Matters:** Must be in a good firing position before committing to dual weapons

### Strategic Depth
- **Weapon Diversity:** Encourages building mechs with multiple weapon types
- **Action Economy:** Creates meaningful choice between mobility, firepower, and resource gathering
- **Risk/Reward:** High damage output vs. vulnerability from lack of movement

---

## Files Updated

### 1. `public/data/rules.json`
- **rule_1 (ACTIONS):** Added "You can use ENGAGE twice per turn if you fire different weapons" to ENGAGE description
- **rule_1 (ACTION ECONOMY):** Updated to clarify "ENGAGE twice if you have multiple weapons (must be different weapons)"
- **ltp_1 (LEARN TO PLAY):** Added dual weapon rule to quick reference
- **rule_3 (SHOOTING):** Added new section "MULTIPLE WEAPONS PER TURN" with full explanation, requirements, examples, and tactical advice

---

## Design Philosophy
This change rewards players who invest in multiple weapons while maintaining balance:
- **Encourages Variety:** Players want different weapon types on their mech
- **Maintains AP Economy:** Still costs 2 AP (all your AP for the turn)
- **Creates Choices:** Dual weapons vs. movement vs. scavenging
- **Prevents Spam:** Cannot fire the same weapon twice (prevents overpowered single-weapon builds)

---

## Status: ✅ COMPLETE
All rule chapters updated and saved to `public/data/rules.json`.
