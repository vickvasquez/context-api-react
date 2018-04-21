import React, { Component } from 'react'

import { Consumer } from './Provider'

export default class Nav extends Component {
  render() {
    return (
        <div style={{
            background: this.props.theme,
            color: 'white',
        }}>
            <span> {this.props.name} </span>
        </div>
    )
  }
}
