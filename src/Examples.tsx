import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import * as Block from "./Block";
import * as Snippet from "./Snippet";

import Registry from "./ExampleRegistry";

interface IExample {
    lang: string;
    code: string;
}

interface IParsedExample {
  blocks: Block.IBlock[];
  lang: string;
  locked: boolean;
};

function ParseExample(ex: IExample): IParsedExample {
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
  const ex = Registry[name];
  if ('solution' in ex) {
    return {
      blocks: [{
        code: ex.solution,
        typ: Block.BlockType.Ignore,
      }],
      lang: ex.lang,
      locked: true,
    };
  }
  return GetExample(name);
}

interface IMatchParams {
  name: string;
}

type IExampleProps = RouteComponentProps<IMatchParams>;

interface IExampleState {
  submitted: boolean;
}

const ExampleNotFound = (props: IMatchParams) => (
    <div>
      <Link to="/">
        <h1>Example {props.name} not found. Click here to return home.</h1>
      </Link>
    </div>
);

class Example extends React.Component<IExampleProps, IExampleState> {
  constructor(props: IExampleProps) {
    super(props);
    this.state = {submitted: false};
  }

  public render() {
    const name = this.props.match.params.name;
    if (!(name in Registry)) {
      return <ExampleNotFound name={name} />;
    }

    const example = GetExample(name);
    return (
      <div>
        <h2 className="title is-4">
          {this.state.submitted ?
            "Submitted code:" :
            `Example ${name}:`}
        </h2>
        <Snippet.Snippet {...example} keyPrefix={name} locked={this.state.submitted}/>
        {this.state.submitted ?  (
          <Snippet.Snippet {...GetSolution(name)} keyPrefix={name} locked={true} />
        ) : (
          <button onClick={this.submit}>Submit</button>
        )}
      </div>
    );
  }

  // we need this hook to ensure we reset the state when switching to a new example.
  public componentDidUpdate(prevProps: IExampleProps, prevState: IExampleState) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.setState({ submitted: false });
    }
  }

  private submit = (e: any) => {
    this.setState((state: IExampleState) => ({
      submitted: true
    }));
  }
}

export {Example, GetExample};
