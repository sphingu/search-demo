import { takeLatest } from 'redux-saga/effects'
import { getMovieSaga } from './movieSaga'
import * as types from '../constants/actionTypes'

export default function* watchGetMovie(){
    yield takeLatest(types.GET_MOVIES_REQUEST, getMovieSaga)
}