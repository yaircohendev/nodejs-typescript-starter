module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['/node_modules/'],
    modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/src/__tests__/__mocks__'],
};
