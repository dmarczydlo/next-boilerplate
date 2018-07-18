import fetch from "isomorphic-unfetch";

const FETCH_USERS_START = 'FETCH_USERS_START';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_END';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';


const fetchUsersStart = () => {
    return {
        type: FETCH_USERS_START
    };
};

const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USERS_SUCCESS,
        data
    };
};

const fetchUsersError = (error) => {
    return {
        error,
        type: FETCH_USERS_ERROR,
    };
};

const fetchUsersFromApi = async () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(URL);
    const users = await res.json();
    return users;
};


const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersStart());
        fetchUsersFromApi().then((res) => {
            dispatch(fetchUsersSuccess(res));
        }).catch((error) => {
            dispatch(fetchUsersError(error));
        })
    };
};

export {
    fetchUsers,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_START,
    FETCH_USERS_ERROR
}
