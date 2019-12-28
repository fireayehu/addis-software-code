import React from 'react';
import Avatar from './../../assets/avatar.png';
import Row from './../row/row.component';
import Col from './../col/col.component';
import {
  CardContainer,
  Image,
  ContentContainer,
  CardButton
} from './card.styles';

const Card = () => (
  <CardContainer width="100%">
    <Image src={Avatar} width="100%" />
    <ContentContainer py={1} px={4}>
      <h4>
        <b>Jane Doe</b>
      </h4>
      <Row width="100%">
        <Col width="50%">
          <p>Age | 21 </p>
        </Col>
        <Col width="50%">
          <p>Salary | 24938</p>
        </Col>
        <Col width="50%" pb={3}>
          <CardButton color="white" p={3} bg="green.0">
            Edit
          </CardButton>
        </Col>
        <Col width="50%" pb={3}>
          <CardButton color="white" p={3} bg="red.0">
            Delete
          </CardButton>
        </Col>
      </Row>
    </ContentContainer>
  </CardContainer>
);

export default Card;
