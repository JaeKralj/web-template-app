export default function CustomFragment({ children, className }) {
  return (
    <div className={`mx-auto max-w-[1200px] p-5 ${className}`}>{children}</div>
  )
}
