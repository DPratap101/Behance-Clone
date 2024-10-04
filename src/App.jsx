

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import JobPage from "./pages/JobPage";
import './App.css'

function App() {
  return (
    // <Router>
    //   <Navbar />
      
    //   <Routes>
    //     <Route path="/" element={<UserContent />} />

    //     <Route path="/login" element={<SignIn />} />

    //   </Routes>
    //   {/* <Footer /> */}
    //   {/* <Content /> */}
    // </Router>
    <BrowserRouter>
      <Routes>

      <Route index element={<HomePage/>} />
      <Route path='/'  element={<HomePage/>} />
      <Route path='/jobs' element={<JobPage/>} />
      
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
