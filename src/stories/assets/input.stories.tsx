import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input />;
export const ControlledInputWithFixedValue = () => <input value = {"it-incubator.by"} />;

export const ControlledInput = () => {
    const[value, setValue] = useState( "");
    const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <input value = {value} onChange = {onChangeHandler} />
}

export const ControlledCheckbox = () => {
    const[checkboxValue, setCheckboxValue] = useState(true);
    const checkboxOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
    }
    //вместо коллбека можно поставить action
    //checkbox отличается от инпута значением "checked"
    return(
        <input type = 'checkbox' checked = {checkboxValue} onChange={checkboxOnChangeHandler} />
    )
}

