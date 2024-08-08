function initState(){
    return{
        count : 0
    }
}


const practice={
    //state : 상태를 의미하는 객체로서 initState를 통해 상태 초기화
    state : initState,
    // mutations 상태를 변경하기 위한 함수들의 집합
    // mutations은 component에서 직접 호출되기 보다는 ,actoins를 통해 mutations이 호출
    // 그 이유는 여러 mutations을 연속적으로 호출하는 경우가 있을 수 있기 때문
    mutations:{
        increment(state){
            state.count++;
        }
    },
    actoins:{
        // 아래와 같이 actions의 함수를 통해 mutations의 함수를 호출
        // 그러면 결국, 컴포넌트에서는 actions의 함수를 호출
        incrementCount(context){
            context.commit('incrment');
        }
    },
    //상태(변수)를 get하기 위한 함수들의 집합
    getters:{
        getCount: state => state.count
    }
}