import {FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, FETCH_USERS_START} from "../actions/user";

const initialState = {
    data: [],
    error: null,
    fetching: false
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_ERROR: {
            return {
                ...state, error: action.error
            };
        }

        case FETCH_USERS_START: {
            return {
                ...state, fetching: true
            };
        }

        case FETCH_USERS_SUCCESS: {
            return {
                ...state, data: action.data
            };
        }

        default:
            return state;
    }
};

export default dataReducer;
