module.exports = {
  roots: ["<rootDir>/packages"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  collectCoverage: true,
  cacheDirectory: ".jest-cache",
  coverageDirectory: ".jest-coverage",
  coveragePathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/lib/"],
  coverageReporters: ["html", "text", "lcov"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/lib/"],
  reporters: ["default"],
  testResultsProcessor: "jest-sonar-reporter",
};
