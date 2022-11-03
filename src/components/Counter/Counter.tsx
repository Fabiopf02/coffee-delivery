import React from 'react'
import { CounterContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

export interface CounterProps {
  onChange: (value: number) => void
  value: number
}

export function Counter(props: CounterProps) {
  const { onChange, value } = props

  const handleAddCounter = () => {
    onChange(value + 1)
  }

  const handleDecreaseCounter = () => {
    onChange(value === 1 ? value : value - 1)
  }

  return (
    <CounterContainer>
      <button onClick={handleDecreaseCounter}>
        <Minus size={14} />
      </button>
      <div>{value}</div>
      <button onClick={handleAddCounter}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  )
}
