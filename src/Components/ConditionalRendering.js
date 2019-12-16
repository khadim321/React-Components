import React , { Component } from 'react';

class Condition extends Component{

constructor(props){
    super(props)
        this.state = {
            isLoggedin: false
        }  
}
    render(){
// This is 2nd approch to rederning:

        let message
        if(this.state.isLoggedin){
            message= <div>Welcome Khadim. ..</div>
        }
        else
        {
            message= <div>Welcome Guest. ..</div>
        
        }
    return <div>
        <h1>Conditional Rendering</h1>
        <br/>
        {message}</div>

    //1st Approch to rendering:

                // if(this.state.isLoggedin){
                //     return(
                //         <div>Welcome Khadim. ..</div>

                //     )
                // }
                // else
                // {
                //     return(
                //         <div>Welcome Guest. ..</div>
                //     )
                // }
        // // return(
        // //     <>
        // //     <h1>Conditional Rendering below</h1>
        // //     <h2>Welcome Khadim.. .</h2>
        // //     <h2>Welcome Guest.. .</h2>
        // //     <br/>
        // //     <br/>
        // //     </>
        // )
    }
}

export default Condition;