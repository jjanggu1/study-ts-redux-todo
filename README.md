### 📢Introduction
Redux에 대한 개념을 다시 한번 잡고 TypeScript학습을 위해 만든 ToDoList 프로젝트 입니다.
Create(생성), Read(읽기), Update(갱신), Delete(삭제), Toggle(할일 완료 여부) 기능을 포함 하였으며 TypeScript로 리팩토링할 예정입니다.

### 🛠 Trouble Shooting
- 이슈1 : Redux DevTools를 사용해 확인 결과 액션이 실행은 되지만 id값만 전달되고 editStatus: true는 실행되지 않는 문제 발생.

```javascript
// 액션 생성 함수
export const startUpdate = (id) => ({
    type: STARTUPDATE,
    todo: {
        id,
    }
});
// 리듀서
case STARTUPDATE:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id ?  // 수정 전
                        { ...todo, editStatus: true } : todo
                ),
            };
```

⇒ 액션 생성 함수에서 todo안에 id를 지정해 주었기때문에 리듀서에도 todo.id로 지정해줘야함.

```jsx
// 리듀서
case STARTUPDATE:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.todo.id ? // 수정 후
                        { ...todo, editStatus: true } : todo
                ),
            };
```
