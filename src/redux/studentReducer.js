import {
    add_new_student,
    delete_single_student,
    get_all_students,
    update_single_student,
} from "./actionType";

export const initialState = {
    error: null,
    message: "",
    loading: true,
    data: [],
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case get_all_students: {
            return {
                ...state,
                data: action.data,
                error: action.error,
                loading: action.loading,
                message: action.message,
            };
        }

        case add_new_student: {
            return {
                ...state,
                data: [...state.data, action.data],
                message: action.message,
                loading: action.loading,
                error: action.error,
            };
        }

        case delete_single_student: {
            return {
                ...state,
                message: action.message,
                error: action.error,
                data: state.data.filter((item) => item.id !== action.data.id),

                loading: action.loading,
            };
        }

        case update_single_student: {
            return {
                ...state,
                error: action.error,
                message: action.message,
                loading: action.loading,
                data: state.data.map((student) => {
                    if (student.id === action.id) {
                        return action.data;
                    } else {
                        return student;
                    }
                }),
            };
        }

        default: {
            return state;
        }
    }
};
export default studentReducer;

