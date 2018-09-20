import * as React from 'react';


import Prism from 'prismjs';

import 'prismjs/components/prism-python.min.js';
import 'prismjs/themes/prism-okaidia.css';

import './snippet.css';

Prism.highlightAll();

interface IBlock {
  code: string;
  good: boolean;
}

interface ISnippetProps {
  blocks: IBlock[];
  lang: string;
}

enum Highlight {
  None = 1,
  Good,
  Bad,
}

function highlightCssClass(h: Highlight) {
  return Highlight[h].toLowerCase();
}

interface ISnippetState {
  highlight: Highlight[];
}

class Snippet extends React.Component<ISnippetProps, ISnippetState> {
  constructor(props: ISnippetProps) {
    super(props);
    const hls = [];
    for (const _ of props.blocks) {
      hls.push(Highlight.None);
    }
    this.state = { highlight: hls }
  }

  public render() {
    const rb = [];
    const langclass = "language-" + this.props.lang;
    const classes = langclass + " block";
    for (let i = 0; i < this.props.blocks.length; i++) {
      const blkclss = classes + " " + highlightCssClass(this.state.highlight[i]);
      rb.push(<code className={blkclss}>{this.props.blocks[i].code}</code>);
    }
    return (
      <pre className={langclass}>
        {rb}
      </pre>
    );
  }
}

export {Snippet, ISnippetProps};
