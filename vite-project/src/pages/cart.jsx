import { Box, Button } from "@chakra-ui/react"
import {useDispatch,useSelector} from "react-redux"
import { IsLoggedAction, ThemeAction } from "../redux/actions"
export let Cart=()=>
{
    let dispatch=useDispatch()
    let theme=useSelector((state)=>state.themeR.theme)
    return(
        <Box className={theme?"light":"dark"} w="90%">
         <Button bg="blue" color="white" onClick={()=>{dispatch(ThemeAction())}}>Toggle Theme</Button>
         <Button bg="blue" color="white" onClick={()=>{dispatch(IsLoggedAction(false))}}>Logout</Button>
        <h2>cart</h2>
        </Box>
    )
}