import { cardRedActions } from "./cardReducer"

export const fetchData = ()=>{
    return async(dispatch)=>{
    const cardFetchData = async()=>{
        const response = await fetch("https://redux-project-by-trainer-default-rtdb.firebaseio.com/card.json")
        const data = await response.json()
        return data;
    }

    try {
        const cardData =await cardFetchData()
        dispatch(cardRedActions.replceData(cardData))
    }catch(err){
        console.log(err)
    }
    }
}