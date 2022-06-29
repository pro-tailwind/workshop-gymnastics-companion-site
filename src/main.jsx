import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App'

// HTML exercises
import RibbonExercise from './exercises/ribbon/index.html?raw'
import CaretCutoffExercise from './exercises/caret-cutoff/index.html?raw'
import BackgroundSplitExercise from './exercises/background-split/index.html?raw'
import ScrollingListExercise from './exercises/scrolling-list/index.html?raw'
import ScrollFadeOutExercise from './exercises/scroll-fade-out/index.html?raw'
// JSX exercises
import SlideInConfirmationExercise from './exercises/slide-in-confirmation'

// HTML solutions
import RibbonSolution from './solutions/ribbon/index.html?raw'
import CaretCutoffSolution from './solutions/caret-cutoff/index.html?raw'
import BackgroundSplitSolution from './solutions/background-split/index.html?raw'
import ScrollingListSolution from './solutions/scrolling-list/index.html?raw'
import ScrollFadeOutSolution from './solutions/scroll-fade-out/index.html?raw'
// JSX solutions
import SlideInConfirmationSolution from './solutions/slide-in-confirmation'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Exercises */}
        <Route path="/exercises/ribbon" element={HTML(RibbonExercise)} />
        <Route path="/exercises/caret-cutoff" element={HTML(CaretCutoffExercise)} />
        <Route path="/exercises/background-split" element={HTML(BackgroundSplitExercise)} />
        <Route path="/exercises/scrolling-list" element={HTML(ScrollingListExercise)} />
        <Route path="/exercises/scroll-fade-out" element={HTML(ScrollFadeOutExercise)} />
        <Route path="/exercises/slide-in-confirmation" element={<SlideInConfirmationExercise />} />
        {/* Solutions */}
        <Route path="/solutions/ribbon" element={HTML(RibbonSolution)} />
        <Route path="/solutions/caret-cutoff" element={HTML(CaretCutoffSolution)} />
        <Route path="/solutions/background-split" element={HTML(BackgroundSplitSolution)} />
        <Route path="/solutions/scrolling-list" element={HTML(ScrollingListSolution)} />
        <Route path="/solutions/scroll-fade-out" element={HTML(ScrollFadeOutSolution)} />
        <Route path="/solutions/slide-in-confirmation" element={<SlideInConfirmationSolution />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

function HTML(component) {
  return <div dangerouslySetInnerHTML={{ __html: component }} />
}
