import types from './types'

export const toggleNavbar = (isOpen) => ({ type: types.TOGGLE_NAVBAR, isOpen })

export default {
    toggleNavbar
}
