import Link from 'next/link'

export default function Homepage() {
  return (
    <>
      {/* bg-[url('/images/handstand.png')] bg-[length:40%] bg-right-bottom bg-no-repeat */}
      {/* Hero */}
      <div className="relative overflow-hidden bg-indigo-600">
        <img
          src="/images/handstand.png"
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
          <img src="/images/stretching.png" alt="" className="mx-auto w-24 md:w-40" />
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-3xl font-extrabold text-slate-800 md:text-5xl lg:text-6xl">
            Get ready to stretch those CSS muscles!
          </h2>
          <div className="prose prose-lg prose-indigo mx-auto mt-12 max-w-prose xl:prose-xl">
            <p>
              In this workshop, we'll deconstruct the most interesting parts of the{' '}
              <a href="#">Calendar Booking App</a> and work our CSS gymnastics with some fun
              challenges!
            </p>
            <p>
              Before we get started, let's take a look at the workshop format and do some quick
              housekeeping.
            </p>

            <hr />
            <h2>Workshop timetable</h2>
            <table className="-mx-2 border-separate border-spacing-2">
              <thead>
                <tr>
                  <th className="text-left">Time</th>
                  <th className="text-left">What</th>
                  <th className="text-left">Length</th>
                  <th className="text-left">Topic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1:00 PM - 1:15 PM</td>
                  <td>Intro</td>
                  <td>15 min</td>
                  <td>Meet & Greet, Housekeeping</td>
                </tr>
                <tr>
                  <td>1:15 PM - 2:15 PM</td>
                  <td>Content</td>
                  <td>60 min</td>
                  <td>Tailwind CSS challenges part 1</td>
                </tr>
                <tr className="text-teal-500">
                  <td>2:15 PM - 2:30 PM</td>
                  <td>Break</td>
                  <td>15 min</td>
                  <td>Coffee/Snacks</td>
                </tr>
                <tr>
                  <td>2:30 PM - 3:45 PM</td>
                  <td>Content</td>
                  <td>75 min</td>
                  <td>Tailwind CSS challenges part 2</td>
                </tr>
                <tr className="text-teal-500">
                  <td>3:45 PM - 4:00 PM</td>
                  <td>Break</td>
                  <td>15 min</td>
                  <td>Coffee/Snacks</td>
                </tr>
                <tr>
                  <td>4:00 PM - 5:00 PM</td>
                  <td>Content</td>
                  <td>60 min</td>
                  <td>Tailwind CSS challenges part 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-8 bg-teal-500 py-20">
          <p className="text-2xl font-bold text-white">Allright, let's jump to the challenges!</p>
          <Link href="/challenges">
            <a className="rounded-md bg-indigo-500 px-12 py-5 text-lg font-semibold text-white no-underline shadow hover:bg-indigo-600 active:bg-indigo-500">
              Yeeeee ha!
            </a>
          </Link>
        </div>

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
