import "./App.scss";
import POS from "./components/pos/pos";
import { Routes, Route } from "react-router";
import { useNavigate } from "react-router-dom";
import Order from "../src/components/dashboard/Order";
import FullReport from "./components/dashboard/FullReport";
import Kitchen from "./components/dashboard/Kitchen";
import Main from "./components/dashboard/Main";
import Categories from "./components/dashboard/Categories";
import Dashboard from "./components/dashboard/dashboard";
import FoodManagement from "./components/dashboard/FoodManagement";
import AddOns from "./components/dashboard/AddOns";
import OrderReport from "./components/dashboard/OrderReport";
import AddFoodPopup from "./components/dashboard/AddFoodPopup";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import React, { createContext, useEffect, useReducer, useState } from "react";
import SignIn from "./components/dashboard/SignIn";
import SignUp from "./components/dashboard/SignUp";

import Cookies from "universal-cookie";
import Err404 from "./Err404";
const cookies = new Cookies();

const initialState = {
  userData: {
    isLoggedIn: cookies.get("accessToken") !== undefined ? true : false,
    user: cookies.get("user"),
  },
  loginError: { isError: false, errorField: "", errorText: "" },
  originalURL: "",
};

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

export const AppContext = createContext();

function App() {
  const navigate = useNavigate();

  function AppReducer(state, action) {
    switch (action.type) {
      //User Handler
      case "login":
        cookies.set("accessToken", action.value.accessToken, {
          path: "*",
          expires: new Date(Date.now() + 2592000),
        });
        cookies.set("user", action.value.user, {
          path: "*",
          expires: new Date(Date.now() + 2592000),
        });
        state.originalURL.length > 0
          ? navigate(state.originalURL.split(process.env.REACT_APP_BASE_URL)[1])
          : navigate("/");
        return {
          ...state,
          userData: {
            ...state.userData,
            isLoggedIn: true,
            user: action.value.user,
          },
        };
      case "logout":
        cookies.remove("accessToken", { path: "*" });
        cookies.remove("user", { path: "*" });
        navigate("/signin");
        return {
          ...state,
          userData: { ...state.userData, isLoggedIn: false, user: {} },
        };
      case "loginError":
        return {
          ...state,
          loginError: {
            isError: true,
            errorField: action.value.errorField,
            errorText: action.value.errorText,
          },
        };
      case "removeLoginError":
        return {
          ...state,
          loginError: initialState.loginError,
        };
      case "setOriginalURL":
        return { ...state, originalURL: action.value };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [nullState] = useState();

  useEffect(() => {
    if (
      !state.userData.isLoggedIn &&
      window.location.href !== process.env.REACT_APP_BASE_URL + "signin"
    ) {
      dispatch({ type: "setOriginalURL", value: window.location.href });
      navigate("/signin");
    }
    //eslint-disable-next-line
  }, [nullState]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Provider template={AlertTemplate} {...options}>
        <Routes>
          {state.userData.isLoggedIn ? (
            <>
              <Route index element={<POS />} />
              <Route path="/pos" element={<POS />} />
              <Route
                path="/orders"
                element={
                  <Dashboard>
                    <Order />
                  </Dashboard>
                }
              />
              <Route
                path="/kitchen"
                element={
                  <Dashboard>
                    <Kitchen />
                  </Dashboard>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <Dashboard>
                    <Main />
                  </Dashboard>
                }
              />
              <Route
                path="/food"
                element={
                  <Dashboard>
                    <FoodManagement />
                  </Dashboard>
                }
              />
              <Route
                path="/categories"
                element={
                  <Dashboard>
                    <Categories />
                  </Dashboard>
                }
              />
              <Route
                path="/addons"
                element={
                  <Dashboard>
                    <AddOns />
                  </Dashboard>
                }
              />
              <Route
                path="/fullreport"
                element={
                  <Dashboard>
                    <FullReport />
                  </Dashboard>
                }
              />
              <Route
                path="/orderreport"
                element={
                  <Dashboard>
                    <OrderReport />
                  </Dashboard>
                }
              />
              <Route path="/temp" element={<AddFoodPopup show={true} />} />
              <Route
                path="/logout"
                render={(props) => {
                  console.log("On logout");
                }}
              />
              <Route path="*" element={<Err404 />} />
            </>
          ) : (
            <>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Err404 />} />
            </>
          )}
        </Routes>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
