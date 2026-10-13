export type HighlightPart = string | { highlight: string }

export function parseHighlights(text: string): HighlightPart[] {
  const result: HighlightPart[] = []
  const regex = /\*(.*?)\*/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index))
    }
    result.push({ highlight: match[1] })
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex))
  }

  return result
}