#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const IMAGE_EXTENSIONS = new Set([
  '.jpg', '.jpeg', '.png', '.gif', '.webp',
  '.bmp', '.svg', '.ico', '.tiff', '.tif'
]);

// Parse arguments
const args = process.argv.slice(2);
const targetDir = args.find(arg => !arg.startsWith('--')) || path.join(os.homedir(), 'Downloads');
const deepScan = args.includes('--deep');
const showSize = args.includes('--size');

let totalImages = 0;
let totalSize = 0;
const imageCounts = {};

function scanDirectory(dir, depth = 0) {
  try {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory() && deepScan) {
        scanDirectory(itemPath, depth + 1);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();

        if (IMAGE_EXTENSIONS.has(ext)) {
          totalImages++;
          imageCounts[ext] = (imageCounts[ext] || 0) + 1;

          if (showSize) {
            totalSize += stat.size;
          }
        }
      }
    }
  } catch (error) {
    console.error(`⚠️  Error reading directory ${dir}: ${error.message}`);
  }
}

function formatSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function main() {
  try {
    if (!fs.existsSync(targetDir)) {
      throw new Error(`Directory not found: ${targetDir}`);
    }

    console.log(`📂 Scanning: ${path.resolve(targetDir)}`);
    if (deepScan) console.log('🔍 Deep scan enabled (including subdirectories)');
    console.log('');

    scanDirectory(targetDir);

    // Display results
    if (totalImages === 0) {
      console.log('❌ No image files found.');
    } else {
      console.log(`🖼️  Found ${totalImages} image file${totalImages !== 1 ? 's' : ''}:\n`);

      // Sort extensions by count (descending)
      const sortedExtensions = Object.entries(imageCounts).sort((a, b) => b[1] - a[1]);

      for (const [ext, count] of sortedExtensions) {
        const icon = {
          '.jpg': '📸', '.jpeg': '📸', '.png': '🖼️',
          '.gif': '🎨', '.webp': '🌐', '.svg': '✏️',
          '.bmp': '🖌️', '.ico': '🔘', '.tiff': '📷'
        }[ext] || '🖼️';

        console.log(`   ${icon} ${ext.padEnd(6)} → ${count} file${count !== 1 ? 's' : ''}`);
      }

      console.log('');
      console.log(`📊 Total images: ${totalImages}`);

      if (showSize) {
        console.log(`💾 Total size: ${formatSize(totalSize)}`);
      }
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
