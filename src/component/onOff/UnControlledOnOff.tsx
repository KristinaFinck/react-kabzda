import React, {useState} from 'react';

export type UnControlledOnOffPropsType = {
    onChange: (on: boolean) => void,
    defaultOn?: boolean
}

export const UnControlledOnOff = (props: UnControlledOnOffPropsType) => {
    let[on, setOn] = useState(props.defaultOn ? props.defaultOn: false)
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
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick = {onClicked}>ON</div>
            <div style={offStyle} onClick = {offClicked}>OFF</div>
            <div style={indicatorStyle}>i</div>
        </div>
    )
}