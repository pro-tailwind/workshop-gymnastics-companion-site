import Link from 'next/link'

export function Navbar() {
  return (
    <div className="flex items-center justify-between bg-indigo-600 px-8 py-6">
      <Link href="/">
        <a className="text-3xl font-bold text-white">Pro Tailwind</a>
      </Link>
      <nav className="flex gap-6">
        <NavLink link={{ name: 'Challenges', path: '/challenges' }} />
      </nav>
    </div>
  )
}

function NavLink({ link }) {
  return (
    <Link href={link.path}>
      <a className="border-b-2 border-transparent py-1 font-semibold text-white hover:border-white">
        {link.name}
      </a>
    </Link>
  )
}
