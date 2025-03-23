import {Pagination} from 'antd';

export const PaginationPages = () => {
  return <Pagination className="Pgination" current="1" total={50} pageSize={6} showSizeChanger={false} />;
};
