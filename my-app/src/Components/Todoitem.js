import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Todoitem extends Component {

  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      padding: 2,
      border : '1px solid #ccc'
    } 
  }
  render() {

    const { id, title, completed} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p >
          <input type='checkbox' checked={completed} onChange={this.props.markComplete.bind(this, id)}/> {title} 
          <button  onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}> X </button>
        </p> 
      </div>
    )
  }
}
const btnStyle = {
  color : 'red',
 float : 'right',
 marginRight : 25
}

Todoitem.propTypes =
                     { todo: PropTypes.object.isRequired,
                      markComplete: PropTypes.func.isRequired,
                      deleteTodo: PropTypes.func.isRequired,
                    }

export default Todoitem
