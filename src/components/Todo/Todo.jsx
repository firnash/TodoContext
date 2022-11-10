import { useState } from "react";
import { useTodoContext } from "../../contexts/InputContext";
import Button from "../controls/Button/Button";
import InputField from "../controls/InputField/InputField";
import List from "../List/List";

export default function Todo() {

    const [ text, setText ] = useState('');
    const { addTodo } = useTodoContext();

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleAddTodo = () => {
        if (!text) return;
        addTodo(text)
    }

    return (
        <>
            <InputField onChange={handleOnChange} value={text}></InputField>
            <Button onClick={handleAddTodo}></Button>
            <List></List>
        </>
    )
}