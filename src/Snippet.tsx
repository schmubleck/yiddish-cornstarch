import * as React from 'react';


import Prism from 'prismjs';

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

export {ISnippet, SnippetFrame};
