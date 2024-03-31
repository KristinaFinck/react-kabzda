import React from 'react';
import App from "../../App";
export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onChange: () => void
}

export type AccordionBodyPropsType = {
    collapsed: boolean
}
export function Accordion(props:AccordionPropsType) {
   if (props.collapsed === true) {
    return (
        <div>
       <AccordionTitle  title = {props.titleValue} onChange={props.onChange}/>
        </div>
)}
   else {
       return (
           <div>
               <AccordionTitle title = {props.titleValue} onChange = {props.onChange}/>
               <AccordionBody  collapsed = {props.collapsed} />
           </div>
       )
   }
}
type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
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