import { Browser, chromium, firefox, webkit } from "playwright";

describe.each([
    { browserType: chromium, browserName: 'chromium'},
    { browserType: firefox, browserName: 'firefox'},
    { browserType: webkit, browserName: 'webkit'},
])('e2e test with playwright and $browserName', ( { browserType }) => {
    let browser: Browser;

    beforeAll(async () => {
        browser = await browserType.launch( { headless: false});
    })

    afterAll(async () => {
        await browser.close();
    })

    it('a search keyword will be on the page title in google.com', async () => {
        const page = await browser.newPage();
        await page.goto('https://www.google.com/ncr');

        await page.type('textarea[name="q"]', 'playwright');
        await page.keyboard.press('Enter');

        await page.waitForURL('https://www.google.com/search?q=playwright*', {
            timeout: 2000,
        })
        expect(await page.title()).toBe('playwright - Google Search');
        await page.close();
    })
})
