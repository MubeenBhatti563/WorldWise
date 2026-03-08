import { Link } from "react-router-dom";
import useCity from "../hooks/useCity";

const Cities = () => {
  const {
    cities,
    error,
    cityList,
    cityItem,
    formatDate,
    deleteCity,
    isLoading,
  } = useCity();

  const delCity = async (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    const city = cities.find((c) => c.id === id);
    const conf = confirm(
      `Do you really want to delete this city ${city.cityName}`,
    );
    if (conf) {
      await deleteCity(id);
    }
  };

  if (error)
    return <div className="text-red-600 text-center">An error occured!</div>;
  if (cities.length === 0 && !error)
    return (
      <div className="text-green-600 text-center text-lg font-semibold">
        No city added yet!
      </div>
    );
  if (isLoading)
    return (
      <div className="text-blue-700 text-center text-lg font-semibold">
        Loading...
      </div>
    );

  return (
    <ul className="w-full flex flex-col gap-4 overflow-auto pr-2 h-[75vh]">
      {cities.map((item) => (
        <li
          key={item.id}
          className={`rounded-lg border-l-6 border-l-green-600 ${cityItem.id === item.id ? "border border-green-500" : ""} bg-[rgb(61,63,68)] shadow-md ${isLoading ? "blur-sm" : ""}`}
        >
          <Link
            to={`${item.id}?lat=${item.position.lat}&lng=${item.position.lng}`}
            onClick={() => cityList(item.id)}
            className="flex items-center justify-between p-[0.8rem_2rem_0.8rem_2rem]"
          >
            <div className="flex items-center gap-3">
              <span className="w-5">{item.emoji}</span>
              <p className="text-sm">{item.cityName}</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm">({formatDate(item.date)})</p>
              <button
                className="bg-gray-800 px-1.5 cursor-pointer rounded-[50%] text-sm hover:bg-orange-400"
                onClick={(e) => delCity(item.id, e)}
              >
                X
              </button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Cities;
