import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import useUrlPosition from "../hooks/useUrlPosition";
import useFetch from "../hooks/useFetch";
import useCity from "../hooks/useCity";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
const Form = () => {
  const { lat, lng } = useUrlPosition();
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [emoji, setEmoji] = useState("");
  const { convertToEmoji, createCity, addLoading } = useCity();
  const navigate = useNavigate();
  const { data, error, loading } = useFetch(
    `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
  );

  useEffect(() => {
    if (!lat && !lng) return;
    if (!data) return;
    setCity(data.city || data.locality || "Unknown location");
    setEmoji(convertToEmoji(data.countryCode));
  }, [data, convertToEmoji, lat, lng]);

  const handleAddCity = async (e) => {
    e.preventDefault();
    const item = {
      id: Math.floor(Math.random() * 10000).toString(),
      cityName: city,
      country: data?.countryName,
      emoji: emoji,
      date: date,
      notes: notes,
      position: { lat, lng },
    };
    await createCity(item);
    navigate("/app/cities");
  };

  if (error)
    return (
      <div className="text-red-600 text-center p-4">
        ⚠️ Check your internet connection.
      </div>
    );

  if (data && !data.countryCode && !loading) {
    return (
      <div className="bg-[rgb(61,63,68)] p-4 rounded text-white text-center">
        That doesn't seem to be a city. Click somewhere else! 😉
        <Button onClick={() => navigate(-1)} type="back" buttonType="button">
          Back
        </Button>
      </div>
    );
  }

  if (!lat && !lng) {
    return (
      <div className="text-center text-green-700 font-semibold text-lg">
        Start by clicking on the map
      </div>
    );
  }

  return (
    <div className="w-full">
      {loading ? (
        <div className="text-red-600 text-center">Loading...</div>
      ) : (
        <form
          className={`flex flex-col gap-4 w-full rounded-md shadow-md py-2 px-4 bg-[rgb(61,63,68)] text-sm ${addLoading ? "blur-sm" : ""}`}
          onSubmit={(e) => handleAddCity(e)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="city">City name</label>
            <input
              type="text"
              name="city"
              className="rounded-sm py-1 px-2 bg-gray-300 text-black outline-none"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date">
              When did you go to {data?.locality || "this place"} {emoji || ""}?
            </label>
            <DatePicker
              id="date"
              dateFormat="dd/MM/yyyy"
              selected={date}
              onChange={(date) => setDate(date)}
              className="w-full rounded-sm py-1 px-2 bg-gray-300 text-black outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="about">
              Notes about your trip to {data?.locality || "this place"}{" "}
              {emoji || ""}?
            </label>
            <textarea
              name="about"
              className="rounded-sm py-1 px-2 bg-gray-300 text-black outline-none"
              rows={4}
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              required
            ></textarea>
          </div>
          <div className="flex justify-between w-full">
            <Button type="add">Add</Button>
            <Button
              type="back"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Back
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
