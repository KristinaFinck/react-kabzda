import React, {useState} from 'react';
import './App.css';
import {Rating, ValueRatingType} from "./component/rating/Rating";
import {Accordion, AccordionPropsType} from "./component/accordion/Accordion";
import {OnOff} from "./component/onOff/OnOff";
import {UnControlledAccordion} from "./component/accordion/UnControlledAccordion";
import {UnControlledRating} from "./component/rating/UnControlledRating";
import {UnControlledOnOff} from "./component/onOff/UnControlledOnOff";
import {Select} from "./component/select/Select";




function App() {

    let[ratingValue, setRatingValue] = useState<ValueRatingType>(0);
    let[accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [swithcOn, setSwitchOn] = useState<boolean>(false)
    // полезное что-то
    // обязана вернуть JSX
    return (
        <div className="App">
            <PageTitle title = {"This is App component"}/>
            <PageTitle title={"My friends"} />
            Article1
            <Accordion titleValue = {"Accordion title"}
                       collapsed={accordionCollapsed}
                       onChange= {() =>setAccordionCollapsed(!accordionCollapsed)}
            items={[{ title: 'Item 1', value: 1 }, { title: 'Item 2', value: 2 }]} // Пример items
            onClick={(value:any) => console.log(value)} // Пример обработчика onClick

/>
            <Rating value = {ratingValue} onClick = {setRatingValue}/>
            <Rating value = {ratingValue}  onClick = {setRatingValue}/>
            <Rating value = {ratingValue}  onClick = {setRatingValue}/>
            <Rating value = {ratingValue}  onClick = {setRatingValue}/>
            <Rating value = {ratingValue}  onClick = {setRatingValue}/>
            <UnControlledOnOff onChange={setSwitchOn}/> {swithcOn.toString()}
            <OnOff on = {true}
            onChange = {(on) => {setSwitchOn(on) }}/>
            {/*  <OnOff on ={true} />
            <OnOff on ={false} /> */}
  <UnControlledAccordion titleValue={"UnControlledAccordion title"} />
            <UnControlledRating  onChange={x=> x}/>
            <Select />
        </div>
    );
};

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return(
    <h1>{props.title}</h1>
    )

}

export default App;
