import { test, expect } from "@playwright/test";
import { env } from "process";

test.describe("Playwright homepage tests", () => {
  test.beforeEach("Navigate to the homepage URL", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url, { timeout: 60000 });
  });

  test("logo exists", async ({ page }) => {
    //get image by alt text
    await expect(page.getByAltText("Playwright logo").first()).toBeVisible();
  });

  test("locate heading", async ({ page }) => {
    //check if heading has a specific text content
    await expect(page.locator("h1")).toContainText("Playwright enables ");
  });

  test("navigation links exist", async ({ page }) => {
    const docsLink = page.getByRole("link", { name: "Docs" });
    const api = page.getByRole("link", { name: "API" });
    const xxx = page.getByRole("link", { name: "Community" });

    await expect(docsLink).toBeVisible();
    await expect(api).toBeVisible();
  });

  test("community link exist", async ({ page }) => {
    const communityLink = page.getByRole("link", { name: "Community" });
    communityLink.click();
    // const welcomeText = await page.locator("h1").getByText("Welcome");
    const welcomeText = page.getByRole("heading", { name: "Ambassadors" });
    await expect(welcomeText).toBeVisible();
    await expect(page).toHaveURL(
      "https://playwright.dev/java/community/welcome"
    );
  });

  test("get Ul element", async ({ page }) => {
    const listItems = page.locator("ul.logosList_zAAF  li");

    await expect(listItems).toHaveCount(9);
  });

  test("Select playwright environment from the list", async ({ page }) => {
    const envInitial = page.getByRole("button", { name: "Java" });
    await envInitial.hover();
    const dropDownMenu = page.locator("ul.dropdown__menu");
    await expect(dropDownMenu).toBeVisible();
    const pythonListElement = page.locator("ul.dropdown__menu a").getByText("Python");
    // const pythonListElement1 = page.getByRole("listitem", { name: "Python" });
    await pythonListElement.click();
    await expect(page).toHaveURL("https://playwright.dev/python/");
  });
});
