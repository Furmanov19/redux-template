import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    loadPostsRequest:[],
    loadPostsSuccess:['posts'],
    loadPostsError:['error'],

    createPostRequest :['request'],
    createPostSuccess:['response'],
    createPostError:['error'],
});

const Actions = {
    Types,
    Creators,
};

export default Actions;
