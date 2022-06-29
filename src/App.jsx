import cx from 'clsx'

import { Link } from 'react-router-dom'
const lessons = [
  { name: 'Ribbon banner', folder: 'ribbon', language: 'HTML' },
  { name: 'Caret cutoff', folder: 'caret-cutoff', language: 'HTML' },
  { name: 'Background split', folder: 'background-split', language: 'HTML' },
  { name: 'Scrolling list', folder: 'scrolling-list', language: 'HTML' },
  { name: 'Scrolling fade-out', folder: 'scroll-fade-out', language: 'HTML' },
  { name: 'Slide-in confirmation', folder: 'slide-in-confirmation', language: 'JSX' },
]

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-indigo-600">
      <div className="mx-auto mt-24 max-w-7xl p-8">
        <h1 className="text-4xl font-bold text-white">Pro Tailwind – Advanced Gymnastics</h1>
        <p className="mt-6 max-w-prose text-lg font-medium text-indigo-50/75">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sed animi recusandae
          consequuntur quis et eveniet nulla. Maxime mollitia eaque harum quasi molestiae, nihil ab,
          asperiores illo, fugiat vel optio.
        </p>

        <ul className="mt-16 grid grid-cols-3 gap-12">
          {lessons.map((lesson) => (
            <li key={lesson.name} className="relative">
              <Ribbon
                color={lesson.language === 'HTML' ? 'fuchsia' : 'emerald'}
                position="top-right"
              >
                {lesson.language}
              </Ribbon>

              <div className="w-full overflow-hidden rounded-lg bg-white shadow-xl">
                <h2 className="py-16 px-6 text-center text-2xl font-semibold text-gray-900">
                  {lesson.name}
                </h2>
                <div className="grid w-full grid-cols-2 divide-x border-t">
                  <Link
                    className="grid place-items-center py-8 font-medium text-gray-900 hover:bg-teal-300 hover:text-teal-900 hover:underline"
                    to={`/exercises/${lesson.folder}`}
                  >
                    Exercise
                  </Link>
                  <Link
                    className="grid place-items-center py-8 font-medium text-gray-900 hover:bg-teal-300 hover:text-teal-900 hover:underline"
                    to={`/solutions/${lesson.folder}`}
                  >
                    Solution
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Ribbon({ color, position, children }) {
  const colorStyles = {
    emerald: {
      bg: 'bg-emerald-100',
      backdrop: 'bg-emerald-300',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
    },
    fuchsia: {
      bg: 'bg-fuchsia-100',
      backdrop: 'bg-fuchsia-300',
      border: 'border-fuchsia-200',
      text: 'text-fuchsia-700',
    },
  }[color]

  const positionStyles = {
    'top-right': {
      wrapper: '-top-1 -right-1',
      backdrop1: 'top-0 left-0',
      backdrop2: 'bottom-0 right-0',
      banner: 'bottom-0 right-0 origin-bottom-right rotate-45',
    },
    'top-left': {
      wrapper: '-top-1 -left-1',
      backdrop1: 'bottom-0 left-0',
      backdrop2: 'top-0 right-0',
      banner: 'bottom-0 left-0 origin-bottom-left -rotate-45',
    },
  }[position]

  return (
    <div
      className={cx('absolute aspect-square w-20 overflow-hidden rounded', positionStyles.wrapper)}
    >
      <div className={cx('absolute h-1 w-1', colorStyles.backdrop, positionStyles.backdrop1)}></div>
      <div className={cx('absolute h-1 w-1', colorStyles.backdrop, positionStyles.backdrop2)}></div>
      <div
        className={cx(
          'absolute w-[141.42%] border border-dashed',
          colorStyles.border,
          colorStyles.bg,
          positionStyles.banner
        )}
      >
        <p
          className={cx(
            'py-1 text-center text-xs font-bold uppercase tracking-widest',
            colorStyles.text
          )}
        >
          {children}
        </p>
      </div>
    </div>
  )
}
