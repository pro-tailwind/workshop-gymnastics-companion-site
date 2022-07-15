import Link from 'next/link'
import Image from 'next/future/image'
import clsx from 'clsx'

import heroImage from '../public/images/handstand.png'
import introImage from '../public/images/stretching.png'

export default function Homepage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-indigo-600">
        <Image
          src={heroImage}
          alt=""
          className="absolute bottom-0 right-1/2 w-52 max-w-xl translate-x-1/2 lg:right-12 lg:w-[42%] lg:translate-x-0"
        />
        <div className="mx-auto max-w-7xl p-8">
          <div className="pt-12 pb-48 lg:pt-48">
            <div className="relative mx-auto max-w-xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-indigo-400 py-1 px-4 text-xs font-bold uppercase tracking-widest text-white md:text-base lg:left-0 lg:translate-x-0">
                1-day Workshop
              </span>
              <h1 className="pt-12 text-4xl font-black text-white md:text-5xl lg:max-w-2xl lg:text-7xl xl:text-8xl">
                Tailwind CSS Gymnastics
              </h1>
              <p className="mt-4 text-lg font-semibold uppercase tracking-widest text-indigo-200 lg:mt-8">
                with Simon Vrachliotis
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl p-8 py-16 md:py-24 lg:py-32">
          <div className="prose prose-lg prose-indigo mx-auto max-w-prose xl:prose-xl">
            <Image src={introImage} alt="" className="w-24 md:w-40" />
            <h2>Get ready to stretch those CSS muscles!</h2>
            <p>
              Together, we'll deconstruct interesting parts of the{' '}
              <a href="https://protailwind-workshop-starter-app.vercel.app/">
                Calendar Booking App
              </a>{' '}
              and work our CSS gymnastics with some fun challenges!
            </p>
            <p>
              I think you're in for a good time. But before we get started, let's go over some
              formalities and housekeeping around the workshop.
            </p>

            <hr />
            <h2>What and when?</h2>
            <p>Here's the timetable for today's workshop.</p>

            <Timetable />
            <hr />
            <h2>Focus groups & breakout rooms</h2>
            <p>
              You'll be split in small focus groups for today's workshop challenges. This consists
              of separate "breakout rooms", where each member of the group will take turns "driving"
              a challenge by sharing their screen.
            </p>
            <p>The groups will remain the same for the entire workshop.</p>
            <p>
              At the end of challenges, we'll all come back together to discuss. "Pairing" in small
              groups and actively participating to group discusions are key to this workshop.
              They'll help you maximise your learning experience.
            </p>
            <p>
              I really encourage everyone to participate actively, ask questions, and of course be
              supportive of one another!
            </p>
          </div>
        </div>

        <Link href="/challenges">
          <a className="block bg-indigo-600 py-16 text-center text-2xl font-bold text-white transition hover:bg-teal-500 lg:py-24">
            Allright. Let's jump to the challenges! &rarr;
          </a>
        </Link>

        <div className="mx-auto max-w-7xl p-8 py-16 md:py-24 lg:py-32">
          <div className="prose prose-lg prose-indigo mx-auto max-w-prose xl:prose-xl">
            <h2>Hey! I'm Simon. I will be your workshop instructor. 👋</h2>
            <p>
              If you've watched some YouTube videos from the Tailwind Labs channel, you've most
              probably seen my face already!
            </p>
            <p>
              I love utility-first CSS. I've been supporting and promoting this styling approach
              even before Tailwind CSS existed! I'm a front-end developer, designer and content
              creator. I bring a lot of entusiasm and positive energy in everything I do, this is
              just how I'm wired up!
            </p>

            <p>
              I think I'm really good at teaching stuff, and make people excited to learn new
              things. I have been teaching in-person workshops for multiple senior engineering
              teams, and a constant piece of feedback I get is my workshops are exciting, fun and
              engaging. And to me, that's the best way to learn!
            </p>

            <p>
              I've been speaking at conferences, meetups, and I'm also an instructor on egghead.io
              Oh, and I recently started a podcast with my new friend Jon Myers - it's called The
              NavBar, you should check it out! You can connect with me on Twitter, I'm{' '}
              <a href="https://twitter.com/simonswiss">simonswiss</a>.
            </p>
            <p>I'm super excited to dive into this workshop with you.</p>
          </div>
        </div>
      </div>
    </>
  )
}

// ------------------------------
// Implementation components
// ------------------------------

const program = [
  {
    time: '1:00 PM - 1:15 PM',
    what: 'housekeeping',
    duration: '15 min',
    topic: 'Meet & Greet, Housekeeping',
  },
  {
    time: '1:15 PM - 2:15 PM',
    what: 'content',
    duration: '60 min',
    topic: 'Tailwind CSS challenges part 1',
  },
  {
    time: '2:15 PM - 2:30 PM',
    what: 'break',
    duration: '15 min',
    topic: 'Coffee/Snacks',
  },
  {
    time: '2:30 PM - 3:45 PM',
    what: 'content',
    duration: '75 min',
    topic: 'Tailwind CSS challenges part 2',
  },
  {
    time: '3:45 PM - 4:00 PM',
    what: 'break',
    duration: '15 min',
    topic: 'Coffee/Snacks',
  },
  {
    time: '4:00 PM - 5:00 PM',
    what: 'content',
    duration: '60 min',
    topic: 'Tailwind CSS challenges part 3',
  },
]

function Timetable() {
  return (
    <div className="not-prose mt-8 flex flex-col text-left">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <table className="min-w-full divide-y-2 divide-teal-500">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-slate-900"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-3 text-left text-base font-semibold text-slate-900"
                >
                  What?
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-3 text-left text-base font-semibold text-slate-900"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-3 text-left text-base font-semibold text-slate-900"
                >
                  Topic
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {program.map((entry, index) => (
                <tr key={index} className={clsx(entry.what === 'break' && 'bg-teal-100/50')}>
                  <td
                    className={clsx(
                      'whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium',
                      entry.what === 'break' ? 'text-teal-900' : 'text-slate-900'
                    )}
                  >
                    {entry.time}
                  </td>
                  <td
                    className={clsx(
                      'whitespace-nowrap py-4 px-3 text-base',
                      entry.what === 'break' ? 'font-medium text-teal-600' : 'text-slate-500'
                    )}
                  >
                    {entry.what}
                  </td>
                  <td
                    className={clsx(
                      'whitespace-nowrap py-4 px-3 text-base',
                      entry.what === 'break' ? 'font-medium text-teal-600' : 'text-slate-500'
                    )}
                  >
                    {entry.duration}
                  </td>
                  <td
                    className={clsx(
                      'whitespace-nowrap py-4 pl-3 pr-4 text-base font-medium text-slate-900 sm:pr-6 md:pr-0',
                      entry.what === 'break' ? 'text-teal-900' : 'text-slate-900'
                    )}
                  >
                    {entry.topic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
