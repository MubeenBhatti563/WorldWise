import SideBar from "../components/SideBar";
import Map from "../components/Map";

const AppLayout = () => {
  // Created cityList function to retreive single element of the city in our /app/cities/city
  // This will pass through useOutletContext() to our City.jsx element to read it

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.7fr_2fr] lg:grid-cols-[1fr_2fr]">
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
