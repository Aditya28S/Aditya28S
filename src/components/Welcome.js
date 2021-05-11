import React, {Component} from 'react'

// Class Component
// class Welcome extends Component {
//     render() {
//         return <h1>Welcome {this.props.name} A.K.A {this.props.heroName}</h1>
//     }
// }

// Destructure props in render() method
class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return <h1>Welcome {name} A.K.A {heroName}</h1>
    }
}

export default Welcome