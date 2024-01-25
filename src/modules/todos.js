// Ducks 패턴으로 작성

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const UPDATE_INPUT = 'todos/UPDATE_INPUT';
const ADD = 'todos/ADD';
const STARTUPDATE = 'todos/STARTUPDATE';
const COMPLETEUPDATE = 'todos/COMPLETEUPDATE';
const REMOVE = 'todos/REMOVE';
const ISDONE = 'todos/ISDONE';

// 액션 생성 함수
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});

export const updateInput = (id, input) => ({
    type: UPDATE_INPUT,
    todo: {
        id,
        text: input,
    }
});

let id = 2;
export const add = text => ({
    type: ADD,
    todo: {
        id: id++,
        text,
        editStatus: false,
        idDone: false,
    }
});

export const startUpdate = (id) => ({
    type: STARTUPDATE,
    todo: {
        id,
    }
});

export const completeUpdate = (id) => ({
    type: COMPLETEUPDATE,
    todo: {
        id,
    }
});

export const remove = id => ({
    type: REMOVE,
    id
});

export const isDone = id => ({
    type: ISDONE,
    id
});

// 초기 상태 및 리듀서 함수
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 개념 다시 잡기',
            editStatus: false,
            isDone: false
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
        case UPDATE_INPUT:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.todo.id ?
                        { ...todo, text: action.todo.text } : todo
                ),
            };
        case ADD:
            return {
                ...state,
                todos: [action.todo, ...state.todos],
            };
        case STARTUPDATE:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.todo.id ?
                        { ...todo, editStatus: true } : todo
                ),
            };
        case COMPLETEUPDATE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.todo.id ?
                        { ...todo, editStatus: false } : todo
                )
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo =>
                    todo.id !== action.id)
            };
        case ISDONE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ?
                        { ...todo, isDone: !todo.isDone } : todo)
            };
        default:
            return state;
    }
};

export default todos;