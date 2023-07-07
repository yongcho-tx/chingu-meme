import Link from 'next/link'

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'items-center',
        marginBottom: '4rem',
        paddingTop: '.75rem',
        border: '1px solid white',
      }}
    >
      <Link
        href='/'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        Logo
      </Link>
      <Link href='/about'>About</Link>

      <Link href='/memesdata'>Memes</Link>
    </nav>
  )
}

export default Navbar
