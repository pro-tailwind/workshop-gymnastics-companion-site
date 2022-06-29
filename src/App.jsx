import { Link } from 'react-router-dom'
const lessons = [
  { name: 'Ribbon banner', folder: 'ribbon' },
  { name: 'Caret cutoff', folder: 'caret-cutoff' },
  { name: 'Background split', folder: 'background-split' },
  { name: 'Scrolling list', folder: 'scrolling-list' },
  { name: 'Scrolling fade-out', folder: 'scroll-fade-out' },
  { name: 'Slide-in confirmation', folder: 'slide-in-confirmation' },
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
            <li key={lesson.name} className="w-full overflow-hidden rounded-lg bg-white shadow-xl">
              <h2 className="py-16 px-6 text-center text-2xl font-semibold text-gray-900">
                {lesson.name}
              </h2>
              <div className="grid w-full grid-cols-2 divide-x border-t">
                <a
                  className="grid place-items-center py-8 font-medium text-gray-900 hover:bg-teal-300 hover:text-teal-900 hover:underline"
                  href={`/exercises/${lesson.folder}`}
                >
                  Exercise
                </a>
                <a
                  className="grid place-items-center py-8 font-medium text-gray-900 hover:bg-teal-300 hover:text-teal-900 hover:underline"
                  href={`/solutions/${lesson.folder}`}
                >
                  Solution
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
