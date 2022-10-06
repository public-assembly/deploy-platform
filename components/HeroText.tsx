import { ReactNode } from 'react'

type HeroTextProps = {
  text?: ReactNode
  highlight?: string
}

export const HeroText = ({ text, highlight }: HeroTextProps) => {
  return (
    <h1 className="pa-displayDark unselectable text-6xl md:text-9xl lg:text-12xl">
      {text}
      <span className="pa-displayLight">{highlight}</span>
    </h1>
  )
}