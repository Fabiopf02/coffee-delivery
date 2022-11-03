import Button from '@components/Button'
import { Counter } from '@components/Counter'
import { ICart } from '@contexts/cart'
import { Trash } from 'phosphor-react'

import { CheckoutProductContainer } from './styles'
import { formatCurrency } from '@helpers/money'
import { useCart } from '@hooks/cart'

interface CheckoutProductProps {
  product: ICart
}

export function CheckoutProduct({ product }: CheckoutProductProps) {
  const { updateCart, removeFromCart } = useCart()
  const total = product.amount * product.price

  const updateProduct = (newAmount: number) => updateCart({...product, amount: newAmount})

  return (
    <CheckoutProductContainer>
      <img src={product.image} width={64} height={64} />
      <div className='right'>
        <div>
          <p>{product.name}</p>
          <div className="buttons">
            <Counter value={product.amount} onChange={updateProduct} />
            <Button onClick={() => removeFromCart(product.id)}><Trash size={16} /> REMOVER</Button>
          </div>
        </div>
      <p className='total-product'>{formatCurrency(total, true)}</p>
      </div>
    </CheckoutProductContainer>
  )
}