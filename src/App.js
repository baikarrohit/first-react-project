import FormInput from "./components/Users/FormInput";
import "./App.css";
import UserList from "./components/Users/UserList";
import { useState } from "react";
import { Fragment } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const formSubmitHanlder = (uName, uAge, cName) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, clgName: cName, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment className="App">
      <FormInput onFormSubmit={formSubmitHanlder} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;

