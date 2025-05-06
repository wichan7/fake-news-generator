import { useQuery } from "@tanstack/react-query";
import NewsService from "../services/NewsService";

const useNewsQuery = () => {
  const newsService = new NewsService();

  const useFetchNews = (newsId: string) => {
    return useQuery({
      queryKey: ["news", newsId],
      queryFn: () => newsService.getNews(newsId),
    });
  };

  return { useFetchNews };
};

export default useNewsQuery;
