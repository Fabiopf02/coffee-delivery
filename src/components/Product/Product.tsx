import React from 'react'
import { Counter } from '@components/Counter'
import Button, { BUTTON_VARIANT } from '@components/Button'
import { ProductContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { ProductProps } from './types'
import { useCart } from '@hooks/cart'
import { formatCurrency } from 'src/helpers/money'

export function Product({ product }: ProductProps) {
  const { updateCart } = useCart()
  const [productCounter, setProductCounter] = React.useState(1)

  const addToCart = () => {
    updateCart({ ...product, amount: productCounter })

    setProductCounter(1)
  }

  return (
    <ProductContainer>
      <img src={product.image} />
      <div className='tags'>
        {product.tags.map((tag) => (
          <div className='tag' key={tag}>
            {tag}
          </div>
        ))}
      </div>

      <p className='name'>{product.name}</p>

      <p className='description'>{product.description}</p>

      <div className='actions'>
        <div>
          R$ <span className='price'>{formatCurrency(product.price)}</span>
        </div>
        <Counter value={productCounter} onChange={setProductCounter} />
        <Button variant={BUTTON_VARIANT.PURPLE} onClick={addToCart}>
          <ShoppingCart size={22} weight='fill' />
        </Button>
      </div>
    </ProductContainer>
  )
}
