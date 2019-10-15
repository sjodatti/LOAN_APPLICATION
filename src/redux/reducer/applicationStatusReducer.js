import * as types from '../action/actionTypes';
import initialState from '../store/initialSate';

function applicationStatusReducer(state = initialState.applicationStatusDetails, action) {
    switch (action.type) {
        case types.GET_APPLICATION_STATUS_SUCCESS:
            return {
                ...state,
                fetchingApplicationStatusDetails: false,
                ...action.applicationStatusDetails
            }
        case types.GET_APPLICATION_STATUS:
            return {
                ...state,
                fetchingApplicationStatusDetails: true
            }
        default:
            return state
    }
}

export default applicationStatusReducer;