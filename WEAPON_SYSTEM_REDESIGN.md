# Weapon System Redesign Summary

## ✅ Complete Redesign

### Device Philosophy Change

**OLD SYSTEM:**
- Small Air Cannon = light weapons
- Big Air Cannon = heavy weapons
- 3D Crossbow = railguns only
- Mortar Air Cannon = missiles

**NEW SYSTEM:**
- **3D Crossbow** = Direct-fire weapons (rifles, beams, railguns) - shoots STRAIGHT
- **Air Cannon** = Arc-fire light weapons - shoots in an ARC like a mortar
- **Big Air Cannon** = Arc-fire heavy weapons - shoots in an ARC like a mortar
- **Mortar** = Extreme arc-fire strategic weapons - shoots OVER buildings

### Ammunition System

Each device now uses specific ammunition types:

#### 🏹 3D CROSSBOW (Direct-Fire)
- **Standard Bolt**: Single projectile for precision shots
- **Burst Bolt**: Wider bolt representing 2-3 shots (burst fire)

**Used by:**
- Rifles (Indra G-36, FN Herstal FAL-X)
- Assault Rifles (Sako Twin-Link - Burst Bolt x2)
- Spread Cannons (Nexter Tri-Barrel - Burst Bolt x3)
- Railguns (BAE Lancer)
- Energy Beams (Thales Paralyzer EMP, OTO Melara Phalanx)

#### 💨 AIR CANNON (Light Arc-Fire)
- **Standard Shell**: Basic projectile
- **Explosive Shell**: Larger projectile head for special effects

**Used by:**
- Sonic Repulsor (Standard Shell - knockback)
- Breacher Shotgun (Explosive Shell - weapon disable)

#### 💥 BIG AIR CANNON (Heavy Arc-Fire)
- **Standard BIG Shell**: Large projectile for heavy damage
- **Explosive BIG Shell**: Extra-large projectile head for maximum impact

**Used by:**
- Heavy Cannons (Rheinmetall MK-20 - Standard BIG Shell)
- Avalanche Cannon (Explosive BIG Shell - knockback)
- Dual Autocannon (Standard BIG Shell - retry on miss)
- ECM Blaster (Explosive BIG Shell - perk disable)

#### 🚀 MORTAR (Extreme Arc-Fire)
- **Mini Rocket**: Small missiles for precision strikes (2-4 projectiles)
- **Standard Shell**: Same as Air Cannon ammo, for carpet bombing
- **Nuclear Bomb**: Giant ammunition dropped from above - massive damage

**Used by:**
- Micro-Missile Pod (Mini Rocket x2)
- Starstreak Missile Rack (Mini Rocket x3)
- Carpet-Bombing Pod (Standard Shell x4)
- Demolition Pod (Nuclear Bomb - terrain destruction)

## 📊 Weapon Distribution

### Direct-Fire Weapons (Crossbow): 9 weapons
- Indra G-36 Micro-Rifle 🇪🇸
- FN Herstal FAL-X Autocannon 🇧🇪
- Sako Twin-Link Assault Rifle 🇫🇮
- BAE Systems Lancer Railgun 🇲🇹
- Thales Paralyzer EMP Beam 🇭🇷
- Nexter Tri-Barrel Spread Cannon 🇸🇰
- OTO Melara Phalanx Gatling Array 🇱🇹

### Arc-Fire Light Weapons (Air Cannon): 2 weapons
- Dassault Sonic Repulsor Cylinder 🇮🇸
- Benelli M10 Breacher Shotgun 🇱🇺

### Arc-Fire Heavy Weapons (Big Air Cannon): 4 weapons
- Rheinmetall MK-20 Rhino Heavy Cannon 🇧🇬
- Nammo Avalanche Cannon 🇱🇻
- Oerlikon KBA Dual Autocannon 🇨🇭
- Terma Barracuda ECM Blaster 🇩🇰

### Strategic Weapons (Mortar): 4 weapons
- Diehl Brimstone Micro-Missile Pod 🇸🇮
- Fokker Starstreak Missile Rack 🇳🇱
- Saab RBS-70 Carpet-Bombing Pod 🇪🇪
- EDP Renováveis Storm Shadow Demolition Pod 🇵🇹

### Special Weapons: 2 weapons
- Škoda Bunker Pile Driver 🇨🇿 (Melee - no device)
- Elbit Skorpion Mine Dispenser 🇮🇱 (Hazard - no device)
- Hellenic Aerospace Salamander Flame Projector 🇬🇷 (Hazard - no device)

## 🎯 Tactical Implications

### Direct-Fire (Crossbow)
- **Pros**: Accurate, straight trajectory, easier to aim
- **Cons**: Cannot shoot over cover, line-of-sight required
- **Best for**: Precision shots, sniping, direct engagements

### Arc-Fire (Air Cannons)
- **Pros**: Can shoot over low/medium cover, indirect fire
- **Cons**: Harder to aim, projectile must clear obstacles
- **Best for**: Hitting enemies behind cover, area denial

### Strategic (Mortar)
- **Pros**: Extreme arc, shoots over buildings, multiple projectiles
- **Cons**: Requires careful positioning, long proxy distance
- **Best for**: Bombardment, carpet bombing, strategic strikes

## 🔧 Rules Updates

### Device Descriptions Updated
- Device 1: 3D-Printed Crossbow (Direct-fire, Standard Bolt / Burst Bolt)
- Device 2: Air Cannon (Arc-fire, Standard Shell / Explosive Shell)
- Device 3: Big Air Cannon (Heavy arc-fire, Standard BIG Shell / Explosive BIG Shell)
- Device 4: Mortar (Extreme arc-fire, Mini Rocket / Standard Shell / Nuclear Bomb)

### Card Display Updates
- Equipment cards now show ammunition type in metadata
- Device names simplified for clarity
- Ammunition clearly listed on each weapon card

## 🎨 Visual Improvements

### Icons by Weapon Type
- 🏹 Direct-fire weapons (Crossbow)
- 💨 Light arc-fire (Air Cannon)
- 💥 Heavy arc-fire (Big Air Cannon)
- 🚀 Strategic weapons (Mortar)

### Ammunition Icons
- Standard projectiles: 🔫
- Burst projectiles: 🔫🔫 or 🔫🔫🔫
- Rockets: 🚀🚀🚀🚀
- Nuclear: ☢️

## 🌍 Lore Integration

The new system reflects the **Kinetic Doctrine** of the Signal War:

- **Crossbows** = Direct kinetic weapons (rifles, railguns) - no processors, pure mechanical
- **Air Cannons** = Pneumatic artillery - dumb projectiles in arc trajectories
- **Mortars** = Strategic bombardment - gravity-based, no guidance systems

All weapons are **Signal-proof** because they use purely mechanical/pneumatic launching systems with no electronic guidance.

## 📝 Next Steps

1. ✅ All weapons redesigned with correct devices
2. ✅ Ammunition types added to all weapon cards
3. ✅ Rules updated with device descriptions and ammo lists
4. ✅ HTML updated to display ammunition on cards
5. ✅ Icons added throughout for visual clarity

Server ready at **http://localhost:3000**
