import Link from 'next/link'

export function BackArrow() {
  return (
    <div className="absolute top-4 left-4 z-10">
      <Link href="/">
        <a className="text-4xl text-white transition hover:text-yellow-200">&larr;</a>
      </Link>
    </div>
  )
}
