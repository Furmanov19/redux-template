import { createReducer } from 'reduxsauce';
import actions from './actions';

const { Types } = actions;

const INITIAL_STATE = {
    loading:false,
    data: [],
    error: null,
};

const loadPostsRequest = (
    state = INITIAL_STATE,
) => {
    return {
        ...state,
        posts: {
            ...state.posts,
            loading:true
        },
    };
};

const loadPostsSuccess = (
    state = INITIAL_STATE,{posts}
) => {
    return {
        ...state,
        posts: {
            posts,
            loading:false
        },
    };
};
const loadPostsError = (
    state = INITIAL_STATE,{ error }
) => {
    return {
        ...state,
        posts: {
            error,
            loading:false
        },
    };
};

const searchAccounts = () => INITIAL_STATE;

export const HANDLERS = {
    [Types.LOAD_POSTS_REQUEST]: loadPostsRequest,
    [Types.LOAD_POSTS_SUCCESS]: loadPostsSuccess,
    [Types.LOAD_POSTS_ERROR]: loadPostsError,
};

export default createReducer(INITIAL_STATE, HANDLERS);
