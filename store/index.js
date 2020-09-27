export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'fr',
  navigation: {},
  settings: {},
  message: {},
  agegate: {}
})

export const mutations = {
  SET_NAVIGATION(state, navigation) {
    state.navigation = navigation;
  },
  SET_SETTINGS(state, settings) {
    state.settings = settings;
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  },
  SET_AGEGATE(state, agegate) {
    state.agegate = agegate;
  }
}
