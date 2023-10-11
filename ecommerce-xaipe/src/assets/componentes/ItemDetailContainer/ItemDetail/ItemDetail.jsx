import { useState } from "react";
import { useCartContext } from "../../../../Context/Context";

import ItemCount from "../../Counter/ItemCount";
import { Link } from "react-router-dom";



const ItemDetail = ({product}) => {
    const [isCounter, setIsCounter] = useState(true)
    const {addProduct} = useCartContext()
    
    const onAdd = (quantity) => {
        addProduct( {...product, quantity } )
        setIsCounter(false)
    }

return (
    
        <div className="row">
            <h2>Detalle del producto</h2>
            <div className="col">
                <img className="w-25" src={product.imageUrl} alt="imagen" />
                <div>
                    <p>Nombre: {product.name}</p>
                    <p>Descripción: {product.description}</p>
                    <p>Precio: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                </div>
            </div>

        <div className="col">
        {
            isCounter ? 
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            :
            <>
            <Link to={'/cart'}>
            <button className="btn btn-outline-dark">Ir a Cart</button>
            </Link>
            <Link to={'/'}>
            <button className="btn btn-outline-dark">Ir a Inicio</button>
            </Link>
            </>
        }
        </div>
    </div>

    )
}

export default ItemDetail