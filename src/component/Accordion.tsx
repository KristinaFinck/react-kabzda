import React from 'react';
import App from "../App";
export type AccordionPropsType = {
    titleValue: string,
    isCollapsed: boolean,
    onClick: () => void
}

export type AccordionBodyPropsType = {
    collapsed: boolean
}
export function Accordion(props:AccordionPropsType) {
   if (props.isCollapsed === true) {
    return (
        <div>
       <AccordionTitle  title = {props.titleValue} onClick={props.onClick}/>
        </div>
)}
   else {
       return (
           <div>
               <AccordionTitle title = {props.titleValue} onClick = {props.onClick}/>
               <AccordionBody  collapsed = {props.isCollapsed} />
           </div>
       )
   }
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
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