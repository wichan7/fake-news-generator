import { sql } from "../core/connection";

export interface News {
  id: string;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

const newsRepository = {
  select: async () => {
    return await sql`
      SELECT *
      FROM news
    `;
  },

  selectOne: async (id: string) => {
    return await sql`
      SELECT *
      FROM news
      WHERE id = ${id}
    `;
  },

  insert: async (news: Omit<News, "id" | "created_at" | "updated_at">) => {
    const [newNews] = await sql`
      INSERT INTO news (title, content)
      VALUES (${news.title}, ${news.content})
      RETURNING *
    `;
    return newNews;
  },
};

export default newsRepository;
