import Button from "@components/Button";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { Description } from "../styles";

type PaymentValue = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY'

interface PaymentProps {
  onChange: (value: PaymentValue) => void
  value: PaymentValue
}

export function Payment(props: PaymentProps) {
  const theme = useTheme()

  return (
    <div className="content">
      <Description>
        <p>
          <CurrencyDollar size={22} color={theme['purple-500']} />
          Pagamento
        </p>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </Description>
      <div className="row">
        <Button
          type='button'
          onClick={() => props.onChange('CREDIT_CARD')}
          className={props.value === 'CREDIT_CARD' ? 'active-button' : ''}
        >
          <CreditCard /> CARTÃO DE CRÉDITO
        </Button>
        <Button
          type='button'
          onClick={() => props.onChange('DEBIT_CARD')}
          className={props.value === 'DEBIT_CARD' ? 'active-button' : ''}
        >
          <Bank /> CARTÃO DE DÉBITO
        </Button>
        <Button
          type='button'
          onClick={() => props.onChange('MONEY')}
          className={props.value === 'MONEY' ? 'active-button' : ''}
        >
          <Money /> DINHEIRO
        </Button>
      </div>
    </div>
  )
}