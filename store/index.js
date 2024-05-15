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
  SET_CONTACTS(state, contacts) {
    state.contacts = contacts
  }
}

export const getters = {
    getAgegate(state) {
        return state.agegate;
    },
    getContacts(state) {
      return state.contacts;
    },
    getMessage(state) {
        return state.message;
    },
    getNavigation(state) {
      return state.navigation;
    },
    getSettings(state) {
      return state.settings;
    }
}


export const actions = {
    async nuxtServerInit({ commit }, { app }) {
        try {
            const locale = app.store.state.i18n.locale || 'fr';

            //Get Agegate
            const ageGateResponse = await app.$prismic.api.query(app.$prismic.predicates.at('document.type', 'agegate'), {lang: `${locale}-ca`});
            ageGateResponse.results.forEach(result => commit('SET_AGEGATE', result.data));

            //Get Contact
            const contactResponse = await app.$prismic.api.query(app.$prismic.predicates.at('document.type', 'contact'), {lang: `${locale}-ca`});
            const emails = [{text: '---', value: ""}];
            contactResponse.results.forEach(result => {
              result.data.body[0].items.forEach(item => {
                if (!item.hide) {
                  emails.push({
                    text: item.location_name,
                    value: item.location_name
                  });
                }
              });
            });
             commit('SET_CONTACTS', emails);
            //Get Message
            const messageResponse = await app.$prismic.api.query(app.$prismic.predicates.at('document.type', 'message'), {lang: `${locale}-ca`});
            messageResponse.results.forEach(result => commit('SET_MESSAGE', result.data));
           
            //Get Navigation
            const navigationResponse = await app.$prismic.api.query(app.$prismic.predicates.at('document.type', 'navigation'), {lang: `${locale}-ca`});
            navigationResponse.results.forEach(result => commit('SET_NAVIGATION', result.data));

            //Get Settings
            const settingsResponse = await app.$prismic.api.query(app.$prismic.predicates.at('document.type', 'settings'), {lang: `${locale}-ca`});
            settingsResponse.results.forEach(result => commit('SET_SETTINGS', result.data));
        } catch (error) {
            console.log('STORE', error)
        }
    }
}
