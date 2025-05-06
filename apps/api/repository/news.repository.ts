import { sql } from "../core/connection";

export interface NewsFromDB {
  id: string;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

const newsRepository = {
  select: async () => {
    return (await sql`
      SELECT *
      FROM news
    `) as NewsFromDB[];
  },

  selectOne: async (id: string) => {
    const [firstNews] = (await sql`
      SELECT *
      FROM news
      WHERE id = ${id}
    `) as NewsFromDB[];

    return firstNews || null;
  },

  insert: async (
    news: Omit<NewsFromDB, "id" | "created_at" | "updated_at">,
  ) => {
    const [newNews] = (await sql`
      INSERT INTO news (title, content)
      VALUES (${news.title}, ${news.content})
      RETURNING *
    `) as NewsFromDB[];

    return newNews || null;
  },
};

export default newsRepository;
