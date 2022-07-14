import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

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
  'animated-stripes': <ReactMarkdown>{animatedStripes}</ReactMarkdown>,
  'background-split': <ReactMarkdown>{backgroundSplit}</ReactMarkdown>,
  'caret-cutoff': <ReactMarkdown>{caretCutoff}</ReactMarkdown>,
  ribbon: <ReactMarkdown>{ribbon}</ReactMarkdown>,
  'scroll-fade-out': <ReactMarkdown>{scrollFadeOut}</ReactMarkdown>,
  'scrolling-list': <ReactMarkdown>{scrollingList}</ReactMarkdown>,
  ribbon: <ReactMarkdown>{ribbon}</ReactMarkdown>,
  'slide-in-confirmation': <ReactMarkdown>{slideInConfirmation}</ReactMarkdown>,
}

export default function InfoPage() {
  const {
    query: { exercise },
  } = useRouter()

  if (!exercise) return ''

  const isValidExercise = Object.keys(routesMap).includes(exercise)
  return (
    <div className="">
      <BackArrow />
      <div className="mx-auto max-w-5xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="prose prose-indigo xl:prose-xl">
          {isValidExercise ? routesMap[exercise] : <NotFound />}
        </div>
      </div>
    </div>
  )
}
