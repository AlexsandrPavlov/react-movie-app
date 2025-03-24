import {Menu} from 'antd';
import {menu} from './data/menu.js';
import './AppMenu.css';

export const AppMenu = (props) => {
  const {menuPage, setMenuPage} = props;

  const selectMenu = (e) => {
    setMenuPage(e.key);
  };

  return (
    <Menu className="header-app-menu" mode="horizontal" items={menu} selectedKeys={[menuPage]} onClick={selectMenu} />
  );
};
