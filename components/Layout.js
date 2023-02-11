import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className='font-generalsans'>
      <Nav />
      <main>{children}</main>
    </div>
  )
}
