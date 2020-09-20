export const state = () => ({
  navigation: {},
  settings: {}
})

export const mutations = {
  SET_NAVIGATION(state, navigation) {
    state.navigation = navigation;
  },

  SET_SETTINGS(state, settings) {
    state.settings = settings;
  }
}
