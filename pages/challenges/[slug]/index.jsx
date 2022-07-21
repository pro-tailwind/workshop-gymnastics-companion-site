import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/future/image'
import ReactMarkdown from 'react-markdown'
import clsx from 'clsx'

import { lessons } from '../../../data'

import { BackArrow } from '../../../components/back-arrow'
import { NotFound } from '../../../components/not-found'
import { PageContainer } from '../../../components/page-container'

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
      classes: 'bg-emerald-200 text-emerald-700',
    },
    hot: {
      emoji: '🌶🌶',
      classes: 'bg-orange-100 text-orange-600',
    },
    spicy: {
      emoji: '🌶🌶🌶',
      classes: 'bg-red-100 text-red-600',
    },
  }

  const level = difficultyMap[challenge.difficulty]

  return (
    <>
      <BackArrow />
      <PageContainer>
        <div className="flex flex-col items-center gap-8">
          <Image
            src={challenge.image}
            alt={challenge.name}
            className="w-full max-w-2xl rounded-xl shadow-2xl"
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
              <li className="flex gap-3 rounded bg-indigo-100 px-2.5 py-1.5 font-bold text-indigo-600">
                <span>⏰</span>
                <span>{challenge.duration}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="prose prose-indigo mx-auto mt-12 xl:prose-xl">
          <hr />

          <p>
            Demos:
            <nav className="inline divide-x pl-4">
              <Link href={`/challenges/${challenge.slug}/start`}>
                <a className="pr-4">Start</a>
              </Link>
              <Link href={`/solutions/${challenge.slug}`}>
                <a className="pl-4">Finish</a>
              </Link>
            </nav>
          </p>

          <ReactMarkdown>{challenge.readmeMarkdown}</ReactMarkdown>

          <hr />

          <p>
            <strong>Good luck everybody! 🤞</strong>
          </p>
        </div>
      </PageContainer>
    </>
  )
}
