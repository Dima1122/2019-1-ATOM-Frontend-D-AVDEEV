import React from 'react'
import Main from './components/mainForm.component'
import DetailView from './components/detailView.component'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={Main} />
          <Route path="/location/:id" component={DetailView} />
        </Router>
      </div>
    )
  }
}

export default App
