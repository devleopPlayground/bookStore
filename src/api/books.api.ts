import { BookType } from "../models/book.model";
import { PaginationType } from "../models/pagination.model";
import { httpClient } from "./http";

type ParamsType = {
  category_id?: number | null;
  news?: boolean;
  currentPage?: number;
  limit: number;
};

type FetchResponseType = {
  books: BookType[];
  pagination: PaginationType;
};

export const fetchBooks = async (params: ParamsType) => {
  try {
    const response = await httpClient.get<FetchResponseType>("/books", {
      params,
    });

    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};
