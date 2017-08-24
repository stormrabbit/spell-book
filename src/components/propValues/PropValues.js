import React, {
  Component,
  PropTypes
} from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import ValueCard from './sub/ValueCard';
import { PROPS } from './PropConfig';
import { connect } from 'dva';
class PropNames extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }


  render() {
    // console.log(PROPS);
    const { totalPoints } = this.props;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{totalPoints}点</h1>
        {
          Object.keys(PROPS).map((keys, index) => {
            return <ValueCard key={index} PropName={PROPS[keys]} />;
          })
        }
      </div>

    );
  }
}

function mapStateToProps(store) {
  const { propValues: { total: totalPoints } } = store;
  return { totalPoints };
}

export default connect(mapStateToProps)(PropNames);