import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/future/image'
import ReactMarkdown from 'react-markdown'
import clsx from 'clsx'

import { lessons } from '../../../data'

import { BackArrow } from '../../../components/back-arrow'
import { NotFound } from '../../../components/not-found'

export default function ReadmePage() {
  const {
    query: { slug },
  } = useRouter()

  if (!slug) return ''
  const challenge = lessons.find((key) => key.slug === slug)
  if (!challenge) return <NotFound />

  // From here onwards, we can assume we have a matching challenge.

  // ------------------------------
  // There are levels to this spiciness
  // ------------------------------

  const difficultyMap = {
    mild: {
      emoji: '🌶',
      classes: 'bg-emerald-200 text-emerald-600',
    },
    hot: {
      emoji: '🌶🌶',
      classes: 'bg-orange-200 text-orange-600',
    },
    spicy: {
      emoji: '🌶🌶🌶',
      classes: 'bg-red-200 text-red-600',
    },
  }

  const level = difficultyMap[challenge.difficulty]

  return (
    <div className="h-full bg-slate-100">
      <BackArrow />
      <div className="py-8 md:py-16 lg:py-32">
        <div className="mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            <Image
              src={challenge.image}
              alt={challenge.name}
              className="w-full max-w-lg rounded-xl shadow-2xl"
            />
            <div>
              <h1 className="text-center text-4xl font-bold">
                <span className="text-indigo-600">“{challenge.name}”</span> challenge
              </h1>
              <ul className="mt-6 flex justify-center gap-2">
                {/* How spicy is this? */}
                <li className={clsx('flex gap-3 rounded px-2.5 py-1.5 font-bold', level.classes)}>
                  <span>{level.emoji}</span>
                  <span>{challenge.difficulty}</span>
                </li>
                {/* Timebox */}
                <li className="flex gap-3 rounded bg-indigo-200 px-2.5 py-1.5 font-bold text-indigo-600">
                  <span>⏰</span>
                  <span>{challenge.duration}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="prose prose-indigo mx-auto mt-12 xl:prose-xl">
            <hr />
            <ReactMarkdown>{challenge.readmeMarkdown}</ReactMarkdown>

            <hr />
            <h3>Local code snippets</h3>
            <p>If you're working with local files, here are links to the:</p>

            <ul>
              <li>
                <Link href={`/challenges/${challenge.slug}/start`}>
                  <a>Starting point (local)</a>
                </Link>
              </li>
              <li>
                <Link href={`/solutions/${challenge.slug}`}>
                  <a>Solution (local)</a>
                </Link>
                <span className="ml-3 text-sm text-slate-500">
                  Hey! Try not look at the solution before you struggle a bit.
                </span>
              </li>
            </ul>

            <hr />
            <p>
              <strong>Good luck everybody! 🤞</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
