import { test, expect } from "@playwright/test";
import { REQUEST_URL, PRODUCT_ID } from "..//test-data/constants";
import REQUEST_BODY from "..//test-data/request_body.json";

test.describe("matchers example", () => {
  test("toContainEqual Example", async () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    await expect(users).toContainEqual({ id: 1, name: "Alice" });
  });

  test("ToEqual Example", async () => {
    await expect({ name: "Alice", age: 30 }).toEqual({
      name: "Alice",
      age: 30,
    });
  });

  test("toMatchObject example", async () => {
    const user = {
      id: 1,
      name: "Alice",
      age: 30,
    };
    expect(user).toMatchObject({ name: "Alice" });
  });

  test("toHaveProperty example", async () => {
    const user = {
      profile: {
        name: "Alice",
      },
    };
    expect(user).toHaveProperty("profile.name");
    expect(user).toHaveProperty("profile.name", "Alice");
  });
});

test.describe("CRUD Operations", () => {
  test("Api test - GET products", async ({ request }) => {
    const reguestURL = ``;

    const response = await request.get(`${REQUEST_URL}`);

    const responeBody = await response.json();

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    await expect(responeBody).toContainEqual(
      expect.objectContaining({
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      })
    );
  });

  test("Api Test 2 - GET Product", async ({ request }) => {
    const requestURL = `${REQUEST_URL}/${PRODUCT_ID}`;
    const response = await request.get(requestURL);
    const responseBody = await response.json();
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    expect(responseBody).toEqual(
      expect.objectContaining({
        title: "Solid Gold Petite Micropave ",
      })
    );

    expect(responseBody).toMatchObject({ price: 168, category: "jewelery" });
    expect(responseBody).toHaveProperty("image");
    expect(responseBody).toHaveProperty("rating.rate");
  });

  test("API TEST3 - Create Product", async ({ request }) => {
    const response = await request.post(REQUEST_URL, {
      data: REQUEST_BODY,
    });
    const responeBody = await response.json();
    console.log(responeBody);
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    expect(responeBody).toEqual({
      id: 21,
      title: "string",
      price: 0.1,
      description: "string",
      image: "http://example.com",
      category: "string",
    });
    expect(responeBody).toHaveProperty("price", 0.1);
  });

  test("API Test 4 - UPDATE Product", async ({ request }) => {
    const response = await request.put(`${REQUEST_URL}/${PRODUCT_ID}`, {
      data: {
        id: 6,
        title: "Pastet",
        price: 0.1,
        description: "Pastet",
        category: "string",
        image: "http://example.com",
      },
    });
    const responeBody = await response.json();
    console.log(responeBody);
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    expect(responeBody).toMatchObject({
      title: "Pastet",
      description: "Pastet",
      category: "string",
    });
  });

  test("API Test 5 - DELETE PRODUCT", async ({ request }) => {
    const response = await request.delete(`${REQUEST_URL}/${PRODUCT_ID}`);
    const responeBody = await response.json();
    console.log(responeBody);
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
  });
});
