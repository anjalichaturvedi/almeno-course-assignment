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

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (courseId) => {
    const course = courses.find(course => course.id === courseId);
    setSelectedCourse(course);
  };

  return (
    <div>
      <h1>Course Listing</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id} onClick={() => handleCourseClick(course.id)} style={{ cursor: 'pointer' }}>
            <p>{course.name}</p>
            <p>{course.instructor}</p>
            {/* Add more course information here */}
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <div>
          <h2>Course Details</h2>
          <p><strong>Course Name:</strong> {selectedCourse.name}</p>
          <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
          {/* Display more course details here */}
        </div>
      )}
    </div>
  );
}

export default CourseListingPage;