import React from 'react';

import {render, screen, waitFor} from '@app/test-utils';

import Textt from '../';

describe('Textt component', () => {
  it('renders text', async () => {
    const expectedText = 'haha';
    render(<Textt>{expectedText}</Textt>);

    const textElement = await screen.findByText(expectedText);

    await waitFor(async () => {
      expect(textElement).toHaveTextContent(expectedText);
    });
  });
});
