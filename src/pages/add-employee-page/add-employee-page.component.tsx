import React from 'react';

import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import FormInput from './../../components/form-input/form-input.component';
import Row from './../../components/row/row.component';
import Col from './../../components/col/col.component';
import CustomButton from './../../components/custom-button/custom-button.component';
import Loader from '../../components/loader/loader.component';

import { createStructuredSelector } from 'reselect';
import { Container } from './add-employee.styles';
import {
  createEmployeeStart,
  setSuccessfulStart
} from './../../redux/employee/empolyee.actions';
import {
  selectLoading,
  selectError,
  selectSuccessful
} from '../../redux/employee/employee.selectors';

interface Props {
  createEmployeeStart: any;
  setSuccessfulStart: any;
  isLoading: boolean;
  successful: boolean;
  error: Error | null;
}

interface State {
  employee_first_name: string;
  employee_last_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}
class AddEmployeePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      employee_first_name: '',
      employee_last_name: '',
      employee_salary: '',
      employee_age: '',
      profile_image: ''
    };
  }
  handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    await this.props.createEmployeeStart({
      employee_name: `${this.state.employee_first_name} ${this.state.employee_last_name}`,
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
      message: 'Employee Added Succesfully',
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
      employee_first_name,
      employee_last_name,
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
              <Col width="45%" p={4}>
                <FormInput
                  label="First Name"
                  name="employee_first_name"
                  type="text"
                  handleChange={this.handleChange}
                  value={employee_first_name}
                  placeholder="John"
                />
              </Col>
              <Col width="45%" p={4}>
                <FormInput
                  label="Last Name"
                  name="employee_last_name"
                  type="text"
                  placeholder="Doe"
                  handleChange={this.handleChange}
                  value={employee_last_name}
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
                  text="Save"
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

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
  successful: selectSuccessful,
  error: selectError
});
const mapDispatchToProps = (dispatch: any) => ({
  createEmployeeStart: (employee: any) =>
    dispatch(createEmployeeStart(employee)),
  setSuccessfulStart: () => dispatch(setSuccessfulStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(AddEmployeePage);
