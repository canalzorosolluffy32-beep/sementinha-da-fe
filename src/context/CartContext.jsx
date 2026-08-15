import { createContext, useContext, useReducer, useEffect } from 'react';

export const COLLECTION_ID = 'colecao-completa';

export const COLLECTION_ITEM = {
  id: COLLECTION_ID,
  title: 'Coleção Completa — 10 Ebooks + 3 Bônus',
  price: 97.98,
  checkoutUrl: 'https://pay.hotmart.com/O106910150V',
  isCollection: true,
};

const STORAGE_KEY = 'sementinha_cart';

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const item = action.payload;
      // If adding collection, clear all individual ebooks
      if (item.isCollection) return [item];
      // If there's already a collection, remove it before adding individual
      const withoutCollection = state.filter((i) => i.id !== COLLECTION_ID);
      // Check if already in cart
      if (withoutCollection.find((i) => i.id === item.id)) return withoutCollection;
      return [...withoutCollection, item];
    }
    case 'REMOVE_ITEM':
      return state.filter((i) => i.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    case 'SET_CART':
      return action.payload;
    default:
      return state;
  }
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadFromStorage);
  const [isOpen, setIsOpen] = useReducer((s, v) => (v !== undefined ? v : !s), false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen();

  const total = items.reduce((sum, i) => sum + i.price, 0);
  const count = items.length;

  const hasCollection = items.some((i) => i.isCollection);
  const individualBooks = items.filter((i) => !i.isCollection);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        total,
        count,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        hasCollection,
        individualBooks,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
