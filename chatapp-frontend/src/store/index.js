import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    id: '',
    password: ''
  },
  getters: {},
  mutations: {
    login(state, param) {
      state.isLogin = true;
      state.id = param.id;
      state.password = param.password;
    },
    logout(state) {
      state.isLogin = false;
      state.id = '';
      state.password = '';
    }
  },
  actions: {
    async login({ commit }, { id, password }) {
      const param = {
        id: id,
        password: password
      }

      try {
        const loginResult = await axios.post('http://localhost:3000/login', param);
        if (loginResult.data === 'OK') {
          // 認証に成功した場合
          commit('login', param);
        } else {
          // 認証に失敗した場合
          console.log('認証に失敗しました。');
        }
      } catch{
        alert('処理に失敗しました。')
      }

    },
    logout({ commit }) {
      commit('logout');
    }
  },
  plugins:[createPersistedState()]
})
