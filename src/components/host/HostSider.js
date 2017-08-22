import React, {
  Component,
  PropTypes
} from 'react';
import {
  Menu,
  Icon
} from 'antd';
import {
  Link
} from 'dva/router';
const SubMenu = Menu.SubMenu;
class HostSider extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  buildMenus = () => {
    const menus = [{
      title: '总览',
      path: '/'
    }, {
      title: '属性',
      path: '/propvalues'
    }, {
      title: '种族',
      path: '/races'
    }, {
      title: '职业',
      path: '/classes'
    }, {
      title: '技能',
      path: '/skills'
    }, {
      title: '专长',
      path: '/feats'
    }, {
      title: '背景描述',
      path: '/stories'
    }];
    return menus.map((mnItms) => {
      return (
        <Menu.Item key={mnItms.path}>
                <Link to={mnItms.path}>{mnItms.title}</Link>
        </Menu.Item>
      );
    });
  }
  render() {
    const {
      location
    } = this.props;
    return (
      <Menu theme="dark" defaultSelectedKeys={['/']}
            selectedKeys={[location.pathname]} mode="inline">
          {
            this.buildMenus()
          }
      </Menu>
    );
  }
}

export default HostSider;