import React, { Component } from 'react';
import {Grid, Jumbotron, Button} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Table1 from './components/Table';

class App extends Component {
  render() {
    return (
      <div >
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
            <SearchForm/>
          </Grid>
        </Jumbotron>
        <Results/>
        <Table1/ >
      </div>
    );
  }
}

export default App;
