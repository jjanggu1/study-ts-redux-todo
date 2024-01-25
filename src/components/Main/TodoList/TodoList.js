
import './TodoList.css';

function TodoList({ todos, onUpdateInput, onStartUpdate, onCompleteUpdate, onRemove, onIsDone }) {

    const onChange = (id, e) => onUpdateInput(id, e.target.value);

    return (
        <div className="todo_list">
            {todos.map(item => (
                <div className="todo" key={item.id}>
                        {item.editStatus === false ? (
                            <span className={`todo_span ${item.isDone === true ? 'done' : null}`} onClick={() => onIsDone(item.id)}>{item.text}</span>
                        ) : (
                            <input type="text" value={item.text} onChange={(e) => { onChange(item.id, e); console.log(item.text, "text") }} placeholder="할일 입력 후 엔터를 누르세요." />
                        )}
                        <div className="todo_btns">
                            {item.editStatus === false ? (
                                <button onClick={() => onStartUpdate(item.id)}>수정</button>
                            ) : (
                                <button onClick={() => onCompleteUpdate(item.id)}>완료</button>
                            )}
                            <button onClick={() => onRemove(item.id)}>삭제</button>
                        </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
