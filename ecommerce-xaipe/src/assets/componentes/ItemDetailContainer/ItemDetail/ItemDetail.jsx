import ItemCount from "../../Counter/ItemCount"



const ItemDetail = ({product}) => {
    const onAdd = (count) => {
        console.log ('productos seleccionados: ',count)
    }
return (
    <div>
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
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            </div>

        </div>
    </div>
)
}

export default ItemDetail