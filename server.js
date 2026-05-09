const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// 1. Ensure the 'public/uploads' directory actually exists
const uploadDir = path.join(__dirname, 'public', 'uploads');
const ammoDir = path.join(uploadDir, 'ammo');
const devicesDir = path.join(uploadDir, 'devices');
const devicesIconsDir = path.join(devicesDir, 'icons');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
if (!fs.existsSync(ammoDir)) {
    fs.mkdirSync(ammoDir, { recursive: true });
}
if (!fs.existsSync(devicesDir)) {
    fs.mkdirSync(devicesDir, { recursive: true });
}
if (!fs.existsSync(devicesIconsDir)) {
    fs.mkdirSync(devicesIconsDir, { recursive: true });
}

// 2. Tell Express to serve your index.html, CSS, and JSON files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// 3. Set up Multer to keep your exact screenshot filenames
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// 4. The Upload Route
// 4. The Smart Upload Route
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, error: "No file uploaded" });
    }
    
    const uploadType = req.body.uploadType; // 'device-main', 'device-icon', 'ammo', or regular card
    const deviceId = req.body.deviceId;
    const ammoType = req.body.ammoType;
    const cardId = req.body.id;

    let newImagePath = `/uploads/${req.file.originalname}`;
    let targetDir = uploadDir;

    // Handle device and ammo uploads with specific directories
    if (uploadType === 'device-main') {
        targetDir = devicesDir;
        newImagePath = `/uploads/devices/${req.file.originalname}`;
    } else if (uploadType === 'device-icon') {
        targetDir = devicesIconsDir;
        newImagePath = `/uploads/devices/icons/${req.file.originalname}`;
    } else if (uploadType === 'ammo') {
        targetDir = ammoDir;
        newImagePath = `/uploads/ammo/${req.file.originalname}`;
    }

    // Move file to correct directory if needed
    if (targetDir !== uploadDir) {
        const oldPath = path.join(uploadDir, req.file.originalname);
        const newPath = path.join(targetDir, req.file.originalname);
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
        }
    }

    // Update devices.json for device uploads
    if (uploadType === 'device-main' || uploadType === 'device-icon') {
        const devicesPath = path.join(__dirname, 'public', 'data', 'devices.json');
        if (fs.existsSync(devicesPath)) {
            let devices = JSON.parse(fs.readFileSync(devicesPath, 'utf8'));
            const deviceIndex = devices.findIndex(d => d.id === deviceId);
            
            if (deviceIndex !== -1) {
                if (uploadType === 'device-main') {
                    devices[deviceIndex].imagePath = newImagePath;
                } else {
                    devices[deviceIndex].iconPath = newImagePath;
                }
                fs.writeFileSync(devicesPath, JSON.stringify(devices, null, 2));
                console.log(`[DEVICES] Saved ${newImagePath} to ${deviceId}`);
            }
        }
    }

    // Update equipment.json for ammo uploads
    if (uploadType === 'ammo' && ammoType) {
        const equipPath = path.join(__dirname, 'public', 'data', 'equipment.json');
        if (fs.existsSync(equipPath)) {
            let equipment = JSON.parse(fs.readFileSync(equipPath, 'utf8'));
            
            // Update all weapons that use this ammo type
            equipment.forEach(item => {
                if (item.ammo === ammoType) {
                    item.ammoImagePath = newImagePath;
                }
            });
            
            fs.writeFileSync(equipPath, JSON.stringify(equipment, null, 2));
            console.log(`[AMMO] Saved ${newImagePath} for ammo type: ${ammoType}`);
        }
    }

    // Handle regular card uploads (existing functionality)
    if (cardId && !uploadType) {
        let fileName = '';
        if (cardId.startsWith('eq_')) fileName = 'equipment.json';
        else if (cardId.startsWith('tal_')) fileName = 'talents.json';
        else if (cardId.startsWith('pk_')) fileName = 'talents.json';
        else if (cardId.includes('_')) fileName = 'rules.json';

        if (fileName) {
            const dbPath = path.join(__dirname, 'public', 'data', fileName);
            
            if (fs.existsSync(dbPath)) {
                let dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
                const cardIndex = dbData.findIndex(item => item.id === cardId);
                
                if (cardIndex !== -1) {
                    dbData[cardIndex].imagePath = newImagePath;
                    fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));
                    console.log(`[DATABASE] Saved ${newImagePath} to ${cardId}`);
                }
            }
        }
    }

    res.json({ success: true, imagePath: newImagePath });
});

// 5. Start the server
app.listen(PORT, () => {
    console.log(`\n>>> ZERO ASSEMBLY SERVER IS LIVE <<<`);
    console.log(`>>> Open http://localhost:${PORT} in your browser <<<\n`);
});