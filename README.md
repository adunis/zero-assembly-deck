# Zero Assembly Deck

A tactical tabletop wargame featuring customizable mechs in strategic combat using the finger-flick mechanic.

## About

Zero Assembly Deck is a physics-based tabletop game where players build and command mechs using modular components. Flick your mech's base to move and engage in tactical combat!

### Key Features

- **Finger-Flick Movement**: Physical skill-based movement system - flick your mech's base to move
- **Modular Mech Building**: Customize your mech with weapons, equipment, and components from multiple factions
- **Tactical Combat**: Strategic gameplay with positioning, line of sight, and terrain interaction
- **Keyword System**: Streamlined rules using clear keywords for abilities and effects
- **Four Factions**: USA, Russia, China, and EU - each with unique equipment and playstyles
- **3D Printing Support**: Print your own mech components and terrain pieces

### Game Mechanics

- **Movement**: Flick your mech's base - where it stops is where it moves
- **Combat**: Lock-On system for targeting, various weapon types (Direct, Guided, Ballistic)
- **Equipment**: Shields, sensors, countermeasures, and special devices
- **Ammunition**: Different ammo types for different situations (AP, HE, Guided, etc.)
- **Terrain**: Interactive buildings and obstacles that affect gameplay

## Getting Started

### Play Online

1. Clone this repository:
   ```bash
   git clone https://github.com/adunis/zero-assembly-deck.git
   cd zero-assembly-deck
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Open your browser and navigate to `http://localhost:3000`

### What You Need to Play

- Printed mech cards and equipment cards
- Circular bases for mechs (for flicking)
- Dice (d6)
- Measuring tape or ruler
- Terrain pieces (optional but recommended)

## Documentation

- **[Quick Reference Card](QUICK_REFERENCE_CARD.md)** - Essential rules at a glance
- **[Keyword Reference](KEYWORD_REFERENCE.md)** - All game keywords explained
- **[Ammunition Guide](AMMUNITION_GUIDE.md)** - Complete ammo types and usage
- **[Finger Flick Mechanic](FINGER_FLICK_MECHANIC.md)** - Movement system details
- **[Lore Summary](LORE_SUMMARY.md)** - Game world and faction backgrounds

## Project Structure

```
zero-assembly-deck/
├── public/
│   ├── index.html          # Main web interface
│   └── data/
│       ├── equipment.json  # All equipment, weapons, and components
│       └── rules.json      # Complete game rules
├── server.js               # Express server
└── README.md              # This file
```

## Features

- **Interactive Deck Builder**: Build and customize your mech loadout
- **Equipment Database**: Browse all available weapons and equipment
- **Rules Reference**: Searchable, organized game rules
- **Print-Friendly Layouts**: Optimized for printing cards and references
- **Image Support**: Upload custom images for equipment

## Game Balance

- Point-based army building
- Balanced factions with unique strengths
- Multiple viable strategies and playstyles
- Scalable from small skirmishes to large battles

## Contributing

Contributions are welcome! Feel free to:
- Report bugs or balance issues
- Suggest new equipment or mechanics
- Improve documentation
- Add new factions or content

## License

This project is open source. Feel free to use, modify, and distribute.

## Credits

Game Design & Development: Aleksandar Petrovic
Built with: Node.js, Express, vanilla JavaScript
