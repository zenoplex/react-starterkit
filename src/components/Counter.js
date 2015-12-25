import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    color:     PropTypes.string,
    increment: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment,
    });
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): <span>{this.state.counter}</span>
      </h1>
    );
  }
}
