import React, { Component } from 'react'

import { Consumer } from './Provider'

import Nav from './Navbar'

export default class Perfil extends Component {
  render() {
    return (
        <Consumer>
            {(context) => (
                <React.Fragment>
                    <Nav theme={context.config.themeNav} name={context.user.name} />
                    <div style={{
                        height: '90vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexDirection: 'column',
                        background: context.config.themeBackground
                    }}>
                        <p> { context.user.name} { context.user.lastName}  </p>
                        <p> { context.user.age} años  </p>
                        <p> { context.user.rol}  </p>
                        <button onClick={context.changeName}>
                            Change Name
                        </button>
                   </div> 
                </React.Fragment>
            )}
        </Consumer>
    )
  }
}
