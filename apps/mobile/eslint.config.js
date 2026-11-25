// eslint.config.js
// ESLint flat config (ESLint 9+)
// Uses eslint-config-expo which bundles React, React Native, and TypeScript rules.

const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  ...expoConfig,
  {
    ignores: [
      'node_modules/**',
      '.expo/**',
      'dist/**',
      'build/**',
    ],
  },
]);
