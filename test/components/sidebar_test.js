import { renderComponent, expect } from '../test_helper';
import Sidebar from '../../src/components/sidebar';

describe('Sidebar', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Sidebar);
  })

  it('has a h1 tag', () => {
    expect(component.find('h1')).to.exist;
  });

  it('has a subtitle of "initial state"', () => {
    expect(component.find('h3')).to.contain('initial state');
  });

  it('has a subtitle of "ruleset"', () => {
    expect(component.find('h3')).to.contain('ruleset');
  });

  it('has a subtitle of "randomness"', () => {
    expect(component.find('h3')).to.contain('randomness');
  });

  it('has a subtitle of "speed"', () => {
    expect(component.find('h3')).to.contain('speed');
  });

  it('has a subtitle of "color"', () => {
    expect(component.find('h3')).to.contain('color');
  });

  it('has initial state buttons', () => {
    expect(component.find('.initial')).to.exist;
  });

  it('has ruleset buttons', () => {
    expect(component.find('.ruleset')).to.exist;
  });
  
  it('has color sample buttons', () => {
    expect(component.find('.color-sample')).to.exist;
  });
});
