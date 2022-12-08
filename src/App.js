import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Error404 from './components/error404/Error404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<ItemListContainer/>}/>
        <Route path={'/category/:category'} element={<ItemListContainer/>}/>
        <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
        <Route path={'*'} element={<Error404/>}/>
      </Routes>  
      </BrowserRouter>
   
    </div>
  );
}

export default App;