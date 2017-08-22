import React, {
  Component,
  PropTypes
} from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import ValueCard from './sub/ValueCard';
import {PROPS} from './PropConfig';
class PropNames extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  callback = (key) => {
    console.log(key);
  }
  render() {
    // console.log(PROPS);
    return (
      <div style={{textAlign: 'center'}}>
        <ValueCard PropName={PROPS.str}/>
      </div>

    );
  }
}

export default PropNames;