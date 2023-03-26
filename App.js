import React  from "react"
import UserName from "./userName"
import Header from "./Header"

class App extends React.Component {
    
    render() {
        return (
        <div>
            <Header />
            <main>
                <p className="main">No new notifications, {this.context}! 🎉</p>
            </main>
        </div>
        )
    }
}

App.contextType = UserName

export default App