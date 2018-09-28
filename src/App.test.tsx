import { mount, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import { Example } from './Examples';
import Generic404 from './Generic404';
import Welcome from './Welcome';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('routing', () => {
  it('goes to 404 at a fake page', () => {
    const missingPathWrapper = mount(
      <MemoryRouter initialEntries={["/this-should-not-exist"]}>
        <App />
      </MemoryRouter>
    );

    expect(missingPathWrapper.find(Welcome)).toHaveLength(0);
    expect(missingPathWrapper.find(Generic404)).toHaveLength(1);
    expect(missingPathWrapper.find(Example)).toHaveLength(0);
    missingPathWrapper.unmount();
  });

  it('goes to the welcome page at root', () => {
    const rootWrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(rootWrapper.find(Welcome)).toHaveLength(1);
    expect(rootWrapper.find(Generic404)).toHaveLength(0);
    expect(rootWrapper.find(Example)).toHaveLength(0);
    rootWrapper.unmount();
  });

  // TODO(toyang): we probably want to rewrite example such that we can inject
  // the registry so we can control what examples are actually present.
  it('goes to an example at the example link', () => {
    const exampleWrapper = mount(
      <MemoryRouter initialEntries={["/examples/some-example"]}>
        <App />
      </MemoryRouter>
    );

    expect(exampleWrapper.find(Welcome)).toHaveLength(0);
    expect(exampleWrapper.find(Generic404)).toHaveLength(0);
    expect(exampleWrapper.find(Example)).toHaveLength(1);
    exampleWrapper.unmount();
  });
});
