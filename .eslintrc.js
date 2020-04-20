module.exports = {
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "__dirname": false,
    "process": false
  },
  parserOptions: {
    ecmaFeatures: {
      "jsx": true,
      "legacyDecorators": true
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "jsx-a11y",
    "import"
  ],
  rules: {
    'react/prop-types': 0,
    "react/display-name": 0,
    "react/jsx-uses-react": 2,
    "no-console": 0,
    "no-debugger": 2
  },
  parser: "babel-eslint",
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }
};
