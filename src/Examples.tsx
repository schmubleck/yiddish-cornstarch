import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import * as Snippet from "./Snippet";

import Simple from "./examples/Simple";

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

interface IMatchParams {
  name: string;
}

class Example extends React.Component<RouteComponentProps<IMatchParams>, {}> {
  constructor(props: RouteComponentProps<IMatchParams>) {
    super(props);
  }

  public render() {
    const name = this.props.match.params.name;
    if (name in sources) {
      return (
        <div>
          <h1>Find the lines that should be changed/fixed</h1>
          <Snippet.Snippet {...GetExample(name)} />
        </div>
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
