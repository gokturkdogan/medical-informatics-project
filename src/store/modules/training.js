import Services from '../../config/_axios';
import API from '../../api/index';
const training = {
    state: () => ({
        trainings: []
    }),
    mutations: {
        SET_TRAINING(state, payload) {
            state.trainings = payload;
        },
    },
    actions: {
        async fetchTrainings({ commit }) {
            await Services.get(API.Training).then((res) => {
                if (res.data) {
                    commit('SET_TRAINING', res.data);
                }
            }).catch((err) => {
                alert(err)
            });
        },

    },

    getters: {
        getTrainingData: state => state.trainings,
    },

    namespaced: true
}
export default training;