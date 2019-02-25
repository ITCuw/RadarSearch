import React, { Component } from 'react';
import axios from 'axios';
import ResultClub from './ResultClub';
import './css/Root.css';
import { Link } from 'react-router';

class Root extends Component {

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
      <div className="container">
        <h2 className="title">Radar</h2>
        <div className="searchbar">
            <form action="/search">
              <input className="inputform" type="text" value={this.state.userInput} onChange={this.handleChange} placeholder="       Search..." name="query" id="userText"/>
              <button className="searchbutton" type="submit" onClick={this.handleSubmit}><i><Link to="/search">Search</Link></i></button>
            </form>
        </div>
          <div className="results-container">
          {(this.displayResults())}
          </div>
      </div>
    );
  }
}

export default Root;
