import {useDispatch,useSelector} from "react-redux"
import {Navigate} from "react-router-dom"



export let PrivateRoute=({children})=>
{
    let isLogged=useSelector((state)=>state.isLoggedR.isLogged)

    console.log(isLogged)
    return(
        <>
        {
            isLogged?children :<Navigate to="/login"/>
        }
        </>
    )

}