import * as types from '../constants/actionTypes'

export const getMovieAction = (payload) =>({
    type: types.GET_MOVIES_REQUEST,
    payload
})

export const loadMoreMovies = (payload) => ({
    type: types.LOAD_MORE_MOVIES,
    payload
})