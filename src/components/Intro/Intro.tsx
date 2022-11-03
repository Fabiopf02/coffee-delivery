import { IntroContainer } from './styles'
import IntroImage from '@assets/intro-image.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p className='description'>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className='items'>
          <div className='item'>
            <div>
              <ShoppingCart size={16} weight='fill' color='white' />
            </div>
            <p>Compra simples e segura</p>
          </div>
          <div className='item'>
            <div>
              <Package size={16} weight='fill' color='white' />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div className='item'>
            <div>
              <Timer size={16} weight='fill' color='white' />
            </div>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div className='item'>
            <div>
              <Coffee size={16} weight='fill' color='white' />
            </div>
            <p>O café chega fresquinho até você</p>
          </div>
        </div>
      </div>
      <img src={IntroImage} />
    </IntroContainer>
  )
}
