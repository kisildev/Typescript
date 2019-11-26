import * as React from 'react';
import App from './app';
import { mount } from 'enzyme';

describe('<App>', () => {
  it('Should valid email data', () => {
    const mockValidateEmail = jest.spyOn(App.prototype, 'validateEmail');
    const wrapper = mount(<App name="Alex" />);
    wrapper.find('[data-id="email-input"]').simulate('change', {
      target: { value: 'test@gmail.com' },
    });
    expect(wrapper.state('isValidEmail')).toBe(true);
    expect(wrapper.exists('.valid')).toBe(true);
    expect(mockValidateEmail).toBeCalled();
  });
});
