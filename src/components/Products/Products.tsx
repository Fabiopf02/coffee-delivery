import { Product, IProduct } from '@components/Product'
import { ProductsContainer } from './styles'

import { productsData } from '../../data/products'

export function Products() {
  const products = productsData as IProduct[]

  return (
    <ProductsContainer>
      <h3 className='title'>Nossos cafés</h3>
      <div className='products'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </ProductsContainer>
  )
}
