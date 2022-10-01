import { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

export type FormStateProps = {
  children?: ReactNode
}
export type FormStateReturnTypes = {
  title?: string
  setTitle?: any /* Specify Typings */
  curationPass?: string
  setCurationPass?: any /* Specify Typings */
  media?: string | string[]
  setMedia?: any /* Specify Typings */
}

// These are the default values of our context object
const FormStateContext = createContext<FormStateReturnTypes>({
  title: '',
  setTitle: () => {},
  curationPass: '',
  setCurationPass: () => {},
  media: '',
  setMedia: () => {},
})

export function useFormStateProvider() {
  return useContext(FormStateContext)
}

// This component is responsible for getting the value of the context and returning it to the provider
export function FormStateProvider({ children }: FormStateProps) {
  // These are the state values that will be given to the context
  const [title, setTitle] = useState('')
  const [curationPass, setCurationPass] = useState('')
  const [media, setMedia] = useState('')

  return (
    // The provider gives access to the context to its children
    <FormStateContext.Provider
      value={{
        title,
        setTitle,
        curationPass,
        setCurationPass,
        media,
        setMedia,
      }}>
      {children}
    </FormStateContext.Provider>
  )
}
