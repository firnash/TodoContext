import React from "react"; 
import { useTodoContext } from "../../contexts/InputContext";

export default function List() {

    const { todoList } = useTodoContext()
    console.log('textttt: ', todoList);
    return (
        <ul>
            {todoList && todoList.map((todo, index) => {
                return <li key={index}>{todo}</li>
            })}
        </ul>
    )
}