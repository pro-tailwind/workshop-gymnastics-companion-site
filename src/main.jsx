import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App'

// HTML exercises
import ribbonExercise from './exercises/ribbon/index.html?raw'
import caretCutoffExercise from './exercises/caret-cutoff/index.html?raw'
import backgroundSplitExercise from './exercises/background-split/index.html?raw'
import scrollingListExercise from './exercises/scrolling-list/index.html?raw'
import animatedStripesExercise from './exercises/animated-stripes/index.html?raw'
import scrollFadeOutExercise from './exercises/scroll-fade-out/index.html?raw'
// JSX exercises
import SlideInConfirmationExercise from './exercises/slide-in-confirmation'

// HTML solutions
import ribbonSolution from './solutions/ribbon/index.html?raw'
import caretCutoffSolution from './solutions/caret-cutoff/index.html?raw'
import backgroundSplitSolution from './solutions/background-split/index.html?raw'
import scrollingListSolution from './solutions/scrolling-list/index.html?raw'
import animatedStripesSolution from './solutions/animated-stripes/index.html?raw'
import scrollFadeOutSolution from './solutions/scroll-fade-out/index.html?raw'
// JSX solutions
import SlideInConfirmationSolution from './solutions/slide-in-confirmation'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Exercises */}
        <Route path="/exercises/ribbon" element={<HtmlSnippet html={ribbonExercise} />} />
        <Route
          path="/exercises/caret-cutoff"
          element={<HtmlSnippet html={caretCutoffExercise} />}
        />
        <Route
          path="/exercises/background-split"
          element={<HtmlSnippet html={backgroundSplitExercise} />}
        />
        <Route
          path="/exercises/scrolling-list"
          element={<HtmlSnippet html={scrollingListExercise} />}
        />
        <Route
          path="/exercises/scroll-fade-out"
          element={<HtmlSnippet html={scrollFadeOutExercise} />}
        />
        <Route
          path="/exercises/animated-stripes"
          element={<HtmlSnippet html={animatedStripesExercise} />}
        />
        <Route path="/exercises/slide-in-confirmation" element={<SlideInConfirmationExercise />} />
        {/* Solutions */}
        <Route path="/solutions/ribbon" element={<HtmlSnippet html={ribbonSolution} />} />
        <Route
          path="/solutions/caret-cutoff"
          element={<HtmlSnippet html={caretCutoffSolution} />}
        />
        <Route
          path="/solutions/background-split"
          element={<HtmlSnippet html={backgroundSplitSolution} />}
        />
        <Route
          path="/solutions/scrolling-list"
          element={<HtmlSnippet html={scrollingListSolution} />}
        />
        <Route
          path="/solutions/scroll-fade-out"
          element={<HtmlSnippet html={scrollFadeOutSolution} />}
        />
        <Route path="/solutions/animated-stripes" element={<HtmlSnippet html={animatedStripesSolution} />} />
        <Route path="/solutions/slide-in-confirmation" element={<SlideInConfirmationSolution />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

function HtmlSnippet({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
