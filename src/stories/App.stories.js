import React from 'react';
import { storiesOf } from '@storybook/react';

import {Book} from '../components/Book';

const stories = storiesOf('App Test', module);
stories.add('App' , () => {

    
    return (
        <Book>

        </Book>
    )
})