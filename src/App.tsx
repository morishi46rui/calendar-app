import { Component } from 'react'
import Button from '@material-ui/core/Button'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          ></meta>
          <Button variant="contained" color="primary">
            Hello World!
          </Button>
        </header>
      </div>
    )
  }
}

export default App
