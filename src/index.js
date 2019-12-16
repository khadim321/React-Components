import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import Funtion from './Components/Funtion';
import Class from './Components/Class';
import Props from './Components/Props';
import State from './Components/State';
import Counter from './Components/Counter';
import EventHand from './Components/EventHand';
import EventBind from './Components/EventBind';
import ConditionalRendering from './Components/ConditionalRendering'
import List from './Components/NameList';

function Content(){
    return(
        <div className="App">
            <App/>
            <Header/>
            <Funtion/>
            <Class/>
            <Props name="Khadim" pname="Engineer" >
            <p>This is Engineers section</p></Props>

            <Props name="Hussain" pname="Teacher" >
            <p>This is Teachers section</p></Props>

            <Props name="Ali" pname="Doctor" >
            <p>This is Doctors section</p></Props>

            <State/>
            <Counter/>
            <EventHand/>
            <EventBind/>
            <ConditionalRendering/>
            <List/>
            <Footer/>
            
        </div>
    )
}



ReactDOM.render(<Content/>,document.getElementById("root"));