import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import configStore from './redux'
import App from './components/app'

const store = configStore()

const Container = () => (
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
)

render(<Container />, document.querySelector('[data-js="app"]'));

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./components/app', () => {
        render(<Container />, document.querySelector('[data-js="app"]'));
    })
}
