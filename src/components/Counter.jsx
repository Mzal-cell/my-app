// use state
// react gives us a tool called a HOOK, to manage state in our components.

// import { useState } from 'react'

// function Counter() {
//   // useState returns an array with two elements: the current state value and a function to update that value. We can use array destructuring to assign these values to variables.
//   const [count, setCount] = useState(0)



//   State and events
// Events let us detect what the user does or their interactions and respond to them. We can use the onClick event to detect when a user clicks a button, and then update our state accordingly.

import { useState } from "react";

function Button() {
    const [clicks, setClicks] = useState(0);

    function Click() {
        alert('You Clicked Me!')
    }

    return (
        <button onClick={Click}>
            <h3>Click Me</h3>
        </button>
    )
}

export default Button;