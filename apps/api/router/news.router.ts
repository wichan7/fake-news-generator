import { Hono } from "hono";
import NewsService from "../service/news.service";

const newsRouter = new Hono();
const newsService = new NewsService();

newsRouter.get("/", async (c) => {
  const news = await newsService.getAllNews();
  return c.json(news);
});

newsRouter.get("/:id", async (c) => {
  const { id } = c.req.param();
  const news = await newsService.getNewsById(id);
  return c.json(news);
});

newsRouter.post("/", async (c) => {
  const data = await c.req.json();
  const news = await newsService.createNews(data);
  return c.json(news);
});

export default newsRouter;
