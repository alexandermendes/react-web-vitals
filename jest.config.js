module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/{**/,}*.js'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  setupFiles: ['<rootDir>/tests/setup'],
};
