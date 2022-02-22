import './App.scss';
import POS from './components/pos/pos';
import { Routes, Route } from "react-router";
import OrderPopup from './components/pos/extras/OrderPopup';


function App() {
  return (
    <Routes>
      <Route index element = {<POS />} />
      <Route path="/developing" element = {<OrderPopup show={true} onHide={() => {return true}}  />} />
    </Routes>
  );
}

export default App;
