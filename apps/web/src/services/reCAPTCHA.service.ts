import Api from "./api";
import type { ReCAPTCHARequest } from "@shared/types/api/recaptcha/request";
import type { ReCAPTCHAResponse } from "@shared/types/api/recaptcha/response";

class ReCAPTCHAService extends Api {
  async verify() {
    const token = await this.getClientToken();
    const { data } = await this.post<ReCAPTCHARequest, ReCAPTCHAResponse>(
      "/recaptcha",
      {
        token,
      },
    );
    return data;
  }

  private getClientToken() {
    return new Promise<string>((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY, {
            action: "submit",
          })
          .then((token) => {
            resolve(token);
          })
          .catch(() => reject());
      });
    });
  }
}

export default ReCAPTCHAService;
