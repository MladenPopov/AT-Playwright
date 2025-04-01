import { test, expect } from "@playwright/test";

test("Has H1 title", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );

  const title = page.locator("xpath=//h1");
  await expect(title).toHaveText("Basic HTML Form Example");
});

test("Test username field", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );

  const userNameInput = page.locator("xpath=//input[@name='username']");
  await expect(userNameInput).toBeVisible();
  await userNameInput.fill("Mladen");
  await expect(userNameInput).toHaveValue("Mladen");
});

test("Checkbox selection", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );

  const checkBox1 = page.locator("xpath=//input[@value='cb1']");
  await expect(checkBox1).toBeVisible();
  await checkBox1.check();
  await expect(checkBox1).toBeChecked();
});

test("Select DropDown Option", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );

  const dropDownOption = page.locator("xpath=//select[@name='dropdown']");
  await expect(dropDownOption).toBeVisible();
  await dropDownOption.selectOption("dd2");
  await expect(dropDownOption).toHaveValue("dd2");
});
