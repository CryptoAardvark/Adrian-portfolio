#!/usr/bin/env node

const { platform, arch } = process;
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Map platform/arch to the correct Tailwind CSS package name
const tailwindPlatformMap = {
  'linux-x64': '@tailwindcss/oxide-linux-x64-gnu',
  'linux-arm64': '@tailwindcss/oxide-linux-arm64-gnu',
  'darwin-x64': '@tailwindcss/oxide-darwin-x64',
  'darwin-arm64': '@tailwindcss/oxide-darwin-arm64',
  'win32-x64': '@tailwindcss/oxide-win32-x64-msvc',
};

// Map platform/arch to the correct Lightning CSS package name
const lightningPlatformMap = {
  'linux-x64': 'lightningcss-linux-x64-gnu',
  'linux-arm64': 'lightningcss-linux-arm64-gnu',
  'darwin-x64': 'lightningcss-darwin-x64',
  'darwin-arm64': 'lightningcss-darwin-arm64',
  'win32-x64': 'lightningcss-win32-x64-msvc',
};

const platformKey = `${platform}-${arch}`;

// Install Tailwind CSS oxide
const tailwindPackage = tailwindPlatformMap[platformKey];
if (tailwindPackage) {
  const oxidePath = path.join(process.cwd(), 'node_modules', tailwindPackage);
  if (!fs.existsSync(oxidePath)) {
    try {
      require.resolve(tailwindPackage);
      console.log(`✓ ${tailwindPackage} is available`);
    } catch (e) {
      console.log(`Installing ${tailwindPackage}...`);
      try {
        execSync(`npm install ${tailwindPackage} --save-optional --no-save`, {
          stdio: 'inherit',
          cwd: process.cwd(),
        });
        console.log(`✓ Successfully installed ${tailwindPackage}`);
      } catch (error) {
        console.error(`Failed to install ${tailwindPackage}:`, error.message);
      }
    }
  } else {
    console.log(`✓ ${tailwindPackage} is already installed`);
  }
}

// Install Lightning CSS native binary
const lightningPackage = lightningPlatformMap[platformKey];
if (lightningPackage) {
  const lightningPath = path.join(process.cwd(), 'node_modules', lightningPackage);
  if (!fs.existsSync(lightningPath)) {
    try {
      require.resolve(lightningPackage);
      console.log(`✓ ${lightningPackage} is available`);
    } catch (e) {
      console.log(`Installing ${lightningPackage}...`);
      try {
        execSync(`npm install ${lightningPackage} --save-optional --no-save`, {
          stdio: 'inherit',
          cwd: process.cwd(),
        });
        console.log(`✓ Successfully installed ${lightningPackage}`);
      } catch (error) {
        console.error(`Failed to install ${lightningPackage}:`, error.message);
      }
    }
  } else {
    console.log(`✓ ${lightningPackage} is already installed`);
  }
}

if (!tailwindPackage && !lightningPackage) {
  console.log(`Skipping native binary installation for unsupported platform: ${platformKey}`);
}

