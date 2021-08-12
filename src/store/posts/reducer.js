import { createReducer } from 'reduxsauce';
import actions from './actions';

const { Types } = actions;

const INITIAL_STATE = {
    loading:false,
    saveLoading:false,
    data: [],
    error: null,
};

const loadPostsRequest = (
    state = INITIAL_STATE,
) => {
    return {
        ...state,
        loading:true
    };
};

const loadPostsSuccess = (
    state = INITIAL_STATE,{posts}
) => {
    return {
        ...state,
        data:posts,
        loading:false
    };
};
const loadPostsError = (
    state = INITIAL_STATE,{ error }
) => {
    return {
        ...state,
        error,
        loading:false
    };
};


const createPostRequest = (
    state = INITIAL_STATE,
) => {
    return {
        ...state,
        saveLoading:true
    };
};

const createPostSuccess = (
    state = INITIAL_STATE,{response}
) => {
    return {
        ...state,
        data: [...state.data, {...response}],
        saveLoading:false
    };
};
const createPostError = (
    state = INITIAL_STATE,{ error }
) => {
    return {
        ...state,
        error,
        saveLoading:false
    };
};


export const HANDLERS = {
    [Types.LOAD_POSTS_REQUEST]: loadPostsRequest,
    [Types.LOAD_POSTS_SUCCESS]: loadPostsSuccess,
    [Types.LOAD_POSTS_ERROR]: loadPostsError,

    [Types.CREATE_POST_REQUEST]: createPostRequest,
    [Types.CREATE_POST_SUCCESS]: createPostSuccess,
    [Types.CREATE_POST_ERROR]: createPostError,
};

export default createReducer(INITIAL_STATE, HANDLERS);
