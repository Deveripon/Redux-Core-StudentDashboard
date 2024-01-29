import axios from "axios";
import {
    add_new_student,
    delete_single_student,
    get_all_students,
    update_single_student,
} from "./actionType";
import { initialState } from "./studentReducer";
const students_api = import.meta.env.VITE_STUDENTS_API;

//get all students handler
export const getAllStudents = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(students_api);
            if (response.data) {
                dispatch({
                    type: get_all_students,
                    ...initialState,
                    data: response.data,
                    message: "data get success",
                    loading: false,
                });
            }
        } catch (error) {
            dispatch({
                type: get_all_students,
                ...initialState,
                loading: false,
                error: error.message,
            });
        }
    };
};

//add new students
export const addNewStudent = (dataObj) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(students_api, dataObj);
            if (response.data) {
                dispatch({
                    type: add_new_student,
                    ...initialState,
                    loading: false,
                    data: response.data,
                    message: "Student added successfully",
                });
            }
        } catch (error) {
            dispatch({
                type: add_new_student,
                ...initialState,
                loading: false,
                error: error.message,
            });
        }
    };
};

//delete a student

export const deleteSingleStudent = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(students_api + "/" + id);
            if (response.data) {
                dispatch({
                    type: delete_single_student,
                    data: response.data,
                    loading: false,
                    message: "Deleted Successfully",
                });
            }
        } catch (error) {
            dispatch({
                type: delete_single_student,
                ...initialState,
                error: error.message,
                loading: false,
            });
        }
    };
};

//Edit Student
export const updateStudent = (id, data) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(students_api + "/" + id, data);
            if (response.data) {
                dispatch({
                    type: update_single_student,
                    ...initialState,
                    loading: false,
                    message: "Students updated successfully",
                    data: response.data,
                    id: id,
                });
            }
        } catch (error) {
            dispatch({
                type: update_single_student,
                loading: false,
                error: error.message,
                ...initialState,
            });
        }
    };
};

