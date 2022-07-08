export function HtmlSnippet({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
