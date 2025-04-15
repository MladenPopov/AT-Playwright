import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

let loginPage: LoginPage;

test.describe("Login Page", () => {
  test.beforeEach("Initialization", async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("Login Successfully", async ({ page }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("Login Error Locked User", async () => {
    await loginPage.login("locked_out_user", "secret_sauce");
    await loginPage.loginErrorVisible();
    await expect(loginPage.errorMessage).toContainText(
      "Sorry, this user has been locked out."
    );
  });

  test("Login Error", async () => {
    await loginPage.login("invalid_user", "secret_sauce");
    await loginPage.loginErrorVisible();
    await expect(loginPage.errorMessage).toContainText(
      "Username and password do not match"
    );
  });
});
