import React, { createContext, useContext, useState } from "react";

const InputContext = createContext();

const initialTodoListState = ['Todo List Initial List'];

const InputProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialTodoListState);

    const addTodo = (newTodoList) => {
        setTodoList([...todoList, newTodoList]);
    }

    const contextValue = {
        todoList,
        addTodo,
    }
    return <InputContext.Provider value={contextValue}>{children}</InputContext.Provider>
};

export const useTodoContext = () => useContext(InputContext);

export default InputProvider;