import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer() {
  const { items, isOpen, setCartOpen, updateQuantity, removeItem, totalItems, totalPrice } = useCart();

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">Your Cart ({totalItems})</h2>
          <button className="cart-close" onClick={() => setCartOpen(false)} aria-label="Close cart">
            ✕
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">☕</div>
              <p>Your cart is empty</p>
              <p style={{ fontSize: 'var(--text-sm)' }}>Discover our exquisite collection</p>
              <Link to="/menu" className="btn btn-primary btn-sm" onClick={() => setCartOpen(false)}>
                Explore Menu
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <div className="cart-item-image" style={{ background: item.color || 'var(--color-mocha)' }}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  {item.size && <div className="cart-item-size">Size: {item.size}</div>}
                  <div className="cart-item-controls">
                    <button
                      className="cart-qty-btn"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    >−</button>
                    <span className="cart-item-qty">{item.quantity}</span>
                    <button
                      className="cart-qty-btn"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    >+</button>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeItem(item.id, item.size)}>
                    Remove
                  </button>
                </div>
                <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-promo">
              <input type="text" placeholder="Promo code" aria-label="Promo code" />
              <button>Apply</button>
            </div>
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="cart-summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="cart-summary-row total">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="cart-checkout-btn"
              onClick={() => setCartOpen(false)}
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
