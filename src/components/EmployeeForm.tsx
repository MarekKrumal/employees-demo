import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_EMPLOYEE, Employee } from "../store/actions";
import { v4 as uuidv4 } from "uuid"; // unikatni IDcko

interface EmployeeFormProps {
  employee?: Employee; // employe je volitelne pokud ho mame jsme v edit rezimu, pokud ne je v rezimu pridavani noveho employee
  onSave: (emp: Employee) => void; //funkce kterou zavalome kdyz budeme chtit ulopzit data
  onCancel?: () => void; //volitelna funkce pro zruseni editacce
}

//do stavu si ulozime bud data z employee(editace) empty object(pridani noveho employee)
const EmployeeForm: React.FC<EmployeeFormProps> = ({
  employee,
  onSave,
  onCancel,
}) => {
  const dispatch = useDispatch(); // dispatch pouzivejeme pouze pokud pridavame noveho employee
  const [formState, setFormState] = useState<Employee>({
    id: employee?.id || "",
    name: employee?.name || "",
    position: employee?.position || "",
    department: employee?.department || "",
  });

  // ukladame do formState name, position, department
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // kdyz novej zamestanenc ==> generujeme mu ID
    if (!employee) {
      const newEmp = { ...formState, id: uuidv4() };
      dispatch({ type: ADD_EMPLOYEE, payload: newEmp });
    } else {
      // Editace
      onSave(formState);
    }
    //pri odeslani kontrolujeme jestli pridavame ci edituje, kdyz pridavame generujeme ID(uuidv4()) a poselme do reduxu ADD_EMPLOYEE,
    // kdyz editujeme volame onSave(ktery byl predan z EmployeeList) ten zavolame EMPLYEE_UPDATE
    setFormState({ id: "", name: "", position: "", department: "" }); //nakonec resetujeme formular
  };

  return (
    //formular 3 inputy
    <form onSubmit={handleSubmit} className="employee-form">
      <div>
        <label>Jméno:</label>
        <input
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Pozice:</label>
        <input
          name="position"
          value={formState.position}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Oddělení:</label>
        <input
          name="department"
          value={formState.department}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">
        {employee ? "Uložit změny" : "Přidat zaměstnance"}
      </button>
      {onCancel && <button onClick={onCancel}>Zrušit</button>}
    </form>
  );
};

export default EmployeeForm;
