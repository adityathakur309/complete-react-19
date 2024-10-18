import { useReducer } from "react"


export const Reducer = () =>{
    console.log("i am reducer");
    
    let initialState = {
        count:0,
        inc:2,
        dec:2,

    }
    const reducer = (state,action) =>{
        switch(action.type){
            case "INCREMENT":
                return {
                    ...state,  count:state.count+state.inc,
                }
                case "DECREMENT":
                    return {
                        ...state,  count:state.count-state.dec,
                    }
                    case "RESET":
                    return {
                        ...state,  count:0,
                    }
                    default :
                    return state;
        }

    }


    const[state,dispatchCount] = useReducer(reducer,initialState)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() =>{
                dispatchCount({type:"INCREMENT"})
            }}>increment</button>
            <button onClick={() =>{
                dispatchCount({type:"DECREMENT"})
            }}>decrement</button>
            <Child/>
            <button onClick={() =>{
                dispatchCount({type:"RESET"})
            }}>reset</button>
            
        </div>
    )
}
export const Child = () =>{
    console.log("i am child");
    return <h1>child</h1>
    
}