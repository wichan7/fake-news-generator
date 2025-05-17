import { HTTPException } from "hono/http-exception";

export const ERRORS = {
  /**
   * Common
   */
  UNKNOWN_ERROR: new HTTPException(500, {
    message: "Unknown error",
  }),
  /**
   * recaptcha
   */
  INVALID_RECAPTCHA_RESULT: new HTTPException(400, {
    message: "Invalid recaptcha result",
  }),
  /**
   * news
   */
  FAILED_TO_CREATE_NEWS: new HTTPException(500, {
    message: "Failed to create news",
  }),
} as const;
