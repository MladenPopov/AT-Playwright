import {test, expect} from "@playwright/test";

test("logo exists" , async ({page}) => {
    await page.goto('https://playwright.dev/java/');
    //get image by alt text
    await expect(page.getByAltText("Playwright logo").first()).toBeVisible();
});

test("locate heading", async ({page}) => {
    await page.goto('https://playwright.dev/java/');
    //check if heading has a specific text content
    await expect(page.locator('h1')).toContainText("Playwright enables ");
});

test("navigation links exist", async ({page}) => {
    await page.goto('https://playwright.dev/java/');

    const docsLink = page.getByRole("link", {name: 'Docs'});
    const api = page.getByRole("link", {name: 'API'});
    const xxx = page.getByRole("link", {name: 'Community'});

    await expect (docsLink).toBeVisible();
    await expect (api).toBeVisible();
   
});

test("community link exist", async ({page}) => {
    await page.goto('https://playwright.dev/java/');

  
    const communityLink = page.getByRole("link", {name: 'Community'});
    communityLink.click();
    // const welcomeText = await page.locator("h1").getByText("Welcome");
    const welcomeText = page.getByRole("heading", {name: 'Ambassadors'});
    await expect(welcomeText).toBeVisible();
    await expect(page).toHaveURL("https://playwright.dev/java/community/welcome");

});

test('get Ul element', async ({ page }) => {
    await page.goto('https://playwright.dev/java/');
    const listItems = page.locator('ul.logosList_zAAF  li');

    await expect(listItems).toHaveCount(9);

  });