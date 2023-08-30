import { useState } from 'react'



import NavBar from './assets/componentes/NavBar/NavBar';
import ItemListContainer from './assets/componentes/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <NavBar/>
        <ItemListContainer/>
    </div>
  )
}

export default App
