import React from 'react';

import { Container } from './add-employee.styles';
import FormInput from './../../components/form-input/form-input.component';
import Row from './../../components/row/row.component';
import Col from './../../components/col/col.component';
import CustomButton from './../../components/custom-button/custom-button.component';
class AddEmployeePage extends React.Component {
  render() {
    return (
      <Container p={4} bg="gray.2">
        <form>
          <Row width="100%">
            <Col width="45%" p={4}>
              <FormInput
                label="First Name"
                name="fname"
                type="text"
                placeholder="John"
              />
            </Col>
            <Col width="45%" p={4}>
              <FormInput
                label="Last Name"
                name="lname"
                type="text"
                placeholder="Doe"
              />
            </Col>
            <Col width="93%" p={4}>
              <FormInput
                label="Profile URL"
                name="profile"
                type="text"
                placeholder="https://pixel.com/profile_img.jpg"
              />
            </Col>
            <Col width="45%" p={4}>
              <FormInput
                label="Salary"
                name="salary"
                type="text"
                placeholder="2000"
              />
            </Col>
            <Col width="45%" p={4}>
              <FormInput label="Age" name="age" type="text" placeholder="18" />
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

export default AddEmployeePage;
