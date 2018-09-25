import { shallow } from 'enzyme';
import React from 'react';
import { Block, BlockType } from './Block';

describe('highlighting', () => {
  const goodBlockProps = {
    code: "print(\"You had me at hello\")",
    typ: BlockType.Good,
    language: "foo",
    locked: false
  };

  const badBlockProps = {
    code: "print(\"You had me at goodbye\")",
    typ: BlockType.Bad,
    language: "bar",
    locked: false
  };

  const ignoreBlockProps = {
    code: "print(\"You had me at schmubleck\")",
    typ: BlockType.Ignore,
    language: "schmubleck",
    locked: false
  };

  it('has no highlight before click', () => {
    const goodBlockWrapper = shallow( <Block {...goodBlockProps} /> );
    const badBlockWrapper = shallow( <Block {...badBlockProps} /> );
    expect(goodBlockWrapper.is('.good')).toBe(false);
    expect(goodBlockWrapper.is('.bad')).toBe(false);
    expect(badBlockWrapper.is('.good')).toBe(false);
    expect(badBlockWrapper.is('.bad')).toBe(false);
  });

  it('highlights to proper type after click', () => {
    const goodBlockWrapper = shallow( <Block {...goodBlockProps} /> );
    const badBlockWrapper = shallow( <Block {...badBlockProps} /> );
    goodBlockWrapper.find('code').simulate('click');
    expect(badBlockWrapper.is('.bad')).toBe(false);
    expect(goodBlockWrapper.is('.good')).toBe(true);

    badBlockWrapper.find('code').simulate('click');
    expect(badBlockWrapper.is('.good')).toBe(false);
    expect(badBlockWrapper.is('.bad')).toBe(true);
  });

  it('ignore blocks dont respond to clicks', () => {
    const ignoreBlockWrapper = shallow( <Block {...ignoreBlockProps} /> );
    expect(ignoreBlockWrapper.is('.good')).toBe(false);
    expect(ignoreBlockWrapper.is('.bad')).toBe(false);
    ignoreBlockWrapper.find('code').simulate('click');
    expect(ignoreBlockWrapper.is('.good')).toBe(false);
    expect(ignoreBlockWrapper.is('.bad')).toBe(false);
  });
});
