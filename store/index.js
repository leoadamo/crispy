export const state = () => ({
  menuLinks: [],
  menuActive: false
})

export const getters = {
  menuLinks: state => state.menuLinks,
  menuActive: state => state.menuActive
}

export const mutations = {
  SET_MENU(state, menuLinks) {
    state.menuLinks = menuLinks
  },

  TOGGLE_MENU(state) {
    state.menuActive = !state.menuActive
  }
}

export const actions = {
  async nuxtServerInit(
    { dispatch },
    { app }
  ) {
    const res = await app.$get('/links')

    dispatch('SET_MENU', res)
  },

  SET_MENU({ commit }, value) {
    commit('SET_MENU', value)
  },

  TOGGLE_MENU({ commit }) {
    commit('TOGGLE_MENU')
  }
}
