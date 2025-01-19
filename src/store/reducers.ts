import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_FILTER,
  LOAD_STATE,
  EmployeeActionTypes,
  Employee,
} from "./actions"; // nacitame constanty a typy z actions.ts

// stav zamestnance
export interface EmployeeState {
  employees: Employee[]; //pole zamestanncu
  filterValue: string; //text podle ktereho filtrujeme retezec
}

// vychozi stav(zadne zamestance nemame a filtr je empty retezec)
const initialState: EmployeeState = {
  employees: [],
  filterValue: "",
};

//reducer je function ktera dostane state a action a vrati novy stav
const employeeReducer = (
  state = initialState, // pokud Redux vola reducer poprve state=initialState
  action: EmployeeActionTypes //akce musi odpovidat jedne z definovanych akci typu EmployeeActionTypes
): EmployeeState => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      //z puvodniho stavu(...state) zkopirujeme vse a nyhradime pole employees, novym polem ktere obsahuje stare employees + nove employees(action.payload)
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case UPDATE_EMPLOYEE:
      //pokud ID employee se shoduje stim ktere je v payloadu, nahradime ho novym z action.payload, jinak nechame puvodni
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? action.payload : emp
        ),
      };
    // employe bude smazan pokud jeho emp.id se rovna action.payload(filtrujeme: zustavaji employees jejichz ID neni smazane)
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((emp) => emp.id !== action.payload),
      };
    //menime filterValue v nasem stavu podle payload abychom vedeli co ma user napsano v textbox filtru
    case SET_FILTER:
      return {
        ...state,
        filterValue: action.payload,
      };

    //kdyz naciteme z LS akce má cely EmployeeState(employees, filterValue) sloucime to ze soucasnym stavem ==> tim se do reduxu dostanou drive data(Employees)
    case LOAD_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state; //pokud akce neodpovida zadnemu z typu ==> vratime stav beze zmeny
  }
};

export default employeeReducer;
