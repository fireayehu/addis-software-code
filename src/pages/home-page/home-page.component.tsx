import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Card from './../../components/card/card.component';
import Row from './../../components/row/row.component';
import Col from './../../components/col/col.component';
import Loader from '../../components/loader/loader.component';

import { HomePageContainer } from './home-page.styles';
import { Employee } from '../../redux/employee/employee.types';
import {
  selectEmployees,
  selectLoading
} from './../../redux/employee/employee.selectors';

interface Props {
  employess: Employee[];
  isLoading: boolean;
}

class HomePage extends React.Component<Props> {
  renderEmployees = (employees: Employee[]) => {
    return employees.map(employee => (
      <Col key={employee.id} width="40%" p={3}>
        <Card employee={employee} />
      </Col>
    ));
  };
  render() {
    const { employess, isLoading } = this.props;
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <HomePageContainer ml={7}>
          <Row width="100%">{this.renderEmployees(employess)}</Row>
        </HomePageContainer>
      );
    }
  }
}

const mapStateToProps = createStructuredSelector({
  employess: selectEmployees,
  isLoading: selectLoading
});

export default connect(mapStateToProps, null)(HomePage);
