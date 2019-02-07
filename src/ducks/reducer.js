const INITIAL_STATE = {
  campusInfo: [],
  studentList: []
};

// Campus Info
const SET_CAMPUS = "SET_CAMPUS";

// Student Info

const SET_STUDENTS = "SET_STUDENTS";
const POST_STUDENT = "POST_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CAMPUS:
      return {
        ...state,
        campusInfo: action.payload
      };
    case SET_STUDENTS:
      return {
        ...state,
        studentList: action.payload
      };
    case POST_STUDENT:
      return {
        ...state,
        studentList: action.payload
      };
    case DELETE_STUDENT:
      return {
        ...state,
        studentList: action.payload
      };
    default:
      return state;
  }
};

export const setCampus = campusInfo => {
  return {
    type: SET_CAMPUS,
    payload: campusInfo
  };
};

export const setStudents = studentList => {
  return {
    type: SET_STUDENTS,
    payload: studentList
  };
};

export const postStudents = studentList => {
  return {
    type: POST_STUDENT,
    payload: studentList
  };
};

export const deleteStudent = studentList => {
  return {
    type: DELETE_STUDENT,
    payload: studentList
  };
};
