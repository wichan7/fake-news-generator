import type { NewsResponse } from '@shared/types/api/news/response';

const news: NewsResponse = {
  id: '1',
  title: 'Breaking News: TypeScript is Awesome!',
  description: 'TypeScript has become the go-to language for modern web development.',
  imageUrl: 'https://example.com/image.jpg',
  publishedAt: new Date().toISOString(),
  content: 'In a recent survey, developers have overwhelmingly praised TypeScript for its type safety and developer experience.',
};

console.log(news);