import { PageContainer } from '../components/page-container'
import { PageHeading } from '../components/page-heading'

export default function FeedbackPage() {
  return (
    <PageContainer>
      <PageHeading>Workshop feedback</PageHeading>
      <p className="mt-4 max-w-prose text-lg font-medium text-slate-600 md:mt-6">
        You have just attended the Tailwind CSS Gymnastics workshop? First of all, thank you so
        much! I really hope you had a good time.
      </p>
      <p className="mt-4 max-w-prose text-lg font-medium text-slate-600 md:mt-6">
        I'd really appreciate if you could take a couple of minutes to fill this feedback survey. It
        really helps, and I want to constantly improve my workshops.
      </p>

      <div className="mt-8 ">
        <a
          className="inline-block rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500 active:bg-indigo-600"
          href="https://docs.google.com/forms/d/e/1FAIpQLScZFL_W7h413tiNpp_Xyn4hEfMTNGpwFvFdXnqLOEbiU7s4Uw/viewform?usp=pp_url&entry.1747016377=Tailwind+CSS+Gymnastics"
        >
          Take the survey &rarr;
        </a>
      </div>
    </PageContainer>
  )
}
