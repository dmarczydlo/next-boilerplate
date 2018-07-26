import React from 'react';
import Index from '../../pages/index';

describe('Index site', () => {
    let wrapper = null;

    it('should be rendered', () => {
        wrapper = global.shallow(<Index/>);
        expect(wrapper).toMatchSnapshot();
    });
});
