import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux'
import App from './components/app'

const Container = () => (
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
)

render(<Container />, document.querySelector('[data-js="app"]'));
