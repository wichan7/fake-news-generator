import axios from "axios";
import type { ReCAPTCHAResponse } from "@shared/types/api/recaptcha/response";

interface SiteVerifyRequest {
  secret: string;
  response: string;
  remoteip?: string;
}
interface SiteVerifyResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
}

class ReCAPTCHAService {
  private readonly secretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;

  async verify(token: string) {
    const { data } = await axios.post<SiteVerifyResponse>(
      "https://www.google.com/recaptcha/api/siteverify",
      undefined,
      { params: { secret: this.secretKey, response: token } }, // query parameter로 전달해야함.
    );

    const result: ReCAPTCHAResponse = {
      isValid: data.score > 0.5,
    };
    return result;
  }
}

export default ReCAPTCHAService;
