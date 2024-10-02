import { Box, Button } from "@chakra-ui/react"
import {useDispatch,useSelector} from "react-redux"
import { ThemeAction } from "../redux/actions"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export let Signup=()=>
{
    let dispatch=useDispatch()
    let theme=useSelector((state)=>state.themeR.theme)
    let navigate=useNavigate()
    let handleSubmit=(e)=>
    {
         e.preventDefault()
         let obj={username:e.target[0].value,email:e.target[1].value,password:e.target[2].value,adminAccess:e.target[0].checked}
         axios.post("https://e3-23092024-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",obj)
         .then(()=>{
            alert("account is successfully created")
            navigate("/login")})
    }
    return(
        <Box className={theme?"light":"dark"} w="90%">
         <Button bg="blue" color="white" onClick={()=>{dispatch(ThemeAction())}}>Toggle Theme</Button>
         <form onSubmit={handleSubmit}>
                <input placeholder="enter username"/>
                <input placeholder="enter email"/>
                <input placeholder="enter password"/>
                <label>Admin Access<input type="checkbox"/></label>
                <input type="submit"/>
            </form>
        </Box>
    )
}