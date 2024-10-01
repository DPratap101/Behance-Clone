import { useEffect } from "react"
import {useDispatch,useSelector} from "react-redux"
import { BookAction, ThemeAction } from "../redux/actions"
import { Box, Button } from "@chakra-ui/react"
import "../styles/themestyles.css"
import {useNavigate} from "react-router-dom"
export let Home=()=>
    {
        let dispatch=useDispatch()
         let navigate=useNavigate()
        let data=useSelector((state)=>state.bookR.book)
        let theme=useSelector((state)=>state.themeR.theme)
        
        useEffect(()=>
        {
             dispatch(BookAction())
        },[])
        return(
            <>
            <Button bg="blue" color="white" onClick={()=>{dispatch(ThemeAction())}}>Toggle Theme</Button>
            <Box className={theme?"light":"dark"} w="90%" display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap="20px">
           {
            Object.entries(data).map(([id,ele])=>
            {
                return(
                    <Box boxShadow='md' p='6' rounded='md' bg='white' key={id}>
                    <p><b>Title : </b>{ele.title}</p>
                    <p><b>Author : </b>{ele.author}</p>
                    <Button bg="blue" color="white" onClick={()=>{navigate(`/books/${id}`)}}>Show more</Button>
                    </Box>
                )
            })
           }
            </Box>
            </>
        )
    }