import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, updateInput, add, startUpdate, completeUpdate, remove, isDone} from "../modules/todos";
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
    const onUpdateInput = useCallback(
        (id, editText) => dispatch(updateInput(id, editText)),
        [dispatch]
    );
    const onAdd = useCallback(
        text => dispatch(add(text)),
        [dispatch]
    );
    const onStartUpdate = (id) => dispatch(startUpdate(id));
    const onCompleteUpdate = useCallback(
        (id) => dispatch(completeUpdate(id)),
        [dispatch]
    );
    const onRemove = useCallback(
        id => dispatch(remove(id)),
        [dispatch]
    );
    const onIsDone = useCallback(
        id => dispatch(isDone(id)),
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
                onUpdateInput={onUpdateInput}
                onStartUpdate={onStartUpdate}
                onCompleteUpdate={onCompleteUpdate}
                onRemove={onRemove}
                onIsDone={onIsDone}
            />
        </>
    );
};

export default TodosContainer;