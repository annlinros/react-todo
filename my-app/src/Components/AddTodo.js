import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddTodo extends Component {

  state = {
    title : ''
  }

  handleChange = (e) =>{
    this.setState({
     [e.target.name]  : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={addBtnStyle}>
        <input type='text' placeholder='Add item' name='title' value={this.state.title} onChange={this.handleChange}/>
        <button type='submit'>Add</button>
      </form>
    )
  }
}
AddTodo.propTypes = {addItem: PropTypes.func.isRequired}

const addBtnStyle = {
  marginTop : 10 ,
  padding : 10,
  background : '#abcdef',
  border : 'none'
}

export default AddTodo
