import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

export const formatNumber = (number: number) => {
  return number.toLocaleString();
};

export const formatDate = (date: string, format?: string) => {
  return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
};
