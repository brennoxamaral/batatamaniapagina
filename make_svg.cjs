const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, 'public', 'Logo Batata Mania Vetorizadas.png');
const img = fs.readFileSync(imgPath);
const b64 = img.toString('base64');

const svg = `<svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="256" height="256" rx="64" ry="64" fill="white" />
  <image href="data:image/png;base64,${b64}" x="32" y="32" width="192" height="192" preserveAspectRatio="xMidYMid meet" />
</svg>`;

const outPath = path.join(__dirname, 'public', 'favicon.svg');
fs.writeFileSync(outPath, svg);
console.log('SVG created');
