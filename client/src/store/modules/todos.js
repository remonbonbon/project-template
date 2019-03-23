// ToDO
const axios = require('axios');

module.exports = {
  namespaced: true,

  // initial state
  state: {
    // [{ id, task, isCompleted }]
    todos: [],
  },

  // getters
  getters: {
    todos: (state, getters) => {
      return state.todos;
    },
  },

  // actions
  actions: {
    async list({ state, commit }) {
      const res = await axios.get('/todos');
      commit('updateTodos', res.data.todos);
    },
    async add({ state, commit }, todo) {
      const res = await axios.put(`/todos/new`, todo);
      commit('updateTodos', res.data.todos);
    },
    async update({ state, commit }, todo) {
      const res = await axios.put(`/todos/${todo.id}`, todo);
      commit('updateTodos', res.data.todos);
    },
    async remove({ state, commit }, id) {
      const res = await axios.delete(`/todos/${id}`);
      commit('updateTodos', res.data.todos);
    },
  },

  // mutations
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
  },
};
