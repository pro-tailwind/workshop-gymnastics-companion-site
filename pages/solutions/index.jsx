import Link from 'next/link'

import { Ribbon } from '../../components/ribbon'

import { lessonsMeta } from '../../data'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-100">
      <div className="mx-auto mt-24 max-w-7xl p-8">
        <h1 className="text-4xl font-bold text-slate-900">Challenge solutions</h1>
        <p className="mt-6 max-w-prose text-lg font-medium text-slate-600">
          Here are how your solution should look at the end of your implementation.
        </p>

        <ul className="mx-auto mt-16 grid max-w-lg gap-12 md:max-w-none md:grid-cols-2 xl:grid-cols-3">
          {lessonsMeta.map((lesson) => (
            <ChallengeCard lesson={lesson} key={lesson.name} />
          ))}
        </ul>
      </div>
    </div>
  )
}

// ------------------------------
// Implementation components
// ------------------------------

function ChallengeCard({ lesson }) {
  return (
    <li className="group relative">
      <Ribbon color={lesson.language === 'HTML' ? 'teal' : 'violet'} position="top-right">
        {lesson.language}
      </Ribbon>

      <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition group-hover:shadow-lg">
        <img src={lesson.image} alt="" />
        <h2 className="border-t border-slate-200 p-8 text-center text-lg font-semibold text-gray-900">
          {lesson.name}
        </h2>
      </div>
      <Link href={`/solutions/${lesson.slug}`}>
        <a className="absolute inset-0"></a>
      </Link>
    </li>
  )
}
