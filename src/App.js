import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { fetchData } from './store/card.actions';

let itialValue = true; //we want prevent it on first rendring

function App() {
  const dispatch = useDispatch()
  const showCard = useSelector(state => state.card.cardState);
  const card = useSelector(state => state.cardReducer)

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])   // dispatcn never change but get rid of error we are using;without it compiler show missing dependacy


  useEffect(()=>{
    const sendCardData = async()=>{
    const response = await fetch("https://redux-project-by-trainer-default-rtdb.firebaseio.com/card.json",{
      method:"PUT",
      body:JSON.stringify({
        totalAmount:card.totalAmount,
        totalQuantity:card.totalQuantity,
        cardRedState:card.cardRedState,
      })
    })
    if(!response.ok){
      throw new Error("somthing wrong")
    }
     
  }
  if(itialValue){
    itialValue = false;
    return;
  }
  if(card.cardIsChanged){
    sendCardData().catch((err)=>{
      console.log(err)
    })
  }
   
  },[card])

   console.log(card)

  return (
    <Layout>
      {showCard &&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
