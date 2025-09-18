exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        // capabilities for local Appium tests on Android device
        platformName: 'Android',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'SM G9901N',
        'appium:udid': 'R3CR30ZLTQH',
        'appium:appPackage': 'com.swaglabsmobileapp',
        'appium:appActivity': 'com.swaglabsmobileapp.MainActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    // Default timeout in milliseconds for request
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: [['spec', { symbols: { passed: '[PASS] ✓', failed: '[FAIL] ✘' } }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },

}
