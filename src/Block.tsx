import * as React from 'react';

import Prism from 'prismjs';

import 'prismjs/components/prism-python.min.js';
import 'prismjs/themes/prism-okaidia.css';


interface IBlockProps {
  code: string;
  good: boolean;
  language: string;
}

enum Highlight {
  None = 1,
  Good,
  Bad,
}

function highlightCssClass(h: Highlight) {
  return Highlight[h].toLowerCase();
}

interface IBlockState {
  hl: Highlight;
}

class Block extends React.Component<IBlockProps, IBlockState> {
  constructor(props: IBlockProps) {
    super(props);
    this.state = { hl: Highlight.None };
  }

  public render() {
    const langclass = "language-" + this.props.language;
    const classes = langclass + " block " + highlightCssClass(this.state.hl);
    return (<code className={classes} onClick={this.click} ref={this.setCodeRef}>
      {this.props.code}
    </code>);
  }

  private click = (e: any) => {
    this.setState((state: IBlockState, props: IBlockProps) => ({
      hl: state.hl !== Highlight.None ? state.hl : (props.good ? Highlight.Good : Highlight.Bad),
    }));
  }

  private setCodeRef = (element: HTMLPreElement) => {
    if (element !== null) {
      Prism.highlightElement(element, false);
    }
  };
}

export {Block, IBlockProps};
