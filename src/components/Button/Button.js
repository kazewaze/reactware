import React from 'react';
import './Button.css';

class Button extends React.Component {
  handleClick() {
    console.log('Clicked!');
  }

  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;