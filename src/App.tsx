import { Component } from 'react'
import './App.css'
import Calendar from './components/Calendar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    ></meta>
                    <Calendar />
                </header>
            </div>
        )
    }
}

export default App
