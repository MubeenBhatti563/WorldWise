import React from "react";
import { Link } from "react-router-dom";
import useCity from "../hooks/useCity";

const City = () => {
  const { cityItem, formatDate } = useCity();

  return (
    <div className="bg-[rgb(61,63,68)] w-full p-[1rem_2rem_1rem_2rem] rounded-md shadow-md">
      <div className="flex flex-col gap-3 items-start text-white text-[0.9rem]">
        <div>
          <h5 className="text-[0.8rem] text-[gray]">CITYNAME</h5>
          <p className="flex items-center gap-1">
            <span>{cityItem.emoji}</span>
            <span>{cityItem.cityName}</span>
          </p>
        </div>
        <div>
          <h5 className="text-[0.8rem] text-[gray]">YOU WENT TO LISBON ON</h5>
          <p>{formatDate(cityItem.date)}</p>
        </div>
        <div>
          <h5 className="text-[0.8rem] text-[gray]">YOUR NOTES</h5>
          <p>{cityItem.notes}</p>
        </div>
        <div>
          <h5 className="text-[0.8rem] text-[gray]">LEARN MORE</h5>
          <a
            href={`https://en.wikipedia.org/wiki/${cityItem.cityName}`}
            target="_blank"
            className="text-yellow-600 underline"
          >
            Check out {cityItem.cityName} on Wikipedia &rarr;
          </a>
        </div>
        <Link
          to="/app/cities"
          className="px-4 py-1 bg-[rgb(61,63,68)] border rounded-md cursor-pointer"
        >
          &larr; Back
        </Link>
      </div>
    </div>
  );
};

export default City;
