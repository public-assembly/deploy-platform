export const InputError = ({ errorMessage }: { errorMessage?: string }) => {
  return (
    <div className="items-center text-[#8A2C26] max-w-md gap-2 text-lg sm:text-xl bg-[#F3D5D5] px-4 py-2 font-normal rounded-lg absolute top-6 right-6">
      {errorMessage}
    </div>
  )
}
