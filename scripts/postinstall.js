#!/usr/bin/env node

const { platform, arch } = process;
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Map platform/arch to the correct package name
const platformMap = {
  'linux-x64': '@tailwindcss/oxide-linux-x64-gnu',
  'linux-arm64': '@tailwindcss/oxide-linux-arm64-gnu',
  'darwin-x64': '@tailwindcss/oxide-darwin-x64',
  'darwin-arm64': '@tailwindcss/oxide-darwin-arm64',
  'win32-x64': '@tailwindcss/oxide-win32-x64-msvc',
};

const platformKey = `${platform}-${arch}`;
const packageName = platformMap[platformKey];

if (!packageName) {
  console.log(`Skipping Tailwind CSS oxide installation for unsupported platform: ${platformKey}`);
  process.exit(0);
}

// Check if the package is already installed
const oxidePath = path.join(process.cwd(), 'node_modules', packageName);
if (fs.existsSync(oxidePath)) {
  console.log(`✓ ${packageName} is already installed`);
  process.exit(0);
}

// Try to require it (might be installed but not in expected location)
try {
  require.resolve(packageName);
  console.log(`✓ ${packageName} is available`);
  process.exit(0);
} catch (e) {
  // Package not found, install it
  console.log(`Installing ${packageName}...`);
  try {
    execSync(`npm install ${packageName} --save-optional --no-save`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    });
    console.log(`✓ Successfully installed ${packageName}`);
  } catch (error) {
    console.error(`Failed to install ${packageName}:`, error.message);
    // Don't fail the build if optional dependency installation fails
    process.exit(0);
  }
}

