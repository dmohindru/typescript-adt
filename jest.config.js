/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  collectCoverage: true, // Enable code coverage collection
  coverageDirectory: 'coverage', // Directory where coverage reports will be output
  coverageReporters: ['text', 'lcov'], // Report formats
  coverageThreshold: {
    global: {
      branches: 80, // Adjust these values as needed
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};