import Api from "./api";

class ReCAPTCHAService extends Api {
  getToken() {
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
