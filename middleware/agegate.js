export default function({ app, store }) {
  return app.$prismic.api.query(
    app.$prismic.predicates.at('document.type', 'agegate')
  ).then((response) => {
    response.results.forEach(result => {
      store.commit('SET_AGEGATE', result.data);
    });
  })
}