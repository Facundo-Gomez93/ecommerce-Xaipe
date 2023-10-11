import { useState } from "react"


const ItemCount = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial)

    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter+1)
        }
    }
    const handleSustract = () => {
        if (counter > initial){
            setCounter(counter-1)
        }
    }
    const handleOnAdd = () => {
        onAdd(counter)
    }

return (
    <center>
        
        <button className="btn btn-dark m-1" onClick={handleAdd}> +1 </button>
        <label>
            <strong className="fs-5"> {counter} </strong>
        </label>
        <button className="btn btn-dark m-1" onClick={handleSustract}> -1 </button>
        <button className="btn btn-dark m-1" onClick={handleOnAdd}> Agregar al carrito </button>
        
    </center>
)
}

export default ItemCount