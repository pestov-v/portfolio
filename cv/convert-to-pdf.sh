#!/bin/bash

# Script to convert CV HTML to PDF
# Usage: ./convert-to-pdf.sh

HTML_FILE="Volodymyr_Pestov.html"
PDF_FILE="Volodymyr_Pestov.pdf"

echo "Converting $HTML_FILE to $PDF_FILE..."

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless \
  --disable-gpu \
  --print-to-pdf="$PDF_FILE" \
  --no-pdf-header-footer \
  "file://$(pwd)/$HTML_FILE" 2>&1 | grep -v "ERROR"

if [ -f "$PDF_FILE" ]; then
    SIZE=$(ls -lh "$PDF_FILE" | awk '{print $5}')
    echo "✅ PDF created successfully: $PDF_FILE ($SIZE)"
else
    echo "❌ Failed to create PDF"
    exit 1
fi
