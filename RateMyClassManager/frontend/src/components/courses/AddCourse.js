import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {addCourse} from "../../actions/courses";
import {Link, Redirect} from "react-router-dom";

export class AddCourse extends Component {

  state = {
    name: '',
    university: '',
    class_code: '',
    gen_ed: '',
    submitted: false
  }

  static propTypes = {
    addCourse: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
   }
  onChange = event => this.setState({ [event.target.name]: event.target.value })

  onSubmit = event => {
    event.preventDefault();
    const { name , university, class_code, gen_ed} = this.state
    const course = { name, university, class_code, gen_ed}
    this.props.addCourse(course);
    this.setState({
      name: "",
      university: "",
      class_code: "",
      gen_ed:"",
      review: "",
      submitted: true
    });
  }
  render () {
    const {name, university, class_code, gen_ed} = this.state;
    const {isAuthenticated} = this.props.auth

    const guestLinks = (
        <div>
          <Redirect to="/login" className = "text-light"/>
        </div>
    )

    const authLinks = (
      <div className="jumbotron">
      <h1 className="display-4"> Add a New Course</h1>
      <h3 className="lead">Did not see your course? Add a new course here!</h3>
      <hr className="my-4"/>
      <div className = "card card-body mt-5 mb-5">
        <form onSubmit = {this.onSubmit}>
          <div className = "form-group">
            <h5>Course Name</h5>
            <input className = "form-control" placeholder="eg. Software Engineering" type = "text" name = "name" onChange = {this.onChange} value = {name} />
          </div>
          <div className = "form-group">
            <h5>University</h5>
            <input className = "form-control" placeholder="eg. University of Pittsburgh" type = "text" name = "university" onChange = {this.onChange} value = {university} />
          </div>
          <div className = "form-group">
            <h5>Course Code</h5>
            <input className = "form-control" placeholder="eg. CS1530" type = "text" name = "class_code" onChange = {this.onChange} value = {class_code} />
          </div>
          <div className = "form-group">
            <h5>Class Type (i.e. gen-ed, core class, etc.)</h5>
            <input className = "form-control" placeholder="eg. elective" type = "text" name = "gen_ed" onChange = {this.onChange} value = {gen_ed} />
          </div>

          <div className = "form-group">
            <button type="sumbit" className = "btn btn-outline-success btn-lg btn-block"> Add Course </button>
          </div>

        </form>
        </div>
      </div>
    )
    return (
      <div>
      {this.state.submitted ? (<Redirect to={"/viewcourse/" + 1}/>) : (isAuthenticated ? authLinks: guestLinks)}
      </div>

    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {addCourse})(AddCourse)
