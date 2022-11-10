import React from "react";

export default function InputField({ onChange, value }) {

    return (
        <input type="text" onChange={onChange} value={value}></input>
    )
}