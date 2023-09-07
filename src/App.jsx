import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader/Loader";

// pages
const Onboarding = React.lazy(() => import("./Pages/Onboarding/Onboarding"));
const Auth = React.lazy(() => import("./Pages/Auth/Auth"));
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Arrivables = React.lazy(() => import("./Pages/Arrivables/Arrivables"));
const Restaurant = React.lazy(() => import("./Pages/Restaurant/Restaurant"));
const History = React.lazy(() => import("./Pages/History/History"));
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));
const Cart = React.lazy(() => import("./Pages/Cart/Cart"));
const SearchPage = React.lazy(() => import("./Pages/SearchPage/SearchPage"));
const EditAccount = React.lazy(() => import("./Pages/EditAccount/EditAccount"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));
const UserProfile = React.lazy(() => import("./Pages/UserProfile/UserProfile"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/arrivables"
          element={
            <Suspense fallback={<Loader />}>
              <Arrivables />
            </Suspense>
          }
        />
        <Route
          path="/history"
          element={
            <Suspense fallback={<Loader />}>
              <History />
            </Suspense>
          }
        />
        <Route
          path="/meal/:meal_id"
          element={
            <Suspense fallback={<Loader />}>
              <Restaurant />
            </Suspense>
          }
        />
        <Route
          path="/search/:search_query"
          element={
            <Suspense fallback={<Loader />}>
              <SearchPage />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="/profile/user"
          element={
            <Suspense fallback={<Loader />}>
              <UserProfile />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <Suspense fallback={<Loader />}>
              <EditAccount />
            </Suspense>
          }
        />
        <Route
          path="/onboarding"
          element={
            <Suspense fallback={<Loader />}>
              <Onboarding />
            </Suspense>
          }
        />
        <Route
          path="/auth"
          element={
            <Suspense fallback={<Loader />}>
              <Auth />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
