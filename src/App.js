import React from 'react'
import './App.css'
import FetchComponent from './components/FetchComponent'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FetchComponent />
        </header>
      </div>
    )
  }
}

export default App
