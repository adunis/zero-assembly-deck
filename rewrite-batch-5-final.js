const fs = require('fs');

const rulesPath = './public/data/rules.json';
let rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

const updateRule = (id, newDescription) => {
  const index = rules.findIndex(r => r.id === id);
  if (index !== -1) {
    rules[index].description = newDescription;
    console.log(`✓ Updated ${id}`);
    return true;
  }
  return false;
};

console.log('Batch 5 (FINAL): Scenarios & Devices...\n');

// SCEN_TDM: Team Deathmatch
updateRule('scen_tdm', `Team Deathmatch is the simplest scenario. Destroy the enemy. Last mech standing wins.

<hr>

<i class="fas fa-bullseye"></i> <b>OBJECTIVE</b>

Destroy all enemy Cores. When one player loses all their Cores, the game ends immediately. The surviving player wins.

<hr>

<i class="fas fa-map"></i> <b>SETUP</b>

<b>Deployment:</b> Players deploy on opposite board edges, within 15cm of their edge.

<b>Objectives:</b> None. This scenario has no objective markers.

<b>Resources:</b> Place 20-30 Resource Cubes across the battlefield. Spread them evenly.

<b>Equipment:</b> Place 10-15 Equipment Cubes in contested areas (center of the board, elevated terrain).

<hr>

<i class="fas fa-trophy"></i> <b>VICTORY CONDITIONS</b>

<b>Instant Victory:</b> Destroy all enemy Cores. The game ends immediately.

<b>Round 4 Ends:</b> If both players still have Cores after Round 4, count Victory Points. Most VP wins.

<b>Victory Points:</b> 3 VP per enemy Core destroyed. 1 VP per surviving friendly Core.

<hr>

<i class="fas fa-lightbulb"></i> <b>STRATEGY</b>

Team Deathmatch rewards aggressive play. Focus fire on one enemy mech to destroy it quickly. Control the center of the board to access Equipment Cubes first. Scavenge Resources to stay healthy during prolonged fights.

Building 2 Solo Mechs provides redundancy — losing one doesn't end the game. Building 1 Duo Mech provides durability — 8 HP is hard to chew through.`);

// SCEN_CTF: Capture the Flag
updateRule('scen_ctf', `Capture the Flag is an objective-based scenario. Control flags to earn Victory Points. Most VP after 4 rounds wins.

<hr>

<i class="fas fa-flag"></i> <b>OBJECTIVE</b>

Control flags to earn Victory Points. At the end of each round, gain VP for each flag you control.

<hr>

<i class="fas fa-map"></i> <b>SETUP</b>

<b>Deployment:</b> Players deploy on opposite board edges, within 15cm of their edge.

<b>Flags:</b> Place 3 flags in the center of the board, 15cm apart from each other. Use Objective Markers (yellow/gold cubes).

<b>Resources:</b> Place 15-20 Resource Cubes near flags. Create resource hotspots worth fighting over.

<b>Equipment:</b> Place 8-10 Equipment Cubes near flags.

<hr>

<i class="fas fa-hand"></i> <b>CONTROLLING FLAGS</b>

A mech controls a flag if it's within 5cm of the flag and no enemy mech is within 5cm of the same flag.

If both players have mechs within 5cm of a flag, it's contested — neither player controls it.

<hr>

<i class="fas fa-trophy"></i> <b>VICTORY CONDITIONS</b>

At the end of each round, gain VP for each flag you control:

<b>1 Flag:</b> 2 VP
<br><b>2 Flags:</b> 5 VP (2 + 3)
<br><b>3 Flags:</b> 9 VP (2 + 3 + 4)

After Round 4, count total VP. Most VP wins.

<b>Bonus VP:</b> 2 VP per enemy Core destroyed.

<hr>

<i class="fas fa-lightbulb"></i> <b>STRATEGY</b>

Capture the Flag rewards board control. Building 2 Solo Mechs lets you hold multiple flags simultaneously. Focus on holding 2 flags consistently rather than fighting for all 3.

Flags near resources are more valuable — you can control the flag and heal at the same time. Destroying enemy mechs is secondary to holding flags, but it helps secure control.`);

// SCEN_RUSH: Rush
updateRule('scen_rush', `Rush is an asymmetric scenario. The Attacker must reach the Defender's deployment zone. The Defender must stop them.

<hr>

<i class="fas fa-rocket"></i> <b>OBJECTIVE</b>

<b>Attacker:</b> Get at least one mech into the Defender's deployment zone by the end of Round 4.

<b>Defender:</b> Prevent the Attacker from reaching your deployment zone, or destroy all Attacker mechs.

<hr>

<i class="fas fa-map"></i> <b>SETUP</b>

<b>Deployment:</b> Defender deploys within 15cm of one board edge. Attacker deploys on the opposite board edge, within 15cm.

<b>Objectives:</b> The Defender's deployment zone is the objective. Mark it clearly.

<b>Resources:</b> Place 15-20 Resource Cubes along the path from Attacker to Defender. Create a trail of resources.

<b>Equipment:</b> Place 8-10 Equipment Cubes in the center of the board, between Attacker and Defender.

<hr>

<i class="fas fa-trophy"></i> <b>VICTORY CONDITIONS</b>

<b>Attacker Wins:</b> If at least one Attacker mech is fully within the Defender's deployment zone at the end of Round 4.

<b>Defender Wins:</b> If no Attacker mechs reach the deployment zone by the end of Round 4, OR if all Attacker mechs are destroyed.

<hr>

<i class="fas fa-lightbulb"></i> <b>STRATEGY</b>

<b>Attacker:</b> Speed is everything. Build mechs with Treads for maximum movement (30cm per move). Ignore combat unless necessary — your goal is to reach the zone, not destroy enemies. Building 2 Solo Mechs provides redundancy — only one needs to reach the zone.

<b>Defender:</b> Build defensive mechs with long-range weapons. Control the center of the board to block the Attacker's path. Destroy at least one Attacker mech to reduce their options. Building 1 Duo Mech provides a durable roadblock.`);

// DEVICE_1: Crossbow
updateRule('device_1', `The Crossbow is a direct-fire weapon. It fires projectiles in a straight line, representing rifles, railguns, and energy beams.

<hr>

<i class="fas fa-bow-arrow"></i> <b>DEVICE SPECS</b>

<b>Type:</b> Direct Fire
<br><b>Proxy Distance:</b> SHORT (15cm)
<br><b>Trajectory:</b> Straight line, slight arc
<br><b>Ammunition:</b> Bolts (small projectiles)

<hr>

<i class="fas fa-crosshairs"></i> <b>HOW TO USE</b>

Place the Crossbow 1 Short Ruler (15cm) from your mech, in the direction your weapon is pointing. Aim at the target mech. Pull the trigger to fire the bolt.

The bolt flies in a relatively straight line with a slight arc. It's fast and accurate at short range.

<hr>

<i class="fas fa-lightbulb"></i> <b>TIPS</b>

<b>Accuracy:</b> Crossbows are the most accurate device. Use them for precision shots.

<b>Range:</b> SHORT proxy distance means you need to be relatively close to the enemy.

<b>Reload:</b> Some crossbow models require manual reloading between shots. Practice reloading quickly.

<b>Aim High:</b> The bolt arcs slightly. Aim just above your target for best results.`);

// DEVICE_2: Small Cannon
updateRule('device_2', `The Small Cannon fires projectiles in an arc, representing light artillery and support weapons. It can shoot over low cover.

<hr>

<i class="fas fa-wind"></i> <b>DEVICE SPECS</b>

<b>Type:</b> Light Artillery
<br><b>Proxy Distance:</b> SHORT (15cm)
<br><b>Trajectory:</b> Arc (can shoot over low cover)
<br><b>Ammunition:</b> Small shells

<hr>

<i class="fas fa-crosshairs"></i> <b>HOW TO USE</b>

Place the Small Cannon 1 Short Ruler (15cm) from your mech. Aim at the target mech, adjusting the angle to arc over obstacles. Fire the cannon.

The shell flies in a high arc. It can clear low walls and terrain, hitting targets behind cover.

<hr>

<i class="fas fa-lightbulb"></i> <b>TIPS</b>

<b>Arc Shots:</b> Use the arc to shoot over low cover. Enemies hiding behind walls are still vulnerable.

<b>Angle Adjustment:</b> Experiment with different angles to find the right trajectory.

<b>Power:</b> Some cannon models have adjustable power. Lower power for closer targets, higher power for distant targets.

<b>Practice:</b> Arcing shots are harder to aim than straight shots. Practice to master the trajectory.`);

// DEVICE_3: Big Cannon
updateRule('device_3', `The Big Cannon is a scaled-up version of the Small Cannon. It fires larger projectiles in a high arc, representing heavy artillery.

<hr>

<i class="fas fa-burst"></i> <b>DEVICE SPECS</b>

<b>Type:</b> Heavy Artillery
<br><b>Proxy Distance:</b> SHORT (15cm)
<br><b>Trajectory:</b> High arc (can shoot over medium cover)
<br><b>Ammunition:</b> Large shells
<br><b>Scale:</b> 150-200% size of Small Cannon

<hr>

<i class="fas fa-crosshairs"></i> <b>HOW TO USE</b>

Place the Big Cannon 1 Short Ruler (15cm) from your mech. Aim at the target mech, adjusting the angle for a high arc. Fire the cannon.

The large shell flies in a very high arc. It can clear medium-height obstacles and buildings.

<hr>

<i class="fas fa-lightbulb"></i> <b>TIPS</b>

<b>High Arc:</b> The Big Cannon's arc is higher than the Small Cannon. Use it to shoot over buildings.

<b>Building Knockdown:</b> Large shells can knock over building pieces. Use this tactically to collapse cover or deal fall damage.

<b>Power:</b> The Big Cannon fires with more force. Adjust your aim accordingly.

<b>Reload Time:</b> Larger cannons may take longer to reload. Plan your shots carefully.`);

// DEVICE_4: Mortar
updateRule('device_4', `The Mortar fires projectiles in an extreme arc over buildings, representing long-range missile pods and artillery.

<hr>

<i class="fas fa-rocket"></i> <b>DEVICE SPECS</b>

<b>Type:</b> Long-Range Artillery
<br><b>Proxy Distance:</b> LONG (30cm)
<br><b>Trajectory:</b> Extreme arc (can shoot over buildings)
<br><b>Ammunition:</b> Rockets, shells, bombs

<hr>

<i class="fas fa-crosshairs"></i> <b>HOW TO USE</b>

Place the Mortar 1 Long Ruler (30cm) from your mech. Aim at the target mech, adjusting the angle for an extreme arc. Fire the mortar.

The projectile flies in a very high arc, clearing even tall buildings. It's the only weapon that uses LONG proxy distance.

<hr>

<i class="fas fa-lightbulb"></i> <b>TIPS</b>

<b>Extreme Range:</b> LONG proxy distance (30cm) means you can shoot from far away. Use this to stay safe while dealing damage.

<b>Over Buildings:</b> Mortars can shoot over any terrain. Enemies behind buildings are not safe.

<b>Indirect Fire:</b> You don't need line of sight. Shoot over obstacles to hit targets you can't see directly.

<b>Accuracy Trade-off:</b> Extreme arcs are harder to aim. Practice to master the trajectory.

<b>Building Knockdown:</b> Mortar shells can knock over tall buildings. Use this to collapse enemy cover.`);

console.log('\n✅ Batch 5 (FINAL) complete!');
console.log('   - 3 Scenarios rewritten');
console.log('   - 4 Device chapters rewritten');
fs.writeFileSync(rulesPath, JSON.stringify(rules, null, 2));
console.log('💾 Saved!\n');
console.log('🎉 ALL 23 CHAPTERS REWRITTEN! 🎉');
