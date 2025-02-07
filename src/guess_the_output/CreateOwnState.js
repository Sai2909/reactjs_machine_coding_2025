import React from 'react'

const CreateOwnState = (intialState) => {
    let state = intialState;
    function setState(newState) {
          //we can also add few conditions to validate the data.
        state = newState;
        render();//your custom method to trigger page refresh on state change
    }
    return (
        [state, setState]
    )
}

export default CreateOwnState


/*
The useState function takes an initial state as an argument, and returns an array with the current state and a function to update it.

The state is maintained in a closure so that it can be accessed and updated by the component functions.

For the render function on the setState is not something that you would typically include in a vanilla implementation, since is related to some kind of framework, but in your case you may replace it with your specific render function.
*/
