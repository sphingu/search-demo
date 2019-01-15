import { put, call } from 'redux-saga/effects'
import { getMovies } from '../apis/movieApi'
import * as types from '../constants/actionTypes'

export function* getMovieSaga({payload}){
    try {
        const movies = yield call(getMovies, payload)
        yield put({ type: types.GET_MOVIES_SUCCESS, movies })
    } catch (error) {
        yield put({ type: types.GET_MOVIES_ERROR, error })
    }
}