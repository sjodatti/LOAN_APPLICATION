import * as types from './actionTypes';
import appApi from '../../api/appApi';

const createUser = () => ({ type: types.CREATE_USER })

const createUserSuccess = (userData) => ({ type: types.CREATE_USER_SUCCESS, userData })

const loanApplication = () => ({ type: types.LOAN_APPLICATION })

const loanApplicationSuccess = (loanDetails) => ({ type: types.LOAN_APPLICATION_SUCCESS, loanDetails })

const uploadDocument = () => ({ type: types.UPLOAD_DOCUMENT })

const uploadDocumentActionSuccess = (uploadDetails) => ({ type: types.UPLOAD_DOCUMENT_SUCCESS, uploadDetails })

const getApplicationStatus = () => ({ type: types.GET_APPLICATION_STATUS })

const getApplicationStatusSuccess = (applicationStatusDetails) => ({ type: types.GET_APPLICATION_STATUS_SUCCESS, applicationStatusDetails })

export const CreateUserAction = (payload) => {
    return (dispatch) => {
        dispatch(createUser());
        return appApi.createUser(payload).then((userData) => {
            dispatch(createUserSuccess(userData))
        }).catch(error => {
            throw (error)
        })
    };
};

export const loanApplicationAction = (payload) => {
    return (dispatch) => {
        dispatch(loanApplication());
        return appApi.loanApplication(payload).then((loanDetails) => {
            dispatch(loanApplicationSuccess(loanDetails))
        }).catch(error => {
            throw (error)
        })
    };
};

export const uploadDocumentAction = (payload) => {
    return (dispatch) => {
        dispatch(uploadDocument());
        return appApi.uploadDocument(payload).then((uploadDetails) => {
            dispatch(uploadDocumentActionSuccess(uploadDetails))
        }).catch(error => {
            throw (error)
        })
    };
};

export const getApplicationStatusAction = (payload) => {
    return (dispatch) => {
        dispatch(getApplicationStatus());
        return appApi.getApplicationStatus(payload).then((applicationStatusDetails) => {
            dispatch(getApplicationStatusSuccess(applicationStatusDetails))
        }).catch(error => {
            throw (error)
        })
    };
};