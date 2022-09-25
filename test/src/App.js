import React, { Component } from "react";
import "./App.css";
import Todolist from "./component/Todo-list";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: [],
    };
  }

  inputHandler = (event) => {
    this.setState({ text: event.target.value });
  };

  handleBtn = (event) => {
    if (this.state.text !== "") {
      const items = [...this.state.items,this.state.text];
      this.setState({ items: items, text: "" });
    }
  };

  handlerDelete = (id) => {
    const olditems = [...this.state.items];
    const items = olditems.filter((element,i)=>{
      return i !== id;
    })
    this.setState({items: items})

  }
  render() {
    return (
      <>
        <div className="App">
          <h1>To-Do List</h1>
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a new item..."
              value={this.state.text}
              onChange={this.inputHandler}
            />
            <div className="btn">
              <button className="btn-create" onClick={this.handleBtn}>
                Create
              </button>
            </div>
          </div>
          <div className="list-container">
            <ul className="list">
            {
              this.state.items.map((value,i)=>{
                return <Todolist key={i} id={i} value={value} sendFun = {this.handlerDelete}/>
              })
            }
            </ul>
          </div>
        </div>
      </>
    );
  }
}
