export const state = () => ({
  navigation: {},
  settings: {},
  message: {},
  agegate: {},
  contacts: []
});

export const mutations = {
  SET_NAVIGATION(state, navigation) {
    state.navigation = navigation;
  },
  SET_SETTINGS(state, settings) {
    state.settings = settings;
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  },
  SET_AGEGATE(state, agegate) {
    state.agegate = agegate;
  },
  SET_CONTACT(state, contacts) {
    state.contacts = contacts
  }
}
