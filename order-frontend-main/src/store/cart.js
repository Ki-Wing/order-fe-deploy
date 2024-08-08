function initState() {
    return {
        count: 0,
        message:""
    };
}


const practice = {
    state: initState,
    mutations: {
        increment(state) {
            state.count++;
        },
        updateMessage(state, newMessage){
            state.message = newMessage;
        }
    },
    actions: {
        incrementCount(context) {
            context.commit('increment');
        },
        updateMessage(context, newMessage){
            context.commit('updateMessage', newMessage);

        }
    },
    getters: {
        getCount: state => state.count,
        getMessage : state => state.message
    }
}

export default practice;
