import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import persistState from 'redux-localstorage'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware()

    const enhancer = compose(
        applyMiddleware(sagaMiddleware),
        persistState()
    )
    return {
        ...createStore(rootReducer, enhancer),
        runSaga: sagaMiddleware.run(rootSaga)
    }
}

export default configureStore