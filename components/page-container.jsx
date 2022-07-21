export function PageContainer({ children }) {
  return (
    <div className="h-full overflow-hidden bg-slate-100">
      <div className="mx-auto mt-16 max-w-7xl p-8 md:mt-24 md:mb-12">{children}</div>
    </div>
  )
}
