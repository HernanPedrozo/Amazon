import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState (0)
    

    const increment = () => {
    
        setCount ( count +1 )
    
    }    

    const decrement = () => {

        setCount ( count - 1 )

    }    

    return (
    <div>

        <h1>{count}</h1>
        <button onClick={decrement}>Decrementar</button>    
        <button  onClick={increment}>Incrementar</button>
        
    </div>
    
    )
}

export default Counter;