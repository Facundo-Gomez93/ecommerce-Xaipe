
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import NavBar from './assets/componentes/NavBar/NavBar';
import ItemListContainer from './assets/componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './assets/componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './assets/componentes/CartContainer/CartContainer';
import { CartContextProvider } from './Context/Context';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <BrowserRouter>
        <CartContextProvider> 

        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:cid' element={<ItemListContainer/>} />

          <Route path='/detalle/:pid' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={ <CartContainer /> }/> 
        </Routes>
        </CartContextProvider>
        
    </BrowserRouter>
  )
}

export default App
