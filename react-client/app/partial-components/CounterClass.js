
  import React from 'react';

  class Counter extends React.Component {
    constructor() {
      super()
      this.state = { count: 0 }; // show additional state defs
    }

    incrementCount = () => {
      // setState gives us access to each piece of state
      this.setState({ count: this.state.count + 1 });
    }

    // Why we gotta do this twice? comment out each one and demo
    componentDidMount() { document.title = `You clicked ${this.state.count} times`; }
    componentDidUpdate() { document.title = `You clicked ${this.state.count} times`; }

    render() {
      return (
        <>
          <p>You clicked {this.state.count} times</p>
          <button onClick={this.incrementCount}>Click Me</button>
        </>
      )
    }
  }

  export default Counter;