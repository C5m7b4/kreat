module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@/(.tsx)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/settings/JestSetup.js'],
  testEnvironment: 'jsdom',
};

// import type { Config } from '@jest/types';
// // Sync object
// const config: Config.InitialOptions = {
//   verbose: true,
//   transform: {
//     '^.+\\.ts?$': 'ts-jest',
//   },
// };
// export default config;
