import { useEffect } from 'react'
import { useState } from 'react'
import { getProducts } from '../../asyncMock'

function Itemlistcontainer({greeting}) {
    const [products, setProducts] = useState ([])
        useEffect(() => {
            getProducts().then(products => {
                setProducts(products)
            })
        }, [])  

    return (
        <>
            <h1>{greeting}</h1>
            <ul>
                {products.map(prod => <li key={prod.id}>{prod.name}</li> )}
            </ul>
        </>

    )
}


export default Itemlistcontainer