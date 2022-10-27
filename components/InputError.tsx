export const InputError = ({ errorMessage }: { errorMessage?: string }) => {
  return (
    <div className="items-center text-[#ff89de] max-w-md gap-2 text-center text-lg font-medium relative bg-black px-4 py-2">
      {errorMessage}
    </div>
  )
}
