import React, { useState } from 'react';

const StudentDashboard = ({ enrolledCourses }) => {
  const [completedCourses, setCompletedCourses] = useState([]);

  const toggleCompletion = (courseId) => {
    if (completedCourses.includes(courseId)) {
      setCompletedCourses(completedCourses.filter(id => id !== courseId));
    } else {
      setCompletedCourses([...completedCourses, courseId]);
    }
  };

  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>
      <ul className="course-list">
        {enrolledCourses.map(course => {
          const isCompleted = completedCourses.includes(course.id);
          const progress = isCompleted ? 100 : course.progress;

          return (
            <li key={course.id} className="course-item">
              <div>
                <img src={course.thumbnail} alt="Course Thumbnail" className="course-thumbnail" />
              </div>
              <div className="course-details">
                <p><strong>Course Name:</strong> {course.name}</p>
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Due Date:</strong> {course.dueDate}</p>
                <p><strong>Progress:</strong> <progress value={progress} max="100"></progress></p>
                <p>
                  <button onClick={() => toggleCompletion(course.id)}>
                    {isCompleted ? "Mark Incomplete" : "Mark Complete"}
                  </button>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudentDashboard;