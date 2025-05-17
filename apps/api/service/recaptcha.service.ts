import axios from "axios";
import { ERRORS } from "../error/apiError";

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
  private readonly secretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY || "";

  async verify(token: string) {
    const params: SiteVerifyRequest = {
      secret: this.secretKey,
      response: token,
    };

    const { data } = await axios.post<SiteVerifyResponse>(
      "https://www.google.com/recaptcha/api/siteverify",
      undefined,
      { params },
    );

    if (!data.success || data.score < 0.5) {
      throw ERRORS.INVALID_RECAPTCHA_RESULT;
    }

    return true;
  }
}

export default ReCAPTCHAService;
