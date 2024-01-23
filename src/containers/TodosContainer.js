import React from "react";
import { connect } from "react-redux";
import { changeInput, add, remove } from "../modules/todos";
import AddTask from "../components/Main/AddTask/AddTask";
import TodoList from "../components/Main/TodoList/TodoList";
import Main from "../components/Main/Main";

const TodosContainer = ({
    input,
    todos,
    changeInput,
    add,
    remove
}) => {
    return (
        <>
            <AddTask
                input={input}
                onChangeInput={changeInput}
                onAdd={add}
                
            />
            <TodoList 
                todos={todos}
                onRemove={remove}
            />
        </>
    );
};

export default connect(
    // 비구조화 할당을 통해 todos를 분리하며
    // state.todos.input 대신 todos.input을 사용
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,
        add,
        remove
    },
)(TodosContainer);