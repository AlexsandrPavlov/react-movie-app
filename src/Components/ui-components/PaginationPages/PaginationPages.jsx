import {Pagination} from 'antd';
import {useState, useEffect} from 'react';
import './PaginationPage.css';

export const PaginationPages = (props) => {
  const {contentPage, setContentPage = Function.prototype, totalPages} = props;

  const [page, setPage] = useState(contentPage);

  const changePage = (e) => {
    setPage(e);
  };

  useEffect(() => {
    setContentPage(page);
  }, [setContentPage, page]);

  return (
    <Pagination
      className="pagination"
      current={contentPage}
      onChange={(e) => changePage(e)}
      total={totalPages}
      pageSize={1}
      showSizeChanger={false}
    />
  );
};
