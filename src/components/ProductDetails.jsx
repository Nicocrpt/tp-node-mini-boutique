function ProductDetails({ product, isFavorite, onAddToCart }) {
    return (
    <section className="product-details">
        <h2>Produit mis en avant</h2>

        <div className="details-container">
            <img src={product.image} alt={product.name} />

            <article className="details-content">
            <div className="details-text">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Prix : {product.price} €</p>

                {isFavorite && (
                <p className="favorite-text">
                    ⭐ Ce produit est dans vos favoris.
                </p>
                )}
            </div>

            <button className="add-to-cart" onClick={() => onAddToCart(product)}>
                Ajouter au panier
            </button>
            </article>
        </div>
    </section>
    )
}

export default ProductDetails