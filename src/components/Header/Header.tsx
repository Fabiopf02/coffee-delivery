import { HeaderContainer } from './styles'
import LogoSvg from '@assets/logo-coffee-delivery.svg'
import Button, { BUTTON_VARIANT } from '@components/Button'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@hooks/cart'
import { useUser } from '@hooks/user'

export function Header() {
  const { cart } = useCart()
  const { address } = useUser()
  const navigate = useNavigate()

  const navigateToCheckout = () => navigate('/checkout')
  const selectedProducts = cart.length
  const hasAddress = Object.keys(address).length > 0

  return (
    <HeaderContainer>
      <div className='header-content'>
        <img src={LogoSvg} alt='logo coffee delivery' />
        <div>
          <Button variant={BUTTON_VARIANT.PURPLE_LIGHT}>
            <MapPin size={20} weight='fill' />
            {hasAddress ? `${address.city}, ${address.uf}` : 'Não informado'}
          </Button>
          <Button
            variant={BUTTON_VARIANT.YELLOW_LIGHT}
            onClick={navigateToCheckout}
            disabled={!selectedProducts}
          >
            <ShoppingCart size={20} weight='fill' />
            {selectedProducts && (
              <span className='counter'>{selectedProducts}</span>
            )}
          </Button>
        </div>
      </div>
    </HeaderContainer>
  )
}
