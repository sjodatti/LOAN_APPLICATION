import * as types from './actionTypes';
import appApi from '../../api/appApi';

const createUser = () => ({ type: types.CREATE_USER })

const createUserSuccess = (userData) => ({ type: types.CREATE_USER_SUCCESS, userData })

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