import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const <%= name %> = ({ classes, children }) => (
  <div className={classes.component}>
    {children}
  </div>
)

export default injectSheet(styles)(<%= name %>)
