import './App.scss';
import POS from './components/pos/pos';
import { Routes, Route } from "react-router";
import Order from '../src/components/dashboard/Order';
import FullReport from './components/dashboard/FullReport';
import Kitchen from './components/dashboard/Kitchen';
import Main from './components/dashboard/Main';
import Categories from './components/dashboard/Categories';
import Dashboard from './components/dashboard/dashboard';
import FoodManagement from './components/dashboard/FoodManagement';
import AddOns from './components/dashboard/AddOns';
import OrderReport from './components/dashboard/OrderReport';
import AddFoodPopup from './components/dashboard/AddFoodPopup';

import React from 'react';
import SignIn from './components/dashboard/SignIn';
import SignUp from './components/dashboard/SignUp';

function App() {
  return (
    <Routes>
      <Route index element = {<POS />} />
      <Route path='/orders' element={<Dashboard><Order /></Dashboard>} />
      <Route path='/kitchen' element={<Dashboard><Kitchen /></Dashboard>} />
      <Route path='/dashboard' element={<Dashboard><Main /></Dashboard>} />
      <Route path='/food' element={<Dashboard><FoodManagement /></Dashboard>} />
      <Route path='/categories' element={<Dashboard><Categories /></Dashboard>} />
      <Route path='/addons' element={<Dashboard><AddOns /></Dashboard>} />
      <Route path="/fullreport" element = {<Dashboard><FullReport/></Dashboard>} />
      <Route path="/orderreport" element = {<Dashboard><OrderReport/></Dashboard>} />
      <Route path='/temp' element={<AddFoodPopup show={true}/>} />
      <Route path="/signin" element = {<SignIn/>} />
      <Route path="/signup" element = {<SignUp/>} />
    </Routes>
  );
}

export default App;
