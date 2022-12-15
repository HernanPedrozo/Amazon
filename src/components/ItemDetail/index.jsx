import Counter from "../Counter"

const ItemDetail = ({ id, name, image, category, description, price, stock }) => {

    const [quantity, setQuantity]

    const handleOnAdd = (quantity)  => {
        console.log(`la cantidad agregada es: ${quantity}`)
    }

    return (
    <article>
        <h1>{ name }</h1>
        <picture> 
            <img src={image} alt= {name} className = "ItemImg" />
        </picture>
        <footer>
        <Counter stock={stock} initial={1} onAdd={handleOnAdd}/>
        </footer>
    </article>
    )
}

export default ItemDetail
