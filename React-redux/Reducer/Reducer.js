import { BUY_LAPTOP } from "../Action/Index"


const initialState={

    numOfLaptops:100
}

 const laptopReducer=(state=initialState, Action)=>{

    switch (Action.type) {
        case BUY_LAPTOP:
            return {numOfLaptops:state.numOfLaptops+1}    
        default  :
            return state
             
    }
     
}

export default laptopReducer
