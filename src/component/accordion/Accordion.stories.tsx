import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired');
const onClickCallBack = action('some item was clicked')
export const MenuCollapsedMode = () => <Accordion
    titleValue={"Menu"}
    collapsed={true}
    onChange={callback}
    items={[]} // Пустой массив для демонстрации
    onClick={() => {}} // Пустая функция, не делает ничего

/>;
export const UsersUncollapsedMode = () => <Accordion
    titleValue={"Users"}
    collapsed={false}
    onChange={callback} items={
    [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Victor', value: 4}]
}
    onClick={onClickCallBack}/>;
export const ModeChanging: React.FC = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={
            [{title: 'Dimych', value: 1},
                {title: 'Valera', value: 2},
                {title: 'Artem', value: 3},
                {title: 'Victor', value: 4}]
        }
        onClick = {(value) => {alert(`user with ID ${value} should be happy`) }}
    />
};