export const state = () => ({
  menuActive: false
})

export const getters = {
  menuActive: state => state.menuActive
}

export const mutations = {
  TOGGLE_MENU(state) {
    state.menuActive = !state.menuActive
  }
}

export const actions = {
  TOGGLE_MENU({ commit }) {
    commit('TOGGLE_MENU')
  }
}
