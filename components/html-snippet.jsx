export function HtmlSnippet({ html }) {
  return <div className="h-full" dangerouslySetInnerHTML={{ __html: html }} />
}
