import Services from '../../config/_axios';
import API from '../../api/index';
const training = {
    state: () => ({
        trainings: []
    }),
    mutations: {},
    actions: {
        async fetchTrainings() {
            await Services.get(API.Training)
        }
    },

    getters: {

    },

    namespaced: true
}
export default training;