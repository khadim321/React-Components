import React from 'react';

// const Properties = (props) => {

//     return (
//     <>   
//             <h1>Hey! {props.name} === {props.pname}</h1>
//             {props.children}
//     </>
//     )
// }

// export default Properties;

// Destructuring props and state:

const Properties = ({name, pname}) => {

    return (
    <>   
            <h1>Hey! {name} === {pname}</h1>
            {/* {props.children} */}
    </>
    )
}

export default Properties;