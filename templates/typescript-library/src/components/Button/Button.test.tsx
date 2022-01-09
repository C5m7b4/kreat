import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('renders the button', () => {
    render(<Button label="Hello" />);
  });
});
