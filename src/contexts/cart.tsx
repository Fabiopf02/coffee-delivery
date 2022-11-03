import { IProduct } from '@components/Product'
import React from 'react'

export interface ICart extends IProduct {
  amount: number
}

interface ICartContextData {
  cart: ICart[]
  updateCart: (params: ICart) => void
  removeFromCart: (productId: number) => void
  cleanCart: () => void
}

export const CartContext = React.createContext({} as ICartContextData)

interface CartProviderProps {
  children: React.ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = React.useState<ICart[]>([])

  const updateCart = (params: ICart) => {
    const exists = cart.find(
      (cartItem) => cartItem.id === params.id
    )

    if (!exists) {
      addToCart(params)
      return
    }

    const newCartData = cart.map((product) => {
      if (product.id === params.id) {
        product.amount = params.amount
      }
      return product
    })

    setCart(newCartData)
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    )
  }

  const addToCart = (newItem: ICart) => {
    setCart((prevCart) => [newItem, ...prevCart])
  }

  const cleanCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{ cart, cleanCart, removeFromCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
