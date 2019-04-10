import React, {Component, Fragment} from 'react';
import  { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }
  componentDidUpdate(prevProps) {
    const { error, alert, message} = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`)
      if (error.msg.university) alert.error(`University: ${error.msg.university.join()}`)
      if (error.msg.class_code) alert.error(`Course Code: ${error.msg.class_code.join()}`)
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join())
      if (error.msg.username) alert.error(error.msg.username.join())
    }

    if (message !== prevProps.message) {
      if (message.courseDeleted) alert.success(message.courseDeleted);
      if (message.courseAdded) alert.success(message.courseAdded);
      if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
    }
  }

  render() {
    return (
      <Fragment />
    )
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts))
