import axios from "axios"


export let THEME_TOGGLE="THEME_TOGGLE"
export let ADD_USER="ADD_USER"
export let ADD_BOOK="ADD_BOOK"
export let IS_LOGGED="IS_LOGGED"


export let ThemeAction=()=>({
    type: THEME_TOGGLE
})

export let IsLoggedAction=(payload)=>({
    type: IS_LOGGED,
    payload
})


export let UserAction=()=>({
    type: ADD_USER
})

export let BookAction=()=>
{
    return(dispatch)=>
    {
        axios.get("https://e3-23092024-default-rtdb.asia-southeast1.firebasedatabase.app/books.json")
        .then((res)=>
        {
            
            dispatch({
                type: ADD_BOOK,
                payload:res.data
            })
        })
    }
}
    
    
    
    