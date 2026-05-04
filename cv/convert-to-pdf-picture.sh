#!/bin/bash

# Convert CollabPulse.html to PDF via Puppeteer screenshot + sips
# Usage: ./convert-to-pdf.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
HTML_FILE="$SCRIPT_DIR/CollabPulse.html"
PDF_FILE="$SCRIPT_DIR/CollabPulse.pdf"
TMP_PNG="/tmp/artboard_300dpi.png"
PUP_DIR="/tmp/pup_pdf"

echo "Converting CollabPulse.html to PDF..."

# Install puppeteer if needed
if [ ! -d "$PUP_DIR/node_modules/puppeteer" ]; then
  echo "Installing puppeteer..."
  mkdir -p "$PUP_DIR"
  cd "$PUP_DIR" && npm init -y --quiet && npm install puppeteer --quiet
fi

# Screenshot artboard at 300 DPI equivalent (deviceScaleFactor 3.125 = 300/96)
node --input-type=module << EOF
import puppeteer from '$PUP_DIR/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import { writeFileSync } from 'fs';

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();
await page.setViewport({ width: 860, height: 600, deviceScaleFactor: 3.125 });
await page.goto('file://$HTML_FILE', { waitUntil: 'networkidle0', timeout: 30000 });
await page.evaluate(() => {
  document.querySelector('.page-meta')?.remove();
  document.querySelector('.toolbar')?.remove();
});
const artboard = await page.\$('#artboard');
const png = await artboard.screenshot({ type: 'png' });
writeFileSync('$TMP_PNG', png);
await browser.close();
EOF

# Set DPI metadata and convert PNG → PDF
sips --setProperty dpiWidth 300 --setProperty dpiHeight 300 "$TMP_PNG" > /dev/null
sips -s format pdf "$TMP_PNG" --out "$PDF_FILE" > /dev/null

SIZE=$(ls -lh "$PDF_FILE" | awk '{print $5}')
echo "✅ PDF created: $PDF_FILE ($SIZE)"
