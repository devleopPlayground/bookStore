import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import type { CategoryType } from "../models/category.model";

const useCategory = () => {
  const [category, setCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    fetchCategory().then((response) => {
      if (!response) return;

      const categoryWithAll = [
        { category_id: null, category_name: "전체" },
        ...response,
      ];

      setCategory(categoryWithAll);
    });
  }, []);

  return { category };
};

export default useCategory;
