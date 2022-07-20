export default function FeedbackPage() {
  return (
    <div className="h-full overflow-hidden bg-slate-100">
      <div className="mx-auto mt-24 max-w-7xl p-8">
        <h1 className="text-4xl font-bold text-slate-900">Workshop feedback</h1>
        <p className="mt-6 max-w-prose text-lg font-medium text-slate-600">
          You have just attended the Tailwind CSS Gymnastics workshop? First of all, thank you so
          much! I really hope you had a good time.
        </p>
        <p className="mt-6 max-w-prose text-lg font-medium text-slate-600">
          I'd really appreciate if you could take a couple of minutes to fill this feedback survey.
          It really helps, and I want to constantly improve my workshops.
        </p>

        <div className="mt-8 ">
          <a
            className="inline-block rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500 active:bg-indigo-600"
            href="https://docs.google.com/forms/d/e/1FAIpQLScZFL_W7h413tiNpp_Xyn4hEfMTNGpwFvFdXnqLOEbiU7s4Uw/viewform?usp=pp_url&entry.1747016377=Tailwind+CSS+Gymnastics"
          >
            Take the survey &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
