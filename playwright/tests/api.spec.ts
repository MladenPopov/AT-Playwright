import { test, expect } from "@playwright/test";

test("Api test - GET products", async ({ request }) => {
  const reguestURL = "https://fakestoreapi.com/products";

  const response = await request.get(reguestURL);

  const responeBody = await response.json();

  await expect(response.ok()).toBeTruthy();
  await expect(response.status()).toBe(200);
  await expect(responeBody).toContainEqual(
    expect.objectContaining({
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    })
  );
});
