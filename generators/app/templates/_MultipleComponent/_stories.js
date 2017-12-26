import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Component1, Component2 } from './index'

storiesOf('<%= name %>', module)
  .add('<%= name %>1', () => <Component1 onClick={action('clicked')}> Click Me! </Component1>)
  .add('<%= name %>2', () => <Component2 onClick={action('clicked')}> Click Me 2! </Component2>)
