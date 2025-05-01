import type { BannerType } from "@src/models/banner.model";
import { BookType } from "@src/models/book.model";
import { http, HttpResponse } from "msw";

export type MockBestBooksDataProps = Omit<BookType, "contents">;

const bannersData: BannerType[] = [
  {
    id: 1,
    title: "배너 제목1",
    description: "banner description",
    image: "https://picsum.photos/id/111/1200/400",
    url: "https://some.url",
    target: "_blank",
  },
  {
    id: 2,
    title: "배너 제목2",
    description: "banner description",
    image: "https://picsum.photos/id/222/1200/400",
    url: "https://some.url",
    target: "_blank",
  },
  {
    id: 3,
    title: "배너 제목3",
    description: "banner description",
    image: "https://picsum.photos/id/33/1200/400",
    url: "https://some.url",
    target: "_blank",
  },
];

const URL = "http://localhost:8090/banners";

export const fetchBanners = http.get(URL, () => {
  return HttpResponse.json(bannersData, { status: 200 });
});
