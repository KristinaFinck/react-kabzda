import React, {useState} from 'react';

export type UncontrolledOnOffPropsType = {
    // on: boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    let[on, setOn] = useState(false)
    const onStyle = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '1px solid green',
        margin: '10px',
        backgroundColor: on ? 'green' : 'transparent'
    }

    const offStyle = {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '1px solid red',
        margin: '10px',
        backgroundColor: on ? 'transparent' : 'red',

    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '50%',
        margin: '10px',
        backgroundColor: on ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick = {()=> {setOn(true)}}>ON</div>
            <div style={offStyle} onClick = {()=> {setOn(false)}}>OFF</div>
            <div style={indicatorStyle}>i</div>
        </div>
    )
}