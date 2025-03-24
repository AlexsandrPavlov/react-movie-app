import {Pagination} from 'antd';
import './PaginationPage.css';

export const PaginationPages = (props) => {
  const {contentPage, setContentPage, totalPages} = props;

  const changePage = (page) => {
    setContentPage(page);
  };

  return (
    <Pagination
      className="pagination"
      current={contentPage}
      onChange={changePage}
      total={totalPages * 6}
      pageSize={6}
      showSizeChanger={false}
    />
  );
};
