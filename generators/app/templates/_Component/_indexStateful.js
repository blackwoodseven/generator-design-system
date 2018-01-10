import React, { Component } from 'react'

import './styles.css'

class <%= name %> extends Component {
  constructor(props) {
    super(props)
    state: {}
  }
  
  render() {
    return (
      <div className='component'>
        {this.props.children}
      </div>
    )
  }
}

export default <%= name %>