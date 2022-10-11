import { ReactNode } from 'react'

export const HeroWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen justify-center pb-72 sm:pb-64 gap-6 sm:gap-8">
      {children}
    </div>
  )
}
