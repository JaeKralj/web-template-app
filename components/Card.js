export default function Card({ children, className }) {
  return (
    <div className={`rounded-xl p-4 shadow-sm ${className}`}>{children}</div>
  )
}
