import { useMutation, useQuery } from "@tanstack/react-query";
import NewsService from "../services/news.service";
import type { NewsCreateRequest } from "@shared/types/api/news/request";
const useNewsQuery = () => {
  const newsService = new NewsService();

  const useFetchNews = (newsId: string) => {
    return useQuery({
      queryKey: ["news", newsId],
      queryFn: () => newsService.getNews(newsId),
    });
  };

  const useCreateNews = () => {
    return useMutation({
      mutationFn: (data: NewsCreateRequest) => newsService.createNews(data),
    });
  };

  return { useFetchNews, useCreateNews };
};

export default useNewsQuery;
