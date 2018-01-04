import React, { Component } from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

class <%= name %> extends Component {
  constructor(props) {
    super(props)
    state: {}
  }
  
  render() {
    return (
      <div className={this.props.classes.component}>
      {this.props.children}
      </div>
    )
  }
}

export default injectSheet(styles)(<%= name %>)