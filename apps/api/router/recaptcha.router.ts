import { Hono } from "hono";
import ReCAPTCHAService from "../service/recaptcha.service";

const recaptchaRouter = new Hono();
const recaptchaService = new ReCAPTCHAService();

recaptchaRouter.post("/", async (c) => {
  const { token } = await c.req.json();
  const result = await recaptchaService.verify(token);
  return c.json(result);
});

export default recaptchaRouter;
