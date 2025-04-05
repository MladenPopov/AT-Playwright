import { test, expect } from "@playwright/test";

test.describe("Basic Html For Tests", () => {
  test.beforeEach("Navigate to the form URL", async ({ page }) => {
    const formUrl = process.env.BASE_URL_FORM as string;
    await page.goto(formUrl);
  });
  test("Has H1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Test username field", async ({ page }) => {
    const userNameInput = page.locator("xpath=//input[@name='username']");
    await expect(userNameInput).toBeVisible();
    await userNameInput.fill("Mladen");
    await expect(userNameInput).toHaveValue("Mladen");
  });

  test("Checkbox selection", async ({ page }) => {
    const checkBox1 = page.locator("xpath=//input[@value='cb1']");
    await expect(checkBox1).toBeVisible();
    await checkBox1.check();
    await expect(checkBox1).toBeChecked();
  });

  test("Select DropDown Option", async ({ page }) => {
    const dropDownOption = page.locator("xpath=//select[@name='dropdown']");
    await expect(dropDownOption).toBeVisible();
    await dropDownOption.selectOption("dd2");
    await expect(dropDownOption).toHaveValue("dd2");
  });

  test("Password field", async ({ page }) => {
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("1234");
    await expect(passwordInput).toHaveValue("1234");
  });
  test("Textarea field", async ({ page }) => {
    const textareaInput = page.locator("xpath=//textarea");
    await expect(textareaInput).toBeVisible();
    await textareaInput.fill("bla bla bla bla");
    await expect(textareaInput).toHaveValue("bla bla bla bla");
  });

  test("Radio button selection", async ({ page }) => {
    const radioButton1 = page.locator("xpath=//input[@value='rd1']");
    await expect(radioButton1).toBeVisible();
    await radioButton1.check();
    await expect(radioButton1).toBeChecked();
  });

  test("Click Submit", async ({ page }) => {
    const submitButton = page.locator("xpath=//input[@value='submit']");
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    const nextPageTitle = page
      .getByRole("heading")
      .getByText("Processed Form Details");
    await expect(nextPageTitle).toHaveText("Processed Form Details");
  });
});
