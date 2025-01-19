import { legacy_createStore as createStore } from "redux";
import employeeReducer from "./reducers";

const store = createStore(employeeReducer);

// Načtení z LS (pokud tam jsou nějaké uložené employees)
const savedState = localStorage.getItem("employeeState");
if (savedState) {
  store.dispatch({ type: "LOAD_STATE", payload: JSON.parse(savedState) });
}

// Uložení do LS při každé změně
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("employeeState", JSON.stringify(state));
});

export default store;
