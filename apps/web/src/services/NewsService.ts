import dayjs from "dayjs";
import Api from "./api";
import type { NewsResponse } from "@shared/types/api/news/response";

class NewsService extends Api {
  async getNews(newsId: string) {
    const { data } = await this.get<NewsResponse>(`/news/${newsId}`);
    return {
      ...data,
      created_at: dayjs(data.created_at),
      updated_at: dayjs(data.updated_at),
    };
  }
}

export default NewsService;
