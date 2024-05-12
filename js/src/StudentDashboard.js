import React from 'react';

const StudentDashboard = ({ enrolledCourses }) => {
  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>
      <ul className="course-list">
        {enrolledCourses.map(course => (
          <li key={course.id} className="course-item">
            <div>
              <img src={course.thumbnail} alt="Course Thumbnail" className="course-thumbnail" />
            </div>
            <div className="course-details">
              <p><strong>Course Name:</strong> {course.name}</p>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Due Date:</strong> {course.dueDate}</p>
              <p><strong>Progress:</strong> <progress value={course.progress} max="100"></progress></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;