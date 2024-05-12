// reducers.js

const initialState = {
    // Define your initial state here
    courses: [],
    enrolledCourses: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_COURSE':
        return {
          ...state,
          courses: [...state.courses, action.payload],
        };
      case 'ENROLL_COURSE':
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, action.payload],
        };
      // Add more cases for different actions as needed
      default:
        return state;
    }
  };
  
  export default rootReducer;