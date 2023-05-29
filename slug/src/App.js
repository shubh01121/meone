import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    data: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const {name, department, rating} = this.state;
    const obj = {name, department, rating};
    const newData = [...this.state.data, obj];
    this.setState({
      data: newData,
      name: "",
      department: "",
      rating: "",
    });
  };
  render() {
    return (
      <>
      <div>
      <div className="App">
          <h1 className="feed">EMPLOYEE FEEDBACK FORM</h1>
          <form className="forme" onSubmit={this.handleClick}>
            <h3>
              Name :{" "}
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </h3>
            <h3>
              Department :{" "}
              <input
                type="text"
                name="department"
                onChange={this.handleChange}
                value={this.state.department}
              />
            </h3>
            <h3>
              Rating :{" "}
              <input
                type="number"
                name="rating"
                onChange={this.handleChange}
                value={this.state.rating}
              />
            </h3>
            <h3>
              <button type="submit">
                Submit
              </button>
            </h3>
          </form>
        </div>
        <div className="App-1"> 
          {this.state.data.map((item,index) => (
            <p key={index} className='box'>
              Name : {item.name} | Department : {item.department} | Rating : {item.rating}
            </p>
          ))}
        </div>
      </div>
      </>
    )
  }
}
