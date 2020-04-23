import React from 'react';
import Cardlist from '../components/Cardlist'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}))
  }
  render(){
    const filteredRobots = this.state.robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(this.state.searchField);
    });
    return (  
      <div className="tc">
        <div className="pa2">
          <h1 className="f1">Robofriends</h1>
        </div>
        <Searchbox 
          searchField={this.state.searchField} 
          searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
      </div>
    );
  }
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }
  
}

export default App;
