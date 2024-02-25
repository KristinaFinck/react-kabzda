import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from "./Rating";
import {Accordion} from "./Accordion";

function App() {
    debugger
    // полезное что-то
    // обязана вернуть JSX
    return (
        <div className="App">
            <PageTitle title = {"This is App component"}/>
            <PageTitle title={"My friends"} />
            Article1
            <Rating value = {1}/>
            <Accordion titleValue = {"Accordion title"}/>
            <Accordion titleValue = {"меню"}/>
             Article2
            <Rating value = {2} />
            <Rating value = {3} />
            <Rating value = {4} />
            <Rating value = {5} />
            <Rating value = {6} />
        </div>
    );
}
function PageTitle(props: any) {
    return(
    <h1>{props.title}</h1>
    )
}






export default App;
