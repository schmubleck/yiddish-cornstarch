import * as React from 'react';

import Prism from 'prismjs';

import 'prismjs/components/prism-python.min.js';
import 'prismjs/themes/prism-okaidia.css';

enum BlockType {
  Ignore,
  Good,
  Bad,
}

interface IBlock {
  code: string;
  typ: BlockType;
}

interface IBlockProps extends IBlock {
  language: string;
}

enum Highlight {
  None = 1,
  Ignore,
  Good,
  Bad,
}

function highlightCssClass(h: Highlight) {
  return Highlight[h].toLowerCase();
}

interface IBlockState {
  hl: Highlight;
}

function setCodeRef(element: HTMLPreElement) {
  if (element !== null) {
    Prism.highlightElement(element, false);
  }
}

function blockTypeToHighlight(blockType: BlockType) {
  switch(blockType) {
    case BlockType.Good:
      return Highlight.Good;
    case BlockType.Bad:
      return Highlight.Bad;
    case BlockType.Ignore:
      return Highlight.Ignore;
  }
}

class Block extends React.Component<IBlockProps, IBlockState> {
  constructor(props: IBlockProps) {
    super(props);
    this.state = { hl: props.typ === BlockType.Ignore ? Highlight.Ignore : Highlight.None };
  }

  public render() {
    return (
      <code
        className={`language-${this.props.language} block ${highlightCssClass(this.state.hl)}`}
        onClick={this.click}
        ref={setCodeRef}
      >
        {this.props.code}
      </code>
    );
  }

  private click = () => {
    this.setState((state: IBlockState, props: IBlockProps) => {
      if (state.hl === Highlight.None) {
        return { hl: blockTypeToHighlight(props.typ) };
      } else {
        return state;
      }
    });
  };
}

export {Block, IBlock, IBlockProps, BlockType};
