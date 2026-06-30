import ProductBadge from "./ProductBadge"

function ProductCard({ name, price, category, image, description, available }) {

    const availableStyle = {
        opacity: available ? 1 : 0.3,
        cursor: available ? 'pointer': 'default',
        filter: `grayscale(${available ? 0 : 100})`
    }
    return (
        <article className="product-card" style={availableStyle}>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <ProductBadge category={category}/>
                <strong>{price} €</strong>
                <p><i>{description}</i></p>
            </div>
        </article>
    )
}

export default ProductCard