import React, { Component } from 'react';
import "./TeamLogo.css";

class TeamLogo extends Component {
  render() {
    return (
      <div className="TeamLogo">
        <h3>{this.props.name}</h3>
        <img src={this.props.img} alt={this.props.name} />
      </div>
    );
  }
}

export default TeamLogo;