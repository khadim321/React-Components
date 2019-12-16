import React from 'react';

function FuntionClick () {
    function clickHandler () {
        console.log('Button Clicked')
    }
    return(
        <>
        <h1>Event Handler is below!</h1>
        <button onClick={clickHandler}>ClickMe!</button>
        <p>Button clicked shown on console.</p>
        <br/>
        <br/>

{/* In Class method onClick={this.clickHandler} likhaeen gay baqiii same haa. */}

        </>
    )
}

export default FuntionClick;