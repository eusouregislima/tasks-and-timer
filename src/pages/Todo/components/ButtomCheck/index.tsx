import React from 'react'
import { Checks } from 'phosphor-react'
import { ButtonCheck } from './styles'

type ButtonColor = 'gray' | 'red' | 'green' | 'yellow'

interface ButtonProps {
  color: ButtonColor
  children: any
}

export const ButtonC: React.FC<ButtonProps> = ({ color, children }) => {
  return (
    <ButtonCheck
      style={{
        color,
      }}
    >
      {children}
    </ButtonCheck>
  )
}
