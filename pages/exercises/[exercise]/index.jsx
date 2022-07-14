import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import clsx from 'clsx'

import { lessons } from '../../../data'

import { BackArrow } from '../../../components/back-arrow'
import { NotFound } from '../../../components/not-found'

import animatedStripes from '../../../workshop/exercises/animated-stripes/README.md'
import backgroundSplit from '../../../workshop/exercises/background-split/README.md'
import caretCutoff from '../../../workshop/exercises/caret-cutoff/README.md'
import ribbon from '../../../workshop/exercises/ribbon/README.md'
import scrollFadeOut from '../../../workshop/exercises/scroll-fade-out/README.md'
import scrollingList from '../../../workshop/exercises/scrolling-list/README.md'
import slideInConfirmation from '../../../workshop/exercises/slide-in-confirmation/README.md'

const routesMap = {
  'animated-stripes': animatedStripes,
  'background-split': backgroundSplit,
  'caret-cutoff': caretCutoff,
  ribbon: ribbon,
  'scroll-fade-out': scrollFadeOut,
  'scrolling-list': scrollingList,
  'slide-in-confirmation': slideInConfirmation,
}

export default function InfoPage() {
  const {
    query: { exercise },
  } = useRouter()

  if (!exercise) return ''
  const challenge = lessons.find((key) => key.folder === exercise)

  if (!challenge) return <NotFound />

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
    <div className="min-h-screen bg-slate-100">
      <BackArrow />
      <div className="py-8 md:py-16 lg:py-32">
        <div className="mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
            <img
              src={challenge.image}
              alt={challenge.name}
              className="w-full max-w-lg rounded-xl shadow-2xl lg:w-[40%]"
            />
            <div>
              <h1 className="text-center text-4xl font-bold lg:text-left">
                <span className="text-indigo-600">{challenge.name}</span> challenge
              </h1>
              <ul className="mt-6 flex justify-center gap-2 lg:justify-start">
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
          <div className="prose prose-indigo mx-auto mt-20 xl:prose-xl">
            <hr />
            <ReactMarkdown>{routesMap[exercise]}</ReactMarkdown>
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
