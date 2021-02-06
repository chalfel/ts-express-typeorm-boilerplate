export default {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testResultsProcessor: 'jest-sonar-reporter',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '.*\\.ts$': 'ts-jest'
  }
}
