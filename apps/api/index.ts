import { Hono } from "hono";
import { cors } from "hono/cors";
import newsRouter from "./router/news.router";
import dotenv from "dotenv";
import { HTTPException } from "hono/http-exception";
import { ERRORS } from "./error/apiError";

dotenv.config();
const app = new Hono();

// middlewares
app.use("/*", cors());
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json(err.message, err.status);
  }
  return c.json(ERRORS.UNKNOWN_ERROR.message, ERRORS.UNKNOWN_ERROR.status);
});

// routes
app.route("/news", newsRouter);

console.log("[index] Server is running on http://localhost:8080");
export default {
  port: 8080,
  fetch: app.fetch,
};
