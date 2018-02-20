import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Results from "./components/Results";
import Saved from "./components/Saved";

const App = () =>
    <Wrapper>
        <Main></Main>
        <Results></Results>
        <Saved><Saved>
    </Wrapper>
    
export default App;
