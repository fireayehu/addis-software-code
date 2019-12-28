import React from 'react';
import Avatar from './../../assets/avatar.png';
import CustomButton from './../custom-button/custom-button.component';
import {
  CardContainer,
  Image,
  ContentContainer,
  Row,
  Col
} from './card.styles';

const Card = () => (
  <CardContainer>
    <Image src={Avatar} />
    <ContentContainer>
      <h4>
        <b>Jane Doe</b>
      </h4>
      <Row>
        <Col>
          <p>Age | 21 </p>
        </Col>
        <Col>
          <p>Salary | 24938</p>
        </Col>
        <Col>
          <CustomButton text="Edit" color="#008b00" />
        </Col>
        <Col>
          <CustomButton text="Delete" />
        </Col>
      </Row>
    </ContentContainer>
  </CardContainer>
);

export default Card;
