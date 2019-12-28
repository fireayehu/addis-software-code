import React from 'react';

import Card from './../../components/card/card.component';
import Row from './../../components/row/row.component';
import Col from './../../components/col/col.component';
import { HomePageContainer } from './home-page.styles';
class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer ml={5}>
        <Row width="100%">
          <Col width="30%" p={3}>
            <Card />
          </Col>
          <Col width="30%" p={3}>
            <Card />
          </Col>
          <Col width="30%" p={3}>
            <Card />
          </Col>
          <Col width="30%" p={3}>
            <Card />
          </Col>
          <Col width="30%" p={3}>
            <Card />
          </Col>
          <Col width="30%" p={3}>
            <Card />
          </Col>
          <Col width="30%" p={3}>
            <Card />
          </Col>
        </Row>
      </HomePageContainer>
    );
  }
}

export default HomePage;
