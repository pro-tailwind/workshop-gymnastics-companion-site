import { useRouter } from 'next/router'

export function BackArrow() {
  const router = useRouter()
  return (
    <div className="relative">
      <div className="absolute top-8 left-8 z-10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-indigo-600 transition hover:-translate-x-0.5 hover:text-teal-500"
        >
          <span className="text-4xl">&larr;</span>
          <span className="tex-lg font-semibold">go back</span>
        </button>
      </div>
    </div>
  )
}
