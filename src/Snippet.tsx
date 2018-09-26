import * as React from 'react';


import Prism from 'prismjs';

import 'prismjs/components/prism-python.min.js';
import 'prismjs/themes/prism-okaidia.css';

import './snippet.css';

import * as Block from './Block'

Prism.highlightAll();

interface IBlock {
  code: string;
  good: boolean;
}

interface ISnippetProps {
  blocks: IBlock[];
  lang: string;
}

class Snippet extends React.Component<ISnippetProps, {}> {
  constructor(props: ISnippetProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const children = [];
    for (let i = 0; i < this.props.blocks.length; i++) {
      children.push(<Block.Block key={i} {...this.props.blocks[i]} language={this.props.lang}/>);
    }
    return (
      <pre className={"language-" + this.props.lang}>
        {children}
      </pre>
    );
  }
}

export {Snippet, ISnippetProps, IBlock};
