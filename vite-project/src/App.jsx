
import { Box } from '@chakra-ui/react'
import './App.css'
import { Navbar } from './components.jsx/navbar'
import { Home } from './pages/home'
import { Signup } from './pages/signup'
import { Login } from './pages/login'
import { Cart } from './pages/cart'
import {Routes,Route} from "react-router-dom"
import { Detail } from './pages/detail'
import { PrivateRoute } from './components.jsx/privateRoute'

function App() {


  return (
    <>
    <Navbar/>
    <Box>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
     <Route path="/books/:bookId" element={<Detail/>}/>

    </Routes>

    </Box>
     
    </>
  )
}

export default App
