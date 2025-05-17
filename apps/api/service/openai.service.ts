import OpenAI from "openai";
import {
  createNewsContentPrompt,
  createScamEvaluationPrompt,
} from "./openai.helper";
import { ERRORS } from "../error/apiError";
class OpenAIService {
  private client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  public async generateNewsContent(input: string) {
    const response = await this.client.responses.create({
      model: "gpt-4.1-nano",
      instructions: createNewsContentPrompt(input),
      input,
    });

    return response.output_text;
  }

  public async verifyScam(input: string) {
    const response = await this.client.responses.create({
      model: "gpt-4.1-nano",
      instructions: createScamEvaluationPrompt(input),
      input,
    });

    const score = Number.parseFloat(response.output_text);
    console.log(response.output_text);
    console.log(score);
    if (Number.isNaN(score) || score > 0.5) {
      throw ERRORS.BAD_REQUEST;
    }

    return true;
  }
}

export default OpenAIService;
