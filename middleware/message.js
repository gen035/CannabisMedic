export default function({ app, store }) {
  return app.$prismic.api.query(
    app.$prismic.predicates.at('document.type', 'message'), {
      lang: `${app.store.state.i18n.locale}-ca`
    }
  ).then((response) => {
    response.results.forEach(result => {
      store.commit('SET_MESSAGE', result.data);
    });
  })
}
