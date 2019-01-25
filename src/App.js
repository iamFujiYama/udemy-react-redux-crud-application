import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <label htmlFor="Foo"> Foo </label>
//         <input id="Foo" type="button" onClick={ ()=> {alert('hi !')}} />
//       </Fragment>
//     )
//   }
// }


const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return (
    <div>Nya~</div>
  )
}

export default App;
