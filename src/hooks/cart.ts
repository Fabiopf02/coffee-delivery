import React from 'react'
import { CartContext } from '@contexts/cart'

export function useCart() {
  const cartContext = React.useContext(CartContext)

  return cartContext
}
