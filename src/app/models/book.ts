export class Book {
  title: string;
  bookId: number;
  series: Array<{ seriesTitle: string, id: number}>;
  description: string;
  releaseYear: number;
  author: string;
  readingStartDate: string;
  allPages: number;
  pagesRead: number;
  imageURL: string;
}
