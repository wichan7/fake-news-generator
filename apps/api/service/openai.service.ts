import OpenAI from "openai";
import { OPENAI_INSTRUCTIONS } from "./openai.constant";
class OpenAIService {
  private client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  public async generateText(prompt: string) {
    const response = await this.client.responses.create({
      model: "gpt-4.1-nano",
      instructions: OPENAI_INSTRUCTIONS,
      input: prompt,
    });

    return response.output_text;
  }
}

export default OpenAIService;
