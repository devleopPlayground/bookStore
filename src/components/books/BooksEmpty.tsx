import { FaSmileWink } from "react-icons/fa";
import Empty from "../common/Empty";
import { Link } from "react-router-dom";

const BooksEmpty = () => {
  return (
    <Empty
      icon={<FaSmileWink />}
      title="검색 결과가 없습니다."
      description={<Link to="/books">전체 검색 결과로 이동</Link>}
    />
  );
};

export default BooksEmpty;
