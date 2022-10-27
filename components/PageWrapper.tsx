export function PageWrapper({ children, ...props }: { children?: JSX.Element }) {
  return (
    <>
      <main className="pa-pageLayout" {...props}>
        {children}
      </main>
    </>
  )
}
