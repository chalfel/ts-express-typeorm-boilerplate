export default {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '.*\\.ts$': 'ts-jest'
  }
}
