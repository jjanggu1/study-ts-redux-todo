import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';
import selectScreen from './selectScreen';


const rootReducer = combineReducers({
    counter,
    todos,
    selectScreen,
});

export default rootReducer;

// 루트 리듀서의 반환값를 유추
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줌
export type RootState = ReturnType<typeof rootReducer>;