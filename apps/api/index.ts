import { Hono } from "hono";
import { cors } from "hono/cors";
import newsRouter from "./router/news.router";
import dotenv from "dotenv";
import recaptchaRouter from "./router/recaptcha.router";
dotenv.config();
const app = new Hono();

// middlewares
app.use("/*", cors());

// routes
app.route("/news", newsRouter);
app.route("/recaptcha", recaptchaRouter);

console.log("[index] Server is running on http://localhost:8080");
export default {
  port: 8080,
  fetch: app.fetch,
};
