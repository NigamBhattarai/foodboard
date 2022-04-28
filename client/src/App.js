import "./App.scss";
import POS from "./components/pos/pos";
import { Routes, Route } from "react-router";
import {useNavigate} from "react-router-dom";
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

import React, { createContext, useReducer } from "react";
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
        navigate("/");
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
          userData: {
            ...state.userData,
            isLoggedIn: false,
            user: {},
          },
        };
      default:
        return state;
    }
  }
  
  
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
    <Routes>
      {state.userData.isLoggedIn ? (
        <>
          <Route index element={<POS />} />
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
    </AppContext.Provider>
  );
}

export default App;
