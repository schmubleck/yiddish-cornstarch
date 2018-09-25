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
    locked: false
  };
}

function GetExample(name: string) {
  return ParseExample(Registry[name]);
}

function GetSolution(name: string) {
  return ParseExample(Registry[name]);
}

interface IMatchParams {
  name: string;
}

interface IExampleState {
  submitted: boolean;
}

class Example extends React.Component<RouteComponentProps<IMatchParams>, IExampleState> {
  constructor(props: RouteComponentProps<IMatchParams>) {
    super(props);
    this.state = {submitted: false};
    this.submit = this.submit.bind(this);
  }

  public render() {
    const name = this.props.match.params.name;
    if (name in Registry) {
      const question = GetExample(name);
      if (this.state.submitted) {
        return (
          <div>
            <h2 className="title is-4">
              Submitted code:
            </h2>
            <Snippet.Snippet {...question} locked={true}/>
            <Snippet.Snippet {...GetSolution(name)} locked={true} />
          </div>
        );
      }

      return (
        <div>
          <h2 className="title is-4">
            Find the lines that should be changed/fixed
          </h2>
          <Snippet.Snippet {...question} locked={false} />
          <button onClick={this.submit}>Submit</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/">
            <h1>Example {name} not found. Click here to return home.</h1>
          </Link>
        </div>
      );
    }
  }

  private submit = (e: any) => {
    this.setState((state: IExampleState) => ({
      submitted: true
    }));
  }
}

export {Example, GetExample};
