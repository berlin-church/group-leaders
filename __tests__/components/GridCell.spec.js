import * as React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GridCell from '../../components/GridCell';

describe('Components', () => {
  describe('GridCell', () => {
    it('should render without throwing an error', function () {
      const wrap = shallow(<GridCell>My Cell</GridCell>)
      expect(wrap.find('span').text()).toBe('My Cell')
    })
  })
})
