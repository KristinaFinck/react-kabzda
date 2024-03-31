import React, {useState} from 'react';

export type OnOffPropsType = {
   on: boolean,
    onChange: (on:boolean)=> void
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '1px solid green',
        margin: '10px',
        backgroundColor: props.on ? 'green' : 'transparent'
    }

    const offStyle = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '1px solid red',
        margin: '10px',
        backgroundColor: props.on ? 'transparent' : 'red',

    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '50%',
        margin: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick = {()=> {props.onChange(true)}}>ON</div>
            <div style={offStyle} onClick = {()=> {props.onChange(false)}}>OFF</div>
            <div style={indicatorStyle}>i</div>
        </div>
    )
}