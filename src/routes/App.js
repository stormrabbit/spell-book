import React, { Component, PropTypes } from 'react';
import styles from './App.css';
import { Layout, Affix} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import HostSider from '../components/host/HostSider';
class App extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
    console.log('test==>', this.refs);
  }

  render() {
    // console.log('==>', document.body.clientHeight);
    const clientHight = document.body.clientHeight;
    const { location, children } = this.props;
    const {collapsed} = this.state;
    return (
      <Layout>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
              collapsible
              collapsed={collapsed}
              onCollapse={this.onCollapse}
              ref="testSider"
      >
        <div className="logo" ref="fcukwhy"/>
        <HostSider location={location}/>
      </Sider>
      <Layout style={{ marginLeft:!!collapsed? 64 : 200 }}>
        <Header style={{ background: '#fff', padding: 0 ,display: 'none'}} >
          fuck you
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center', height: clientHight }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
         @  A Spell Book From Arane Tricker
        </Footer>
      </Layout>
    </Layout>
    );
  }
}

export default App;
