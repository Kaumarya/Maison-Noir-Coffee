import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const { items, totalPrice, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <section className="checkout-hero">
          <div className="container">
            <h1>Your <span className="text-gradient">Cart</span></h1>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="checkout-empty">
              <span style={{ fontSize: 64, opacity: 0.3 }}>☕</span>
              <h2>Your cart is empty</h2>
              <p>Add some extraordinary coffee to get started</p>
              <Link to="/menu" className="btn btn-primary btn-lg">Explore Menu</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <section className="checkout-hero">
        <div className="container">
          <h1>Your <span className="text-gradient">Cart</span></h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="checkout-grid">
            <div className="checkout-items">
              {items.map(item => (
                <div key={`${item.id}-${item.size}`} className="checkout-item">
                  <div className="checkout-item-img" style={{ background: item.color || 'var(--color-mocha)' }}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="checkout-item-info">
                    <h3>{item.name}</h3>
                    {item.size && <p className="checkout-item-size">Size: {item.size}</p>}
                    <div className="checkout-item-controls">
                      <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="checkout-item-right">
                    <p className="checkout-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                    <button className="checkout-item-remove" onClick={() => removeItem(item.id, item.size)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="checkout-summary">
              <h2>Order Summary</h2>
              <div className="checkout-summary-rows">
                <div className="checkout-row"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
                <div className="checkout-row"><span>Shipping</span><span>Free</span></div>
                <div className="checkout-row"><span>Tax</span><span>${(totalPrice * 0.08).toFixed(2)}</span></div>
                <div className="checkout-row total"><span>Total</span><span>${(totalPrice * 1.08).toFixed(2)}</span></div>
              </div>
              <div className="checkout-promo">
                <input type="text" placeholder="Promo code" className="input-field" />
                <button className="btn btn-secondary btn-sm">Apply</button>
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 'var(--space-4)' }}>
                Place Order — ${(totalPrice * 1.08).toFixed(2)}
              </button>
              <p className="checkout-secure">🔒 Secure checkout • Free shipping on all orders</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
