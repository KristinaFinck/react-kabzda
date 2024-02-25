import React from 'react';
import App from "./App";

export function Accordion(props:any) {

    return (
        <div>
       <AccordionTitle title = {props.titleValue} />
        <AccordionBody />
        </div>
)
}
function AccordionTitle(props:any) {
    return (
        <h3>{props.title}</h3>
    )
}
function AccordionBody(props:any) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}