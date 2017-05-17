import React, { Component } from 'react';
import { connect }          from 'react-redux';

import {
  Card,
  CardSection,
  Input,
  Button
} from './common';
import {
  employeeUpdate
} from '../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='jane'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ props: 'name', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ props: 'phone', value})}
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>  
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  return { name, phone, shift } = employeeForm;
};

export default connect(null, { employeeUpdate })(EmployeeCreate);