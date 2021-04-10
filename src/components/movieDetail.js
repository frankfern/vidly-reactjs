import React, { Component } from "react";

class MovieDetail extends Component {
  state = {};
  handleOnClick = (e) => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1>Movie Form {this.props.match.params.id}</h1>
        <button className="btn btn-primary" onClick={this.handleOnClick}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetail;
