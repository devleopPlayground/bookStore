import type { BannerType } from "@src/models/banner.model";
import { requestHandler } from "./http";

export const fetchBanner = async () => {
  return await requestHandler<BannerType[]>("get", "/banners");
};
