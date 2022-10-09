import { ReactNode } from 'react'

export const HeroText = ({ text }: {text?: ReactNode}) => {
  return (
    <h1 className="pa-displayDark unselectable">
      {text}
    </h1>
  )
}
