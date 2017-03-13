import { renderComponent, expect } from '../test_helper';
import Grid from '../../src/components/grid';

describe('Grid', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Grid);
  })

  it('has a class of "grid"', () => {
    expect(component).to.have.class('grid');
  });

  it('has a polygon', () => {
    expect(component.find('polygon')).to.exist;
  });
  
  it('has a all the cells', () => {
    expect(component.find('polygon')).to.have.lengthOf(64*64*2);
  });
});
