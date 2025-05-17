import newsRepository, { type NewsFromDB } from "../repository/news.repository";
import type { NewsCreateRequest } from "@shared/types/api/news/request";
import type { NewsResponse } from "@shared/types/api/news/response";
import OpenAIService from "./openai.service";
import ReCAPTCHAService from "./recaptcha.service";
import { ERRORS } from "../error/apiError";

export class NewsService {
  private openAIService = new OpenAIService();
  private recaptchaService = new ReCAPTCHAService();

  private convertToNewsResponse(news: NewsFromDB): NewsResponse {
    return {
      id: news.id,
      title: news.title,
      content: news.content,
      created_at: news.created_at.toISOString(),
      updated_at: news.updated_at.toISOString(),
    };
  }

  getAllNews = async () => {
    const news = await newsRepository.select();
    return news.map(this.convertToNewsResponse);
  };

  getNewsById = async (id: string) => {
    const news = await newsRepository.selectOne(id);
    return news ? this.convertToNewsResponse(news) : null;
  };

  createNews = async (news: NewsCreateRequest) => {
    // verify recaptcha
    await this.recaptchaService.verify(news.recaptchaToken);
    // generate news content from openai
    const generatedContent = await this.openAIService.generateText(news.title);
    // insert news to database
    const newNews = await newsRepository.insert({
      ...news,
      content: generatedContent,
    });

    if (newNews == null) {
      throw ERRORS.FAILED_TO_CREATE_NEWS;
    }
    return this.convertToNewsResponse(newNews);
  };
}

export default NewsService;
