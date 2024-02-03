// Type
type SelectCounterAction = {
    type: typeof SELECT_COUNTER,
    select: string;
}
type SelectTodoAction = {
    type: typeof SELECT_TODO,
    select: string;
}
type ActionType = SelectCounterAction | SelectTodoAction;

type initialStateType = {
    selectScreenType: string;
}

// 액션 타입 정의
const SELECT_COUNTER = 'selectScreen/SELECT_COUNTER';
const SELECT_TODO = 'selectScreen/SELECT_TODO';

// 액션 생성 함수
export const selectCounter = (select: string): SelectCounterAction => ({
    type: SELECT_COUNTER,
    select
});
export const selectTodo = (select: string): SelectTodoAction => ({
    type: SELECT_TODO,
    select
});

const initialState: initialStateType = {
    selectScreenType: 'todo'
};

function selectScreen(select: initialStateType = initialState, action: ActionType) {
    switch(action.type) {
        case SELECT_COUNTER:
            return {selectScreenType: action.select};
        case SELECT_TODO:
            return {selectScreenType: action.select};
        default:
            return select;
    }
}

export default selectScreen;