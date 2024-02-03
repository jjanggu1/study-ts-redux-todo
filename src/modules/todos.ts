// Ducks 패턴으로 작성

type ChangeInputAction = {
    type: typeof CHANGE_INPUT,
    input: string;
}
type UpdateInputAction = {
    type: typeof UPDATE_INPUT,
    todo: {
        id: number,
        text: string
    }
}
type AddAction = {
    type: typeof ADD,
    todo: {
        id: number,
        text: string,
        editStatus: boolean,
        isDone: boolean
    }
}
type StartUpdateAction = {
    type: typeof STARTUPDATE,
    todo: {
        id: number
    }
}
type CompleteUpdateAction = {
    type: typeof COMPLETEUPDATE,
    todo: {
        id: number
    }
} 
type RemoveAction = {
    type: typeof REMOVE,
    id: number
}
type IsDoneAction = {
    type: typeof ISDONE,
    id: number
}
type ActionType = ChangeInputAction | UpdateInputAction | AddAction | StartUpdateAction | CompleteUpdateAction | RemoveAction | IsDoneAction;

type initialStateType = {
    input: string,
    todos: {
        id: number,
        text: string,
        editStatus: boolean,
        isDone: false
    }[]
}

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const UPDATE_INPUT = 'todos/UPDATE_INPUT';
const ADD = 'todos/ADD';
const STARTUPDATE = 'todos/STARTUPDATE';
const COMPLETEUPDATE = 'todos/COMPLETEUPDATE';
const REMOVE = 'todos/REMOVE';
const ISDONE = 'todos/ISDONE';

// 액션 생성 함수
export const changeInput = (input: string): ChangeInputAction => ({
    type: CHANGE_INPUT,
    input
});

export const updateInput = (id: number, input: string): UpdateInputAction => ({
    type: UPDATE_INPUT,
    todo: {
        id,
        text: input,
    }
});

let id = 2;
export const add = (text: string): AddAction => ({
    type: ADD,
    todo: {
        id: id++,
        text,
        editStatus: false,
        isDone: false,
    }
});

export const startUpdate = (id: number): StartUpdateAction => ({
    type: STARTUPDATE,
    todo: {
        id,
    }
});

export const completeUpdate = (id: number): CompleteUpdateAction => ({
    type: COMPLETEUPDATE,
    todo: {
        id,
    }
});

export const remove = (id: number): RemoveAction => ({
    type: REMOVE,
    id
});

export const isDone = (id: number): IsDoneAction => ({
    type: ISDONE,
    id
});

// 초기 상태 및 리듀서 함수
const initialState: initialStateType = {
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

function todos(state: initialStateType = initialState, action: ActionType) {
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