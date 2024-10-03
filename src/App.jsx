import Navbar from "./components/Navbar";
import UserContent from "./components/UserContent";
import Footer from "./components/footer/Footer";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<UserContent />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
