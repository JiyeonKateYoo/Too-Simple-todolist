import {createStore} from 'vuex'
// 저장소 생성
const store = createStore({
    state() {
        return {
        // 컴포넌트에서 접근
        todos: []
        }
    },
    mutations: {
    /* state 변수는 외부 컴포넌트에서 수정 불가능,
        mutation 내 정의된 함수를 이용해야 상태의 변경 가능
    */ 
        addTodo(state, content) {
        state.todos.push(content)
        }
    }
})

export default store

/*
    vuex는 state, mutations, actions 로 구분
    state: 전역변수로 사용하고 싶은 데이터들을 정의
    mutations : setter함수를 정의
    (외부 컴포넌트에서는 state 값들을 함부로 변경하지 않고, mutation 로 정의된 메서드들만을 통해서 상태 변경가능.)
*/