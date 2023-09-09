import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowData from "./components/ShowData";
import NavBar from "./components/NavBar";
import AddData from "./components/AddData";
import DetailsData from "./components/DetailsData";
import UpdateData from "./components/UpdateData";
import ChartComponent from "./components/chartComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ShowData />} />
          <Route path="/addData" element={<AddData />} />
          <Route path="/:id/" element={<DetailsData />} />
          <Route path="/:id/update" element={<UpdateData />} />
          <Route path="/chart" element={<ChartComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
