import { compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reduxDevTools from './reduxDevTools'

export default compose(applyMiddleware(thunk), reduxDevTools())
