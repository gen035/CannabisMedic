export default function({ app, store }) {
  return app.$prismic.api.query(
    app.$prismic.predicates.at('document.type', 'contact'), {
      lang: `${app.store.state.i18n.locale}-ca`
    }
  ).then((response) => {
    const emails = [{text: '---', value: ""}];
    response.results.forEach(result => {
      result.data.body[0].items.map((item => {
        if(!item.hide) {
          emails.push({
            text: item.location_name,
            value: item.location_name
          });
        }
      }));
    });
    store.commit('SET_CONTACT', emails);
  })
}