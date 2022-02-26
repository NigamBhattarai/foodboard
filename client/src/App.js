import './App.scss';
import POS from './components/pos/pos';
import { Routes, Route } from "react-router";
import TopBar from './components/pos/extras/TopBar';
import Categories from './components/dashboard/Categories';


function App() {
  return (
    <Routes>
      <Route index element = {<POS />} />
      <Route path="/developing" element = {<TopBar show={true} onHide={() => {return true}}  />} />
      <Route path="/dashboard" element = {<Categories show={true} onHide={() => {return true}}  />} />
    </Routes>
  );
}

export default App;
