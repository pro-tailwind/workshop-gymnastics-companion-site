import { useRouter } from 'next/router'
import clsx from 'clsx'

export function BackArrow({ inverted }) {
  const router = useRouter()
  return (
    <div className="relative">
      <div className="absolute top-8 left-8 z-10">
        <button
          onClick={() => router.back()}
          className={clsx(
            'flex items-center gap-2 transition hover:-translate-x-0.5 hover:text-teal-500',
            inverted ? 'text-white' : 'text-indigo-600'
          )}
        >
          <span className="text-4xl">&larr;</span>
          <span className="tex-lg font-semibold">Go back</span>
        </button>
      </div>
    </div>
  )
}
