// Markdown
import animatedStripesMarkdown from './workshop/challenges/animated-stripes/README.md'
import backgroundSplitMarkdown from './workshop/challenges/background-split/README.md'
import caretCutoffMarkdown from './workshop/challenges/caret-cutoff/README.md'
import ribbonMarkdown from './workshop/challenges/ribbon/README.md'
import scrollFadeoutListMarkdown from './workshop/challenges/scroll-fadeout-list/README.md'
import slideInConfirmationMarkdown from './workshop/challenges/slide-in-confirmation/README.md'

// Start HTML
import animatedStripesStart from './workshop/challenges/animated-stripes/index.html'
import backgroundSplitStart from './workshop/challenges/background-split/index.html'
import caretCutoffStart from './workshop/challenges/caret-cutoff/index.html'
import ribbonStart from './workshop/challenges/ribbon/index.html'
import scrollFadeoutListStart from './workshop/challenges/scroll-fadeout-list/index.html'
import SlideInConfirmationStart from './workshop/challenges/slide-in-confirmation'

// Solution HTML
import animatedStripesSolution from './workshop/solutions/animated-stripes/index.html'
import backgroundSplitSolution from './workshop/solutions/background-split/index.html'
import caretCutoffSolution from './workshop/solutions/caret-cutoff/index.html'
import ribbonSolution from './workshop/solutions/ribbon/index.html'
import scrollFadeoutListSolution from './workshop/solutions/scroll-fadeout-list/index.html'
import SlideInConfirmationSolution from './workshop/solutions/slide-in-confirmation'

export const lessons = [
  {
    name: 'Ribbon banner',
    slug: 'ribbon',
    language: 'HTML',
    image: '/images/thumbnails/ribbon.jpg',
    duration: '15 minutes',
    difficulty: 'mild',
  },
  {
    name: 'Background split',
    slug: 'background-split',
    language: 'HTML',
    image: '/images/thumbnails/background-split.jpg',
    duration: '30 minutes',
    difficulty: 'mild',
  },
  {
    name: 'Caret cutoff',
    slug: 'caret-cutoff',
    language: 'HTML',
    image: '/images/thumbnails/caret-cutoff.jpg',
    duration: '20 minutes',
    difficulty: 'spicy',
  },
  {
    name: 'Scrolling fade-out list',
    slug: 'scroll-fadeout-list',
    language: 'HTML',
    image: '/images/thumbnails/scroll-list.jpg',
    duration: '25 minutes',
    difficulty: 'mild',
  },
  {
    name: 'Animated stripes',
    slug: 'animated-stripes',
    language: 'HTML',
    image: '/images/thumbnails/animated-stripes.jpg',
    duration: '35 minutes',
    difficulty: 'hot',
  },
  {
    name: 'Slide-in confirmation',
    slug: 'slide-in-confirmation',
    language: 'JSX',
    image: '/images/thumbnails/slide-in-confirmation.jpg',
    duration: '33 minutes',
    difficulty: 'spicy',
  },
]

export const lessonsWithSnippets = [
  {
    ...lessons[0],
    readmeMarkdown: ribbonMarkdown,
    startSnippet: ribbonStart,
    solutionSnippet: ribbonSolution,
  },
  {
    ...lessons[1],
    readmeMarkdown: backgroundSplitMarkdown,
    startSnippet: backgroundSplitStart,
    solutionSnippet: backgroundSplitSolution,
  },
  {
    ...lessons[2],
    readmeMarkdown: caretCutoffMarkdown,
    startSnippet: caretCutoffStart,
    solutionSnippet: caretCutoffSolution,
  },
  {
    ...lessons[3],
    readmeMarkdown: scrollFadeoutListMarkdown,
    startSnippet: scrollFadeoutListStart,
    solutionSnippet: scrollFadeoutListSolution,
  },
  {
    ...lessons[4],
    readmeMarkdown: animatedStripesMarkdown,
    startSnippet: animatedStripesStart,
    solutionSnippet: animatedStripesSolution,
  },
  {
    ...lessons[5],
    readmeMarkdown: slideInConfirmationMarkdown,
    startSnippet: SlideInConfirmationStart,
    solutionSnippet: SlideInConfirmationSolution,
  },
]
