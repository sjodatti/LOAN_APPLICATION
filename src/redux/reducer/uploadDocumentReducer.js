import * as types from '../action/actionTypes';
import initialState from '../store/initialSate';

function uploadDocumentReducer(state = initialState.uploadDetails, action) {
    switch (action.type) {
        case types.UPLOAD_DOCUMENT_SUCCESS:
            return {
                ...state,
                fetchingUploadDetails: false,
                ...action.uploadDetails
            }
        case types.UPLOAD_DOCUMENT:
            return {
                ...state,
                fetchingUploadDetails: true
            }
        default:
            return state
    }
}

export default uploadDocumentReducer;