import React, { Component } from 'react';
import axios from 'axios';
import ResultClub from './components/ResultClub';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: [],
      userInput: '',
      searched: false,
    }
  }

//create new vue instance and retrieve elastic data using user input from axios

//assigning userInput a new value
  handleChange = event=> {
    event.preventDefault();
    this.setState({userInput: event.target.value});
  }

//retreiving elastic search data using userinput
  handleSubmit = event=> {
    event.preventDefault();

    axios.get('http://localhost:4000/search?query=' + this.state.userInput)
      .then(res => {
        var result = res.data;

        this.setState({ result: result,
                        searched: true,
                      });

        console.log(this.state.result);
        console.log(this.state.userInput);
      })
  }

//if user has searched, display the data
    displayResults(props){
      var searched = this.state.searched;
      if (searched){
        return <p> { this.state.result.map(hit => <ResultClub name={hit._source.name}/>) } </p>;
      }
    }

  render() {
    return (
      <div className="app">
        <h2>hello from react</h2>
          <form action="/search">
            <input type="text" value={this.state.userInput} onChange={this.handleChange} placeholder="Search..." name="query" id="userText"/>
            <button type="submit" onClick={this.handleSubmit}><i>Search</i></button>
          </form>
          <div className="results-container">
          {(this.displayResults())}
          </div>
      </div>
    );
  }
}

export default App;
