import { useState } from "react"

const ItemCount = ({inicio=1,stock,agregar}) => {
    const [count, setCount] = useState(inicio)
    const incrementar = () => {
        if (count<stock){
            setCount(prev => prev + 1)
        }
    }

    const decrementar = () => {
        if (count>1) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div>
            <h3>0</h3>
            <button onClick={decrementar}>-</button>
            <button onClick={() => agregar(count)}>Agregar al Carrito</button>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default ItemCount