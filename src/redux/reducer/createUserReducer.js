import * as types from '../action/actionTypes';
import initialState from '../store/initialSate';

function createUserReducer(state = initialState.userData, action) {
    switch (action.type) {
        case types.CREATE_USER_SUCCESS:
            return {
                ...state,
                fetchingUserData: false,
                ...action.userData
            }
        case types.CREATE_USER:
            return {
                ...state,
                fetchingUserData: true
            }
        default:
            return state
    }
}

export default createUserReducer;