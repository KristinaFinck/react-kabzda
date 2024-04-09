import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>;
export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>;

export const ControlledInput = () => {
    const [value, setValue] = useState("");
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <input value={value} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [checkboxValue, setCheckboxValue] = useState(true);
    const checkboxOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
    }
    //вместо коллбека можно поставить action
    //checkbox отличается от инпута значением "checked"
    return (
        <input type='checkbox' checked={checkboxValue} onChange={checkboxOnChangeHandler}/>
    )
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>('none');
    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <select value={value} onChange={onChangeHandler}>
            <option value = {'none'}>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Kyiv</option>
        </select>
    )
}
