import React from "react";
import { useDispatch } from "react-redux"; // funkce k volani akci v Reduxu
import { SET_FILTER } from "../store/actions"; //typ pro nastaveni filtru

//komponenta filter //React.Fc tu opet nepotrebujeme
const Filter = () => {
  const dispatch = useDispatch(); // funkce k volani akci v Reduxu

  // v handleChange cteme hodnotu z pole pro search a dispatchujeme(Vyvolat/Spustit) akci SET_FILTER
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SET_FILTER, payload: e.target.value }); //payload e.target.value ulozi do Reduxu text filtru, po prepsani v inputu se FilterValue okamzite meni
  };

  return (
    <div className="filter-container">
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default Filter;
