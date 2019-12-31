import React from 'react';

import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import FormInput from './../../components/form-input/form-input.component';
import Row from './../../components/row/row.component';
import Col from './../../components/col/col.component';
import CustomButton from './../../components/custom-button/custom-button.component';
import Loader from '../../components/loader/loader.component';

import { Container } from './edit-employee.styles';
import {
  updateEmployeeStart,
  setSuccessfulStart
} from './../../redux/employee/empolyee.actions';
import { Employee } from '../../redux/employee/employee.types';
import {
  selectEmployee,
  selectLoading,
  selectError,
  selectSuccessful
} from '../../redux/employee/employee.selectors';

interface Props {
  updateEmployeeStart: any;
  setSuccessfulStart: any;
  employee: Employee;
  isLoading: boolean;
  successful: boolean;
  error: Error | null;
}

interface State {
  id?: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}
class EditEmployeePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      id: props.employee.id,
      employee_name: this.props.employee.employee_name,
      employee_salary: this.props.employee.employee_salary,
      employee_age: this.props.employee.employee_age,
      profile_image: this.props.employee.profile_image
    };
  }
  handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    await this.props.updateEmployeeStart({
      id: this.state.id,
      employee_name: this.state.employee_name,
      employee_salary: this.state.employee_salary,
      employee_age: this.state.employee_age,
      profile_image: this.state.profile_image
    });
  };
  handleChange = (event: React.FormEvent<EventTarget>) => {
    const { name, value } = event.target as HTMLInputElement;
    if (Object.keys(this.state).includes(name)) {
      this.setState({ [name]: value } as Pick<State, keyof State>);
    }
  };
  handleSuccesfull = () => {
    confirmAlert({
      message: 'Employee Edited Succesfully',
      buttons: [
        {
          label: 'OK',
          onClick: () => this.props.setSuccessfulStart()
        }
      ]
    });
  };
  render() {
    const {
      employee_name,
      employee_age,
      employee_salary,
      profile_image
    } = this.state;
    const { isLoading, successful } = this.props;
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <Container p={4} bg="gray.2">
          {successful && this.handleSuccesfull()}
          <form onSubmit={this.handleSubmit}>
            <Row width="100%">
              <Col width="93%" p={4}>
                <FormInput
                  label="Full Name"
                  name="employee_name"
                  type="text"
                  handleChange={this.handleChange}
                  value={employee_name}
                  placeholder="John"
                />
              </Col>
              <Col width="93%" p={4}>
                <FormInput
                  label="Profile URL"
                  name="profile_image"
                  type="text"
                  placeholder="https://pixel.com/profile_img.jpg"
                  handleChange={this.handleChange}
                  value={profile_image}
                />
              </Col>
              <Col width="45%" p={4}>
                <FormInput
                  label="Salary"
                  name="employee_salary"
                  type="text"
                  placeholder="2000"
                  handleChange={this.handleChange}
                  value={employee_salary}
                />
              </Col>
              <Col width="45%" p={4}>
                <FormInput
                  label="Age"
                  name="employee_age"
                  type="text"
                  placeholder="18"
                  handleChange={this.handleChange}
                  value={employee_age}
                />
              </Col>
              <Col width="80%" p={4}></Col>
              <Col width="10%" p={4}>
                <CustomButton
                  text="Update"
                  type="submit"
                  bg="green.0"
                  color="white"
                />
              </Col>
            </Row>
          </form>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  employee: selectEmployee(ownProps.match.params.id)(state),
  isLoading: selectLoading(state),
  error: selectError(state),
  successful: selectSuccessful(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  updateEmployeeStart: (employee: any) =>
    dispatch(updateEmployeeStart(employee)),
  setSuccessfulStart: () => dispatch(setSuccessfulStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(EditEmployeePage);
