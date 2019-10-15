import userData from './createUserReducer';
import { combineReducers } from 'redux';
import loanDetails from './loanApplicationReducer';
import uploadDetails from './uploadDocumentReducer';
import applicationStatusDetails from './applicationStatusReducer';


export default combineReducers({
    userData,
    loanDetails,
    uploadDetails,
    applicationStatusDetails
});


