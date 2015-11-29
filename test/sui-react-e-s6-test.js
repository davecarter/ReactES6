/* eslint no-unused-expressions:0 */
import {expect} from 'chai';
import ReactES6 from '../src/sui-react-e-s6';

describe('sui-react-e-s6 component test suite', () => {

  describe('sui-react-e-s6', () => {
    it('should be loaded properly', () => {
      expect(ReactES6).to.not.be.undefined;
    });
  });

});
