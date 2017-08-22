import React, { Component, PropTypes } from 'react';
import {
  Row,
  Col,
  Input,
  Button
} from 'antd';
class CountValue extends Component {
  static propTypes = {
    Value: PropTypes.number,
    Cost: PropTypes.number,
    callBack: PropTypes.func
  };

  constructor(props) {
    super(props);

  }

  countValue(extrl) {
    const {
      Value,
      onCallBack
    } = this.props;
    const nextValue = Value + extrl;
    if(nextValue > 18 || nextValue < 3 ) { //  单一属性不能大于 18 也不能 小于 3
      return ;
    }
    let cost = 1;
    if(Value === 14 || Value === 15) {
      cost = 2;
    } else if (Value > 15) {
      cost = 3;
    }
    if(!! onCallBack && !! Value) {
      onCallBack(nextValue, cost*extrl);
    }
  }

  render() {
    const minus = <Button onClick={this.countValue.bind(this, -1)}>-</Button>;
    const add = <Button onClick={this.countValue.bind(this, 1)}>+</Button>
    const {Value, Cost} = this.props;
    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={6}>
            {minus}
          </Col>
          <Col span={12}>
            <Input value={Value} readOnly/>
          </Col>
          <Col span={6}>
            {add}
          </Col>
        </Row>
        <div style={{marginTop: 10}}>
          {Math.floor((Value - 10) / 2)}
          <span>{'==>' +Cost}</span>
        </div>
      </div>
    );
  }
}

export default CountValue;
