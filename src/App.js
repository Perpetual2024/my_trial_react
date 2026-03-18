import React,{useState} from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

function handleFirstNameChange(event) {
  setFirstName(event.target.value);
}
function handleLastNameChange(event) {
  setLastName(event.target.value);
}


  return (
    <div>
    <h2>Let us get your name</h2>
    <label>
      First Name:{' '}
      <input 
      value={firstName}
      onChange={handleFirstNameChange}

      />
    </label>
    <label>
      Last Name:{' '}
      <input
      value={lastName}
      onChange={handleLastNameChange}
      />
    </label>
    <label>
     <p>Issuing to the following Person:{fullName}</p>

    </label>


    </div>
  )
}
export default App;
