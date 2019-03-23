// 時間経過で消える通知
module.exports = {
  namespaced: true,

  // initial state
  state: {
    // [{ id, date, level, code, message }]
    notifications: [],
  },

  // getters
  getters: {
    notifications: (state, getters) => {
      return state.notifications;
    },
  },

  // actions
  actions: {
    // 通知を追加
    add({ state, commit }, notification) {
      const id = Math.random();
      commit('addNotification', {
        id,
        date: new Date(),
        ...notification,
      });
      // 一定時間後に削除する
      setTimeout(() => {
        commit('removeNotification', id);
      }, 3000);
    },
    // 通知を削除
    remove({ state, commit }, id) {
      commit('removeNotification', id);
    },
  },

  // mutations
  mutations: {
    // 通知を先頭に追加
    addNotification(state, notification) {
      state.notifications.unshift(notification);
    },
    // 通知を削除
    removeNotification(state, id) {
      state.notifications = state.notifications.filter(n => n.id !== id);
    },
  },
};
