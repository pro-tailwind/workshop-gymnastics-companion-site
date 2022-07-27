// Markdown
import ribbonMarkdown from './workshop/challenges/ribbon/README.md'
import backgroundSplitMarkdown from './workshop/challenges/background-split/README.md'
import scrollFadeoutListMarkdown from './workshop/challenges/scroll-fadeout-list/README.md'
import animatedStripesMarkdown from './workshop/challenges/animated-stripes/README.md'
import slideInConfirmationMarkdown from './workshop/challenges/slide-in-confirmation/README.md'
import caretCutoffMarkdown from './workshop/challenges/caret-cutoff/README.md'

// Start
import ribbonStart from './workshop/challenges/ribbon/index.html'
import backgroundSplitStart from './workshop/challenges/background-split/index.html'
import scrollFadeoutListStart from './workshop/challenges/scroll-fadeout-list/index.html'
import animatedStripesStart from './workshop/challenges/animated-stripes/index.html'
import SlideInConfirmationStart from './workshop/challenges/slide-in-confirmation'
import caretCutoffStart from './workshop/challenges/caret-cutoff/index.html'

// Solution - Challenge
import ribbonSolution from './workshop/solutions/ribbon/index.html'
import backgroundSplitSolution from './workshop/solutions/background-split/index.html'
import scrollFadeoutListSolution from './workshop/solutions/scroll-fadeout-list/index.html'
import animatedStripesSolution from './workshop/solutions/animated-stripes/index.html'
import SlideInConfirmationSolution from './workshop/solutions/slide-in-confirmation'
import caretCutoffSolution from './workshop/solutions/caret-cutoff/index.html'

// Solution - Extra
import ribbonExtra from './workshop/solutions/ribbon/extra.html'
import backgroundSplitExtra from './workshop/solutions/background-split/extra.html'
import scrollFadeoutListExtra from './workshop/solutions/scroll-fadeout-list/extra.html'
import animatedStripesExtra from './workshop/solutions/animated-stripes/extra.html'
import SlideInConfirmationExtra from './workshop/solutions/slide-in-confirmation/extra'
import caretCutoffExtra from './workshop/solutions/caret-cutoff/extra.html'

// Images
import ribbonImage from './public/images/thumbnails/ribbon.jpg'
import backgroundSplitImage from './public/images/thumbnails/background-split.jpg'
import scrollFadeoutListImage from './public/images/thumbnails/scroll-fadeout-list.jpg'
import animatedStripesImage from './public/images/thumbnails/animated-stripes.jpg'
import slideInConfirmationImage from './public/images/thumbnails/slide-in-confirmation.jpg'
import caretCutoffImage from './public/images/thumbnails/caret-cutoff.jpg'

export const prodUrl = 'https://css-gymnastics.protailwind.com'

export const lessons = [
  {
    name: 'Ribbon banner',
    slug: 'ribbon',
    language: 'HTML',
    image: ribbonImage,
    duration: '15 minutes',
    difficulty: 'mild',
    readmeMarkdown: ribbonMarkdown,
    startSnippet: ribbonStart,
    solutionSnippet: ribbonSolution,
    extraSnippet: ribbonExtra,
  },
  {
    name: 'Background split',
    slug: 'background-split',
    language: 'HTML',
    image: backgroundSplitImage,
    duration: '15 minutes',
    difficulty: 'mild',
    readmeMarkdown: backgroundSplitMarkdown,
    startSnippet: backgroundSplitStart,
    solutionSnippet: backgroundSplitSolution,
    extraSnippet: backgroundSplitExtra,
  },
  {
    name: 'Scroll fade-out list',
    slug: 'scroll-fadeout-list',
    language: 'HTML',
    image: scrollFadeoutListImage,
    duration: '20 minutes',
    difficulty: 'mild',
    readmeMarkdown: scrollFadeoutListMarkdown,
    startSnippet: scrollFadeoutListStart,
    solutionSnippet: scrollFadeoutListSolution,
    extraSnippet: scrollFadeoutListExtra,
  },
  {
    name: 'Animated stripes',
    slug: 'animated-stripes',
    language: 'HTML',
    image: animatedStripesImage,
    duration: '25 minutes',
    difficulty: 'hot',
    readmeMarkdown: animatedStripesMarkdown,
    startSnippet: animatedStripesStart,
    solutionSnippet: animatedStripesSolution,
    extraSnippet: animatedStripesExtra,
  },
  {
    name: 'Slide-in confirmation',
    slug: 'slide-in-confirmation',
    language: 'JSX',
    image: slideInConfirmationImage,
    duration: '20 minutes',
    difficulty: 'spicy',
    readmeMarkdown: slideInConfirmationMarkdown,
    startSnippet: SlideInConfirmationStart,
    solutionSnippet: SlideInConfirmationSolution,
    extraSnippet: SlideInConfirmationExtra,
  },
  {
    name: 'Caret cutoff',
    slug: 'caret-cutoff',
    language: 'HTML',
    image: caretCutoffImage,
    duration: '20 minutes',
    difficulty: 'spicy',
    readmeMarkdown: caretCutoffMarkdown,
    startSnippet: caretCutoffStart,
    solutionSnippet: caretCutoffSolution,
    extraSnippet: caretCutoffExtra,
  },
]

export const lessonsMeta = lessons.map((lesson) => {
  const { readmeMarkdown, startSnippet, solutionSnippet, ...meta } = lesson
  return meta
})
