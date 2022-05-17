import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactUs from "./components/routes/ContactUs";
import Home from "./components/routes/Home";
import Products from "./components/routes/Products";


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
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
