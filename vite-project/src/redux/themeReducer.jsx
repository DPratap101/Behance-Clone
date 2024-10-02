import { THEME_TOGGLE } from "./actions"

export let initState={theme:true}

export let themeReducer=(state=initState,action)=>
{
switch(action.type)
{
    case THEME_TOGGLE:return{theme:!state.theme}
    default:return state
}
} 