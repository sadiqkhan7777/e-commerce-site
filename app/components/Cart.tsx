// app/components/Cart.tsx
type CartItem = {
    id: number;
    name: string;
    price: number;
  };
  
  interface CartProps {
    cartItems: CartItem[];
    removeFromCart: (id: number) => void;
  }
  
  const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mt-4">
                <span>{item.name} - ${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;
  