import { FETCHING, SUCCESS } from './types'

const initialState = {
    name: 'debugger',
    user: {
        name: null,
        email: null,
        email_verified_at: null,
        created_at: null,
        updated_at: null,
        is_admin: false
    },
    isFetching: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case SUCCESS:
            return {
                ...state,
                user: {...action.payload},
                isFetching: false
            }
        default:
            return state
    }
}
