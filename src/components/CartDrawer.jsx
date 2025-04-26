import React from "react";
import { X } from "lucide-react";
import { useCart } from "../context/cartContext";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold h1 text-neutral-400">Your Cart</h2>
        <button className="cursor-pointer" onClick={onClose}>
          <X />
        </button>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 h2">Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex h2 items-center justify-between gap-2 border p-2 rounded-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm h2 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
