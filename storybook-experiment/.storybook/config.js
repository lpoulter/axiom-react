import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

addParameters({
    info: {
        inline: true
    },
    options: {
        showPanel: false
    }
})

const loadStories = () => {
    require('../src/components/Button/story.js');
}

configure(loadStories, module);