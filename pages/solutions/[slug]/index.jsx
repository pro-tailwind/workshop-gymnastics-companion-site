import { useRouter } from 'next/router'

import { lessons } from '../../../data'

import { HtmlSnippet } from '../../../components/html-snippet'
import { BackArrow } from '../../../components/back-arrow'
import { NotFound } from '../../../components/not-found'

export default function SolutionSnippetsPage() {
  const {
    query: { slug },
  } = useRouter()
  if (!slug) return ''
  const challenge = lessons.find((lesson) => lesson.slug === slug)
  if (!challenge) return <NotFound />
  const Snippet = challenge.solutionSnippet
  return (
    <div>
      <BackArrow inverted />
      {challenge.language === 'JSX' ? <Snippet /> : <HtmlSnippet html={Snippet} />}
    </div>
  )
}
