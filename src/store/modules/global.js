const global = {
    state: () => ({
        notify: {
            isShow: false,
            message: ''
        }
    }),
    mutations: {
        SET_NOTIFY(state, payload) {
            state.notify = payload;
        }
    },
    actions: {
        openNotify({ commit, state }, message) {
            commit('SET_NOTIFY', { ...state.notify, message });
            state.notify.isShow = true;
            setTimeout(() => {
                state.notify.isShow = false;
            }, 3000);
        }
    },

    getters: {
        getNotify: state => state.notify,
    },

    namespaced: true
}
export default global;