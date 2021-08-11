import { put, call, takeLeading, takeEvery } from 'redux-saga/effects';
import api from '../../services/api';
import actions from './actions';

const {
    Types: { LOAD_POSTS_REQUEST },
    Creators: { loadPostsSuccess, loadPostsError },
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

export function* watchLoadPosts() {
    yield takeEvery(LOAD_POSTS_REQUEST, loadPosts);
}
