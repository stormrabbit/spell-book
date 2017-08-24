import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Input, Button } from 'antd';
import styles from './ValueCard.css';
import CountValue from './CountValue';
class ValueCard extends Component {
  static propTypes = {
    PropName: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: 8,
      cost: 0
    };
  }

  callBackCountValue = (value, nextCost) => {
    const {
      cost
    } = this.state;


    this.setState({
      value,
      cost: cost + nextCost
    });
  }

  render() {
    const {
      PropName
    } = this.props;
    const {
      value,
      cost
    } = this.state;
    return (
      <div className={styles.normal}>
        <Card>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={11}>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={12}>
                  <span>{PropName.title}</span>
                </Col>
                <Col span={12}>
                  <CountValue PropName={PropName.propName} />
                </Col>
              </Row>
            </Col>
            <Col span={2} />
            <Col span={11}>
              <p style={{ textAlign: 'left' }}>
                {PropName.des}
              </p>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

// function mapStateToProps(store) {
//   const propValues = store.propValues;
//   return { propValues };
// }

// export default connect(mapStateToProps)(ValueCard);
export default ValueCard;
