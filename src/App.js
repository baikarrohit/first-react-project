import FormInput from "./components/Users/FormInput";
import "./App.css";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const formSubmitHanlder = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <FormInput onFormSubmit={formSubmitHanlder} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
