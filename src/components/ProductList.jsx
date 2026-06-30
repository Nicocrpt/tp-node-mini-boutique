import ProductCard from "./ProductCard";

function ProductList({ products, onSelectProduct, selectedProductId, onToggleFavorite, favoriteProductsIds }) {
    return (
        <section className="product-list">
            <h2>Nos produits</h2>
            <div className="products-grid">
                <ProductCard 
                    product={products[0]} 
                    onSelectProduct={onSelectProduct} 
                    isSelected={selectedProductId === products[0].id}
                    isFavorite={favoriteProductsIds.includes(products[0].id)}
                    onToggleFavorite={onToggleFavorite}
                />
                <ProductCard 
                    product={products[1]} 
                    onSelectProduct={onSelectProduct} 
                    isSelected={selectedProductId === products[1].id}
                    isFavorite={favoriteProductsIds.includes(products[1].id)}
                    onToggleFavorite={onToggleFavorite}
                />
                <ProductCard 
                    product={products[2]} 
                    onSelectProduct={onSelectProduct} 
                    isSelected={selectedProductId === products[2].id}
                    isFavorite={favoriteProductsIds.includes(products[2].id)}
                    onToggleFavorite={onToggleFavorite}
                />
                <ProductCard 
                    product={products[3]} 
                    onSelectProduct={onSelectProduct} 
                    isSelected={selectedProductId === products[3].id}
                    isFavorite={favoriteProductsIds.includes(products[3].id)}
                    onToggleFavorite={onToggleFavorite}
                />
                <ProductCard 
                    product={products[4]} 
                    onSelectProduct={onSelectProduct} 
                    isSelected={selectedProductId === products[4].id}
                    isFavorite={favoriteProductsIds.includes(products[0].id)}
                    onToggleFavorite={onToggleFavorite}
                />
            </div>
        </section>
    )
}

export default ProductList;