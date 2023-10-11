import { Link } from "react-router-dom"


const Item = ({product}) => {
return (
    <div className="card w-25 m-5">
    <div className="card-body">
        <img className="w-100 card-img-top" src={product.imageUrl} alt="imagen producto"/>
        <p>Nombre: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Precio: {product.price}</p>
    </div>
    <div className="card-footer">
        <Link to= {`/detalle/${product.id}`}>
        <button className="btn btn-outline-dark w-100">Ver Producto</button>
        </Link>
    </div>
</div> 
)
}

export default Item