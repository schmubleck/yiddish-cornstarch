import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

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

class Example extends React.Component<RouteComponentProps<any>, {}> {
  constructor(props: RouteComponentProps) {
    super(props);
  }

  public render() {
    const name = this.props.match.params.name;
    if (name in sources) {
      return (
        <Snippet.Snippet {...GetExample("simple")} />
      );
    } else {
      return (
        <div>
          <Link to="/">
            <h1>Example {name} not found.  Click here to return home.</h1>
          </Link>
        </div>
      );
    }
  }
}

export {Example, GetExample, ExampleNames};
