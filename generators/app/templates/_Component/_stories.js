import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import <%= name %> from './index'

storiesOf('<%= name %>', module)
  .add('<%= name %>', () => (
    <<%= name %> onClick={action('clicked')}> Click Me! </<%= name %>>
  ))
