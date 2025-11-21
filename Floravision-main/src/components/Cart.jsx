import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseQuantity, removeFromCart, clearCart } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Product</th>
                  <th className="p-2 text-center">Price</th>
                  <th className="p-2 text-center">Quantity</th>
                  <th className="p-2 text-center">Total</th>
                  <th className="p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-2">{item.name}</td>
                    <td className="p-2 text-center">${item.price.toFixed(2)}</td>
                    <td className="p-2 text-center">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-l"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-r"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        +
                      </button>
                    </td>
                    <td className="p-2 text-center">${item.totalPrice.toFixed(2)}</td>
                    <td className="p-2 text-center">
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">Total Quantity: {totalQuantity}</p>
              <p className="text-lg font-semibold">Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
