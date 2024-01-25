import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, add, remove } from "../modules/todos";
import AddTask from "../components/Main/AddTask/AddTask";
import TodoList from "../components/Main/TodoList/TodoList";

const TodosContainer = () => {
    const { input, todos } = useSelector(state => ({
        input: state.todos.input,
        todos: state.todos.todos,
    }));

    const dispatch = useDispatch();
    const onChangeInput = useCallback(
        input => dispatch(changeInput(input)),
        [dispatch]
    );
    const onAdd = useCallback(
        text => dispatch(add(text)),
        [dispatch]
    );
    const onRemove = useCallback(
        id => dispatch(remove(id)),
        [dispatch]
    );

    return (
        <>
            <AddTask
                input={input}
                onChangeInput={onChangeInput}
                onAdd={onAdd}
                
            />
            <TodoList 
                todos={todos}
                onRemove={onRemove}
            />
        </>
    );
};

export default TodosContainer;