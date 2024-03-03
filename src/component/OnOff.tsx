import React from 'react';

export type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid green',
        margin: '10px',
        backgroundColor: props.on ? 'green' : 'transparent'
    }

    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid red',
        margin: '10px',
        backgroundColor: props.on ? 'transparent' : 'red',

    }
    const indicator = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '50%',
        margin: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyle}>ON</div>
            <div style={offStyle}>OFF</div>
            <div style={indicator}>i</div>
        </div>
    )
}