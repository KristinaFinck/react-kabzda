import React from 'react';
import App from "./App";
type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}
type AccordionBodyPropsType = {
    collapsed: boolean
}
export function Accordion(props:AccordionPropsType) {

    return (
        <div>
       <AccordionTitle title = {props.titleValue} />
        <AccordionBody collapsed = {props.collapsed} />
        </div>
)
}
function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}
function AccordionBody(props: AccordionBodyPropsType) {
    if (props.collapsed === false) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )}
    else {
        return null
    }


}