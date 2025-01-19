import React from "react";
import EmployeeList from "./EmployeeList";
import Filter from "./Filter";

//funkctni kompoenta APP vraci JSX, nasi aplikaci ==> index.tsx // {/*: React.FC =*/} je tu zbytecne nepredavame zadne props
const App = () => {
  return (
    <div className="app-container">
      <h1>Správa zaměstanců</h1>
      {/* komponenta kde se zadava filtr a text pro serach */}
      <Filter />
      {/* komponenta kde se zobrazuji employees + formular + edit/delete */}
      <EmployeeList />
    </div>
  );
};

export default App;
