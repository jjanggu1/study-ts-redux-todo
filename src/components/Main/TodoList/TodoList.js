
import './TodoList.css';
import { useState } from 'react';

function TodoList({ todos, onRemove }) {

    const remove = (id) => {
        onRemove(id)
    }

    return (
        <div className="todo_list">
            {todos.map(item => (
                <div className="todo" key={item.id}>
                    <span>{item.id}</span>
                    <span>{item.text}</span>
                    <div className="todo_btns">
                        <button>수정</button>
                        <button onClick={() => remove(item.id)}>삭제</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
