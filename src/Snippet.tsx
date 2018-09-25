import React from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-python.min.js';
import 'prismjs/plugins/custom-class/prism-custom-class.min.js';
import './prism-okaidia-with-prefix.css';

import * as Block from './Block'
import './snippet.css';

// Avoid clashing with basically all css frameworks.
Prism.plugins.customClass.prefix('prism--');

interface ISnippetProps {
  blocks: Block.IBlock[];
  lang: string;
  locked: boolean;
}

class Snippet extends React.Component<ISnippetProps, {}> {
  // Note that routing doesn't necessarily remount components, so we need to
  // re-highlight on update instead of mounting to make sure we always have
  // highlighted code.
  public componentDidMount() {
    Prism.highlightAll();
  }

  public componentDidUpdate() {
    Prism.highlightAll();
  }

  public render() {
    return (
      <pre className={`language-${this.props.lang}`}>
        {this.props.blocks.map((block, ii) =>
          <Block.Block key={ii} {...this.props.blocks[ii]} language={this.props.lang} locked={this.props.locked} />
        )}
      </pre>
    );
  }
}

export {Snippet, ISnippetProps};
