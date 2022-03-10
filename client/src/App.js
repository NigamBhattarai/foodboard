import './App.scss';
import POS from './components/pos/pos';
import { Routes, Route } from "react-router";
import Order from '../src/components/dashboard/Order';
import FullReport from './components/dashboard/FullReport';
import Kitchen from './components/dashboard/Kitchen';
import Main from './components/dashboard/Main';
import Categories from './components/dashboard/Categories';
import Dashboard from './components/dashboard/dashboard';



function App() {
  return (
    <Routes>
      <Route index element = {<POS />} />
      <Route path='/orderpage' element={<Dashboard><Order /></Dashboard>} />
      <Route path='/kitchen' element={<Dashboard><Kitchen /></Dashboard>} />
      <Route path='/main' element={<Dashboard><Main /></Dashboard>} />
      <Route path='/categories' element={<Dashboard><Categories /></Dashboard>} />
      <Route path="/fullreport" element = {<Dashboard><FullReport show={true} onHide={() => {return true}}  /></Dashboard>} />
    </Routes>
  );
}

export default App;
