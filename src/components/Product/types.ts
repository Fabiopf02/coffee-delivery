export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string
}

export interface ProductProps {
  product: IProduct
}
