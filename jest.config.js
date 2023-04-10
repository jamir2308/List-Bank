module.exports = {
    collectCoverageFrom: ['<rootDir>/**/*.{js, jsx}'],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx}',
    ],
    moduleDirectories: ['./node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    roots: ['<rootDir>'],
    setupFiles: ['./jest.setup.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss)$',
      '/node_modules/(?!redux-persist)'
    ],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy",
        '^.*\\.mjs$': 'babel-jest',
    }
  };