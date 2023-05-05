import puppeteer, { Browser } from "puppeteer";

jest.setTimeout(20000);

describe('e2e test with puppeteer', () => {
    let browser: Browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            // headless: false
        });
    })

    afterAll(async () => {
        await browser.close();
    })

    it('a search keyword will be on the page title in google.com', async () => {
        const page = await browser.newPage();
        await page.goto('https://www.google.com/ncr');

        await page.type('textarea[name="q"]', 'puppeteer');
        await page.keyboard.press('Enter');

        await page.waitForNavigation({
            timeout: 2000,
            waitUntil: 'domcontentloaded',
        })
        expect(await page.title()).toBe('puppeteer - Google Search');
    })
})
