import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import type { CategoryType } from "../models/category.model";
import { useLocation } from "react-router-dom";

const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<CategoryType[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);

    if (params.get("category_id")) {
      setCategory((prevState) => {
        return prevState.map((item) => {
          return {
            ...item,
            isActive: item.category_id == Number(params.get("category_id")),
          };
        });
      });
    } else {
      setCategory((prevState) => {
        return prevState.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then((response) => {
      if (!response) return;

      const categoryWithAll = [
        { category_id: null, category_name: "전체" },
        ...response,
      ];

      setCategory(categoryWithAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { category };
};

export default useCategory;
