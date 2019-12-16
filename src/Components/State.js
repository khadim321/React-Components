import React, { Component } from 'react';

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing.'
        })
    }

    render(){
        return(
            <>
            <p>State Component in Reactjs</p><br/>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}> Subscribe </button>
            <br/><br/><br/><br/>
            </>
        )
    }
}

export default Message;