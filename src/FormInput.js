import React, {useState} from "react";

function FormInput() {
    const [textInForm, setTextInForm] = useState('');

    const changeText = (e) => {
        setTextInForm(e.target.value);
    }

    return (
        <div>
            <input id="inputTxt" type="text" defaultValue={textInForm} onChange={changeText} />
            <p>You're text entry was: <br/>{textInForm}</p>
        </div>
    );
    
}

export default FormInput;