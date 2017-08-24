import React, { Component, PropTypes } from 'react';
import * as PrpActions from '../../../action/PrpAction';
import {
  Row,
  Col,
  Input,
  Button
} from 'antd';
import { connect } from 'dva';
class CountValue extends Component {
  static propTypes = {
    PropName: PropTypes.string
  };

  constructor(props) {
    super(props);

  }

  countValue (adds) {
    const {
      PropName,
      dispatch
    } = this.props;
    PrpActions.countValue(dispatch, PropName, adds);
  }

  render() {
    const minus = <Button onClick={this.countValue.bind(this, -1)}>-</Button>;
    const add = <Button onClick={this.countValue.bind(this, 1)}>+</Button>
    const {propValues, PropName} = this.props;
    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={6}>
            {minus}
          </Col>
          <Col span={12}>
            <Input value={propValues[PropName]} readOnly/>
          </Col>
          <Col span={6}>
            {add}
          </Col>
        </Row>
        <div style={{marginTop: 10}}>
          {Math.floor((propValues[PropName] - 10) / 2)}
          {
            //  <span>{'==>' +Cost}</span>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  const propValues = store.propValues;
  return { propValues };
}

export default connect(mapStateToProps)(CountValue);
