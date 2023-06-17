import Services from '../../config/_axios';
import API from '../../api/index';
const health = {

    state: () => ({
        health: {},
        bodyMass: {
            bodyMassRate: null
        },
    }),
    mutations: {
        SET_HEALTH(state, payload) {
            state.health = payload;
        },
        SET_BODY_MASS(state, payload) {
            state.bodyMass = {
                ...state.bodyMass,
                ...payload
            };
        }
    },
    actions: {
        async getHealth({ commit, state }) {
            await Services.get(API.Health).then((res) => {
                if (res.data) {
                    commit('SET_HEALTH', res.data);
                    let bodyMassRate = 0;
                    bodyMassRate += (state.health.weight / ((state.health.height / 100) * (state.health.height / 100)))
                    commit('SET_BODY_MASS', {
                        bodyMassRate: bodyMassRate,
                    });
                }
            }).catch((err) => {
                alert(err)
            });
        },
        async updateHealth({ state, dispatch }) {
            await Services.put(API.Health, state.health).then((res) => {
                if (res.data) {
                    dispatch('getHealth');
                }
            }).catch((err) => {
                alert(err)
            });
        },
    },

    getters: {
        getHealthData: state => state.health,
        getBodyMassRate: state => state.bodyMass.bodyMassRate,
    },

    namespaced: true
}

export default health;