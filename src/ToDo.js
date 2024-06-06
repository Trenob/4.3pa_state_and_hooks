import React, { useState } from "react";

function ToDo() {

    const [listItem, setListItem] = useState([]);
    const [inputText, setInputTextToList] = useState('');

    function inputChange(e) {
        setInputTextToList(e.target.value);
    }

    function submitToDo() {
        if (inputText.trim()) {
            //add item
            setListItem([...listItem, inputText.trim()]);

            //clear input field
            setInputTextToList('');
        }
    }

    function deletetoDo(index) {
        setListItem(listItem.filter((_, i) => i !== index));
    }

    return (
        <div>
            <input type="text" value={inputText} onChange={inputChange}></input>
            <button onClick={submitToDo}>Add to list</button>

            <ul>
                {listItem.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deletetoDo(index)}></button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default ToDo;