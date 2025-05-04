import newsRepository from "../repository/news.repository";
import type { NewsCreateRequest } from "@shared/types/api/news/request";

export class NewsService {
  getAllNews = async () => {
    const news = await newsRepository.select();
    return news;
  };

  getNewsById = async (id: string) => {
    const news = await newsRepository.selectOne(id);
    return news;
  };

  createNews = async (news: NewsCreateRequest) => {
    const newNews = await newsRepository.insert(news);
    return newNews;
  };
}

export default NewsService;
