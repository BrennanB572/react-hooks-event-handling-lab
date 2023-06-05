// Code Keypad Component Here
import React from 'react';

function Keypad (){
    return (
        <div>
         <input onChange={handleChange => console.log(handleChange)} type="password"></input>
        </div>
    )
}

export default Keypad