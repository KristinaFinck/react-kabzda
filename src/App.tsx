import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating, ValueRatingType} from "./component/Rating";
import {Accordion} from "./component/Accordion";
import {OnOff} from "./component/OnOff";
import {UnControlledAccordion} from "./component/UnControlledAccordion";
import {UnControlledRating} from "./component/UnControlledRating";



function App() {

    let[ratingValue, setRatingValue] = useState<ValueRatingType>(0);
    // полезное что-то
    // обязана вернуть JSX
    return (
        <div className="App">
            <PageTitle title = {"This is App component"}/>
            <PageTitle title={"My friends"} />
            Article1
            <Accordion titleValue = {"Accordion title"} collapsed={false}/>
            <Accordion titleValue = {"меню"} collapsed={true}/>
             Article2

            <Rating value = {ratingValue} onClick = {setRatingValue}/>
            <Rating value = {ratingValue}  onClick = {setRatingValue}/>
            <Rating value = {ratingValue}  onClick = {setRatingValue}/>
            <Rating value = {ratingValue}  onClick = {setRatingValue}/>
            <Rating value = {ratingValue}  onClick = {setRatingValue}/>
            <OnOff />
            <OnOff />
            {/*  <OnOff on ={true} />
            <OnOff on ={false} /> */}
  <UnControlledAccordion titleValue={"UnControlledAccordion title"} />
            <UnControlledRating />
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
