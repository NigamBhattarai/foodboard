import './App.scss';
import POS from './components/pos/pos';
import { Routes, Route } from "react-router";
import TopBar from './components/pos/extras/TopBar';
<<<<<<< HEAD
import Categories from './components/dashboard/Categories';
import Order from '../src/components/dashboard/Order';
=======
import Main from './components/dashboard/Main';
import Dashboard from './components/dashboard/dashboard';
>>>>>>> 22f40e3ef49e8a344a195a06ecac302c36c0f807


function App() {
  return (
    <Routes>
      <Route index element = {<POS />} />
      <Route path="/developing" element = {<TopBar show={true} onHide={() => {return true}}  />} />
<<<<<<< HEAD
      <Route path="/dashboard" element = {<Categories show={true} onHide={() => {return true}}  />} />
      <Route path='/orderpage'element={<Order />} />
=======
      <Route path="/dashboard" element = {<Dashboard><Main show={true} onHide={() => {return true}}  /></Dashboard>} />
>>>>>>> 22f40e3ef49e8a344a195a06ecac302c36c0f807
    </Routes>
  );
}

export default App;
