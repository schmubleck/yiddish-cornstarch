import * as React from 'react';


import Prism from 'prismjs';

import 'prismjs/components/prism-python.min.js';
import 'prismjs/themes/prism-okaidia.css';

Prism.highlightAll();

interface ISnippet {
  blocks: string[];
}

function SnippetFrame(code: ISnippet) {
  return (
    <pre><code className="lang-clike">
    {...code.blocks}
    </code></pre>
  );
}

interface ISnippetProps {
  blocks: string[];
  lang: string;
}

enum Highlight {
  None = 1,
  Hover,
  Good,
  Bad,
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
    const clss = "lang-" + this.props.lang;
    for (const block of this.props.blocks) {
      rb.push(<code className={clss}>{block}</code>)
    }
    return (
      <pre>
        {...rb}
      </pre>
    );
  }
}

export {ISnippetProps, Snippet, SnippetFrame, ISnippet};
