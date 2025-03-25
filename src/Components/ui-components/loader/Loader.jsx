import {LoadingOutlined} from '@ant-design/icons';
import {Flex, Spin} from 'antd';
import './Loader.css';

export const Loader = () => (
  <Flex className="loader" align="center" gap="middle">
    <Spin indicator={<LoadingOutlined spin />} size="large" />
  </Flex>
);
