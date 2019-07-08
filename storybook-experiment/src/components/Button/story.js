import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import styleguide from './styleguide.md';

storiesOf('Button', module)
    .addParameters({
        info: {
            text: styleguide
        }
    })
    .add('Styles',
        () => (
            <div>
                <Button>Hello Button</Button>
                <Button style='secondary'>Hello Button</Button>
                <Button style='tertiary'>Hello Button</Button>
                <Button style='quarternary'>Hello Button</Button>
            </div>
        ),
        {
            notes: {markdown: styleguide}
        }
    )