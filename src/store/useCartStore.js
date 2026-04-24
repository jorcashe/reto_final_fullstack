import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cart: [],
  
  addToCart: (product) => {
    const cart = get().cart;
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      set({
        cart: cart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  removeFromCart: (productId) => 
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  getTotal: () => {
    const cart = get().cart;
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
}));