export default {
  // * category
  set_category(state, payload){
    state.category = payload.category
  },
  set_filter_category(state, payload){
    state.filter_category = payload.category
  },

  // * loading
  load_on(state){
    state.loading = true
  },
  load_off(state){
    state.loading = false
  },

  // * feed
  set_feeds(state, payload){
    state.feeds = payload.feeds
  },
  add_feeds(state, payload){
    state.feeds = [...state.feeds, ...payload.feeds]
  },
  set_feeds_setting(state, payload){
    state.feed_page = payload.page,
    state.feed_end = payload.end
  },

  // * commercial
  add_commercials(state, payload){
    state.commercials = [...state.commercials, ...payload.commercials]
  },
  set_commercials_setting(state, payload){
    state.commercial_page = payload.page,
    state.commercial_end = payload.end
  },
  set_commercial_fold(state, payload){
    state.folded_commercials = payload.folded
  },

  // * etc
  set_feed_order(state, payload){
    state.feed_order = payload.order
  },
  set_settings(state, payload){
    state.settings = payload.settings
  },
  add_history(state, payload){
    state.history.push(payload.path)
  }
}