import React from 'react';

const CourseDetailsScreen = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Pre-requisites:</strong> {course.prerequisites}</p>
      <details>
        <summary><strong>Syllabus</strong></summary>
        <p>{course.syllabus}</p>
      </details>
    </div>
  );
}

export default CourseDetailsScreen;