import React, { createContext, useReducer, useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

const CitiesProvider = createContext();
const BASE_URL = "http://localhost:3000";
const initialState = {
  cities: [],
  cityItem: {},
  addLoading: false,
  isLoading: false,
  error: "",
};

const reducer = (state, action) => {
  // different action will be here
  switch (action.type) {
    case "cityItem":
      return {
        ...state,
        cityItem: action.payload,
      };
    case "addLoading":
      return {
        ...state,
        addLoading: action.payload,
      };
    case "fetchLoading":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "data":
      return {
        ...state,
        cities: action.payload,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    case "city/created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case "rejected":
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error("Unknow action type");
  }
};

function convertToEmoji(countryCode) {
  if (!countryCode) return "";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const formatDate = (date) => {
  if (!date || isNaN(new Date(date).getTime())) return "Date not available";
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
};

const CitiesContext = ({ children }) => {
  const [{ cityItem, addLoading, error, cities, isLoading }, dispatch] =
    useReducer(reducer, initialState);

  const cityList = useCallback(
    (id) => {
      const item = cities.find((i) => i.id === id);
      dispatch({ type: "cityItem", payload: item });
    },
    [dispatch, cities],
  );

  const createCity = useCallback(async (newCity) => {
    try {
      dispatch({ type: "addLoading", payload: true });
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: `There was an error to add city! ${err.message}`,
      });
      alert("There was an error to add city!", err.message);
    } finally {
      dispatch({ type: "addLoading", payload: false });
    }
  }, []);

  const deleteCity = useCallback(
    async (id) => {
      try {
        dispatch({ type: "addLoading", payload: true });
        await fetch(`${BASE_URL}/cities/${id}`, {
          method: "DELETE",
        });
        dispatch({ type: "city/deleted", payload: id });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: `There was an error to delete city! ${err.message}`,
        });
      } finally {
        dispatch({ type: "addLoading", payload: false });
      }
    },
    [dispatch],
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "fetchLoading", payload: true });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "data", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error });
      } finally {
        dispatch({ type: "fetchLoading", payload: false });
      }
    };
    fetchData();
  }, []);

  const value = useMemo(() => {
    return {
      cities,
      error,
      cityItem,
      cityList,
      convertToEmoji,
      createCity,
      formatDate,
      addLoading,
      deleteCity,
      isLoading,
    };
  }, [
    isLoading,
    deleteCity,
    error,
    cities,
    addLoading,
    cityItem,
    cityList,
    createCity,
  ]);
  return (
    <CitiesProvider.Provider value={value}>{children}</CitiesProvider.Provider>
  );
};

export { CitiesProvider };
export default CitiesContext;
