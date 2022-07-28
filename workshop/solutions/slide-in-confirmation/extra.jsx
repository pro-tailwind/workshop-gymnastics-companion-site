import { useState } from 'react'
import cx from 'clsx'

const times = ['8:00 AM', '10:00 AM', '3:00 PM', '5:00 PM']

const twClasses = /*tw*/ {
  wrapper: {
    base: 'flex gap-2 overflow-hidden rounded-lg',
    selected: 'bg-indigo-600 bg-stripes',
  },
  timeButton: {
    base: 'basis-full rounded-lg px-5 py-3 font-semibold focus:outline-none transition-[flex-basis,flex-shrink] duration-200',
    // Use 50% of the space available when selected
    selected: 'basis-1/2 pointer-events-none bg-transparent text-white',
    // Use full width when not selected
    notSelected:
      'shrink-0 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:ring focus:ring-inset focus:ring-indigo-400',
  },
  confirmButton: {
    base: 'basis-1/2 m-2 rounded-md bg-indigo-100 px-4 py-1 font-medium text-indigo-700 hover:bg-indigo-200 active:bg-indigo-50',
    selected: 'translate-x-0 [transition-delay:120ms] transition duration-200',
    notSelected: 'translate-x-full',
  },
} /*tw*/

export default function SlideInConfirmation() {
  const [selectedTime, setSelectedTime] = useState(null)

  return (
    <div className="h-full bg-indigo-600">
      <div className="mx-auto w-full max-w-lg p-16">
        <div className="mx-4 mt-12 rounded-2xl bg-white p-8 shadow-2xl">
          <h2 className="text-xl font-medium">Tuesday, 28th June 2022</h2>
          <ul className="-mx-4 mt-6 space-y-2 overflow-y-auto px-4">
            {times.map((time) => {
              const isSelected = time === selectedTime
              return (
                // Wrapper
                <li
                  key={time}
                  className={cx(twClasses.wrapper.base, isSelected && twClasses.wrapper.selected)}
                >
                  {/* Time button */}
                  <button
                    className={cx(
                      twClasses.timeButton.base,
                      isSelected ? twClasses.timeButton.selected : twClasses.timeButton.notSelected
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                  {/* Confirm button */}
                  <button
                    tabIndex={isSelected ? 0 : -1}
                    className={cx(
                      twClasses.confirmButton.base,
                      isSelected
                        ? twClasses.confirmButton.selected
                        : twClasses.confirmButton.notSelected
                    )}
                  >
                    Confirm
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
