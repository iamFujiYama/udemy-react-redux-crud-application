import React, {Fragment, Component } from 'react';

const App = () => ( <Counter></Counter> )

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handleButton = (i) => {
      this.setState({ count: this.state.count + i })
  }

  render() {
    return (
      <Fragment>
       <div> Counter is : { this.state.count } </div>
       <button onClick={ () => this.handleButton(1) } > +1 </button>
       <button onClick={ () => this.handleButton(-1) } > -1 </button>
      </Fragment>
    )
  }
}

export default App;
