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
          <ul className="mt-6 space-y-2">
            {times.map((time) => {
              const isSelected = time === selectedTime
              return (
                <li key={time}>
                  <button
                    className={cx(
                      'w-full rounded-lg px-5 py-3 font-semibold focus:outline-none focus:ring focus:ring-indigo-400',
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
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
