import React from 'react';

import Card from './../../components/card/card.component';

import { Row, Col } from './home-page.styles';
class HomePage extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <Card />
        </Col>
      </Row>
    );
  }
}

export default HomePage;
