import React, {Component} from "react"
import userName from './userName.js'


class Header extends Component {
    static contextType = userName
    render() {
    const username = this.context
        return (
            <header>
                <p>Welcome, {username}!</p>
            </header>
        )    
    }
}

export default Header
