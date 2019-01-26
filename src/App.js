import React, {Fragment} from 'react';
import Proptypes from 'prop-types'

const App = () => {
  const users = [
    {
      name: "Taroh",
      age: 10
    },
    {
      name: "Hanako",
      age: 15
    },
    {
      name: "Noname",
      age: NaN
    }
  ]

  return (
    <Fragment>
      {
        users.map( (user, i)=> {
            return (
              <User name={user.name} age={user.age} key={i} />
            )
        })
      }
    </Fragment>
  )
}

const User = (p) => {
  return (
    <div>Hi, I am {p.name}, and {p.age} years old :D </div>
  )
}

User.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number.isRequired
}

export default App;
