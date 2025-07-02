/**
 * Italicise small “glue” words inside a string.
 *  - Matches whole words only (case‑insensitive).
 *  - Preserves the original capitalisation of each match.
 *
 * @param input   The raw text to transform.
 * @param words   Array of words to wrap (default: common prepositions/conjunctions).
 */
export function emphasizePreps(
  input: string,
  words: string[] = ['of', 'and', 'or', 'to', 'for', 'in', 'on', 'at', 'by'],
): string {
  if (!input) return input

  // Build a single regex like:  /\b(of|and|or|to)\b/gi
  const pattern = new RegExp(`\\b(${words.join('|')})\\b`, 'gi')

  return input.replace(pattern, match => `<em>${match}</em>`)
}
