import request from "supertest";
import { test } from "node:test";
import assert from "node:assert";

import app from "../src/app.js";

test("GET /health should return healthy status", async () => {
  const response = await request(app).get("/health");

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.body.status, "healthy");
});