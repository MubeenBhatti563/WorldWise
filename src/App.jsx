import { Routes, Route, Navigate } from "react-router-dom";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import Form from "./components/Form";
import City from "./components/City";
import CitiesContext from "./contexts/CitiesContext";
import FakeAuthContext from "./contexts/FakeAuthContext";
import { lazy } from "react";
import { Suspense } from "react";
import Loading from "./components/Loading";
const HomePage = lazy(() => import("./pages/HomePage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

function App() {
  return (
    <CitiesContext>
      <FakeAuthContext>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<Cities />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<Countries />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </FakeAuthContext>
    </CitiesContext>
  );
}

export default App;
