import {Alert} from 'antd';
import './ErrAlert.css';

export const ErrAlert = (props) => {
  const {message, description, type} = props;
  return (
    <div className="alert-banner">
      <Alert message={message} description={description || null} type={type} />
    </div>
  );
};
