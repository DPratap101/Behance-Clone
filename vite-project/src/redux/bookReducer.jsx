import { ADD_BOOK } from "./actions"

export let initState={book:{}}

export let bookReducer=(state=initState,action)=>
{
switch(action.type)
{
    case ADD_BOOK:return{book:action.payload}
    default:return state
}
} 