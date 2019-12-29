import React from 'react';

import { connect } from 'react-redux';

import Card from './../../components/card/card.component';
import Row from './../../components/row/row.component';
import Col from './../../components/col/col.component';
import { HomePageContainer } from './home-page.styles';

import { fetchEmployeeStart } from './../../redux/employee/empolyee.actions';

interface Props {
  fetchEmployeeStart: any;
}

class HomePage extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchEmployeeStart();
  }
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
const mapDispatchToProps = (dispatch: any) => ({
  fetchEmployeeStart: () => dispatch(fetchEmployeeStart())
});
export default connect(null, mapDispatchToProps)(HomePage);
