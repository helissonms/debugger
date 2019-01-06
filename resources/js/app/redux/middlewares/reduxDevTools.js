export default () => {
    if (process.env.NODE_ENV === 'development') {
        if (window.__REDUX_DEVTOOLS_EXTENSION__) {
            return window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
        }
    }

    return (x) => x
}
