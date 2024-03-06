import React, {useState} from 'react';
import App from "../App";
type UnControlledAccordionPropsType = {
    titleValue: string,
   // collapsed: boolean
}

type AccordionBodyPropsType = {
   // collapsed: boolean
}

export function UnControlledAccordion(props:UnControlledAccordionPropsType) {
    let[collapsed, setCollapsed] = useState(true)

        return (
            <div>
                <AccordionTitle title = {props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
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