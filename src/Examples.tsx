import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import * as Block from "./Block";
import * as Snippet from "./Snippet";

import Registry from "./ExampleRegistry";

interface IExample {
    lang: string;
    code: string;
}

function ParseExample(ex: IExample): Snippet.ISnippetProps {
  const typtag = {
    'N': Block.BlockType.Ignore,
    'G': Block.BlockType.Good,
    'B': Block.BlockType.Bad,
  };
  const blocks = ex.code
    .split('@')
    .slice(1)
    .map((s) => ({
      code: s.slice(1),
      typ: typtag[s[0]],
    }));

  return {
    blocks,
    lang: ex.lang,
  };
}

function GetExample(name: string) {
  return ParseExample(Registry[name]);
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
    if (name in Registry) {
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

export {Example, GetExample};
