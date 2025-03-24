import './TitleCard.css';
import {Typography} from 'antd';

export const TitleCard = (props) => {
  const {Title} = Typography;
  const {title} = props;

  return (
    <Title level={5} className="card-title">
      {title}
    </Title>
  );
};
