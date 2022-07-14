import { useRouter } from 'next/router'

import { HtmlSnippet } from '../../../components/html-snippet'
import { BackArrow } from '../../../components/back-arrow'
import { NotFound } from '../../../components/not-found'

import animatedStripes from '../../../workshop/exercises/animated-stripes/index.html'
import backgroundSplit from '../../../workshop/exercises/background-split/index.html'
import caretCutoff from '../../../workshop/exercises/caret-cutoff/index.html'
import ribbon from '../../../workshop/exercises/ribbon/index.html'
import scrollFadeOut from '../../../workshop/exercises/scroll-fade-out/index.html'
import scrollingList from '../../../workshop/exercises/scrolling-list/index.html'
import SlideInConfirmation from '../../../workshop/exercises/slide-in-confirmation'

const routesMap = {
  'animated-stripes': <HtmlSnippet html={animatedStripes} />,
  'background-split': <HtmlSnippet html={backgroundSplit} />,
  'caret-cutoff': <HtmlSnippet html={caretCutoff} />,
  ribbon: <HtmlSnippet html={ribbon} />,
  'scroll-fade-out': <HtmlSnippet html={scrollFadeOut} />,
  'scrolling-list': <HtmlSnippet html={scrollingList} />,
  ribbon: <HtmlSnippet html={ribbon} />,
  'slide-in-confirmation': <SlideInConfirmation />,
}

export default function ExercisePage() {
  const {
    query: { exercise },
  } = useRouter()

  if (!exercise) return ''

  const isValidExercise = Object.keys(routesMap).includes(exercise)
  return (
    <div className="relative">
      <BackArrow />
      {isValidExercise ? routesMap[exercise] : <NotFound />}
    </div>
  )
}
