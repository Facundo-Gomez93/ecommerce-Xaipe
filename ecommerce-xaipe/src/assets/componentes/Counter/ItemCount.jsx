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
        
        <h2>Contador</h2>
        <button onClick={handleAdd}> +1 </button>
        <label>
            <strong> {counter} </strong>
        </label>
        <button onClick={handleSustract}> -1 </button>
        <button onClick={handleOnAdd}> Agregar al carrito </button>
        
    </center>
)
}

export default ItemCount