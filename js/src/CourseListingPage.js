import React, { useState } from 'react';

const CourseListingPage = () => {
  const [courses] = useState([
    {
      id: 1,
      name: 'Course 1',
      instructor: 'Instructor 1',
      // Add more course details as needed
    },
    {
      id: 2,
      name: 'Course 2',
      instructor: 'Instructor 2',
      // Add more course details as needed
    },
    // Add more dummy courses here
  ]);

  return (
    <div>
      <h1>Course Listing</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <p>{course.name}</p>
            <p>{course.instructor}</p>
            {/* Add more course information here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseListingPage;