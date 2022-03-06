import './App.scss';
import POS from './components/pos/pos';
import { Routes, Route } from "react-router";
import TopBar from './components/pos/extras/TopBar';
import FullReport from './components/dashboard/FullReport';
import Dashboard from './components/dashboard/dashboard';


function App() {
  return (
    <Routes>
      <Route index element = {<POS />} />
      <Route path="/developing" element = {<TopBar show={true} onHide={() => {return true}}  />} />
      <Route path="/dashboard" element = {<Dashboard><FullReport show={true} onHide={() => {return true}}  /></Dashboard>} />
    </Routes>
  );
}

export default App;
