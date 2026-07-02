import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { products } from './data/products'
import { useState, useEffect } from 'react'


function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [showDetails, setShowDetails] = useState(true);
  const [favoriteProductsIds, setFavoriteProductsIds] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    console.log('Panier mis à jour :', cartItems)
  }, [cartItems])
  

  const toggleFavorite = (productId) => {
    if (favoriteProductsIds.includes(productId)) {
      setFavoriteProductsIds(favoriteProductsIds.filter(e => e != productId))
      return
    }
    setFavoriteProductsIds([...favoriteProductsIds, productId]);
  }

  const handleAddToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id)
    if (existing) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
      return
    }
    setCartItems([...cartItems, { ...product, quantity: 1 }])
  }

  const changeQuantity = (productId, delta) => {
    setCartItems(cartItems
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + delta } : item
      )
      .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }



  const handleOrderSubmit = (event) => {
    event.preventDefault()
    if (customerName.trim() === '') {
      alert('Veuillez saisir votre nom.')
      return
      if (cartItems.length === 0) {
        alert('Votre panier est vide.')
        return
      }
    }
    alert(`Merci ${customerName}, votre commande est prête !`)
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
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
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
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={removeFromCart}
          onChangeQuantity={changeQuantity}
          onClearCart={clearCart}
          onCustomerNameChange={setCustomerName}
          customerName={customerName}
          onOrderSubmit={handleOrderSubmit}
        />

      </main>
      
      <Footer />
    </>
  )
}

export default App
