import { WebDriver, Builder, By, Key, until, Capabilities, } from "selenium-webdriver";

jest.setTimeout(20000);

describe('e2e test with selenium and chromeDriver', () => {
    let chromeDriver: WebDriver;

    beforeAll(async () => {
        const chromeCapabilities = Capabilities.chrome();
        chromeCapabilities.set('goog:chromeOptions', {
            args: [
                // '--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--lang=en-US',
                // '--user-data-dir=./tmp_user_data',
            ]
        })
        chromeDriver = await new Builder().withCapabilities(chromeCapabilities).build();
    });

    afterAll(async () => {
        await chromeDriver.quit();
    });

    it('a search keyword will be on the page title in google.com', async () => {
        await chromeDriver.get('https://www.google.com/ncr');
        await chromeDriver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        const results = await chromeDriver.wait(until.titleIs('webdriver - Google Search'), 10000);
        expect(results).toBe(true);
    })
})

describe('e2e test with selenium and geckoDriver', () => {
    let geckoDriver: WebDriver;

    beforeAll(async () => {
        const firefoxCapabilities = Capabilities.firefox();
        firefoxCapabilities.set('moz:firefoxOptions', {
            args: [
                // '-headless',
            ]
        })
        geckoDriver = await new Builder().withCapabilities(firefoxCapabilities).build();
    });

    afterAll(async () => {
        await geckoDriver.quit();
    });

    it('a search keyword will be on the page title in google.com', async () => {
        await geckoDriver.get('https://www.google.com/ncr');
        await geckoDriver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        const results = await geckoDriver.wait(until.titleIs('webdriver - Google Search'), 10000);
        expect(results).toBe(true);
    })
})
