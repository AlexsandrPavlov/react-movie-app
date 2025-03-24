import {Typography} from 'antd';
import './ReleaseDate.css';

export const ReleaseDate = (props) => {
  const {Text} = Typography;
  const {releaseDate} = props;
  return (
    <Text className="release-date" type="secondary">
      {releaseDate ? releaseDate : 'No data'}
    </Text>
  );
};
