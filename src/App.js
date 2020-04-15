import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(response=> response.json())
    .then(users => this.setState({monsters: users['data']}) );
  }

  handleChange(e) {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters
    .sort((a, b) => b.employee_salary - a.employee_salary)
    .filter(monster => 
      monster.employee_name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='Search Mmmmonsters'
          handleChange={e => this.handleChange(e)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }


}

export default App;
