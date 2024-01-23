// Ducks 패턴으로 작성

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const ADD = 'todos/ADD';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});

let id = 2;
export const add = text => ({
    type: ADD,
    todo: {
        id: id++,
        text
    }
}) ;

export const remove = id => ({
    type: REMOVE,
    id
});

// 초기 상태 및 리듀서 함수
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 개념 다시 잡기',
        }
    ]
};

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case ADD:
            return {
                ...state,
                todos: state.todos.concat(action.todo),
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo =>
                    todo.id !== action.id)
            };
        default:
            return state;
    }
};

export default todos;