export type BookType = {
  id: number | null;
  name: string;
  imgUrl: string;
  category_id: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  likes: number;
  pub_date: string;
};

export type BookDetailType = {
  categoryName: string;
  liked: boolean;
} & BookType;
