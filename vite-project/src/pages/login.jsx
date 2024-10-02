import { Box, Button } from "@chakra-ui/react"
import {useDispatch,useSelector} from "react-redux"
import { IsLoggedAction, ThemeAction } from "../redux/actions"
import {useNavigate} from "react-router-dom"
import axios from "axios"

export let Login=()=>
    {
        let dispatch=useDispatch()
        let theme=useSelector((state)=>state.themeR.theme)
        let navigate=useNavigate()
        let handleSubmit=(e)=>
        {
             e.preventDefault()
             let obj={email:e.target[0].value,password:e.target[1].value}
             axios.get("https://e3-23092024-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
             .then((res)=>{
                let user=Object.entries(res.data).filter(([id,ele])=>ele.email==obj.email&&ele.password==obj.password)
                if(user.length>0)
                {
                    alert("you are successfully logged in")
                    dispatch(IsLoggedAction(true))
                    navigate("/")
                }
                
            })
            .catch((error)=>{console.log(error)})
        }
        return(
            <Box className={theme?"light":"dark"} w="90%">
             <Button bg="blue" color="white" onClick={()=>{dispatch(ThemeAction())}}>Toggle Theme</Button>
             <form onSubmit={handleSubmit}>
                   
                    <input placeholder="enter email"/>
                    <input placeholder="enter password"/>
            
                    <input type="submit"/>
                </form>
            </Box>
        )
    }