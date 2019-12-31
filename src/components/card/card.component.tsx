import React from 'react';

import { connect } from 'react-redux';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Avatar from './../../assets/avatar.png';
import Row from './../row/row.component';
import Col from './../col/col.component';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  CardContainer,
  Image,
  ContentContainer,
  CardButton,
  CardTitle,
  CardText
} from './card.styles';
import { Employee } from '../../redux/employee/employee.types';
import { deleteEmployeeStart } from '../../redux/employee/empolyee.actions';

interface Props extends RouteComponentProps {
  employee: Employee;
  deleteEmployeeStart: any;
}

class Card extends React.Component<Props> {
  handleDelete = (employee: Employee) => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.deleteEmployeeStart(employee)
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };
  render() {
    const {
      employee,
      history: { push }
    } = this.props;
    return (
      <CardContainer
        backgroundImage="url('/images/bg.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100%"
      >
        <Row width="100%">
          <Col width="20%">
            <Image src={Avatar} width="100%" p={4} />
          </Col>
          <Col width="40%" ml="140px">
            <CardButton
              onClick={() => push(`/employee/edit/${employee.id}`)}
              color="white"
              p={3}
              bg="green.0"
            >
              Edit
            </CardButton>
            <CardButton
              color="white"
              p={3}
              bg="red.0"
              onClick={() => this.handleDelete(employee)}
            >
              Delete
            </CardButton>
          </Col>
        </Row>
        <ContentContainer px={4} mb={2}>
          <CardTitle color="white">
            <b>
              {employee.employee_name.length > 25
                ? `${employee.employee_name.slice(0, 25)}...`
                : employee.employee_name}
            </b>
          </CardTitle>
          <Row width="100%">
            <Col width="50%">
              <CardText color="teal">Age : {employee.employee_age} </CardText>
            </Col>
            <Col width="50%">
              <CardText color="teal">
                Salary : {employee.employee_salary}
              </CardText>
            </Col>
          </Row>
        </ContentContainer>
      </CardContainer>
    );
  }
}
const mapDispathToProps = (dispatch: any) => ({
  deleteEmployeeStart: (employee: Employee) =>
    dispatch(deleteEmployeeStart(employee))
});
export default connect(null, mapDispathToProps)(withRouter(Card));
