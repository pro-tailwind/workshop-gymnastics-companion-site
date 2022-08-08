import { useState } from 'react'
import cx from 'clsx'

const times = ['8:00 AM', '10:00 AM', '3:00 PM', '5:00 PM']

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
                  className={cx(
                    'flex gap-2 overflow-hidden rounded-lg',
                    isSelected ? 'bg-indigo-600 bg-stripes' : ''
                  )}
                >
                  {/* Time button */}
                  <button
                    className={cx(
                      'basis-full rounded-lg px-5 py-3 font-semibold transition-[flex-basis,flex-shrink] duration-200 focus:outline-none',
                      isSelected
                        ? // Use 50% of the space available when selected
                          'pointer-events-none basis-1/2 bg-transparent text-white'
                        : // Use full width when not selected
                          'shrink-0 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:ring focus:ring-inset focus:ring-indigo-400'
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                  {/* Confirm button */}
                  <button
                    tabIndex={isSelected ? 0 : -1}
                    className={cx(
                      'm-2 basis-1/2 rounded-md bg-indigo-100 px-4 py-1 font-medium text-indigo-700 hover:bg-indigo-200 active:bg-indigo-50',
                      isSelected ? 'translate-x-0' : 'translate-x-full'
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
