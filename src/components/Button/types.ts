import React, { ButtonHTMLAttributes } from 'react'

export enum BUTTON_VARIANT {
  YELLOW,
  YELLOW_LIGHT,
  PURPLE,
  PURPLE_LIGHT,
}

export interface ButtonProps {
  variant?: BUTTON_VARIANT
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
