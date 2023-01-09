import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

let itialValue = true; //we want prevent it on first rendring

function App() {
  const showCard = useSelector(state => state.card.cardState);
  const card = useSelector(state => state.cardReducer)

  useEffect(()=>{
    const sendCardData = async()=>{
    const response = await fetch("https://redux-project-by-trainer-default-rtdb.firebaseio.com/card.json",{
      method:"PUT",
      body:JSON.stringify(card)
    })
    if(!response.ok){
      throw new Error("somthing wrong")
    }
     
  }
  if(itialValue){
    itialValue = false;
    return;
  }
    sendCardData().catch((err)=>{
      console.log(err)
    })
  },[card])

  return (
    <Layout>
      {showCard &&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
