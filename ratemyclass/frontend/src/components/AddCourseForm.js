import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCourse } from '../actions/courses'

export class AddCourseForm extends Component {
    state = {
        name: '',
        departmentCode: '',
        courseNumber: ''
    }

    static propTypes = {
        addCourse: PropTypes.func.isRequired
    }

    onChange = event => this.setState({[event.target.name]: event.target.value});

    onSubmit = event => {
        event.preventDefault();
        console.log("add course submit");
        const { name, departmentCode, courseNumber } = this.state;
        const class_code = departmentCode + courseNumber;
        const course = { name, class_code }; // These variable names have to match the python model (I think)
        this.props.addCourse(course);
        this.setState({
            name: '',
            departmentCode: '',
            courseNumber: ''
        })
    }
    
  render() {
    const { name, departmentCode, courseNumber } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add New TEST:</h2>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Name of course:</label>
                <input className="form-control" type="text" name="name" onChange={this.onChange} value={name} />
            </div>
            <div className="form-group">
                <label>Department code:</label>
                <input className="form-control" type="text" name="departmentCode" onChange={this.onChange} value={departmentCode} />
            </div>
            <div className="form-group">
                <label>Course number:</label>
                <input className="form-control" type="text" name="courseNumber" onChange={this.onChange} value={courseNumber} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addCourse })(AddCourseForm);
