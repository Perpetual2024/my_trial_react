import { useState } from "react";
import React from "react";

function Main(){
    const[firstName, setFirstName] = useState(" ");
    const[secondName, setSecondName] = useState(" ");

    const fullName = firstName + " " + secondName;
function handleFirstName(event){
    setFirstName(event.target.value);
}
function handleSecondName(event){
    setSecondName(event.target.value);
}
 return
 <div>
    <h1>Lets Have your name</h1>
    <label>FirstName:{' '} <input value={firstName} onChange={handleFirstName} />

    </label>
    <label>SecondName:{' '} <input value={secondName} onChange={handleSecondName} />

    </label>
    <label>
        <p>Issuing to the {fullName}</p>
    </label>
 </div>

}
export default Main;