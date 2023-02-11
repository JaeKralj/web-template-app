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
      className={`bg-gradient py-3 px-3 rounded-xl text-center ${className} hover:animate-pulse`}
      type={type || 'button'}
      {...props}
    >
      {children}
    </button>
  )
}
