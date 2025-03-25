import {Typography} from 'antd';
import './ReleaseDate.css';
import {formatDate} from '../../utils/formatDate';

export const ReleaseDate = (props) => {
  const {Text} = Typography;
  const {releaseDate} = props;

  return (
    <Text className="release-date" type="secondary">
      {releaseDate ? formatDate(releaseDate) : 'No data'}
    </Text>
  );
};
