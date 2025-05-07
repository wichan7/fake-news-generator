import OpenAI from "openai";
import { GENERATE_NEWS_INSTRUCTIONS } from "./openai.constant";
class OpenAIService {
  private client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  public async generateText(input: string) {
    const response = await this.client.responses.create({
      model: "gpt-4.1-nano",
      instructions: GENERATE_NEWS_INSTRUCTIONS,
      input,
    });

    return response.output_text;
  }
}

export default OpenAIService;
