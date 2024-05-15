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

export const getters = {
    getAgegate(state) {
        return state.agegate;
    },
}


export const actions = {
    async nuxtServerInit({ commit }, { app }) {
        try {
            const locale = app.store.state.i18n.locale || 'fr';
            const ageGateResponse = await app.$prismic.api.query(app.$prismic.predicates.at('document.type', 'agegate'), {lang: `${locale}-ca`});
            ageGateResponse.results.forEach(result => commit('SET_AGEGATE', result.data));
           
        } catch (error) {
            commit('SET_ERROR', error);
            console.log('STORE', error)
        }
    }
}
