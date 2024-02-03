// Ducks 패턴으로 작성

type IncreaseAction = {
    type: typeof INCREASE;
}
type DecreaseAction = {
    type: typeof DECREASE;
}
type ActionType = IncreaseAction | DecreaseAction;

type initialStateType = {
    number: number;
}

// 액션타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';



// 액션 생성함수
export const increase = (): IncreaseAction => ({ type: INCREASE });
export const decrease = (): DecreaseAction => ({ type: DECREASE });

// 초기 상태 및 리듀서 함수
// 초기 상태
const initialState: initialStateType = {
    number: 0
}

// 리듀서 함수
function counter(state: initialStateType = initialState, action: ActionType) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    };
}

export default counter;