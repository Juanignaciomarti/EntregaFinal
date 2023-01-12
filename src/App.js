import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Error404 from './components/error404/Error404';
import CartContextProvider from './context/CartContext';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Checkout from './components/checkout/Checkout';
import BuyOrder from './components/buyOrder/BuyOrder';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<ItemListContainer/>}/>
        <Route path={'/category/:category'} element={<ItemListContainer/>}/>
        <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/checkout'} element={<Checkout/>}/>
        <Route path={'/buyorder/:id'} element={<BuyOrder/>}/>
        <Route path={'*'} element={<Error404/>}/>
      </Routes>
      <Footer/>  
      </BrowserRouter>
      </CartContextProvider>
     
   
    </div>
  );
}

export default App;