import { EmployeeState } from "./reducers"; //potrebujeme employeeState pro Loadstate
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const SET_FILTER = "SET_FILTER";
//4 konstanty definuji nazvy akci pro redux(CRUD - nastaveni filtru)

export const LOAD_STATE = "LOAD_STATE"; //konstanta pro akci LOAD_STATE nacita ulozenej stav z LS

//typ pro LoadStateAction + payload bude cely EmployeeState(employees, filterValue)
export interface LoadStateAction {
  type: typeof LOAD_STATE;
  payload: EmployeeState;
}

// pridani Employee, payload bude dat. struktura Employee
export interface AddEmployeeAction {
  type: typeof ADD_EMPLOYEE;
  payload: Employee;
}

//update Emnployee, pri updejtu Emplayee, potrebujeme celou dat.s strukturu z employee
export interface UpdateEmployeeAction {
  type: typeof UPDATE_EMPLOYEE;
  payload: Employee;
}

//smazani Employee, payload je retezec v nasem pripade ID zamestnance
export interface DeleteEmployeeAction {
  type: typeof DELETE_EMPLOYEE;
  payload: string;
}

// nastaveni filteru, payload bude text filteru (retezec)
export interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

// typ pro akce, Redux diky tomu vi jake akce se mohou objevit
export type EmployeeActionTypes =
  | AddEmployeeAction
  | UpdateEmployeeAction
  | DeleteEmployeeAction
  | SetFilterAction
  | LoadStateAction;

// typ-jeden zamestnanec
export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
}
