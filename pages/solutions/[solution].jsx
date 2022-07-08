import { useRouter } from 'next/router'

import { HtmlSnippet } from '../../components/html-snippet'
import { BackArrow } from '../../components/back-arrow'
import { NotFound } from '../../components/not-found'

import animatedStripes from '../../workshop/solutions/animated-stripes/index.html'
import backgroundSplit from '../../workshop/solutions/background-split/index.html'
import caretCutoff from '../../workshop/solutions/caret-cutoff/index.html'
import ribbon from '../../workshop/solutions/ribbon/index.html'
import scrollFadeOut from '../../workshop/solutions/scroll-fade-out/index.html'
import scrollingList from '../../workshop/solutions/scrolling-list/index.html'
import SlideInConfirmation from '../../workshop/solutions/slide-in-confirmation'

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

export default function SolutionPage() {
  const {
    query: { solution },
  } = useRouter()

  if (!solution) return ''

  const isValidSolution = Object.keys(routesMap).includes(solution)
  return (
    <div className="relative">
      <BackArrow />
      {isValidSolution ? routesMap[solution] : <NotFound />}
    </div>
  )
}
