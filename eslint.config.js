import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  // Target JavaScript and React files
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  
  // Set global variables for browser environment
  { languageOptions: { globals: globals.browser } },
  
  // Add ESLint recommended configurations for JS and React
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  
  // Add rule to enforce single quotes for strings
  { rules: { 
    'quotes': ['error', 'single'],
    'react/prop-types': 'off',
  } },

  { settings: { react: { version: 'detect' } } },

  // Ignore the 'dist' directory
  { ignores: ['dist/**'] },
];
