import React from 'react';
import App from "../App";
type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

type AccordionBodyPropsType = {
    collapsed: boolean
}
export function Accordion(props:AccordionPropsType) {
   if (props.collapsed === true) {
    return (
        <div>
       <AccordionTitle title = {props.titleValue} />
        </div>
)}
   else {
       return (
           <div>
               <AccordionTitle title = {props.titleValue} />
               <AccordionBody  collapsed = {props.collapsed} />
           </div>
       )
   }
}
type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
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