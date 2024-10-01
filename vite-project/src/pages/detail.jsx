import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { Box } from "@chakra-ui/react"

export let Detail=()=>
{
      let data=useSelector((state)=>state.bookR.book)
    let {bookId}=useParams()
    let bookDetail=Object.entries(data).filter(([id,ele])=>id==bookId)
    
    return(
        <Box boxShadow='md' p='6' rounded='md' bg='white' >
        <p><b>Title : </b>{bookDetail[0][1].title}</p>
        <p><b>Author : </b>{bookDetail[0][1].author}</p>
        <p><b>Synopsis : </b>{bookDetail[0][1].synopsis}</p>
        <p><b>Publication Date : </b>{bookDetail[0][1].publicationDate}</p>
        </Box>
    )
    
}