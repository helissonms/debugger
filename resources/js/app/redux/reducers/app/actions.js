import http from '../../../http'
import { FETCHING, SUCCESS } from './types'

export const getData = () => async (dispatch, getState) => {
    dispatch({
        type: FETCHING
    })

    const { data } = await http.get('/me')

    dispatch({
        type: SUCCESS,
        payload: data
    })
}

export default {
    getData
}
