import Services from '../../config/_axios';
import API from '../../api/index';
const training = {
    state: () => ({
        trainings: [],
        addTrainings: {},
        trainingTypes: [
            { val: "Ağırlık" },
            { val: "Koşu" },
            { val: "Yüzme" },
        ],
        trainingLocations: [
            { val: "Kapalı Ortam" },
            { val: "Açık Hava" },
        ],
    }),
    mutations: {
        SET_TRAINING(state, payload) {
            state.trainings = payload;
        },
        SET_TRAINING_TYPES(state, payload) {
            state.trainingTypes = payload;
        },
        SET_TRAINING_LOCATIONS(state, payload) {
            state.trainingLocations = payload;
        },
        ADD_TRAINING(state, newTraining) {
            state.trainings.push(newTraining);
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
        async postTrainings({ commit }, newTraining) {
            try {
                const response = await Services.post(API.Training, newTraining);
                if (response.data) {
                    commit('ADD_TRAINING', response.data);
                }
            } catch (err) {
                console.error(err);
                // Hata yönetimini daha iyi bir şekilde yapabilirsiniz
            }
        },
    },

    getters: {
        getTrainingData: state => state.trainings,
        getTrainingTypes: state => state.trainingTypes,
        getTrainingLocations: state => state.trainingLocations
    },

    namespaced: true
}
export default training;