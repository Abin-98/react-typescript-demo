import React from "react";
import "./App.css";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import Greet from "./components/Greet";
/*import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";*/

function App() {
  /*  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne"},
    { first: "Emilia", last: "Clark" },
    { first: "Robert", last: "Williams" },
  ];


  --------------------------------

  in return-
  <Greet name={"Abin"} messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
*/
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo</Heading>
      </Oscar>
      <Greet name="Abin" isLoggedIn={false}/>
    </div>
  );
}

export default App;
