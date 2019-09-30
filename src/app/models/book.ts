export class Book {
  title: string;
  bookId: number;
  series: {seriesId: number, seriesTitle: string};
  description: string;
  releaseYear: number;
  author: string;
  readingStartDate: string;
  allPages: number;
  pagesRead: number;
  imageURL: string;
  favourite: boolean;
}
