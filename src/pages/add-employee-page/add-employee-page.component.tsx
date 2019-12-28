import React from 'react';

import { Row, Col, Container } from './add-employee.styles';
import FormInput from './../../components/form-input/form-input.component';

class AddEmployeePage extends React.Component {
  render() {
    return (
      <Container>
        <form>
          <Row>
            <Col>
              <FormInput
                label="First Name"
                name="fname"
                type="text"
                placeholder="John"
              />
            </Col>
            <Col>
              <FormInput
                label="Last Name"
                name="lname"
                type="text"
                placeholder="Doe"
              />
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}

export default AddEmployeePage;
