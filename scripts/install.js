const fs = require('fs');
const path = require('path')
const info = require('../public/info.json');

fs.cpSync(
    path.resolve(__dirname, '../dist/PeacefulTechTweaks'),
    process.env.APPDATA + '/Factorio/mods/PeacefulTechTweaks_' + info.version,
    { recursive: true });