import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'
import { products } from './data/products'
import { useState } from 'react'

function handleAddToCart(product) {
  console.log('Produit à ajouter au panier :', product.name)
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [showDetails, setShowDetails] = useState(true)
  const [favoriteProductsIds, setFavoriteProductsIds] = useState([])

  const toggleFavorite = (productId) => {
    if (favoriteProductsIds.includes(productId)) {
      setFavoriteProductsIds(favoriteProductsIds.filter(e => e != productId))
    } else {
      setFavoriteProductsIds([...favoriteProductsIds, productId]);
    }
  }

  return (
    <>
      <Header />

      <main>
        <ProductList 
          products={products} 
          onSelectProduct={setSelectedProduct}
          selectedProductId={selectedProduct.id}
          favoriteProductsIds={favoriteProductsIds}
          onToggleFavorite={toggleFavorite}
        />

        <button className="details-toggle" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Masquer les détails' : 'Afficher les détails'}
        </button>

        {showDetails && (
          <ProductDetails 
            product={selectedProduct} 
            isFavorite={favoriteProductsIds.includes(selectedProduct.id)}
            onAddToCart={handleAddToCart}
          />
        )}
      </main>
      
      <Footer />
    </>
  )
}

export default App
