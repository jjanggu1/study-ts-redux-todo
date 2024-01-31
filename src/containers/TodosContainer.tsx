import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, updateInput, add, startUpdate, completeUpdate, remove, isDone} from "../modules/todos";
import AddTask from "../components/Main/AddTask/AddTask";
import TodoList from "../components/Main/TodoList/TodoList";
import { RootState } from "modules";

const TodosContainer = () => {
    const { input, todos } = useSelector((state: RootState) => ({
        input: state.todos.input,
        todos: state.todos.todos,
    }));

    const dispatch = useDispatch();
    const onChangeInput = useCallback(
        (input: string) => dispatch(changeInput(input)),
        [dispatch]
    );
    const onUpdateInput = useCallback(
        (id: number, editText: string) => dispatch(updateInput(id, editText)),
        [dispatch]
    );
    const onAdd = useCallback(
        (text: string) => dispatch(add(text)),
        [dispatch]
    );
    const onStartUpdate = (id: number) => dispatch(startUpdate(id));
    const onCompleteUpdate = useCallback(
        (id: number) => dispatch(completeUpdate(id)),
        [dispatch]
    );
    const onRemove = useCallback(
        (id: number) => dispatch(remove(id)),
        [dispatch]
    );
    const onIsDone = useCallback(
        (id: number) => dispatch(isDone(id)),
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