import React from 'react';

enum BlockType {
  Ignore,
  Good,
  Bad,
}

interface IBlock {
  code: string;
  typ: BlockType;
}

interface IBlockProps extends IBlock {
  language: string;
  submitted: boolean;
}

enum Highlight {
  None = 1,
  Hidden,
  Ignore,
  Good,
  Bad,
}

interface IBlockState {
  hl: Highlight;
}

function blockTypeToHighlight(blockType: BlockType) {
  switch(blockType) {
    case BlockType.Good:
      return Highlight.Good;
    case BlockType.Bad:
      return Highlight.Bad;
    case BlockType.Ignore:
      return Highlight.Ignore;
  }
}

class Block extends React.Component<IBlockProps, IBlockState> {
  constructor(props: IBlockProps) {
    super(props);
    this.state = {
      hl: props.typ === BlockType.Ignore ? Highlight.Ignore : Highlight.None
    };
  }

  public render() {
    const classes = [
      `language-${this.props.language}`,
      "block",
       "is-marginless"
    ]

    function currentAnswer(hl: Highlight) : BlockType {
      switch(hl) {
      case Highlight.None:
        return BlockType.Good;
      case Highlight.Ignore:
        return BlockType.Ignore;
      default:
        return BlockType.Bad;
      }
    }

    if (this.props.submitted) {
      classes.push("submitted");

      const submittedAnswer = currentAnswer(this.state.hl);
      let resultClasses = (submittedAnswer === this.props.typ) ? "result-icon" : "result-icon incorrect";

      let submittedClasses = classes.join(" ");
      let actualClasses = classes.join(" ");

      if (submittedAnswer === BlockType.Bad) {
        submittedClasses = submittedClasses + " bad";
        if (this.props.typ === BlockType.Good) {
          actualClasses = actualClasses + " good";
        } else {
          resultClasses = "result-icon correct";
        }
      }

      if (this.props.typ === BlockType.Bad) {
        actualClasses = actualClasses + " bad";
      }

      return (
        <pre className="code-line is-marginless">
          <code className={submittedClasses} onClick={this.click}>
            {this.props.code}
          </code>

          <span className={resultClasses} />

          <code className={actualClasses} onClick={this.click}>
            {this.props.code}
          </code>
        </pre>
      );
    }

    if (this.state.hl !== Highlight.None && this.state.hl !== Highlight.Ignore) {
      classes.push("hidden");
    } else {
      classes.push("none");
    }

    return (
      <pre className="code-line is-marginless">
        <code className={classes.join(" ")} onClick={this.click}>
          {this.props.code}
        </code>
      </pre>
    );
  }

  private click = () => {
    this.setState((state: IBlockState, props: IBlockProps) => {
      if (this.props.submitted) {
        return state;
      }

      if (state.hl === Highlight.None) {
        return { hl: blockTypeToHighlight(props.typ) };
      } else {
        return { hl: Highlight.None };
      }
    });
  };
}

export {Block, IBlock, IBlockProps, BlockType};
