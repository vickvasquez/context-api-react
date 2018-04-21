import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class MyProvider extends Component {
    state = {
        user: {
            name: 'Vick',
            lastName: 'Vasquez',
            age: 22,
            rol: 'Full Stack Web developer'
        },

        configUI: {
            themeBackground: 'orange',
            themeNav: 'gray',
        }
    }

    changeName = () => {
        this.setState(prevState => ({
            user: {...this.state.user, name: 'Otro'}
        }))
    }

    render() {
        return (
            <Provider value={{
                user: this.state.user,
                changeName: this.changeName,
                config: this.state.configUI,
            }}>
                {
                    this.props.children
                }
            </Provider>
        )
    }
}

export {
    MyProvider,
    Consumer,
}