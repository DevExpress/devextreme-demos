module.exports = {
    testEnvironment: "node",
    testRegex: "testing/helpers/tests/.*test.js$",
    transform: {
        "\\.[jt]sx?$": "babel-jest"
    },
    transformIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
}
