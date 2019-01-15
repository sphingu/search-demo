import * as types from '../constants/actionTypes'

const initialState = {
    movies: [],
    displayedMovies: [],
    pageIndex: 0,
    pageSize: 8,
    totalPages: 0
}

export default (state = initialState, action) => {
    switch (action.type) {        
        case types.GET_MOVIES_SUCCESS:
            return Object.assign({},state,{
                movies: [...action.movies],
                displayedMovies: [],
                totalPages: parseInt(action.movies.length / state.pageSize),
                pageIndex: 0 
            })
        case types.LOAD_MORE_MOVIES:
            return Object.assign({},state,{
                displayedMovies: [...state.movies.filter((movie, i) => (i < state.pageSize * action.payload))],
                pageIndex: action.payload
            })
        default:
            return state
    }
}