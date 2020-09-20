export default function({ app, store }) {
  return app.$prismic.api.query(
    app.$prismic.predicates.at('document.type', 'navigation')
  ).then((response) => {
    response.results.forEach(result => {
      store.commit('SET_NAVIGATION', result.data);
    });
  })
}
