import Link from 'next/link'

export function Navbar() {
  return (
    <div className="z-10 flex flex-col items-center justify-between gap-4 border-b-2 border-indigo-700 bg-indigo-600 px-8 py-6 sm:flex-row">
      <Link href="/" className="group flex items-center gap-4">
        <svg
          className="transition ease-in-out group-hover:-rotate-3"
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="29"
            cy="29"
            r="28"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white/40 transition-colors ease-in-out group-hover:text-white"
          />
          <mask id="mask0_7_2245" maskUnits="userSpaceOnUse" x="0" y="0" width="58" height="58">
            <circle cx="29" cy="29" r="29" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_7_2245)">
            <rect x="41.5771" y="25.3846" width="10.1538" height="35.0769" fill="#1C2436" />
            <rect x="51.7314" y="32.7692" width="14.7692" height="27.6923" fill="#585C69" />
            <rect
              width="14.7692"
              height="14.7692"
              transform="matrix(0.980785 -0.19509 0.707107 0.707107 41.5771 25.4967)"
              fill="#D9D9D9"
            />
            <rect x="24" y="21" width="10" height="41" fill="#1C2436" />
            <rect x="34" y="28" width="15" height="37" fill="#585C69" />
            <rect
              width="15.1739"
              height="16.0718"
              transform="matrix(0.980785 -0.19509 0.707107 0.707107 23.1172 19.9603)"
              fill="#D9D9D9"
            />
            <rect x="6.5" y="30.9231" width="10.1538" height="35.0769" fill="#1C2436" />
            <rect x="16.6543" y="38.3077" width="14.7692" height="27.6923" fill="#585C69" />
            <rect
              width="14.7692"
              height="14.7692"
              transform="matrix(0.980785 -0.19509 0.707107 0.707107 6.5 31.0352)"
              fill="#D9D9D9"
            />
          </g>
        </svg>
        <span className="text-xl font-bold text-white">Pro Tailwind</span>
      </Link>
      <div className="flex items-center gap-6">
        <nav className="hidden gap-6 md:flex">
          <NavLink link={{ name: 'Challenges', path: '/challenges' }} />
          <NavLink link={{ name: 'Feedback', path: '/feedback' }} />
        </nav>
        <Link
          className="rounded-lg bg-yellow-500 px-5 py-3 font-bold text-yellow-900 hover:bg-yellow-400"
          href="https://protailwind.com/tutorials"
        >
          FREE Video Tutorials &rarr;
        </Link>
      </div>
    </div>
  )
}

function NavLink({ link }) {
  return (
    <Link
      href={link.path}
      className="border-b-2 border-transparent py-1 font-semibold text-white hover:border-white"
    >
      {link.name}
    </Link>
  )
}
