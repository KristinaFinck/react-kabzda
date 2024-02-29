import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from "./component/Rating";
import {Accordion} from "./component/Accordion";
import {Off, On, Round} from "./component/OnOff";


function App() {
    // полезное что-то
    // обязана вернуть JSX
    return (
        <div className="App">
            <PageTitle title = {"This is App component"}/>
            <PageTitle title={"My friends"} />
            Article1
            <Rating value = {1}/>
            <Accordion titleValue = {"Accordion title"} collapsed={false}/>
            <Accordion titleValue = {"меню"} collapsed={true}/>
             Article2

            <Rating value = {1} />
            <Rating value = {2} />
            <Rating value = {3} />
            <Rating value = {4} />
            <Rating value = {5} />
            <On/>
            <Off/>
            <Round/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle(props: any) {
    return(
    <h1>{props.title}</h1>
    )
}






export default App;
