import React from "react";
import { CitiesProvider } from "../contexts/CitiesContext";
import { useContext } from "react";

const useCity = () => {
  const city = useContext(CitiesProvider);
  if (city === undefined)
    throw new Error("useCity was used out side of CitiesContext");
  return city;
};

export default useCity;
