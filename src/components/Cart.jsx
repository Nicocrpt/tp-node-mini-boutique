function Cart({
    cartItems,
    onRemoveFromCart,
    onChangeQuantity,
    onClearCart,
    customerName,
    onCustomerNameChange,
    onOrderSubmit
}) {
    const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <section className="cart">
            <h2>Panier - ({cartItems.length})</h2>
            {cartItems.length === 0 && (
                <p>Votre panier est vide.</p>
            )}
            {cartItems.length > 0 && (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <div className="cart-qty">
                                    <button onClick={() => onChangeQuantity(item.id, -1)}>−</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => onChangeQuantity(item.id, 1)}>+</button>
                                </div>
                                <span>{item.price * item.quantity} €</span>
                                <button onClick={() => onRemoveFromCart(item.id)}>
                                    Supprimer
                                </button>
                            </li>
                        ))}
                    </ul>
                    {cartItems.length > 0 && (
                        <>
                            <p>Total : {total} €</p>
                            <button onClick={onClearCart}>
                                Vider le panier
                            </button>
                            <form onSubmit={onOrderSubmit} className="order-form">
                                <label>
                                    Votre nom :
                                    <input
                                        type="text"
                                        value={customerName}
                                        onChange={(event) => onCustomerNameChange(event.target.value)}
                                        placeholder="Ex : Alice"
                                    />
                                </label>
                                <button type="submit">Valider la commande</button>
                            </form>
                        </>
                    )}
                </>
            )}
        </section>
    )
}

export default Cart