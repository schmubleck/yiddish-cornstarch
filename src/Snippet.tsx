import * as React from 'react';

import './snippet.css';

import * as Block from './Block'

interface ISnippetProps {
  blocks: Block.IBlock[];
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
      <pre className={`language-${this.props.lang}`}>
        {children}
      </pre>
    );
  }
}

export {Snippet, ISnippetProps};
