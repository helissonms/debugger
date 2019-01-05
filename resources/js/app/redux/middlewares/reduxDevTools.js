export default () => {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        return window.__REDUX_DEVTOOLS_EXTENSION__()
    }

    return () => {}
}
