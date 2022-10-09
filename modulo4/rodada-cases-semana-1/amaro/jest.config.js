module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/src/model/', '<rootDir>/src/config/'],
  watchPathIgnorePatterns: ['<rootDir>/src/model/', '<rootDir>/src/config/'],
  coveragePathIgnorePatterns: ['<rootDir>/src/model/', '<rootDir>/src/config/'],
  testPathIgnorePatterns: ['<rootDir>/src/model/', '<rootDir>/src/config/'],
};
