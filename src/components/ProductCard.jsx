import ProductBadge from "./ProductBadge"
import favoriteOff from "../assets/favorite-off.svg";
import favoriteOn from "../assets/favorite-on.svg";

function ProductCard({ product, onSelectProduct, isSelected, onToggleFavorite, isFavorite }) {
    
    const handleSelectionClick = () => {
        if (!product.available) { return }
        onSelectProduct(product);
    }

    const handleFavoriteClick = (e) => {
        e.stopPropagation()
        if (!product.available) { return }
        onToggleFavorite(product.id)
    }

    return (
        <article 
            className={`product-card ${product.available ? '' : 'disabled'} ${isSelected ? 'selected' : ''}`}
            onClick={handleSelectionClick}
        >
            <img 
                className={`favorite-icon ${isFavorite ? 'unselected' : ''}`} 
                src={isFavorite ? favoriteOn : favoriteOff} 
                alt="favorite" 
                onClick={(e) => handleFavoriteClick(e)}
            />
            <img className="product-image" src={product.image} alt={name} />
            <div>
                <h3>{product.name}</h3>
                <ProductBadge category={product.category}/>
                <strong>{product.price} €</strong>
            </div>
        </article>
    )
}

export default ProductCard