import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Heading, PhrasingContent, Root } from 'mdast'
import blockSvg from '../assets/block.svg?raw'

const addIconsToHeadings: Plugin<[], Root> = () => {
  return tree => {
    visit(tree, 'heading', (node: Heading) => {
      const icon: PhrasingContent = { type: 'html', value: blockSvg }
      node.children.unshift(icon)
      node.children.push(icon)
    })
  }
}

export default addIconsToHeadings
