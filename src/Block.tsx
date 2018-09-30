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
  locked: boolean;
}

enum Highlight {
  None = 1,
  Hidden,
  Ignore,
  Good,
  Bad,
}

function highlightCssClass(h: Highlight, revealed: boolean) {
  if (!revealed && h !== Highlight.None) {
    return "hidden";
  }
  return Highlight[h].toLowerCase();
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
    this.state = { hl: props.typ === BlockType.Ignore ? Highlight.Ignore : Highlight.None };
  }

  public render() {
    const classes = [
      "language-" + this.props.language,
      "block",
      highlightCssClass(this.state.hl, this.props.locked),
      "is-marginless"
    ]

    if (this.props.locked) {
      classes.push("locked");
    }

    return (
      <code
        className={classes.join(" ")}
        onClick={this.click}
      >
        {this.props.code}
      </code>
    );
  }

  private click = () => {
    this.setState((state: IBlockState, props: IBlockProps) => {
      if (this.props.locked) {
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
