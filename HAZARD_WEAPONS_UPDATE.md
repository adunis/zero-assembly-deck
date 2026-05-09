# Hazard Weapons Update: Physical Device Integration

## Change Summary
Updated hazard weapons to use **actual toy devices** for placing hazard markers, making them more interactive and physics-based.

---

## Updated Weapons

### 🇿🇦 'Skorpion' Mine Dispenser
**Device:** Air Cannon  
**Ammo:** Hazard Markers (x2)  
**Proxy Distance:** SHORT (15cm)

**How It Works:**
1. Load 2 hazard markers into the Air Cannon
2. Place the cannon at SHORT proxy distance (15cm) from your mech
3. Gently press the device to shoot the markers in front of your weapon
4. Where they land, they stay
5. Enemy mechs touching markers take 1 DP

**Tactical Use:**
- Area denial weapon
- Creates mine field in front of your position
- Forces enemies to path around or take damage
- Markers stay on table until touched

---

### 🇳🇿 'Salamander' Flame Projector
**Device:** Mortar  
**Ammo:** Hazard Markers (x3)  
**Proxy Distance:** LONG (30cm)

**How It Works:**
1. Load 3 hazard markers into the Mortar
2. Place the mortar at LONG proxy distance (30cm) from your mech
3. Gently press the device to shoot the markers in an arc
4. Where they land, they create a line of fire
5. Mechs touching markers take 1 DP
6. Lasts until end of round

**Tactical Use:**
- Long-range area denial
- Creates line of fire hazards
- Arc trajectory allows shooting over cover
- Temporary (lasts 1 round only)

---

## Design Philosophy

### Physical Gameplay
- **No Manual Placement:** Players don't just place markers by hand
- **Device-Based:** Uses actual toy devices for marker placement
- **Physics Matters:** Where the markers land is where they stay
- **Gentle Press:** Players can control power to shoot markers short distances

### Tactical Depth
- **Positioning:** Proxy distance means you need good positioning to place hazards effectively
- **Unpredictability:** Physics-based placement adds uncertainty
- **Area Control:** Creates dynamic battlefield zones
- **Counter-Play:** Enemies can see where hazards land and avoid them

### Balance
- **Mine Dispenser (SHORT):** Close-range area denial, permanent markers
- **Flame Projector (LONG):** Long-range area denial, temporary markers (1 round)
- Both deal 1 DP (consistent with hazard damage)
- Both cost 1 AP (standard ENGAGE cost)

---

## Gameplay Impact

### Before (Manual Placement):
- ❌ Player just places markers by hand
- ❌ No device interaction
- ❌ Predictable placement
- ❌ Less engaging

### After (Device-Based):
- ✅ Uses Air Cannon or Mortar
- ✅ Physical shooting mechanics
- ✅ Unpredictable placement (physics-based)
- ✅ More interactive and fun

---

## Files Updated
- `public/data/equipment.json`
  - **eq_22** (Skorpion Mine Dispenser): Now uses Air Cannon
  - **eq_38** (Salamander Flame Projector): Now uses Mortar

---

## Status: ✅ COMPLETE
Both hazard weapons now use physical devices for marker placement.
