import { put, call, takeLeading, takeEvery } from 'redux-saga/effects';
import api from '../../services/api';
import actions from './actions';

const {
    Types: { LOAD_POSTS_REQUEST,CREATE_POST_REQUEST },
    Creators: { loadPostsSuccess, loadPostsError,createPostSuccess,createPostError },
} = actions;

function* loadPosts(url) {
    try {
        const { data } = yield call(api.get, '/posts');
        yield put(
            loadPostsSuccess(data)
        );


    } catch (e) {
        yield put(loadPostsError(e));
    }
}

function* createPost({request}) {
    try {
        const { data } = yield call(api.post, '/posts',{...request});
        console.log({request});
        console.log({data});
        yield put(
            createPostSuccess({...data})
        );


    } catch (e) {
        yield put(createPostError(e));
    }
}

export function* watchLoadPosts() {
    yield takeEvery(LOAD_POSTS_REQUEST, loadPosts);
    yield takeEvery(CREATE_POST_REQUEST, createPost);
}
