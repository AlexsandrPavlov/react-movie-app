import './TagGenre.css';
import {Tag} from 'antd';

export const TagGenre = (props) => {
  const {genre} = props;
  return <Tag>{genre}</Tag>;
};
