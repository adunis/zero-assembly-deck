# Devices Image System

## Overview
Created a complete devices database (`public/data/devices.json`) that contains information about each shooting device used in the game, including image upload fields.

---

## Device Database Structure

Each device has the following fields:

```json
{
  "id": "device_1",
  "name": "3D Crossbow",
  "type": "Direct Fire Device",
  "description": "Print-in-place crossbow that fires straight-line shots.",
  "proxyDistance": "SHORT",
  "proxyDistanceCm": 15,
  "trajectory": "Direct (Straight Line)",
  "printTime": "1-2 hours",
  "printLink": "https://makerworld.com/...",
  "ammoTypes": ["Standard Bolt", "Burst Bolt (x2)", "Burst Bolt (x3)"],
  "weaponsUsing": ["G-36 Micro-Rifle", "FAL-X Autocannon", ...],
  "imagePath": "/uploads/devices/crossbow.png",
  "iconPath": "/uploads/devices/icons/crossbow-icon.png"
}
```

---

## 5 Devices in the Game

### 1. 3D Crossbow
**ID**: `device_1`  
**Type**: Direct Fire Device  
**Proxy Distance**: SHORT (15cm)  
**Trajectory**: Straight line

**Image Paths**:
- Main Image: `/uploads/devices/crossbow.png`
- Icon: `/uploads/devices/icons/crossbow-icon.png`

**Ammo Types**: Standard Bolt, Burst Bolt (x2), Burst Bolt (x3)  
**Used By**: 7 weapons (rifles, railguns, energy beams)

**Print Info**:
- Time: 1-2 hours
- Link: https://makerworld.com/en/models/1736232-mini-crossbow-print-in-place
- Notes: Print-in-place, no supports needed

---

### 2. Air Cannon (Small)
**ID**: `device_2`  
**Type**: Arc Fire Device  
**Proxy Distance**: SHORT (15cm)  
**Trajectory**: Low to medium arc

**Image Paths**:
- Main Image: `/uploads/devices/air-cannon-small.png`
- Icon: `/uploads/devices/icons/air-cannon-small-icon.png`

**Ammo Types**: Standard Shell, Explosive Shell, Hazard Markers (x2)  
**Used By**: 3 weapons (Pile Driver, Shotgun, Mine Dispenser)

**Print Info**:
- Time: 2-3 hours
- Link: https://makerworld.com/en/models/791762-aim-able-desk-cannon-powerful
- Notes: Standard scale

---

### 3. Big Air Cannon
**ID**: `device_3`  
**Type**: Heavy Arc Fire Device  
**Proxy Distance**: SHORT (15cm)  
**Trajectory**: High arc

**Image Paths**:
- Main Image: `/uploads/devices/air-cannon-big.png`
- Icon: `/uploads/devices/icons/air-cannon-big-icon.png`

**Ammo Types**: Standard BIG Shell, Explosive BIG Shell  
**Used By**: 4 weapons (heavy cannons, blasters)

**Print Info**:
- Time: 3-4 hours
- Link: https://makerworld.com/en/models/791762-aim-able-desk-cannon-powerful
- Notes: **Print at 150-200% scale**

---

### 4. Mortar
**ID**: `device_4`  
**Type**: Long-Range Artillery Device  
**Proxy Distance**: LONG (30cm)  
**Trajectory**: Very high arc

**Image Paths**:
- Main Image: `/uploads/devices/mortar.png`
- Icon: `/uploads/devices/icons/mortar-icon.png`

**Ammo Types**: Mini Rocket (x2/x3), Standard Shell (x4), Nuclear Bomb, Hazard Markers (x3)  
**Used By**: 5 weapons (missile pods, artillery, flame projector)

**Print Info**:
- Time: 2-3 hours
- Link: https://makerworld.com/en/models/1249616-air-pressure-cannon-apm
- Notes: Air pressure mortar

---

### 5. Physical Push (No Device)
**ID**: `device_5`  
**Type**: Melee / Physical  
**Proxy Distance**: TOUCH (0cm)  
**Trajectory**: Physical contact

**Image Paths**:
- Main Image: `/uploads/devices/physical-push.png`
- Icon: `/uploads/devices/icons/physical-push-icon.png`

**Ammo Types**: None  
**Used By**: 1 weapon (Sonic Repulsor)

**Print Info**:
- Time: N/A
- Link: None
- Notes: No device needed - player uses their hand

---

## Image Requirements

### Main Device Images (`imagePath`)
**Purpose**: Full device photo/render for reference sheets and detailed views

**Specifications**:
- **Format**: PNG or JPG
- **Dimensions**: 800x600 pixels (landscape) or 600x800 pixels (portrait)
- **Background**: White or transparent
- **Content**: Clear photo/render of the actual device
- **Style**: Professional product photography style

**What to Show**:
- Full device from best angle
- Clear view of firing mechanism
- Size reference if possible
- Clean, well-lit image

---

### Device Icons (`iconPath`)
**Purpose**: Small icons for UI elements, equipment cards, quick reference

**Specifications**:
- **Format**: PNG with transparency
- **Dimensions**: 128x128 pixels (square)
- **Background**: Transparent
- **Content**: Simplified icon/silhouette of device
- **Style**: Clean, recognizable at small sizes

**What to Show**:
- Simplified silhouette or icon
- Key identifying features
- High contrast for visibility
- Works at small sizes (32px)

---

## Directory Structure

```
public/
  uploads/
    devices/
      crossbow.png                    (Main device image)
      air-cannon-small.png            (Main device image)
      air-cannon-big.png              (Main device image)
      mortar.png                      (Main device image)
      physical-push.png               (Main device image)
      icons/
        crossbow-icon.png             (Small icon)
        air-cannon-small-icon.png     (Small icon)
        air-cannon-big-icon.png       (Small icon)
        mortar-icon.png               (Small icon)
        physical-push-icon.png        (Small icon)
```

---

## Usage in UI

### Device Reference Page
```jsx
import devices from './public/data/devices.json';

<div className="devices-reference">
  {devices.map(device => (
    <div key={device.id} className="device-card">
      <img 
        src={device.imagePath} 
        alt={device.name}
        className="device-image"
      />
      <h2>{device.name}</h2>
      <p className="device-type">{device.type}</p>
      <p>{device.description}</p>
      
      <div className="device-specs">
        <span>Proxy: {device.proxyDistance} ({device.proxyDistanceCm}cm)</span>
        <span>Trajectory: {device.trajectory}</span>
        <span>Print Time: {device.printTime}</span>
      </div>
      
      <div className="ammo-types">
        <h3>Compatible Ammo:</h3>
        <ul>
          {device.ammoTypes.map(ammo => (
            <li key={ammo}>{ammo}</li>
          ))}
        </ul>
      </div>
      
      <div className="weapons-using">
        <h3>Used By:</h3>
        <ul>
          {device.weaponsUsing.map(weapon => (
            <li key={weapon}>{weapon}</li>
          ))}
        </ul>
      </div>
      
      {device.printLink && (
        <a href={device.printLink} target="_blank">
          Download 3D Model
        </a>
      )}
    </div>
  ))}
</div>
```

### Equipment Card with Device Icon
```jsx
<div className="weapon-card">
  <img src={weapon.imagePath} alt={weapon.name} />
  <h3>{weapon.name}</h3>
  
  <div className="device-info">
    <img 
      src={getDeviceIcon(weapon.device)} 
      alt={weapon.device}
      className="device-icon"
      title={weapon.device}
    />
    <span>{weapon.device}</span>
  </div>
  
  {weapon.ammoImagePath && (
    <div className="ammo-info">
      <img 
        src={weapon.ammoImagePath} 
        alt={weapon.ammo}
        className="ammo-icon"
      />
      <span>{weapon.ammo}</span>
    </div>
  )}
</div>
```

### 3D Printing Guide
```jsx
<div className="printing-guide">
  <h2>Devices to Print</h2>
  {devices.filter(d => d.printLink).map(device => (
    <div key={device.id} className="print-item">
      <img src={device.iconPath} alt={device.name} />
      <div className="print-details">
        <h3>{device.name}</h3>
        <p>Print Time: {device.printTime}</p>
        {device.printNotes && <p className="note">{device.printNotes}</p>}
        <a href={device.printLink}>Download Model</a>
      </div>
    </div>
  ))}
</div>
```

---

## Image Creation Guide

### Main Device Images (800x600px)

**Crossbow**:
- Photo/render of the 3D printed crossbow
- Show from side angle to see mechanism
- Include loaded bolt if possible
- Clean white background

**Air Cannon (Small)**:
- Photo/render of small air cannon
- Show firing chamber and trigger
- Side or 3/4 view
- Include size reference (ruler or hand)

**Air Cannon (Big)**:
- Photo/render of large air cannon
- Same style as small cannon but clearly bigger
- Show scale difference
- Side or 3/4 view

**Mortar**:
- Photo/render of mortar device
- Show high-angle firing position
- Include projectile loading area
- Top-down or angled view

**Physical Push**:
- Illustration or photo of hand pushing a mech
- Show ruler measuring 15cm
- Simple, clear diagram
- Could be illustrated rather than photo

---

### Device Icons (128x128px)

**Crossbow Icon**:
- Simplified crossbow silhouette
- Side view, recognizable shape
- Black or dark gray on transparent
- Clean, bold lines

**Air Cannon Small Icon**:
- Simplified cannon silhouette
- Show barrel and base
- Medium size appearance
- Bold, clear shape

**Air Cannon Big Icon**:
- Same as small cannon but larger/thicker
- Clearly bigger than small cannon icon
- Bold, heavy appearance
- Emphasize size

**Mortar Icon**:
- Simplified mortar silhouette
- Show angled barrel pointing up
- High-angle firing position
- Distinctive from cannons

**Physical Push Icon**:
- Hand icon or hand pushing icon
- Simple, recognizable
- Could include arrow showing push direction
- Clear gesture

---

## Benefits

### For Players
- ✅ **Visual device reference**: See what each device looks like
- ✅ **Quick identification**: Icons help identify device types
- ✅ **Print planning**: Know what to print and how long it takes
- ✅ **Compatibility**: See which ammo works with which device

### For Documentation
- ✅ **Complete reference**: All device info in one place
- ✅ **3D printing guide**: Direct links to models
- ✅ **Weapon compatibility**: See which weapons use which devices
- ✅ **Visual aids**: Images for rulebooks and guides

### For UI/UX
- ✅ **Consistent icons**: Standardized device icons across UI
- ✅ **Better equipment cards**: Show device and ammo visually
- ✅ **Improved navigation**: Filter weapons by device type
- ✅ **Professional appearance**: Polished, complete presentation

---

## Next Steps

### 1. Create Device Images
- [ ] Photograph or render 5 main device images (800x600px)
- [ ] Create 5 device icons (128x128px)
- [ ] Upload to `/public/uploads/devices/` directory

### 2. Integrate with UI
- [ ] Add device reference page
- [ ] Show device icons on equipment cards
- [ ] Link devices to weapons in UI
- [ ] Add device filter to weapon selection

### 3. Update Documentation
- [ ] Add device images to 3D printing guide
- [ ] Create printable device reference sheet
- [ ] Update rulebook with device visuals

---

## Status: ✅ DATABASE COMPLETE

The devices database is complete with all fields including image paths. You can now upload device images to the specified paths.

**File Created**: `public/data/devices.json`  
**Devices Defined**: 5  
**Image Paths Ready**: 10 (5 main + 5 icons)
