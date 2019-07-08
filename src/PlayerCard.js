import React, { Component } from 'react';
import "./PlayerCard.css";

class PlayerCard extends Component {
  render() {
    return (
      <div className="PlayerCard">
        <h3>{this.props.name}</h3>
        <img src={this.props.img} />
        <h3>{this.props.desc}</h3>
      </div>
    );
  }
}

export default PlayerCard;