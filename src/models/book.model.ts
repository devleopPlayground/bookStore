export type BookType = {
  id: number | null;
  title: string;
  imgUrl: number;
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
  category_name: string;
  liked: boolean;
} & BookType;
