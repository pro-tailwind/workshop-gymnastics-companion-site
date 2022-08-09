import { useState } from 'react'
import cx from 'clsx'

const times = ['8:00 AM', '10:00 AM', '3:00 PM', '5:00 PM']

export default function SlideInConfirmation() {
  const [selectedTime, setSelectedTime] = useState(null)

  return (
    <div className="h-full bg-indigo-600">
      <div className="mx-auto w-full max-w-lg p-16">
        <div className="mx-4 mt-12 rounded-2xl bg-white p-8 shadow-2xl">
          <h2 className="text-xl font-medium">Friday, 19th August 2022</h2>
          <ul className="mt-6 space-y-2">
            {times.map((time) => {
              const isSelected = time === selectedTime
              return (
                <li
                  key={time}
                  className={cx(
                    'flex items-center',
                    isSelected ? 'rounded-lg bg-indigo-600 bg-stripes' : ''
                  )}
                >
                  <button
                    className={cx(
                      'w-full rounded-lg px-5 py-3 font-semibold transition-[flex-basis,flex-shrink] duration-300 focus:outline-none focus:ring focus:ring-inset focus:ring-indigo-400',
                      isSelected
                        ? 'basis-1/2 bg-transparent text-white'
                        : 'shrink-0 basis-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                    )}
                    disabled={isSelected ? -1 : 0}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                  <button
                    className={cx(
                      'm-2 basis-1/2 rounded-lg bg-indigo-100 px-3 py-1 font-semibold text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring focus:ring-indigo-400',
                      isSelected ? '' : 'hidden'
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
