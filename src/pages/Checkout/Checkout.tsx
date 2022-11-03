import { Input } from '@components/Input'
import { useCart } from '../../hooks/cart'
import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Card, CheckoutContainer, Description, CoffeeCard, Title, Divider } from './styles'
import Button, { BUTTON_VARIANT } from '@components/Button'
import React, { FormEvent } from 'react'
import { CheckoutProduct } from './Product/CheckoutProduct'
import { formatCurrency } from '@helpers/money'
import { Payment } from './Payment'
import { useUser } from '@hooks/user'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { IAddress } from '@contexts/user'

export function Checkout() {
  const { cart } = useCart()
  const { paymentMethod, updatePaymentMethod, updateAddress, address } = useUser()
  const { register, handleSubmit } = useForm<IAddress>({defaultValues: address})
  const navigate = useNavigate()
  const theme = useTheme()

  const totalItems = cart.reduce((_total, product) => 
    _total += product.price * product.amount
  , 0)

  const total = totalItems
  const hasProducts = cart.length > 0

  const onSubmit = (data: IAddress) => {
    if (!hasProducts) return
    updateAddress({...data, uf: data.uf.toUpperCase()})
    navigate('/success')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CheckoutContainer>
          <Card>
              <Title>Complete seu pedido</Title>
              <div className='content'>
                <Description>
                  <p><MapPinLine size={22} color={theme['yellow-900']} />Endereço de Entrega</p>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </Description>
                <Input
                  placeholder='CEP'
                  maxLength={9}
                  {...register('zipCode', { required: true, maxLength: 9 })}
                />
                <Input
                  className='w-100'
                  placeholder='Rua'
                  {...register('street', { required: true })}
                />
                <div className="row">
                  <Input
                    placeholder='Número'
                    type='number'
                    {...register('number', { required: true })}
                  />
                  <Input
                    className='w-100'
                    placeholder='Complemento'
                    {...register('complement')}
                  />
                </div>
                <div className="row">
                  <Input
                    placeholder='Bairro'
                    {...register('district', { required: true })}
                  />
                  <Input
                    className='w-100'
                    placeholder='Cidade'
                    {...register('city', { required: true })}
                  />
                  <Input
                    style={{ width: 60 }}
                    placeholder='UF'
                    maxLength={2}
                    className='uppercase'
                    {...register('uf', { required: true, maxLength: 2 })}
                  />
                </div>
              </div>
              <Payment onChange={updatePaymentMethod} value={paymentMethod} />
          </Card>
          <Card>
            <Title>Cafés selecionados</Title>
            <div className='content'>
              <CoffeeCard>
                {cart.map(product => (
                  <React.Fragment key={product.id}>
                    <CheckoutProduct product={product}  />
                    <Divider />
                  </React.Fragment>
                ))}
                <div className="summary">
                  <div className="row">
                    <p>Total de itens</p>
                    <p style={{fontSize: '1rem'}}>{formatCurrency(totalItems, true)}</p>
                  </div>
                  <div className="row">
                    <p>Entrega</p>
                    <p style={{fontSize: '1rem'}}>{formatCurrency(0, true)}</p>
                  </div>
                  <div className="row total">
                    <p>Total</p>
                    <p>{formatCurrency(total, true)}</p>
                  </div>
                </div>
                <Button variant={BUTTON_VARIANT.YELLOW} className='finish-button' disabled={!hasProducts}>CONFIRMAR PEDIDO</Button>
              </CoffeeCard>
            </div>
          </Card>
      </CheckoutContainer>
    </form>
  )
}
