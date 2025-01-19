import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; //redux hooks
import { EmployeeState } from "../store/reducers"; // abychom vedeli co je store
import { DELETE_EMPLOYEE, Employee, UPDATE_EMPLOYEE } from "../store/actions";
import EmployeeForm from "./EmployeeForm";

// React.FC opet zbytecny
const EmployeeList = () => {
  const { employees, filterValue } = useSelector(
    (state: EmployeeState) => state
  ); //pomoci useSelector dostaneme state, ktery ma typ EmployeeState a dsotaneme z nej pomoci desctructuringu {employees, filterValue}
  const dispatch = useDispatch(); // funkce s reduxu k volani akci(napr. mazani)

  //Usestate pro editovani Employee, kdyz je null ==> needitujeme nic /// pokud tam ulozime employee ==> zmenime state ==> editujeme(zobrazi se formular)
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  // Filtrování: podle filterValue vyhledaveme name a position
  const filteredEmployees = employees.filter((emp) => {
    return (
      emp.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      emp.position.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  //pri smazani employee s jeho ID vyvolaame DELETE_EMPLOYEE ==> tim se spusti employeeReducer ktery zpracuje upravu pole Employees
  const handleDelete = (id: string) => {
    dispatch({ type: DELETE_EMPLOYEE, payload: id });
  };

  //nastavime EditingEmployee an vybraneho employee tim se ukaze formular pro edit
  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
  };

  //volame UPDATE_EMPLOYEE v reduxu a nastavime editingEmployee zpet na null(skryjeme formular pro edit)// poznamka: az v EmployeeForm dokoncime edit, kdy zavloame onSave(...)
  const handleSave = (updatedEmployee: Employee) => {
    dispatch({ type: UPDATE_EMPLOYEE, payload: updatedEmployee });
    setEditingEmployee(null);
  };

  return (
    <div className="employee-list">
      <table>
        {/* tabulka */}
        <thead>
          <tr>
            <th>Jméno</th>
            <th>Pozice</th>
            <th>Oddělení</th>
            <th>Akce</th>
          </tr>
        </thead>
        <tbody>
          {/* mapujeme vyfiltrovane employees */}
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.department}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Forma pro edit Employee // Editing employee neni null*/}
      {editingEmployee && (
        <EmployeeForm
          employee={editingEmployee}
          onSave={handleSave}
          onCancel={() => setEditingEmployee(null)}
        />
      )}

      {/* Forma novej employee // editing employee je null chceme pouze pridat noveho employee*/}
      <h3>Přidání nového zaměstnance</h3>
      <EmployeeForm onSave={handleSave} />
    </div>
  );
};

export default EmployeeList;
