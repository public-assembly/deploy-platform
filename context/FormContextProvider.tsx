import { ReactNode } from 'react'
import { createContext, useContext } from 'react'

export type FormStateProps = {
  children?: ReactNode
}
export type FormStateReturnTypes = {
  title?: string
  curationPass?: string
  media?: string[]
}
const FormStateContext = createContext<FormStateReturnTypes>({
  title: '',
  curationPass: '',
  media: [],
})
export function useFormStateProvider() {
  return useContext(FormStateContext)
}
export function FormStateProvider({ children }: FormStateProps) {
  return (
    <FormStateContext.Provider
      value={{
        title: '',
        curationPass: '',
        media: [],
      }}>
      {children}
    </FormStateContext.Provider>
  )
}
