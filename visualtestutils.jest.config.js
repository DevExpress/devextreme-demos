module.exports = {
    testRegex: "testing/helpers/tests/.*test.mjs$",
    transform: {},
    //     "^.+\\.jsx?$": "babel-jest",
    //     "^.+\\.mjs$": "babel-jest",
    // },
    testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
    moduleFileExtensions: ["js", "jsx", "mjs"]
}
