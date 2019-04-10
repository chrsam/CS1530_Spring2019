import React, { Component, Fragment} from 'react';
import AddCourse from './AddCourse';
import CourseList from './CourseList';
// import {Link} from "react-router-dom";

export default function CourseDashboard() {
  return(

    <Fragment>
    <AddCourse />
    <CourseList/>

    </Fragment>

  )

}
