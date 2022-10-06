type InputErrorProps = {
  errorMessage?: string
}

export const InputError = ({ errorMessage }: InputErrorProps) => {
  return (
    <div className="items-center text-blue-500 max-w-md gap-2 text-center text-lg font-medium relative bg-blue-50 rounded-xl px-4 py-2">
      {errorMessage}
    </div>
  )
}
