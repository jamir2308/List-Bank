module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'js', 'json'],
    collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx}',
    ],
    moduleDirectories: ['./node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    roots: ['<rootDir>'],
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
  };