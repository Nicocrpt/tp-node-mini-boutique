import ProductCard from "./ProductCard";

function ProductList({ products, onSelectProduct, selectedProductId, onToggleFavorite, favoriteProductsIds, selectedCategory, onCategoryChange }) {
    const categories = [...new Set(products.map((product) => product.category))];
    const visibleProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <section className="product-list">
            <div className="product-list-head">
                <h2>Nos produits</h2>
                <select
                    className="category-filter"
                    value={selectedCategory ?? 'all'}
                    onChange={(e) => onCategoryChange(e.target.value === 'all' ? null : e.target.value)}
                >
                    <option value="all">Toutes les catégories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="products-grid">
                {visibleProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isSelected={selectedProductId === product.id}
                        isFavorite={favoriteProductsIds.includes(product.id)}
                        onSelectProduct={onSelectProduct}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProductList;