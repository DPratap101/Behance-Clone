import { Box, Button } from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"

export let Navbar=()=>
{
    let navigate=useNavigate()
    return(
    <Box bg="cyan" p={3} display="flex" justifyContent="space-evenly">
       <Button bg="blue" color="white" onClick={()=>{navigate("/")}}>Home</Button>
       <Button bg="blue" color="white" onClick={()=>{navigate("/signup")}}>Signup</Button>
       <Button bg="blue" color="white" onClick={()=>{navigate("/login")}}>Login</Button>
       <Button bg="blue" color="white" onClick={()=>{navigate("/cart")}}>Cart</Button>

    </Box>
    )
}