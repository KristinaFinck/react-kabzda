
import React, {useReducer, useState} from 'react';
import App from "../../App";
import {reducer, TOGGLE_COLLAPSED_CONSTANT} from "./reduser";
type UnControlledAccordionPropsType = {
    titleValue: string,
   // collapsed: boolean
}

type AccordionBodyPropsType = {
   // collapsed: boolean
}


export function UnControlledAccordion(props:UnControlledAccordionPropsType) {
    //let[collapsed, setCollapsed] = useState(true) - вместо useState
let [collapsed, dispatch] = useReducer(reducer, {collapsed:false})
        return (
            <div>
                {/* <AccordionTitle title = {props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>  */}
                <AccordionTitle title = {props.titleValue} onClick={()=>{dispatch({type: TOGGLE_COLLAPSED_CONSTANT})}}/>
                {collapsed && <AccordionBody />}
            </div>
        )}

type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void
}
function AccordionTitle(props:AccordionTitlePropsType) {

    return (
        <div>

        <h3 onClick ={() => {props.onClick()}}>--{props.title}--</h3>
        </div>
    )
}
function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )

}