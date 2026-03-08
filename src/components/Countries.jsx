import React from "react";
import useCity from "../hooks/useCity";

const Countries = () => {
  const { cities, error } = useCity();

  if (error) return <div className="text-red-600">An error occured!</div>;
  if (!cities.length) return;
  <div>Add your first city by clicking on a city on the map</div>;

  return (
    <ul className="grid grid-cols-2 gap-4 w-full">
      {cities.map((item) => (
        <li
          key={item.id}
          className="border-l-6 border-amber-400 bg-[rgb(61,63,68)] px-16 rounded-md py-2 flex flex-col gap-0.5 text-sm items-center"
        >
          <span>{item.emoji}</span>
          <span>{item.cityName}</span>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
