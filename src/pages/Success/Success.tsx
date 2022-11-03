import { PaymentMethod } from "@contexts/user"
import { useUser } from "@hooks/user"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { Container, Description, Info, Title } from "./styles"
import SuccessImage from '@assets/success-page.svg'

export function Success() {
  const { paymentMethod, address } = useUser()

  const PAYMENT_METHOD =
    paymentMethod === 'CREDIT_CARD' ? 'Cartão de Crédito'
    : paymentMethod === 'DEBIT_CARD' ? 'Cartão de Débito'
    : paymentMethod === 'MONEY' ? 'Dinheiro' : null

  return (
    <Container>
      <section>
        <Title>Uhu! Pedido confirmado</Title>
        <Description>Agora é só aguardar que logo o café chegará até você</Description>
        <Info>
          <div>
            <div className="row">
              <MapPin className="map-pin" size={36} />
              <p>
                Entrega em <span>{address.street}, {address.number}</span><br />
                {address.district} - {address.city}, {address.uf}
              </p>
            </div>
            <div className="row">
              <Timer className="timer" size={36} />
              <p>
                Previsão de entrega<br />
                <span>20 min - 30 min</span>
              </p>
            </div>
            <div className="row">
              <CurrencyDollar className="currency" size={36} />
              <p>
                Pagamento na entrega<br />
                <span>{PAYMENT_METHOD}</span>
              </p>
            </div>
          </div>
        </Info>
      </section>
      <div>
       <img src={SuccessImage} alt="Success Image" />
      </div>
    </Container>
  )
}