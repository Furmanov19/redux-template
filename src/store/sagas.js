import { spawn } from 'redux-saga/effects';
import {watchLoadPosts} from './posts/saga'

export default function*() {
    yield spawn(watchLoadPosts);
}
