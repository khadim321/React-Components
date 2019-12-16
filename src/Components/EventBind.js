import React , { Component } from 'react';

class EventBind extends Component{

constructor(props){
    super(props)
        this.state = {
            message: 'Hello..!'
        }
    
}

// clickHandler(){
//     this.setState({
//         message: 'Good by..!'
//     })
// }

// Arrow method: is best approch
clickHandler = () => {
    this.setState({
        message: 'gOOd by'
    })
}


    render(){
        return(
            <>
            <h1>Event Binding</h1>
            <h1>{this.state.message}</h1>
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> (METHOD#01)*/}
            {/* <button onClick={()=> this.clickHandler()}>Click</button> (METHOD#02) */}
            <button onClick={this.clickHandler}>Click</button>
            <br/>
            <br/>
            </>
        )
    }
}

export default EventBind;