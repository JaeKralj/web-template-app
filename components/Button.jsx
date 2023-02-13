export default function Button({
  children,
  handleOnclick,
  className,
  type,
  ...props
}) {
  return (
    <button
      onClick={handleOnclick}
      className={`py-3 px-3 rounded-xl text-center  hover:animate-pulse ${className}`}
      type={type || 'button'}
      {...props}
    >
      {children}
    </button>
  )
}
