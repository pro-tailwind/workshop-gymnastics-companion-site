import { useState } from 'react'
import cx from 'clsx'

const times = ['8:00 AM', '10:00 AM', '3:00 PM', '5:00 PM']

export default function SlideInConfirmation() {
  const [selectedTime, setSelectedTime] = useState(null)

  return (
    <div className="min-h-screen bg-indigo-600">
      <div className="mx-auto w-full max-w-lg p-16">
        <div className="mx-4 rounded-2xl bg-white p-8 shadow-2xl">
          <h2 className="text-xl font-medium">Tuesday, 28th June 2022</h2>
          <ul className="-mx-4 mt-6 space-y-2 overflow-y-auto px-4">
            {times.map((time) => {
              const isSelected = time === selectedTime
              return (
                <li
                  key={time}
                  className={cx(
                    'flex gap-2 overflow-hidden rounded-lg',
                    isSelected && 'bg-stripes bg-indigo-600'
                  )}
                >
                  <button
                    className={cx(
                      'w-full rounded-lg px-5 py-3 font-semibold transition-all focus:outline-none',
                      isSelected
                        ? 'pointer-events-none bg-transparent text-white'
                        : 'shrink-0 basis-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 focus:ring focus:ring-inset focus:ring-indigo-400'
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                  <button
                    tabIndex={isSelected ? 0 : -1}
                    className={cx(
                      'm-2 rounded-md bg-indigo-50 px-4 py-1 font-medium text-indigo-900 hover:bg-white',
                      !isSelected ? 'flex-1' : 'shrink'
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
