import * as React from 'react';

import * as Snippet from "./Snippet";

import * as Simple from "./examples/Simple";

interface IExample {
    lang: string;
    code: string;
}

const sources = {
  "simple": Simple,
};

function ExampleNames() {
  return Object.keys(sources);
}

function ParseExample(ex: IExample): Snippet.ISnippetProps {
    return {
        blocks: [{code: "def main():", good: false}] as Snippet.IBlock[],
        lang: "python",
    };
}

function GetExample(name: string) {
    return ParseExample(sources[name]);
}

class Example extends React.Component {
  public render() {
    return (
      <Snippet.Snippet {...GetExample("simple")} />
    );
  }
}

export {Example, GetExample, ExampleNames};
