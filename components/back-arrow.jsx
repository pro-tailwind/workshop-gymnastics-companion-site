import Link from 'next/link'

export function BackArrow() {
  return (
    <div className="absolute top-4 left-4">
      <Link href="/">
        <a className="text-4xl text-white">&larr;</a>
      </Link>
    </div>
  )
}
