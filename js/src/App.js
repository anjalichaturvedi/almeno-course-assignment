import React from 'react';
import CourseListingPage from './CourseListingPage';
import CourseDetailsScreen from './CourseDetailScreen';
import StudentDashboard from './StudentDashboard';

const App = () => {
  // Dummy data for courses and enrolled courses
  const courses = [
    { id: 1, name: 'Course 1', instructor: 'Instructor 1', description: 'Description for Course 1', enrollmentStatus: 'Enrolled', duration: '4 weeks', schedule: 'Mon/Wed/Fri 10am-12pm', location: 'Online', prerequisites: 'None', syllabus: 'Week 1: Introduction, Week 2: Basics, Week 3: Advanced, Week 4: Final Project' },
    { id: 2, name: 'Course 2', instructor: 'Instructor 2', description: 'Description for Course 2', enrollmentStatus: 'Not Enrolled', duration: '6 weeks', schedule: 'Tue/Thu 1pm-3pm', location: 'Campus A', prerequisites: 'Basic knowledge of React', syllabus: 'Week 1: Fundamentals, Week 2: State Management, Week 3: Hooks, Week 4: Context API, Week 5: Redux, Week 6: Project' }
  ];

  const enrolledCourses = [
    { id: 1, name: 'Course 1', instructor: 'Instructor 1', thumbnail: 'course1.jpg', dueDate: '2023-01-15', progress: 80 },
    { id: 2, name: 'Course 2', instructor: 'Instructor 2', thumbnail: 'course2.jpg', dueDate: '2023-02-28', progress: 50 }
  ];

  return (
    <div>
      <h1>My Learning App</h1>
      <CourseListingPage courses={courses} />
      <CourseDetailsScreen course={courses[0]} /> {/* Displaying details for the first course */}
      <StudentDashboard enrolledCourses={enrolledCourses} />
    </div>
  );
}

export default App;