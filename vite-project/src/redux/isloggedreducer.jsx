import { IS_LOGGED } from "./actions"

export let initState={isLogged:false}

export let isLoggedReducer=(state=initState,action)=>
{
switch(action.type)
{
    case IS_LOGGED:return{isLogged:action.payload}
    default:return state
}
} 