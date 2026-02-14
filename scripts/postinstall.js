#!/usr/bin/env node

const { platform, arch } = process;
const fs = require('fs');
const path = require('path');

// Map platform/arch to the correct package names
const platformMap = {
  'linux-x64': {
    tailwind: '@tailwindcss/oxide-linux-x64-gnu',
    lightning: 'lightningcss-linux-x64-gnu',
  },
  'linux-arm64': {
    tailwind: '@tailwindcss/oxide-linux-arm64-gnu',
    lightning: 'lightningcss-linux-arm64-gnu',
  },
  'darwin-x64': {
    tailwind: '@tailwindcss/oxide-darwin-x64',
    lightning: 'lightningcss-darwin-x64',
  },
  'darwin-arm64': {
    tailwind: '@tailwindcss/oxide-darwin-arm64',
    lightning: 'lightningcss-darwin-arm64',
  },
  'win32-x64': {
    tailwind: '@tailwindcss/oxide-win32-x64-msvc',
    lightning: 'lightningcss-win32-x64-msvc',
  },
};

const platformKey = `${platform}-${arch}`;
const packages = platformMap[platformKey];

if (!packages) {
  console.log(`⚠ Unsupported platform: ${platformKey}`);
  process.exit(0);
}

// Check if packages are installed
const checkPackage = (packageName) => {
  try {
    const packagePath = path.join(process.cwd(), 'node_modules', packageName);
    if (fs.existsSync(packagePath)) {
      console.log(`✓ ${packageName} is already installed`);
      return true;
    }
    require.resolve(packageName);
    console.log(`✓ ${packageName} is available`);
    return true;
  } catch (e) {
    console.log(`✗ ${packageName} is not installed`);
    return false;
  }
};

checkPackage(packages.tailwind);
checkPackage(packages.lightning);

