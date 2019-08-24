import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './views/Search'
import Feedback from './views/Feedback'

const styles = {
  container: {
      padding: '1rem'
  },
  page: {
    marginTop: '8rem'
  }
}

class App extends React.Component {
  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <AppBar style={styles.container}>
            <Typography variant="h4">
              Feedback on the Fly
            </Typography>
          </AppBar>
          

          <div style={styles.page}>
            <Router>
              <Route path="/" exact component={Search}/>
              <Route path="/feedback/:username" component={Feedback}/>
            </Router>
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;
