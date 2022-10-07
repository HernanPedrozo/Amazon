import './Item.css';

const Item = ({product}) => {

    return (
        <article className="CardItem">

            <li>
                <h3> {product.name} </h3>                 
            </li>
        </article>
    )
}

export default Item