import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Card from './../../components/card/card.component';
import Row from './../../components/row/row.component';
import Col from './../../components/col/col.component';
import { HomePageContainer } from './home-page.styles';

import { fetchEmployeeStart } from './../../redux/employee/empolyee.actions';
import {
  selectEmployees,
  selectLoading
} from './../../redux/employee/employee.selectors';
import { Employee } from '../../redux/employee/employee.types';
import Loader from '../../components/loader/loader.component';

interface Props {
  fetchEmployeeStart: any;
  employess: Employee[];
  isLoading: boolean;
}

class HomePage extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchEmployeeStart();
  }
  renderEmployees = (employees: Employee[]) => {
    return employees.map(employee => (
      <Col key={employee.id} width="30%" p={3}>
        <Card employee={employee} />
      </Col>
    ));
  };
  render() {
    const { employess, isLoading } = this.props;
    return (
      <HomePageContainer ml={5}>
        <Row width="100%">
          {isLoading ? <Loader /> : this.renderEmployees(employess)}
        </Row>
      </HomePageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  employess: selectEmployees,
  isLoading: selectLoading
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchEmployeeStart: () => dispatch(fetchEmployeeStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
