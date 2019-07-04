import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import styleguide from './styleguide.md';

storiesOf('Button', module)
    .add('With Text',
        () => <Button>Hello Button</Button>,
        {
            notes: {markdown: styleguide}
        }
    );