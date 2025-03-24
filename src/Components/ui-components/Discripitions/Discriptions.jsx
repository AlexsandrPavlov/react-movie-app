import {Typography} from 'antd';
import {useState} from 'react';
import './Discriptions.css';
export const Description = (props) => {
  const {Text} = Typography;
  const {text} = props;

  const [isActive, setIsActive] = useState(false);

  const handleVisibleText = () => {
    setIsActive(!isActive);
  };

  return (
    <Text onClick={handleVisibleText} className={`text ${isActive ? 'active' : ''}`}>
      {text}
    </Text>
  );
};
