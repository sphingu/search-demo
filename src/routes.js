import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/App'
import MoviePage from './containers/MoviePage'
//import HomePage from './components/HomePage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MoviePage} />
    </Route>
)