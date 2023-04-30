export default {
    preset: 'ts-jest/presets/js-with-ts-esm',
    testEnvironment: 'node',
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    }
}
