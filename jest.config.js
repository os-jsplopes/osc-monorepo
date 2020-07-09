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
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/lib/"],
  reporters: ["default"],
  testResultsProcessor: "jest-sonar-reporter",
};
