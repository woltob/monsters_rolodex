import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(response=> response.json())
    .then(users => this.setState({monsters: users['data']}) );
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map(monster => <h1 id={monster.id}>{ monster.employee_name }</h1>)
        }
      </div>
    );
  }


}

export default App;
