import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Heading, Text, Emphasis, PhrasingContent } from 'mdast'

const PREPS = new Set(['of', 'and', 'or', 'to', 'for', 'in', 'on', 'at', 'by'])

function isText(node: PhrasingContent): Node is Text {
  return node.type === 'text'
}

function emphasisePreps(textNode: Text): PhrasingContent[] {
  const parts = textNode.value.split(/(\s+)/) // keep whitespace tokens
  return parts.map<PhrasingContent>(token => {
    const lower = token.toLowerCase()
    if (PREPS.has(lower)) {
      const emph: Emphasis = {
        type: 'emphasis',
        children: [{ type: 'text', value: token }],
      }
      return emph
    }
    return { type: 'text', value: token }
  })
}

const italiciseHeadingPreps: Plugin = () => {
  return tree => {
    visit(tree, 'heading', (node: Heading) => {
      const newChildren: PhrasingContent[] = []

      node.children.forEach(child => {
        if (isText(child)) {
          newChildren.push(...emphasisePreps(child))
        } else {
          newChildren.push(child) // keep existing emphasis / links / etc.
        }
      })

      node.children = newChildren
    })
  }
}
export default italiciseHeadingPreps
