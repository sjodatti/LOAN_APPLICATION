import * as types from '../action/actionTypes';
import initialState from '../store/initialSate';

function loanApplicationReducer(state = initialState.loanDetails, action) {
    switch (action.type) {
        case types.LOAN_APPLICATION_SUCCESS:
            return {
                ...state,
                fetchingLoanDetails: false,
                ...action.loanDetails
            }
        case types.LOAN_APPLICATION:
            return {
                ...state,
                fetchingLoanDetails: true
            }
        default:
            return state
    }
}

export default loanApplicationReducer;