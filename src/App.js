import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactUs from "./components/routes/ContactUs";
import Home from "./components/routes/Home";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
