import React, { createContext } from 'react'

export interface IAddress {
  street: string
  complement: string
  zipCode: string
  district: string
  city: string
  uf: string
  number: string
}

export type PaymentMethod = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY' 

interface UserContextData {
  address: IAddress
  paymentMethod: PaymentMethod
  updateAddress: (data: IAddress) => void
  updatePaymentMethod: (newPaymentMethod: PaymentMethod) => void
}

export const UserContext = createContext({} as UserContextData)

interface UserContextProviderProps {
  children: React.ReactNode
}

export const UserContextProvider = (props: UserContextProviderProps) => {
  const [address, setAddress] = React.useState<IAddress>({} as IAddress)
  const [paymentMethod, setPaymentMethod] = React.useState<PaymentMethod>('CREDIT_CARD')

  const updateAddress = (data: IAddress) => {
    setAddress(data)
  }

  const updatePaymentMethod = (newPaymentMethod: PaymentMethod) => setPaymentMethod(newPaymentMethod)

  return (
    <UserContext.Provider value={{
      address,
      paymentMethod,
      updateAddress,
      updatePaymentMethod,
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
