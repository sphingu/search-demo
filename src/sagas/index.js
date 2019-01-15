import { fork } from 'redux-saga/effects'
import getMovieWatcher from './watcher'

export default function* start(){
    yield fork(getMovieWatcher)
}