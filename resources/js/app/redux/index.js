import { createStore } from 'redux'
import reducers from './reducers/index'

export default ({ initialState } = {}) => {
    const store = createStore(reducers, initialState)

    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('./reducers/index', () => {
            const newReducers = require('./reducers/index').default
            store.replaceReducer(newReducers)
        })
    }

    return store
}
