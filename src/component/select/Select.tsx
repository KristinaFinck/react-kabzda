import React from 'react';
import styles from './Select.module.css';

export type ItemType = {
    title: string,
    value: any
}

export type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void,
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const selectedItem = props.items.find(i => i.value === props.value);

return (
    <div className={styles.select}>
        <select value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <div>
            <h3>{selectedItem && selectedItem.title}</h3>
        </div>
        <div className={styles.select}>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    </div>
);
}