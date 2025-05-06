import newsRepository, { type NewsFromDB } from "../repository/news.repository";
import type { NewsCreateRequest } from "@shared/types/api/news/request";
import type { NewsResponse } from "@shared/types/api/news/response";
import OpenAIService from "./openai.service";

export class NewsService {
  private openAIService = new OpenAIService();

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
    const generatedContent = await this.openAIService.generateText(news.title);
    const newNews = await newsRepository.insert({
      ...news,
      content: generatedContent,
    });

    if (newNews == null) {
      throw new Error("[newsService] Failed to create news");
    }
    return this.convertToNewsResponse(newNews);
  };
}

export default NewsService;
