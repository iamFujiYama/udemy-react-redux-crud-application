import React, {Fragment, Component } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <label htmlFor="Foo"> Foo </label>
        <input id="Foo" type="button" onClick={ ()=> {alert('hi !')}} />
      </Fragment>
    )
  }
}


export default App;
