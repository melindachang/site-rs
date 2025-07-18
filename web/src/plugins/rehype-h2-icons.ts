import { visit } from 'unist-util-visit'
import { unified, type Plugin } from 'unified'
import type { Root, Element } from 'hast'
import blockSvg from '../assets/block.svg?raw'
import rehypeParse from 'rehype-parse'

const parseSvg = (svg: string): Element[] => {
  const ast = unified().use(rehypeParse, { fragment: true }).parse(svg) as Root
  return ast.children.filter((node): node is Element => node.type === 'element')
}

const cloneNode = <T>(node: T): T => {
  return JSON.parse(JSON.stringify(node))
}

const addIconsToH2: Plugin<[], Root> = () => {
  const svgNodes = parseSvg(blockSvg)
  console.log(svgNodes)

  return tree => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'h2') {
        node.children.unshift(...svgNodes.map(cloneNode))
        node.children.push(...svgNodes.map(cloneNode))
      }
    })
  }
}

export default addIconsToH2
